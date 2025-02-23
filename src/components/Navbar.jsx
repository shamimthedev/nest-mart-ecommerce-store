import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import MenuImg from '/banner-menu.png'

const navList = [
    {
        id: 1,
        name: 'Home',
        url: '/',
    },
    {
        id: 2,
        name: 'About',
        url: '/about'
    },
    {
        id: 3,
        name: 'Shop',
        url: '/shop',
    },
    {
        id: 4,
        name: 'Vendors',
        url: '#',
        children: [
            { name: "Vendor1", url: "/" },
            { name: "Vendor2", url: "/" },
            { name: "Vendor3", url: "/" },
        ],
    },
    {
        id: 5,
        name: 'Mega Menu',
        url: '#',
        megaMenu: true,
        categories: [
            {
                title: "Electronics",
                items: ["Phones", "Laptops", "Cameras", "Accessories"],
            },
            {
                title: "Fashion",
                items: ["Men's Wear", "Women's Wear", "Shoes", "Bags"],
            },
            {
                title: "Home & Living",
                items: ["Furniture", "Kitchen", "Decor", "Lighting"],
            },
        ],
    },
    {
        id: 6,
        name: 'Blog',
        url: '/blog',
    },
    {
        id: 7,
        name: 'Pages',
        url: '#',
        children: [
            { name: "About Us", url: "/about" },
            { name: "Contact", url: "/contact" },
            { name: "FAQ", url: "/faq" },
        ],
    },
    {
        id: 8,
        name: 'Contact',
        url: '/contact'
    },
]

const Navbar = ({className}) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };
        if (openDropdown !== null) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openDropdown]);

    return (
        <nav className={`${className}`}>
            {/* Main Navigation */}
            <div className="max-w-[1600px] mx-auto flex justify-between items-center py-4 px-6">
                <ul className="flex items-center gap-x-6 xl:gap-x-7 2xl:gap-x-[34px]">
                    {navList.map((nav) => (
                        <li key={nav.id} className="relative group" ref={nav.children || nav.megaMenu ? dropdownRef : null}>
                            {/* Main NavLink */}
                            <NavLink
                                to={nav.url !== "#" ? nav.url : ""}
                                className="flex gap-x-1 items-center font-bold text-xs xl:text-sm 2xl:text-base hover:text-greeny"
                                onMouseEnter={() => (nav.children || nav.megaMenu) && setOpenDropdown(nav.id)}
                                onClick={() => setOpenDropdown(openDropdown === nav.id ? null : nav.id)}
                            >
                                {nav.name} {(nav.children || nav.megaMenu) && <IoIosArrowDown />}
                            </NavLink>

                            {/* Sub-menu (Dropdown) */}
                            <AnimatePresence>
                                {nav.children && openDropdown === nav.id && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute left-0 mt-4 w-40 bg-white shadow-md border border-gray-200 rounded-md z-50 overflow-hidden"
                                    >
                                        {nav.children.map((sub, index) => (
                                            <li key={index}>
                                                <NavLink
                                                    to={sub.url}
                                                    className="block px-4 py-2 text-sm text-gray-700 font-semibold hover:bg-greeny hover:text-white transition-all duration-200"
                                                    onClick={() => setOpenDropdown(null)} // Close on selection
                                                >
                                                    {sub.name}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mega Menu (Outside the NavList to Cover Full Width) */}
            <AnimatePresence>
                {openDropdown && navList.find((nav) => nav.id === openDropdown)?.megaMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1600px] bg-white shadow-lg border-t border-gray-200 z-50 py-5 top-full rounded-b-md"
                    >
                        <div className="max-w-[1600px] mx-auto px-10 grid grid-cols-4 gap-6">
                            {navList
                                .find((nav) => nav.id === openDropdown)
                                ?.categories.map((category, index) => (
                                    <div key={index} className="flex flex-col">
                                        <h3 className="mb-2 font-bold text-greeny">{category.title}</h3>
                                        <ul>
                                            {category.items.map((item, idx) => (
                                                <li key={idx}>
                                                    <NavLink
                                                        to={`/${category.title.toLowerCase()}/${item.toLowerCase()}`}
                                                        className="block py-1 text-sm font-semibold text-gray-700 hover:text-greeny"
                                                    >
                                                        {item}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            <img src={MenuImg} alt="" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
