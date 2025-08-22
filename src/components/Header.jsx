import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { NavLink, Link } from 'react-router';
import { IoIosArrowDown, IoMdMenu, IoMdClose } from 'react-icons/io';
import { 
  FiClipboard, 
  FiHeart, 
  FiSettings, 
  FiTarget, 
  FiUser,
  FiPhone,
  FiGlobe,
  FiDollarSign
} from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import PropTypes from 'prop-types';

// Mock data for grocery navigation
const groceryNavList = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Shop",
    url: "#",
    megaMenu: true,
    categories: [
      {
        title: "Fresh Produce",
        items: ["Fruits", "Vegetables", "Herbs & Spices", "Organic Produce"]
      },
      {
        title: "Dairy & Eggs",
        items: ["Milk", "Cheese", "Yogurt", "Eggs", "Butter"]
      },
      {
        title: "Meat & Seafood",
        items: ["Fresh Meat", "Poultry", "Seafood", "Deli"]
      },
      {
        title: "Pantry",
        items: ["Grains & Rice", "Canned Goods", "Oils & Vinegars", "Spices"]
      }
    ]
  },
  {
    id: 3,
    name: "Categories",
    url: "#",
    children: [
      { name: "Fruits & Vegetables", url: "/categories/fruits-vegetables" },
      { name: "Dairy Products", url: "/categories/dairy" },
      { name: "Meat & Seafood", url: "/categories/meat-seafood" },
      { name: "Bakery", url: "/categories/bakery" },
      { name: "Beverages", url: "/categories/beverages" },
      { name: "Snacks", url: "/categories/snacks" },
    ]
  },
  {
    id: 4,
    name: "Deals",
    url: "/deals",
  },
  {
    id: 5,
    name: "About",
    url: "/about",
  },
  {
    id: 6,
    name: "Contact",
    url: "/contact",
  }
];

// Mock data
const mockCategories = [
  "All Categories", "Milks and Dairies", "Wines & Alcohol",
  "Clothing & Beauty", "Pet Foods & Toy", "Fast food",
  "Baking material", "Vegetables", "Fresh Seafood",
  "Noodles & Rice", "Ice cream"
];

const mockCountries = ["United States", "Canada", "United Kingdom", "Australia"];
const mockCartItems = [
  { id: 1, title: "Fresh Bananas", price: 2.99, quantity: 2, img: "/api/placeholder/60/60" },
  { id: 2, title: "Organic Milk", price: 4.50, quantity: 1, img: "/api/placeholder/60/60" }
];

// Custom hooks for header functionality
const useHeaderScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isScrolled;
};

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutRef] = useState({ current: null });

  const handleMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  }, [timeoutRef]);

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300);
  }, [timeoutRef]);

  const toggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const close = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(false);
  }, [timeoutRef]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [timeoutRef]);

  return { isOpen, handleMouseEnter, handleMouseLeave, toggle, close };
};

const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref, callback]);
};

