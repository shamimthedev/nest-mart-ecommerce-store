import BlogSidebar from "../components/BlogSidebar"
import Breadcrumb from "../components/Breadcrumb"

const BlogDetails = () => {
    return (
        <>
            <section>
                <div>
                    <Breadcrumb />
                </div>

                <div className="max-w-[1610px] mx-auto">
                    <div className="flex justify-between">
                        {/* Blog Content */}
                        <div className="">h</div>

                        {/* Sidebar  */}
                        <div className="w-[20%]">
                            <BlogSidebar className="sticky top-[100px]" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails