import DailyBestSells from "../components/DailyBestSells"
import DealsOfTheDay from "../components/DealsOfTheDay"
import FeaturedCategories from "../components/FeaturedCategories"
import Hero from "../components/Hero"
import PopularProducts from "../components/PopularProducts"
import TopSelling from "../components/TopSelling"

const Home = () => {
  return (
    <>
      {/* <div className="max-w-[1610px] mx-auto 2xl:flex gap-x-3 pt-[30px]">
        <Category />
      </div> */}
      <Hero />
      <FeaturedCategories/>
      <PopularProducts />
      <DailyBestSells/>
      <DealsOfTheDay />
      {/* <ShopByCategories /> */}
      <div className="mt-[50px] container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
        <TopSelling title={'Top Selling'}/>
        <TopSelling title={'Trending Products'}/>
        <TopSelling title={'Recently Added'} className={'hidden xl:block'}/>
        <TopSelling title={'Top Rated'} className={'hidden 2xl:block'}/>
      </div>
    </>
  )
}

export default Home