// Select Dropdown Component
const SelectDropdown = React.memo(({ data, placeholder, icon, className = "" }) => {
  const [selectedValue, setSelectedValue] = useState(placeholder);
  const dropdown = useDropdown();
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, dropdown.close);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={dropdown.toggle}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 rounded-md"
        aria-expanded={dropdown.isOpen}
        aria-haspopup="true"
      >
        {icon && <span className="text-gray-400">{icon}</span>}
        <span className="whitespace-nowrap">{selectedValue}</span>
        <IoIosArrowDown 
          className={`text-xs transition-transform duration-200 ${dropdown.isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {dropdown.isOpen && (
        <div className="absolute top-full left-0 mt-1 w-full min-w-[180px] bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto">
          <ul className="py-2">
            {data.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    setSelectedValue(item);
                    dropdown.close();
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
});

SelectDropdown.displayName = 'SelectDropdown';
SelectDropdown.propTypes = {
  data: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.node,
  className: PropTypes.string
};

// Search Input Component
const SearchInput = React.memo(({ className = "" }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className={`flex-1 ${className}`}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for items..."
        className="w-full px-4 py-2 text-sm border-none outline-none bg-transparent placeholder-gray-500 focus:placeholder-gray-400"
      />
      <button
        type="submit"
        className="hidden"
        aria-label="Search"
      />
    </form>
  );
});

SearchInput.displayName = 'SearchInput';
SearchInput.propTypes = {
  className: PropTypes.string
};

// Header Top Component
const HeaderTop = React.memo(() => {
  const languageDropdown = useDropdown();
  const currencyDropdown = useDropdown();
  const languageRef = useRef(null);
  const currencyRef = useRef(null);

  useClickOutside(languageRef, languageDropdown.close);
  useClickOutside(currencyRef, currencyDropdown.close);

  const topLinks = [
    { name: "About Us", url: "/about" },
    { name: "My Account", url: "/account" },
    { name: "Wishlist", url: "/wishlist" },
    { name: "Order Tracking", url: "/order-tracking" }
  ];

  const languages = ["English", "Spanish", "French"];
  const currencies = ["USD", "EUR", "GBP"];

  return (
    <div className="hidden lg:block border-b border-gray-200 font-lato bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="h-9 flex justify-between items-center text-gray-600 text-xs">
          <ul className="flex gap-3 xl:gap-5 font-medium">
            {topLinks.map((link, index) => (
              <li key={link.name} className={`hover:text-green-600 transition-colors duration-200 ${
                index < topLinks.length - 1 ? 'relative after:absolute after:content-[\'\'] after:bg-gray-300 after:w-px after:h-full after:right-[-7px] xl:after:right-[-10px]' : ''
              }`}>
                <Link to={link.url} className="focus:outline-none focus:text-green-600">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-xs xl:text-sm text-center">
            Super Value Deals - <span className="text-green-600 font-semibold">Save</span> more with coupons
          </p>

          <div className="flex gap-3 xl:gap-5 items-center">
            <div className="flex items-center gap-2 relative after:absolute after:content-[''] after:bg-gray-300 after:w-px after:h-full after:right-[-7px] xl:after:right-[-10px]">
              <FiPhone className="text-green-600" />
              <span>Need help? Call Us: </span>
              <span className="font-semibold text-green-600">+ 1800 900</span>
            </div>

            {/* Language Dropdown */}
            <div ref={languageRef} className="relative">
              <button
                onClick={languageDropdown.toggle}
                className="flex items-center gap-1 font-medium hover:text-green-600 transition-colors duration-200 focus:outline-none focus:text-green-600 relative after:absolute after:content-[''] after:bg-gray-300 after:w-px after:h-full after:right-[-7px] xl:after:right-[-10px]"
                aria-expanded={languageDropdown.isOpen}
              >
                <FiGlobe className="text-xs" />
                <span>English</span>
                <IoIosArrowDown className={`transition-transform duration-200 ${languageDropdown.isOpen ? 'rotate-180' : ''}`} />
              </button>

              {languageDropdown.isOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    {languages.map(lang => (
                      <li key={lang}>
                        <button className="w-full text-left px-4 py-2 text-sm hover:bg-green-50 hover:text-green-600 transition-colors duration-200">
                          {lang}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Currency Dropdown */}
            <div ref={currencyRef} className="relative">
              <button
                onClick={currencyDropdown.toggle}
                className="flex items-center gap-1 font-medium hover:text-green-600 transition-colors duration-200 focus:outline-none focus:text-green-600"
                aria-expanded={currencyDropdown.isOpen}
              >
                <FiDollarSign className="text-xs" />
                <span>USD</span>
                <IoIosArrowDown className={`transition-transform duration-200 ${currencyDropdown.isOpen ? 'rotate-180' : ''}`} />
              </button>

              {currencyDropdown.isOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    {currencies.map(currency => (
                      <li key={currency}>
                        <button className="w-full text-left px-4 py-2 text-sm hover:bg-green-50 hover:text-green-600 transition-colors duration-200">
                          {currency}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

HeaderTop.displayName = 'HeaderTop';

// Cart Dropdown Component
const CartDropdown = React.memo(({ items, isOpen, onClose, onRemoveItem }) => {
  if (!isOpen) return null;

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="absolute right-0 top-12 mt-2 w-80 bg-white border border-gray-200 shadow-xl rounded-lg p-4 z-50 backdrop-blur-lg bg-opacity-95">
      {items.length === 0 ? (
        <p className="text-gray-500 text-sm py-4 text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="max-h-80 overflow-y-auto space-y-3 pr-2 custom-scrollbar">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-3 border-b border-gray-100 pb-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <p className="text-sm text-green-600 font-semibold truncate">{item.title}</p>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200 p-1"
                      aria-label={`Remove ${item.title} from cart`}
                    >
                      <RxCross2 size={16} />
                    </button>
                  </div>
                  <div className="flex gap-2 items-center text-xs text-gray-600 mt-1">
                    <span>{item.quantity} ×</span>
                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-sm">Total Price:</span>
              <span className="text-green-600 font-bold text-lg">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <div className="flex gap-2">
              <Link 
                to="/cart" 
                className="flex-1"
                onClick={onClose}
              >
                <button className="w-full border border-green-600 text-green-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-green-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500">
                  View Cart
                </button>
              </Link>
              <button 
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500"
                onClick={onClose}
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
});

CartDropdown.displayName = 'CartDropdown';
CartDropdown.propTypes = {
  items: PropTypes.array.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onClearCart: PropTypes.func.isRequired
};

// Account Dropdown Component
const AccountDropdown = React.memo(({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const accountLinks = [
    { icon: FiUser, label: "My Account", url: "/account" },
    { icon: FiTarget, label: "Order Tracking", url: "/orders" },
    { icon: FiClipboard, label: "My Voucher", url: "/vouchers" },
    { icon: FiHeart, label: "My Wishlist", url: "/wishlist" },
    { icon: FiSettings, label: "Settings", url: "/settings" },
    { icon: GoSignOut, label: "Sign out", url: "/logout" }
  ];

  return (
    <div className="absolute right-0 top-full mt-2 min-w-[220px] bg-white shadow-xl border border-gray-100 rounded-lg py-2 z-50 backdrop-blur-lg bg-opacity-95">
      <ul className="flex flex-col">
        {accountLinks.map((link) => (
          <li key={link.label}>
            <Link
              to={link.url}
              onClick={onClose}
              className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-200 focus:outline-none focus:bg-green-50 focus:text-green-600"
            >
              <link.icon className="text-base" />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
});

AccountDropdown.displayName = 'AccountDropdown';
AccountDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

// Header Middle Component
const HeaderMiddle = React.memo(() => {
  const [cartItems] = useState(mockCartItems);
  const cartDropdown = useDropdown();
  const accountDropdown = useDropdown();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const cartRef = useRef(null);
  const accountRef = useRef(null);

  useClickOutside(cartRef, cartDropdown.close);
  useClickOutside(accountRef, accountDropdown.close);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleRemoveItem = useCallback((id) => {
    console.log('Remove item:', id);
    // Handle remove item logic
  }, []);

  const handleClearCart = useCallback(() => {
    console.log('Clear cart');
    // Handle clear cart logic
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-4 h-16 lg:h-24">
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-600 hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0 w-32 lg:w-40">
            <Link to="/" className="block focus:outline-none focus:ring-2 focus:ring-green-500 rounded">
              <img 
                src="/logo.png" 
                alt="Nestmart Logo" 
                className="w-full h-auto"
                loading="lazy"
              />
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex flex-1 max-w-2xl items-center bg-white border-2 border-green-200 rounded-md overflow-hidden focus-within:border-green-400 transition-colors duration-200">
            <div className="relative border-r border-gray-200">
              <SelectDropdown 
                data={mockCategories} 
                placeholder="All Categories" 
                className="border-none"
              />
            </div>
            <SearchInput className="flex-1" />
            <button className="px-4 py-3 bg-green-600 text-white hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500">
              Search
            </button>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-3 lg:gap-4">
            
            {/* Location - Hidden on smaller screens */}
            <div className="hidden xl:block">
              <SelectDropdown 
                data={mockCountries} 
                placeholder="Your Location" 
                icon={<IoLocationOutline />}
                className="border border-gray-200 rounded-md px-2 py-1"
              />
            </div>

            {/* Compare - Hidden on mobile */}
            <button className="hidden lg:flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2">
              <div className="relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
              </div>
              <span className="hidden lg:block text-sm">Compare</span>
            </button>

            {/* Wishlist */}
            <Link 
              to="/wishlist"
              className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2"
            >
              <div className="relative">
                <FiHeart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">6</span>
              </div>
              <span className="hidden lg:block text-sm">Wishlist</span>
            </Link>

            {/* Cart */}
            <div className="relative" ref={cartRef}>
              <button 
                onClick={cartDropdown.toggle}
                className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2"
                aria-expanded={cartDropdown.isOpen}
              >
                <div className="relative">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-2.4 0L0 5M7 13L5.4 5M7 13l1.6 8.4a1 1 0 001 .6h9.8a1 1 0 001-.6L20 13M16 19a1 1 0 100-2 1 1 0 000 2zM8 19a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                  {totalQuantity > 0 && (
                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                      {totalQuantity}
                    </span>
                  )}
                </div>
                <span className="hidden lg:block text-sm">Cart</span>
              </button>

              <CartDropdown 
                items={cartItems}
                isOpen={cartDropdown.isOpen}
                onClose={cartDropdown.close}
                onRemoveItem={handleRemoveItem}
                onClearCart={handleClearCart}
              />
            </div>

            {/* Account */}
            <div className="hidden lg:block relative" ref={accountRef}>
              <button 
                onClick={accountDropdown.toggle}
                className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2"
                aria-expanded={accountDropdown.isOpen}
              >
                <FiUser className="w-4 h-4" />
                <span className="text-sm">Account</span>
              </button>

              <AccountDropdown 
                isOpen={accountDropdown.isOpen}
                onClose={accountDropdown.close}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white w-80 h-full shadow-xl p-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button 
                onClick={toggleMobileMenu}
                className="p-2 text-gray-600 hover:text-green-600"
              >
                <IoMdClose size={24} />
              </button>
            </div>

            {/* Mobile Search */}
            <div className="mb-6">
              <div className="flex items-center border-2 border-green-200 rounded-md">
                <SearchInput className="flex-1 px-4 py-2" />
                <button className="px-4 py-3 bg-green-600 text-white">
                  Search
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav>
              <ul className="space-y-2">
                {groceryNavList.map(nav => (
                  <li key={nav.id}>
                    <Link 
                      to={nav.url}
                      onClick={toggleMobileMenu}
                      className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-md transition-colors duration-200"
                    >
                      {nav.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
});

HeaderMiddle.displayName = 'HeaderMiddle';

// Professional Grocery Navbar (simplified for HeaderBottom)
const GroceryNavbar = React.memo(({ className = "" }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const timeoutRef = useRef(null);
  const navRef = useRef(null);

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

  useClickOutside(navRef, closeDropdown);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const currentNav = useMemo(() => 
    groceryNavList.find(nav => nav.id === openDropdown),
    [openDropdown]
  );

  return (
    <nav ref={navRef} className={`relative ${className}`} role="navigation">
      <ul className="flex items-center space-x-1">
        {groceryNavList.map((nav) => (
          <li
            key={nav.id}
            className="relative group"
            onMouseEnter={() => (nav.children || nav.megaMenu) && handleMouseEnter(nav.id)}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to={nav.url !== "#" ? nav.url : ""}
              className={({ isActive }) => `
                flex gap-x-1 items-center font-semibold transition-all duration-300 ease-in-out px-3 py-2 rounded-md
                focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2
                text-sm xl:text-base hover:text-green-600 relative
                after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 
                after:transition-all after:duration-300 hover:after:w-full
                ${isActive ? 'text-green-600' : 'text-gray-700'}
              `}
              aria-expanded={(nav.children || nav.megaMenu) ? openDropdown === nav.id : undefined}
              aria-haspopup={(nav.children || nav.megaMenu) ? "true" : undefined}
            >
              {nav.name}
              {(nav.children || nav.megaMenu) && (
                <IoIosArrowDown 
                  className={`transition-transform duration-300 ${openDropdown === nav.id ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Dropdown Menu */}
      {openDropdown && currentNav && currentNav.children && (
        <div
          className="absolute left-0 mt-2 w-56 origin-top-left transform transition-all duration-300 ease-out z-50"
          onMouseEnter={() => handleMouseEnter(openDropdown)}
          onMouseLeave={handleMouseLeave}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="bg-white backdrop-blur-lg bg-opacity-95 shadow-xl border border-gray-100 rounded-lg overflow-hidden">
            <ul className="py-2">
              {currentNav.children.map((child, index) => (
                <li key={index} role="none">
                  <NavLink
                    to={child.url}
                    className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 focus:outline-none focus:bg-green-50 focus:text-green-600"
                    role="menuitem"
                  >
                    {child.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Mega Menu */}
      {openDropdown && currentNav && currentNav.megaMenu && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-4xl mt-2 origin-top transition-all duration-300 ease-out z-50"
          onMouseEnter={() => handleMouseEnter(openDropdown)}
          onMouseLeave={handleMouseLeave}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="bg-white backdrop-blur-lg bg-opacity-95 shadow-2xl border border-gray-100 rounded-lg overflow-hidden">
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentNav.categories.map((category, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg font-bold text-green-600 pb-2 border-b border-green-100">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, idx) => (
                        <li key={idx}>
                          <NavLink
                            to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block py-2 text-sm font-medium text-gray-600 hover:text-green-600 hover:translate-x-1 transition-all duration-200 focus:outline-none focus:text-green-600"
                            role="menuitem"
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
      )}
    </nav>
  );
});

GroceryNavbar.displayName = 'GroceryNavbar';
GroceryNavbar.propTypes = {
  className: PropTypes.string
};

// All Categories Dropdown Component
const AllCategoriesDropdown = React.memo(({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const allCategories = [
    { name: "Fresh Produce", icon: "🥬", items: ["Fruits", "Vegetables", "Herbs"] },
    { name: "Dairy & Eggs", icon: "🥛", items: ["Milk", "Cheese", "Yogurt", "Eggs"] },
    { name: "Meat & Seafood", icon: "🥩", items: ["Fresh Meat", "Poultry", "Seafood"] },
    { name: "Bakery", icon: "🍞", items: ["Bread", "Cakes", "Pastries"] },
    { name: "Beverages", icon: "🧃", items: ["Juices", "Sodas", "Water", "Coffee"] },
    { name: "Snacks", icon: "🍪", items: ["Chips", "Cookies", "Nuts"] },
    { name: "Frozen Foods", icon: "🧊", items: ["Ice Cream", "Frozen Meals", "Frozen Vegetables"] },
    { name: "Pantry", icon: "🥫", items: ["Canned Goods", "Pasta", "Rice", "Spices"] }
  ];

  return (
    <div className="bg-white shadow-xl border border-gray-100 rounded-lg w-80 max-h-96 overflow-y-auto">
      <div className="p-4">
        <h3 className="font-bold text-green-600 mb-4 text-lg">All Categories</h3>
        <ul className="space-y-1">
          {allCategories.map((category, index) => (
            <li key={index}>
              <Link
                to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={onClose}
                className="flex items-center gap-3 p-3 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200 group"
              >
                <span className="text-xl">{category.icon}</span>
                <div>
                  <div className="font-medium text-sm">{category.name}</div>
                  <div className="text-xs text-gray-500 group-hover:text-green-500">
                    {category.items.join(', ')}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

AllCategoriesDropdown.displayName = 'AllCategoriesDropdown';
AllCategoriesDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

// Header Bottom Component
const HeaderBottom = React.memo(() => {
  const isScrolled = useHeaderScroll();
  const categoriesDropdown = useDropdown();
  const categoriesRef = useRef(null);

  useClickOutside(categoriesRef, categoriesDropdown.close);

  return (
    <>
      {/* Placeholder for fixed header */}
      {isScrolled && <div className="h-16 lg:h-20"></div>}
      
      <div 
        className={`hidden lg:block border-y border-gray-200 transition-all duration-300 z-40 ${
          isScrolled 
            ? "fixed top-0 left-0 w-full bg-white shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className={`flex items-center justify-between gap-5 transition-all duration-300 ${
            isScrolled ? "py-3" : "py-4"
          }`}>
            
            {/* Browse All Categories Button */}
            <div className="relative" ref={categoriesRef}>
              <button
                onClick={categoriesDropdown.toggle}
                className="flex items-center gap-2 py-3 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-expanded={categoriesDropdown.isOpen}
                aria-label="Browse All Categories"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <span>Browse All Categories</span>
                <IoIosArrowDown 
                  className={`transition-transform duration-200 ${categoriesDropdown.isOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {categoriesDropdown.isOpen && (
                <div className="absolute left-0 top-full mt-2 z-50">
                  <AllCategoriesDropdown 
                    isOpen={categoriesDropdown.isOpen}
                    onClose={categoriesDropdown.close}
                  />
                </div>
              )}
            </div>

            {/* Navigation Links */}
            <GroceryNavbar className="mr-auto" />

            {/* Support Contact */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <FiPhone className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <div className="font-bold text-green-600 text-lg">1900 - 888</div>
                <div className="text-gray-600 text-xs font-medium">24/7 Support Center</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

HeaderBottom.displayName = 'HeaderBottom';

// Main Header Component
const GroceryHeader = React.memo(() => {
  return (
    <header className="relative">
      <HeaderTop />
      <HeaderMiddle />
      <HeaderBottom />
    </header>
  );
});

GroceryHeader.displayName = 'GroceryHeader';

// Export individual components for modular use
export {
  HeaderTop,
  HeaderMiddle, 
  HeaderBottom,
  GroceryNavbar,
  SelectDropdown,
  SearchInput
};

export default GroceryHeader;