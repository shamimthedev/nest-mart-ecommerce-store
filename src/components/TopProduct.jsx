import { Rating } from "@mui/material"


const TopProduct = ({title, img, oldPrice, newPrice, rating}) => {
    return (
        <>
            <div className="flex gap-x-6 transition-all ease-in-out duration-300 hover:translate-y-[-5px]">
                <div className="w-[110px] h-[110px]">
                    <img src={img} alt={title} className='w-full h-full object-cover cursor-pointer' />
                </div>
                <div className="">
                    <div className="mt-[5px] mb-[17px] flex flex-col gap-y-[6px]">
                        <h3 className='leading-[20px] font-bold max-w-[217px] cursor-pointer'>{title}</h3>
                        <div className="flex items-center gap-x-2">
                            <Rating className='text-sm' name="half-rating" defaultValue={2.5} precision={0.5} />
                            <span className='text-[#B6B6B6] text-sm leading-6 font-lato'>({rating})</span>
                        </div>
                    </div>
                    <div className="flex gap-x-[10px] items-center font-bold leading-6">
                        <span className='text-lg text-greeny '>{oldPrice}</span>
                        <span className='text-sm text-[#ADADAD] line-through'>{newPrice}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopProduct