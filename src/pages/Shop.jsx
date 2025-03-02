
import { useEffect, useRef, useState } from 'react';
import Product from '../components/Product'
import Sidebar from '../components/Sidebar'
import { CiGrid41 } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { PiSortAscendingLight } from "react-icons/pi";
import { FiClipboard, FiHeart, FiSettings, FiTarget, FiUser } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
import { productsData } from '/src/data/DB'
import Breadcrumb2 from '../components/Breadcrumb2';

const Shop = () => {
    const [isSortOpen, setIsSortOpen] = useState(false)
    const [isShowOpen, setIsShowOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const sortDropdownRef = useRef(null);
    const showDropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
                setIsSortOpen(false);
            }
            if (showDropdownRef.current && !showDropdownRef.current.contains(event.target)) {
                setIsShowOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // Pagination Logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(productsData.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <section id="shopPage">
                {/* breadcrumb here */}
                <div>
                    <Breadcrumb2 title={'Snack'} />
                </div>

                {/* Added 'relative' to the parent container */}
                <div className="max-w-[1610px] mx-auto flex gap-x-3 relative">
                    {/* Sidebar here */}
                    <div className="w-[20%]">
                        <Sidebar className="sticky top-[100px]" />
                    </div>

                    {/* Products Section */}
                    <div className="flex-1">
                        <div className="mb-[30px] flex items-center justify-between leading-6 font-lato">
                            <p className='text-[#7E7E7E] text-sm'>We found <span className='text-greeny'>29</span> items for you!</p>
                            <div className="flex gap-x-[10px]">
                                <div className="w-[180px] relative z-10" ref={showDropdownRef}>
                                    <div className="w-full flex py-[14px] items-center border border-[#ECECEC] justify-center rounded-[10px] gap-x-[10px] text-[#777777] text-[13px] font-semibold cursor-pointer select-none" onClick={(e) => {
                                        e.stopPropagation();  // Prevent event bubbling
                                        setIsShowOpen(prev => !prev);
                                    }}>
                                        <CiGrid41 />
                                        <span>Show: 50</span>
                                        <IoIosArrowDown />
                                    </div>
                                    {isShowOpen && (<ul className="w-full absolute right-0 top-[120%] rounded-[10px] px-5 py-7 bg-white shadow-lg border border-[#ECECEC] h-auto z-50 mt-2 flex flex-col gap-y-2">
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiUser /><span>My Account</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiTarget /><span>Order Tracking</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiClipboard /><span>My Voucher</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiHeart /><span>My Wishlist</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiSettings /><span>Setting</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><GoSignOut /><span>Sign out</span></li>
                                    </ul>)}
                                </div>
                                <div className="w-[185px] relative z-10" ref={sortDropdownRef}>
                                    <div className="flex w-full py-[14px] items-center border border-[#ECECEC] justify-center rounded-[10px] gap-x-[10px] text-[#777777] text-[13px] font-semibold cursor-pointer select-none" onClick={(e) => {
                                        e.stopPropagation();  // Prevent event bubbling
                                        setIsSortOpen(prev => !prev);
                                    }}>
                                        <PiSortAscendingLight />
                                        <span>Sort by: Featured</span>
                                        <IoIosArrowDown />
                                    </div>
                                    {isSortOpen && (<ul className="w-full absolute right-0 top-[120%] rounded-[10px] px-5 py-7 bg-white shadow-lg border border-[#ECECEC] h-auto z-50 mt-2 flex flex-col gap-y-2">
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiUser /><span>My Account</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiTarget /><span>Order Tracking</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiClipboard /><span>My Voucher</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiHeart /><span>My Wishlist</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiSettings /><span>Setting</span></li>
                                        <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><GoSignOut /><span>Sign out</span></li>
                                    </ul>)}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-[30px]">

                            {currentProducts.map((product, index) => (
                                <Product key={index} product={product} />
                            ))}
                        </div>

                        {/* Pagination Controls */}
                        <div className="flex justify-center mt-8">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(index + 1)}
                                    className={`w-10 h-10 mx-1 grid place-items-center font-bold leading-[40px] rounded-full cursor-pointer ${currentPage === index + 1 ? 'bg-greeny text-white' : 'bg-[#F2F3F4] text-[#7E7E7E]'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Shop;
