import { IoPaperPlaneOutline } from "react-icons/io5"
import SubscriptionImg from '/subscription.png'

const Subscription = () => {
  return (
    <>
      <div className="mx-auto max-w-[1610px] mt-[54px] mb-10 overflow-hidden relative">
        <img src={SubscriptionImg} alt="Subscription Img" className="w-full rounded-[30px]" />
        <div className="absolute top-20 left-[78px]">
          <h1 className='text-[#253D4E] max-w-[529px] text-[40px] leading-[48px] font-bold mb-[20px]'>Stay home & get your daily needs from our shop</h1>
          <p className='font-lato text-[#7E7E7E] text-lg leading-6 mb-[46px]'>Start You'r Daily Shopping with <span className="text-greeny">Nest Mart</span></p>
          <div className="flex items-center w-[480px] bg-white rounded-full shadow-md overflow-hidden">
            <IoPaperPlaneOutline className="text-gray-500 text-2xl ml-4" />
            <input
              className="flex-1 px-4 h-16 text-gray-700 outline-none bg-transparent text-lg"
              type="email"
              placeholder="Enter your email"
            />
            <button className="h-16 px-10 bg-greeny hover:bg-[#29A56C] text-white rounded-full font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscription