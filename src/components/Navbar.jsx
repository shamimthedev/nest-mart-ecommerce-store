import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { NavLink } from 'react-router';
import { IoIosArrowDown, IoMdMenu, IoMdClose, IoMdSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

// Mock data for demonstration
const navList = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Services",
    url: "#",
    children: [
      { name: "Web Development", url: "/services/web-development" },
      { name: "Mobile Apps", url: "/services/mobile-apps" },
      { name: "UI/UX Design", url: "/services/ui-ux-design" },
    ]
  },
  {
    id: 3,
    name: "Products",
    url: "#",
    megaMenu: true,
    categories: [
      {
        title: "Software",
        items: ["CRM System", "ERP Solution", "Analytics Platform"]
      },
      {
        title: "Hardware",
        items: ["Servers", "Networking", "Storage Solutions"]
      },
      {
        title: "Cloud",
        items: ["AWS Services", "Azure Solutions", "Google Cloud"]
      },
      {
        title: "Support",
        items: ["24/7 Support", "Training", "Consulting"]
      }
    ]
  },
  {
    id: 4,
    name: "About",
    url: "/about",
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact",
  }
];

// Custom hook for navigation state management
const useNavigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = useCallback((id) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
  }, []);

  const closeDropdown = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(null);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setActiveSubmenu(null);
  }, []);

  const toggleSubmenu = useCallback((id) => {
    setActiveSubmenu(prev => prev === id ? null : id);
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    openDropdown,
    isMobileMenuOpen,
    activeSubmenu,
    handleMouseEnter,
    handleMouseLeave,
    closeDropdown,
    toggleMobileMenu,
    toggleSubmenu,
    setIsMobileMenuOpen
  };
};

// Custom hook for keyboard navigation
const useKeyboardNavigation = (closeDropdown, toggleMobileMenu) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'Escape':
          closeDropdown();
          toggleMobileMenu();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeDropdown, toggleMobileMenu]);
};

// Individual Nav Item Component
const NavItem = React.memo(({ 
  nav, 
  isOpen, 
  onMouseEnter, 
  onMouseLeave, 
  onKeyDown,
  isMobile = false 
}) => {
  const hasDropdown = nav.children || nav.megaMenu;
  
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onKeyDown?.(nav.id);
    }
  };

  return (
    <li
      className={`relative group ${isMobile ? 'w-full' : ''}`}
      onMouseEnter={() => !isMobile && hasDropdown && onMouseEnter(nav.id)}
      onMouseLeave={!isMobile ? onMouseLeave : undefined}
    >
      <NavLink
        to={nav.url !== "#" ? nav.url : ""}
        className={({ isActive }) => `
          flex gap-x-1 items-center font-semibold transition-all duration-300 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md px-2 py-1
          ${isMobile 
            ? 'text-base py-3 px-4 hover:bg-green-50 hover:text-green-600 w-full justify-between' 
            : 'text-xs xl:text-sm 2xl:text-base hover:text-green-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all after:duration-300 hover:after:w-full'
          }
          ${isActive ? 'text-green-600' : 'text-gray-700'}
        `}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-expanded={hasDropdown ? isOpen : undefined}
        aria-haspopup={hasDropdown ? "true" : undefined}
      >
        {nav.name}
        {hasDropdown && (
          <IoIosArrowDown 
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        )}
      </NavLink>
    </li>
  );
});

NavItem.displayName = 'NavItem';
NavItem.propTypes = {
  nav: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    children: PropTypes.array,
    megaMenu: PropTypes.bool,
    categories: PropTypes.array
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  isMobile: PropTypes.bool
};

// Dropdown Menu Component
const DropdownMenu = React.memo(({ nav, onMouseEnter, onMouseLeave }) => {
  if (!nav.children) return null;

  return (
    <div
      className="absolute left-0 mt-2 w-56 origin-top-left transform transition-all duration-300 ease-out"
      onMouseEnter={() => onMouseEnter(nav.id)}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby={`nav-${nav.id}`}
    >
      <div className="bg-white backdrop-blur-lg bg-opacity-95 shadow-lg border border-gray-100 rounded-lg overflow-hidden">
        <ul className="py-2">
          {nav.children.map((child, index) => (
            <li key={index} role="none">
              <NavLink
                to={child.url}
                className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 focus:outline-none focus:bg-green-50 focus:text-green-600"
                role="menuitem"
                tabIndex={0}
              >
                {child.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = {
  nav: PropTypes.object.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

// Mega Menu Component
const MegaMenu = React.memo(({ nav, onMouseEnter, onMouseLeave }) => {
  if (!nav.megaMenu || !nav.categories) return null;

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-6xl mt-2 origin-top transition-all duration-300 ease-out"
      onMouseEnter={() => onMouseEnter(nav.id)}
      onMouseLeave={onMouseLeave}
      role="menu"
      aria-orientation="vertical"
    >
      <div className="bg-white backdrop-blur-lg bg-opacity-95 shadow-2xl border border-gray-100 rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nav.categories.map((category, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-lg font-bold text-green-600 pb-2 border-b border-green-100">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <NavLink
                        to={`/${category.title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block py-2 text-sm font-medium text-gray-600 hover:text-green-600 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-green-600"
                        role="menuitem"
                        tabIndex={0}
                      >
                        {item}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

MegaMenu.displayName = 'MegaMenu';
MegaMenu.propTypes = {
  nav: PropTypes.object.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired
};

// Mobile Menu Component
const MobileMenu = React.memo(({ 
  isOpen, 
  activeSubmenu, 
  toggleSubmenu, 
  onClose 
}) => {
  const menuRef = useRef(null);

  // Focus management for mobile menu
  useEffect(() => {
    if (isOpen && menuRef.current) {
      menuRef.current.focus();
    }
  }, [isOpen]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out overflow-y-auto"
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Close menu"
          >
            <IoMdClose size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {navList.map((nav) => (
              <li key={nav.id}>
                {/* Main Item */}
                <div className="flex items-center justify-between">
                  <NavLink
                    to={nav.url !== "#" ? nav.url : ""}
                    className={({ isActive }) => `
                      flex-1 py-3 px-3 text-base font-medium rounded-md transition-colors duration-200
                      ${isActive ? 'text-green-600 bg-green-50' : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'}
                      focus:outline-none focus:ring-2 focus:ring-green-500
                    `}
                    onClick={() => !nav.children && !nav.megaMenu && onClose()}
                  >
                    {nav.name}
                  </NavLink>
                  
                  {/* Expand Button for Dropdowns */}
                  {(nav.children || nav.megaMenu) && (
                    <button
                      onClick={() => toggleSubmenu(nav.id)}
                      className="p-2 text-gray-400 hover:text-gray-600 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                      aria-expanded={activeSubmenu === nav.id}
                      aria-label={`Toggle ${nav.name} submenu`}
                    >
                      <IoIosArrowDown 
                        className={`transition-transform duration-200 ${activeSubmenu === nav.id ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {(nav.children || nav.megaMenu) && activeSubmenu === nav.id && (
                  <div className="mt-2 pl-4 border-l-2 border-green-100">
                    {nav.children && (
                      <ul className="space-y-1">
                        {nav.children.map((child, index) => (
                          <li key={index}>
                            <NavLink
                              to={child.url}
                              className="block py-2 px-3 text-sm font-medium text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                              onClick={onClose}
                            >
                              {child.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {nav.megaMenu && nav.categories && (
                      <div className="space-y-4">
                        {nav.categories.map((category, index) => (
                          <div key={index}>
                            <h4 className="text-sm font-semibold text-green-600 mb-2">
                              {category.title}
                            </h4>
                            <ul className="space-y-1">
                              {category.items.map((item, idx) => (
                                <li key={idx}>
                                  <NavLink
                                    to={`/${category.title.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                    className="block py-1 px-3 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    onClick={onClose}
                                  >
                                    {item}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';
MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  activeSubmenu: PropTypes.number,
  toggleSubmenu: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

// Main Navbar Component
const Navbar = ({ className = "", showSearch = false, logo = "Logo" }) => {
  const {
    openDropdown,
    isMobileMenuOpen,
    activeSubmenu,
    handleMouseEnter,
    handleMouseLeave,
    closeDropdown,
    toggleMobileMenu,
    toggleSubmenu,
    setIsMobileMenuOpen
  } = useNavigation();

  // Use keyboard navigation hook
  useKeyboardNavigation(closeDropdown, () => setIsMobileMenuOpen(false));

  // Memoize the current nav item to prevent unnecessary re-renders
  const currentNav = useMemo(() => 
    navList.find(nav => nav.id === openDropdown),
    [openDropdown]
  );

  // Click outside handler
  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (openDropdown !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown, closeDropdown]);

  return (
    <>
      <nav 
        ref={navRef}
        className={`relative bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 z-40 ${className}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink 
                to="/" 
                className="text-xl font-bold text-green-600 hover:text-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md px-2 py-1"
              >
                {logo}
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <ul className="flex items-center space-x-1">
                {navList.map((nav) => (
                  <NavItem
                    key={nav.id}
                    nav={nav}
                    isOpen={openDropdown === nav.id}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                ))}
              </ul>

              {/* Search Button */}
              {showSearch && (
                <button 
                  className="ml-4 p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                  aria-label="Search"
                >
                  <IoMdSearch size={20} />
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-expanded={isMobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Dropdowns */}
        {openDropdown && currentNav && (
          <>
            {currentNav.children && (
              <DropdownMenu 
                nav={currentNav}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            )}
            
            {currentNav.megaMenu && (
              <MegaMenu 
                nav={currentNav}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </>
        )}
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        activeSubmenu={activeSubmenu}
        toggleSubmenu={toggleSubmenu}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  showSearch: PropTypes.bool,
  logo: PropTypes.string
};

export default Navbar;