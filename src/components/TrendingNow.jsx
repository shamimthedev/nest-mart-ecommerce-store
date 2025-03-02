import TopSelling01 from '/top-selling-01.png'
import TopSelling02 from '/top-selling-02.png'
import TopSelling03 from '/top-selling-03.png'
import TopSelling04 from '/product-img-gallary-03.png'
import { FaStar } from "react-icons/fa";

const TrendingNow = () => {
    const productsData = [
        {
            id: 1,
            img: TopSelling04,
            title: 'Chen Cardigan',
            rating: '2',
            price: '$52.85',
        },
        {
            id: 2,
            img: TopSelling02,
            title: 'Chen Sweater',
            rating: '3',
            price: '$28.85',
        },
        {
            id: 3,
            img: TopSelling03,
            title: "Colorful Jacket",
            rating: '1',
            price: '$25',
        },
        {
            id: 4,
            img: TopSelling01,
            title: "Lorem, ipsum",
            rating: '2',
            price: '$25',
        },
    ];
    return (
        <>
            <section className="w-full p-[31px] bg-white rounded-[15px] border border-[#ECECEC] shadow-md">
                <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">Trending Now</h2>
                <div className="flex flex-col gap-y-[15px]">
                    {productsData.map((product) => (
                        <div key={product.id} className="flex gap-x-6 transition-all ease-in-out duration-300 hover:translate-y-[-5px]">
                            <div className="w-[80px] h-[80px]">
                                <img src={product.img} alt={product.title} className='w-full h-full object-cover cursor-pointer' />
                            </div>
                            <div className="">
                                <div className="mt-[5px] mb-2 flex flex-col gap-y-[6px]">
                                    <h3 className='leading-[20px] font-bold max-w-[217px] cursor-pointer'>{product.title}</h3>
                                    <span className=' text-[#ADADAD]'>{product.price}</span>
                                </div>
                                <FaStar className='text-yellow-400'/>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default TrendingNow