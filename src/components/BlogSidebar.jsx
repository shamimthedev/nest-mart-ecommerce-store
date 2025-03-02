import Category from "./Category"
import { IoIosSearch } from "react-icons/io";
import TrendingNow from "./TrendingNow";
import SidebarGallery from "./SidebarGallery";
import PopularTags from "./PopularTags";

const BlogSidebar = ({ className }) => {
    return (
        <>
            <div className={`flex flex-col gap-[30px] ${className}`}>
                {/* Search */}
                <div className="h-16 w-full px-5 border border-[#ECECEC] rounded-[10px] font-lato text-[#838383] flex justify-between items-center shadow-xs">
                    <input type="text" placeholder="Search..." className="w-full h-full border-none outline-none" />
                    <IoIosSearch size={20} />
                </div>
                <Category />
                <TrendingNow />
                <SidebarGallery/>
                <PopularTags/>
            </div>
        </>
    )
}

export default BlogSidebar