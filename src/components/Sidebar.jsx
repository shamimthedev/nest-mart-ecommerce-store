


import Category from "./Category"
import FillByPrice from "./FillByPrice"
import NewProducts from "./NewProducts"


const Sidebar = ({className}) => {
    return (
        <>
            <div className={`flex flex-col gap-[30px] ${className}`}>
                <Category />
                <FillByPrice />
                <NewProducts />
            </div>
        </>
    )
}

export default Sidebar