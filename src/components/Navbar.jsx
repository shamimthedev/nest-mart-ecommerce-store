import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { IoIosArrowDown } from "react-icons/io";
import MenuImg from '/banner-menu.png'
import { navList } from "../data/DB";

const Navbar = ({ className }) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null); // Ref to store the timeout ID

    // Function to handle mouse enter
    const handleMouseEnter = (id) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current); // Clear any existing timeout
        }
        setOpenDropdown(id);
    };

    // Function to handle mouse leave with a delay
    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
        }, 300); // 300ms delay before closing
    };

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

    // Clear timeout on component unmount
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    return (
        <nav className={`${className}`}>
            {/* Main Navigation */}
            <div className="container flex justify-between items-center py-4 px-6">
                <ul className="flex items-center gap-x-6 xl:gap-x-7 2xl:gap-x-[34px]">
                    {navList.map((nav) => (
                        <li
                            key={nav.id}
                            className="relative group"
                            ref={nav.children || nav.megaMenu ? dropdownRef : null}
                            onMouseEnter={() => (nav.children || nav.megaMenu) && handleMouseEnter(nav.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Main NavLink */}
                            <NavLink
                                to={nav.url !== "#" ? nav.url : ""}
                                className="flex gap-x-1 items-center font-bold text-xs xl:text-sm 2xl:text-base hover:text-greeny"
                            >
                                {nav.name} {(nav.children || nav.megaMenu) && <IoIosArrowDown />}
                            </NavLink>

                            {/* Sub-menu (Dropdown) */}
                            {nav.children && openDropdown === nav.id && (
                                <ul
                                    className="absolute left-0 mt-4 w-40 bg-white shadow-md border border-gray-200 rounded-md z-50 overflow-hidden"
                                    onMouseEnter={() => handleMouseEnter(nav.id)} // Keep open when hovering over sub-menu
                                    onMouseLeave={handleMouseLeave} // Close with delay when mouse leaves sub-menu
                                >
                                    {nav.children.map((sub, index) => (
                                        <li key={index}>
                                            <NavLink
                                                to={sub.url}
                                                className="block px-4 py-2 text-sm text-gray-700 font-semibold hover:bg-greeny hover:text-white transition-all duration-200"
                                            >
                                                {sub.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mega Menu (Outside the NavList to Cover Full Width) */}
            {openDropdown && navList.find((nav) => nav.id === openDropdown)?.megaMenu && (
                <div
                    className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-[1600px] bg-white shadow-lg border-t border-gray-200 z-50 py-5 top-full rounded-b-md"
                    onMouseEnter={() => handleMouseEnter(openDropdown)} // Keep open when hovering over mega-menu
                    onMouseLeave={handleMouseLeave} // Close with delay when mouse leaves mega-menu
                >
                    <div className="container px-10 grid grid-cols-4 gap-6">
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
                </div>
            )}
        </nav>
    );
};

export default Navbar;