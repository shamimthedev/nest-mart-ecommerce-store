import DealsOfTheDay from "../components/DealsOfTheDay"
import FeaturedCategories from "../components/FeaturedCategories"
import Hero from "../components/Hero"
import PopularProducts from "../components/PopularProducts"
import RecentlyAdded from "../components/RecentlyAdded"
import ShopByCategories from "../components/ShopByCategories"
import TopRated from "../components/TopRated"
import TopSelling from "../components/TopSelling"
import TrendingProducts from "../components/TrendingProducts"


const Home = () => {
  return (
    <>
      {/* <div className="max-w-[1610px] mx-auto 2xl:flex gap-x-3 pt-[30px]">
        <Category />
      </div> */}
      <Hero />
      <FeaturedCategories/>
      <PopularProducts />
      <DealsOfTheDay />
      <ShopByCategories />
      <div className="flex gap-5 flex-wrap">
        <TopSelling />
        <TrendingProducts />
        <RecentlyAdded />
        <TopRated />
      </div>
    </>
  )
}

export default Home