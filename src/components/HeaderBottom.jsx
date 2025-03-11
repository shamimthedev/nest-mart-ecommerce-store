import { IoIosArrowDown } from "react-icons/io"
import AllCategory from "./AllCategory"
import { useEffect, useRef, useState } from "react";
import Support from '/support.svg'
import Browse from '/browse.svg'
import Navbar from "./Navbar";

const HeaderBottom = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAllCategoryOpen, setIsAllCategoryOpen] = useState(false);
    const categoryRef = useRef(null);

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

    return (
        <>
            {/* Placeholder for fixed header */}
            {isScrolled && <div className="h-[70px] lg:h-[96px]"></div>}
            <div id="header-bottom" className={`hidden lg:block border-y border-[#ECECEC] transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 w-full z-50 bg-white shadow-md py-1" : " bg-transparent py-4"}`}>
                <div className="container">
                    <div className="h-[73px] py-[15px] flex items-center justify-between gap-x-5 2xl:gap-x-[35px] relative">
                        {/* Browse Categories Button */}
                        <div
                            className="flex gap-x-1 xl:gap-x-2 py-2 xl:py-3 px-2 xl:px-3 2xl:px-5 font-bold bg-greeny rounded-[5px] text-white items-center cursor-pointer text-xs xl:text-sm 2xl:text-base relative"
                            aria-label="Browse All Categories"
                            ref={categoryRef} onClick={() => setIsAllCategoryOpen(!isAllCategoryOpen)}
                        >
                            <img src={Browse} loading="lazy" alt="Browse icon" className="w-3 xl:w-4" />
                            <span>Browse All Categories</span>
                            <IoIosArrowDown />
                        </div>

                        {isAllCategoryOpen && (
                            <div className="absolute left-0 top-full z-50">
                                <AllCategory />
                            </div>
                        )}
                        {/* Navigation Links */}
                        <Navbar className={'mr-auto'} />
                        <div className="hidden lg:flex items-center gap-x-2 2xl:gap-x-3">
                            <img src={Support} alt="" className="w-5 2xl:w-8" />
                            <div className="flex flex-col">
                                <span className="text-greeny font-bold text-lg 2xl:text-[26px]">1900 - 888</span>
                                <span className="text-[#7E7E7E] font-medium text-[10px] 2xl:text-xs font-lato">24/7 Support Center</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderBottom