



import Product01 from '/product-01.png'
import Product012 from '/product-1-2.jpg'
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Product = () => {

    return (
        <div className="w-[300px] rounded-[15px] p-[25px] border border-[#ECECEC] transition-all ease-in-out duration-200 hover:border-green-200 hover:shadow-md relative group">
            <div className="absolute top-0 left-0 bg-[#F74B81] rounded-tl-[15px] rounded-br-[15px]">
                <span className="text-white font-lato text-xs px-5 py-2">Hot</span>
            </div>
            <div className="">
                <div className="overflow-hidden w-full h-[246px] relative group">
                    <img src={Product01} alt="" className='absolute w-full h-full object-cover top-0 left-0 z-1' />
                    <img src={Product012} alt="" className='absolute w-full h-full object-cover top-0 left-0 transition-transform ease-in-out duration-500 group-hover:z-2 group-hover:scale-105' />
                </div>

            </div>
            <div className="mt-[5px] mb-6 flex flex-col gap-y-[10px]">
                <span className='text-[#ADADAD] text-xs font-lato leading-6'>Snack</span>
                <h3 className='leading-[20px] font-bold'>Seeds of Change Organic Quinoa, Brown, & Red Rice</h3>
                <div className="flex items-center gap-x-2">
                    <Rating className='text-sm' name="half-rating" defaultValue={2.5} precision={0.5} />
                    <span className='text-[#B6B6B6] text-sm leading-6 font-lato'>(2.5)</span>
                </div>
                <span className='text-[#B6B6B6] text-sm leading-6 font-lato'>By <span className='text-greeny'>Stouffer</span></span>
            </div>
            <div className="flex justify-between items-center font-bold leading-6">
                <span className='mr-[10px] text-2xl text-greeny '>$52.85</span>
                <span className='mr-auto text-sm text-[#ADADAD] line-through'>$55.8</span>
                <button className="flex items-center gap-x-[5px] rounded-sm bg-[#DEF9EC] text-greeny font-lato font-bold text-sm leading-6 px-5 py-[10px] cursor-pointer transition-colors hover:bg-greeny hover:text-white">
                    <ShoppingCartOutlinedIcon />
                    Add
                </button>
            </div>
            <div className="absolute top-[-120px] left-0 w-full h-full flex items-center justify-center opacity-0 transition-all ease-in-out duration-300 group-hover:opacity-100 group-hover:z-10">
                <ul className='flex bg-white text-greeny rounded-[6px] border border-[#BCE3C9]'>
                    <li className='px-[10px] py-[8px] text-sm hover:text-[#fd7e14] transition-colors duration-200 cursor-pointer wrapper'><FavoriteBorderOutlinedIcon className='w-3' />
                        <span className='tooltip'>Add to Wishlist</span></li>
                    <li className='px-[10px] py-[8px] text-sm hover:text-[#fd7e14] transition-colors duration-200 cursor-pointer wrapper border-x border-[#BCE3C9]'><CompareArrowsOutlinedIcon className='w-3' />
                        <span className='tooltip'>Compare</span></li>
                    <li className='px-[10px] py-[8px] text-sm hover:text-[#fd7e14] transition-colors duration-200 cursor-pointer wrapper'><VisibilityOutlinedIcon className='w-3' />
                        <span className='tooltip'>Quickview</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Product