import { allCategoryData } from "../data/DB"

const AllCategory = () => {
    return (
        <div className='p-7 max-w-[440px] bg-white border border-green-200 rounded-[15px]'>
            <div className="flex gap-[15px] flex-wrap">
                {allCategoryData.map((category) => {
                    return (
                        <div key={category.id} className="w-[180px] flex px-5 py-2 rounded-[5px] border border-[#F2F3F4] justify-between items-center cursor-pointer transition-all ease-in-out duration-200 hover:border-green-200 hover:shadow-sm">
                            <div className="flex gap-x-[15px] items-center">
                                <img src={category.img} alt={category.title} className='w-[30px] h-[30px]' />
                                <h3 className='font-bold text-sm'>{category.title}</h3>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllCategory