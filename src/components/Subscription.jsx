import { IoPaperPlaneOutline } from "react-icons/io5"
import SubscriptionImg from '/subscription.png'
import { Link } from "react-router"

const Subscription = () => {
  return (
    <>
      <div className="container mt-[30px] mb-10 h-[200px] overflow-hidden relative">
        <img src={SubscriptionImg} alt="Subscription Img" className="w-full h-full object-left rounded-[30px]" />
        <div className="absolute top-5 left-10">
          <h1 className='text-[#253D4E] text- leading-5 font-bold mb-4 max-w-[220px]'>Stay home & get your daily needs from our shop</h1>
          <p className='font-lato text-[#7E7E7E] text-xs mb-6'>Start You'r Daily Shopping with <span className="text-greeny"><Link to='/'>Nest Mart</Link></span></p>
          <div className="flex items-center w-full sm:w-[480px] bg-white rounded-full shadow-md overflow-hidden">
            <IoPaperPlaneOutline className="text-gray-500 text-xl ml-3" />
            <input
              className="w-[140px] sm:flex-1 px-4 h-10 sm:h-16 text-gray-700 outline-none bg-transparent text-md"
              type="email"
              placeholder="Enter email"
            />
            <button className="h-10 sm:h-16 px-4 sm:px-10 bg-greeny hover:bg-[#29A56C] text-white rounded-full font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscription