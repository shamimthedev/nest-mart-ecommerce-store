import { FaStar } from "react-icons/fa";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Deals = ({ title, img, author, oldPrice, newPrice, rating }) => {

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
        <div className="w-full h-[420px] ">
            <div className="relative group w-full">
                <div className="w-full">
                    <img src={img} alt={title} className='w-full object-cover' />
                </div>
                <div className="w-[full] xs:w-[315px] absolute left-[10px] right-[10px] bottom-[-120px] rounded-[10px] bg-white shadow-md p-6 transition-all ease-in-out duration-300 group-hover:translate-y-[-6px]">
                    <div className="mt-[5px] mb-4 flex flex-col gap-y-[10px]">
                        <h3 className='leading-[20px] font-bold'>{title}</h3>
                        <div className="flex items-center gap-x-2">
                            <FaStar className="text-yellow-400" />
                            <span className='text-[#B6B6B6] text-sm leading-6 font-lato'>({rating})</span>
                        </div>
                        <span className='text-[#B6B6B6] text-sm leading-6 font-lato'>By <span className='text-greeny'>{author}</span></span>
                    </div>
                    <div className="flex justify-between items-center font-bold leading-6">
                        <span className='mr-[10px] text-2xl text-greeny '>{oldPrice}</span>
                        <span className='mr-auto text-sm text-[#ADADAD] line-through'>{newPrice}</span>
                        <button className="flex items-center gap-x-[5px] rounded-sm bg-[#DEF9EC] text-greeny font-lato font-bold text-sm leading-6 px-5 py-[10px] cursor-pointer transition-colors hover:bg-greeny hover:text-white">
                            <ShoppingCartOutlinedIcon />
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals