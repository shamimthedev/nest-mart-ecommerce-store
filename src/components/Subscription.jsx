import { IoPaperPlaneOutline } from "react-icons/io5"
import SubscriptionImg from '/subscription.png'
import { Link } from "react-router"

const Subscription = () => {
  return (
    <>
      <div className="container mt-[30px] mb-10 h-[200px] lg:h-[250px] xl:h-[300px] 3xl:h-[380px] overflow-hidden relative">
        <img src={SubscriptionImg} alt="Subscription Img" className="w-full h-full object-left rounded-[30px]" />
        <div className="absolute top-5 left-10 sm:top-8 sm:left-14 md:top-8 md:left-18 lg:top-12 lg:left-20 xl:top-16 3xl:top-18">
          <h1 className='text-[#253D4E] text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-[40px] xl:leading-8 2xl:leading-10 3xl:leading-12 lg:leading-6 leading-5 font-bold mb-4 3xl:mb-5 max-w-[220px] md:max-w-[240px] lg:max-w-[260px] xl:max-w-[310px] 2xl:max-w-[410px] 3xl:max-w-[520px]'>Stay home & get your daily needs from our shop</h1>
          <p className='font-lato text-[#7E7E7E] text-xs md:text-sm 2xl:text-lg 3xl:leading-6 mb-6 lg:mb-8 3xl:mb-11.5'>Start You'r Daily Shopping with <span className="text-greeny"><Link to='/'>Nest Mart</Link></span></p>
          <div className="flex items-center w-full lg:w-[480px] bg-white rounded-full shadow-md overflow-hidden">
            <IoPaperPlaneOutline className="text-gray-500 text-xl ml-3" />
            <input
              className="w-[140px] md:w-[210px] lg:flex-1 px-4 h-10 lg:h-12 text-gray-700 outline-none bg-transparent text-md"
              type="email"
              placeholder="Enter email"
            />
            <button className="h-10 lg:h-12 px-4 md:px-6 lg:px-8 bg-greeny hover:bg-[#29A56C] text-white rounded-full font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscription