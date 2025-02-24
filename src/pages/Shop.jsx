import BreadcrumbImg from '/breadcrumb.png'
import Category from './../components/Category';
import FillByPrice from '../components/FillByPrice';
import NewProducts from '../components/NewProducts';

const Shop = () => {
    return (
        <>
            <section id="shopPage" className="max-w-[1610px] mx-auto">
                {/* breadcrumb here */}
                <div className="mt-[30px] mb-[50px] w-full h-[237px] rounded-[20px] relative">
                    <img src={BreadcrumbImg} alt="" className='w-full h-full object-cover' />
                    <div className="absolute top-[70px] left-[68px]">
                        <div className="px-3">
                            <h1 className='mb-[18px] text-[48px] leading-[58px] font-bold'>Snack</h1>
                            <ul className="flex font-semibold font-lato text-sm leading-6 text-[#7E7E7E] items-center gap-x-3">
                                <li>Home</li>
                                <li>Shop</li>
                                <li>Snack</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Category here  */}
                <div className="flex flex-col gap-[30px]">
                    <Category/>
                    <FillByPrice/>
                    <NewProducts/>
                </div>
            </section>
        </>
    )
}

export default Shop