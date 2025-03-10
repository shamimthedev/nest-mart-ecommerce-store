import { IoPaperPlaneOutline } from 'react-icons/io5'
import SLiderImg from '/slider-1.png'
import SLiderImg2 from '/slider-2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const slides = [
  {
    id: 1,
    img: SLiderImg,
    title: 'Fresh Vegetables Big Discount',
    sub: 'Save up to 50% on your first order'
  },
  {
    id: 2,
    img: SLiderImg2,
    title: 'Don’t miss amazing grocery deals',
    sub: 'Sign up for the daily newsletter'
  },
]

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow isHero={true}/>,
    customPaging: i => (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          // bottom: '0px',
          top: '-10px',
          opacity: '0'
        }}
      >
        {i + 1}
      </div>
    )
  };
  return (
    <>
      <div className="container overflow-hidden hidden lg:block">
        <Slider {...settings}>
          {slides.map((slide) => (
              <div className="my-[30px] outline-none overflow-hidden relative" key={slide.id}>
                <img src={slide.img} alt="" className="w-full rounded-[30px]" />
                <div className="absolute top-14 left-20">
                  <h1 className='text-[#253D4E] max-w-[680px] text-6xl xl:text-7xl leading-16 xl:leading-18 font-bold mb-7'>{slide.title}</h1>
                  <p className='font-lato text-[#7E7E7E] text-[30px] leading-[24px] mb-12 xl:mb-16'>{slide.sub}</p>
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
            ))
          }
        </Slider>
      </div>
    </>
  )
}

export default Hero