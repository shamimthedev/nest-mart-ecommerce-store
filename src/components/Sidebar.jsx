import Category from "./Category"
import FillByPrice from "./FillByPrice"
import NewProducts from "./NewProducts"
import { IoIosSearch } from "react-icons/io";

const Sidebar = ({ className, isBlog = false }) => {
    return (
        <>
            <div className={`flex flex-col gap-[30px] ${className}`}>
                {/* Search for Blog */}
                {isBlog ? (<div className="h-16 w-[375px] px-5 border border-[#ECECEC] rounded-[10px] font-lato text-[#838383] flex justify-between items-center shadow-md">
                    <input type="text" placeholder="Search..." className="w-full h-full border-none outline-none" />
                    <IoIosSearch size={20}/>
                </div>) : ''}
                <Category />
                <FillByPrice />
                <NewProducts />
            </div>
        </>
    )
}

export default Sidebar