import { IoIosArrowDown } from "react-icons/io";
import Breadcrumb2 from "../components/Breadcrumb2"
import Sidebar from "../components/Sidebar";
import { PiSortAscendingLight } from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import BlogIcon from '/blog-category-icon.svg'
import BlogCard from "../components/BlogCard";

const Blog = () => {
    return (
        <>
            <section>
                <div>
                    <Breadcrumb2 title={'Blog & News'} />
                </div>

                <div className="max-w-[1610px] mx-auto ">
                    <div className="flex justify-between gap-x-[42px] relative">
                        {/* Articles Section */}
                        <div className="flex-1">
                            <div className="mb-[30px] flex items-center justify-between leading-6 font-lato">
                                <div className="flex items-center gap-x-[10px]">
                                    <img src={BlogIcon} alt="" className="w-9 h-9 object-cover" />
                                    <h2 className="font-bold text-[40px] leading-12"> Recipe Articles</h2>
                                </div>
                                <div className="flex items-center gap-x-[10px]">
                                    <div className="w-[180px] relative z-10">
                                        <div className="w-full flex py-[14px] items-center border border-[#ECECEC] justify-center rounded-[10px] gap-x-[10px] text-[#777777] text-[13px] font-semibold cursor-pointer select-none">
                                            <CiGrid41 />
                                            <span>Show: 50</span>
                                            <IoIosArrowDown />
                                        </div>

                                    </div>
                                    <div className="w-[185px] relative z-10">
                                        <div className="flex w-full py-[14px] items-center border border-[#ECECEC] justify-center rounded-[10px] gap-x-[10px] text-[#777777] text-[13px] font-semibold cursor-pointer select-none">
                                            <PiSortAscendingLight />
                                            <span>Sort by: Featured</span>
                                            <IoIosArrowDown />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Articles Here  */}
                            <div className="mt-[50px] flex justify-between flex-wrap gap-x-6 gap-y-[30px]">
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                                <BlogCard />
                            </div>
                        </div>

                        {/* Sidebar here */}
                        <div className="w-[375px]">
                            <Sidebar className="sticky top-[100px]" isBlog={true} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog