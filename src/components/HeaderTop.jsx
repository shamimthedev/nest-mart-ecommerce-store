import { IoIosArrowDown } from "react-icons/io"

const HeaderTop = () => {
    return (
        <>
            <div id="topSection" className="hidden lg:block border-b border-[#ECECEC] font-lato">
                <div className="container">
                    <div className="h-[37px] flex justify-between items-center text-[#7E7E7E] text-[13px] leading-[13px]">
                        <ul className="flex gap-3 xl:gap-5 font-medium">
                            <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">About Us</li>
                            <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">My Account</li>
                            <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">Wishlist</li>
                            <li>Order Tracking</li>
                        </ul>
                        <p className="text-xs xl:text-sm leading-4 text-center">
                            Supper Value Deals - <span className="text-greeny">Save</span> more with coupons
                        </p>
                        <div className="flex gap-3 xl:gap-5">
                            <p className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">
                                Need help? Call Us: <span className="font-semibold text-[#3BB77E]">+ 1800 900</span>
                            </p>
                            <div className="flex items-center gap-[2px] relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">
                                <span className="font-medium">English</span>
                                <IoIosArrowDown />
                            </div>
                            <div className="flex items-center gap-[2px]">
                                <span className="font-medium">USD</span>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderTop