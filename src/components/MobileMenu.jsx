import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const navList = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "About",
    url: "/about",
  },
  {
    id: 3,
    name: "Shop",
    url: "/shop",
  },
  {
    id: 4,
    name: "Vendors",
    url: "#",
    children: [
      { name: "Vendor1", url: "/" },
      { name: "Vendor2", url: "/" },
      { name: "Vendor3", url: "/" },
    ],
  },
  {
    id: 5,
    name: "Blog",
    url: "/blog",
  },
  {
    id: 6,
    name: "Pages",
    url: "#",
    children: [
      { name: "About Us", url: "/about" },
      { name: "Contact", url: "/contact" },
      { name: "FAQ", url: "/faq" },
    ],
  },
  {
    id: 7,
    name: "Contact",
    url: "/contact",
  },
];

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null); // Track which submenu is open

    const handleSubmenuToggle = (id) => {
        setOpenSubMenu((prev) => (prev === id ? null : id)); // Toggle submenu
    };

    return (
        <div className="lg:hidden relative">
            {/* Menu Icon */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl p-2 cursor-pointer">
                &equiv;
            </button>

            {/* Overlay */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsMenuOpen(false)}></div>
            )}

            {/* Sliding Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-[70%] max-w-[300px] bg-white shadow-lg p-6 transform transition-transform duration-300 z-50
                ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    className="absolute top-4 right-4 text-xl font-bold cursor-pointer"
                >
                    ✖
                </button>

                {/* Navigation */}
                <ul className="flex flex-col gap-6 mt-10">
                    {navList.map((nav) => (
                        <li key={nav.id} className="relative">
                            <div className="flex justify-between items-center">
                                <NavLink
                                    to={nav.url}
                                    className="font-bold text-lg hover:text-greeny"
                                    onClick={() => nav.children && handleSubmenuToggle(nav.id)}
                                >
                                    {nav.name}
                                </NavLink>

                                {/* Dropdown Toggle Icon */}
                                {nav.children && (
                                    <button onClick={() => handleSubmenuToggle(nav.id)} className="text-lg">
                                        {openSubMenu === nav.id ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                    </button>
                                )}
                            </div>

                            {/* Submenu */}
                            {nav.children && openSubMenu === nav.id && (
                                <ul className="ml-4 mt-2 pl-2 transition-all duration-300 ease-in-out overflow-hidden">
                                    {nav.children.map((subNav) => (
                                        <li key={subNav.id} className="py-1">
                                            <NavLink to={subNav.url} className="text-base hover:text-greeny">
                                                {subNav.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
