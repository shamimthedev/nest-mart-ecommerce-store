import Product01 from '/product-01.png'
import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

const Product = () => {
    
    // const productsData = [
    //     {
    //         id: 1,
    //         img: Product01,
    //         img2: Product012,
    //         title: 'Seeds of Change Organic Quinoa, Brown, & Red Rice',
    //         cat: 'Snack',
    //         rating: '2.5',
    //         author: 'Stouffer',
    //         oldPrice: '$52.85',
    //         newPrice: '$55.8',
    //     },
    //     {
    //         id: 2,
    //         img: Product02,
    //         img2: Product022,
    //         title: 'All Natural Italian-Style Chicken Meatballs',
    //         cat: 'Hodo Foods',
    //         rating: '3.5',
    //         author: 'NestFood',
    //         oldPrice: '$28.85',
    //         newPrice: '$32.8',
    //     },
    //     {
    //         id: 3,
    //         img: Product03,
    //         img2: Product032,
    //         title: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
    //         cat: 'Snack',
    //         rating: '4',
    //         author: 'StarKist',
    //         oldPrice: '$48.85',
    //         newPrice: '$52.8',
    //     },
    //     {
    //         id: 4,
    //         img: Product04,
    //         img2: Product042,
    //         title: 'Foster Farms Takeout Crispy Classic Buffalo Wings',
    //         cat: 'Vegetables',
    //         rating: '4',
    //         author: 'Old El Paso',
    //         oldPrice: '$17.85',
    //         newPrice: '$19.8',
    //     },
    //     {
    //         id: 5,
    //         img: Product05,
    //         img2: Product052,
    //         title: 'Blue Diamond Almonds Lightly Salted Vegetables',
    //         cat: 'Pet Foods',
    //         rating: '4',
    //         author: 'StarKist',
    //         oldPrice: '$23.85',
    //         newPrice: '$25.8',
    //     },
    //     {
    //         id: 6,
    //         img: Product06,
    //         img2: Product062,
    //         title: 'Chobani Complete Vanilla Greek Yogurt',
    //         cat: 'Hodo Foods',
    //         rating: '4.5',
    //         author: 'NestFood',
    //         oldPrice: '$54.85',
    //         newPrice: '$55.8',
    //     },
    //     {
    //         id: 7,
    //         img: Product07,
    //         img2: Product072,
    //         title: 'Canada Dry Ginger Ale – 2 L Bottle - 200ml - 400g',
    //         cat: 'Meats',
    //         rating: '3.5',
    //         author: 'Stouffer',
    //         oldPrice: '$32.85',
    //         newPrice: '$33.8',
    //     },
    //     {
    //         id: 8,
    //         img: Product08,
    //         img2: Product082,
    //         title: 'Encore Seafoods Stuffed Alaskan Salmon',
    //         cat: 'Snack',
    //         rating: '3.0',
    //         author: 'Tyson',
    //         oldPrice: '$35.85',
    //         newPrice: '$37.8',
    //     },
    //     {
    //         id: 9,
    //         img: Product09,
    //         img2: Product092,
    //         title: "Gorton’s Beer Battered Fish Fillets with soft paper",
    //         cat: 'Coffee',
    //         rating: '4.0',
    //         author: 'Old El Paso',
    //         oldPrice: '$23.85',
    //         newPrice: '$25.8',
    //     },
    //     {
    //         id: 10,
    //         img: Product10,
    //         img2: Product102,
    //         title: 'Haagen-Dazs Caramel Cone Ice Cream Ketchup',
    //         cat: 'Cream',
    //         rating: '2.0',
    //         author: 'Tyson',
    //         oldPrice: '$22.85',
    //         newPrice: '$24.8',
    //     },
    // ]

    // Detect Scroll to Add Background and Shadow


    return (
        <div className="w-[300px] rounded-[15px] p-[25px] border border-[#ECECEC] transition-all ease-in-out duration-200 hover:border-green-200 hover:shadow-md relative">
            <div className="absolute top-0 left-0 bg-[#F74B81] rounded-tl-[15px] rounded-br-[15px]">
                <span className="text-white font-lato text-xs px-5 py-2">Hot</span>
            </div>
            <div className="relative">
                <img src={Product01} alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition-opacity ease-in-out duration-300 hover:opacity-100">
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
                <button className="flex items-center gap-x-[5px] rounded-sm bg-[#DEF9EC] text-greeny font-lato font-bold text-sm leading-6 px-5 py-[10px] cursor-pointer">
                    <ShoppingCartOutlinedIcon />
                    Add
                </button>
            </div>
        </div>
    )
}

export default Product