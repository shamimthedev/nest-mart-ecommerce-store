import { IoIosArrowDown } from "react-icons/io";
import Breadcrumb2 from "../components/Breadcrumb2"
import { PiSortAscendingLight } from "react-icons/pi";
import { CiGrid41 } from "react-icons/ci";
import BlogIcon from '/blog-category-icon.svg'
import BlogCard from "../components/BlogCard";
import { blogData } from "../data/DB";
import { Link } from "react-router";
import BlogSidebar from "../components/BlogSidebar";

const Blog = () => {
    return (
        <>
            <section>
                <div className="hidden lg:block">
                    <Breadcrumb2 title={'Blog & News'} />
                </div>

                <div className="container">
                    <div className="flex justify-between gap-x-[42px] relative my-12">
                        {/* Articles Section */}
                        <div className="flex-1">
                            <div className="flex flex-col xl:flex-row gap-8 xl:justify-between leading-6 font-lato">
                                <div className="flex items-center gap-x-[10px]">
                                    <img src={BlogIcon} alt="" className="w-9 h-9 object-cover" />
                                    <h2 className="font-bold text-[40px] leading-12"> Recipe Articles</h2>
                                </div>
                                <div className="hidden xl:flex items-center gap-x-[10px]">
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
                                {blogData.map((blog, index)=>(
                                    <div key={index} className="w-full sm:w-[375px] xl:w-[300px] 2xl:w-[375px]">
                                        <Link to={`/blog/${blog.slug}`}><BlogCard item={blog}/></Link>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Sidebar here */}
                        <div className="hidden 2xl:block w-[20%]">
                            <BlogSidebar className="sticky top-[100px]"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog