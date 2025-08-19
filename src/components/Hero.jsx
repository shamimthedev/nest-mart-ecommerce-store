import { IoPaperPlaneOutline, IoCheckmarkCircle } from 'react-icons/io5';
import { useState, useEffect } from 'react';
import SLiderImg from '/slider-1.png';
import SLiderImg2 from '/slider-2.png';
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
    sub: 'Save up to 50% on your first order',
    cta: 'Get 50% Off',
    accent: 'Fresh & Organic',
    stats: '1000+ Happy Customers'
  },
  {
    id: 2,
    img: SLiderImg2,
    title: "Don't miss amazing grocery deals",
    sub: 'Sign up for the daily newsletter',
    cta: 'Subscribe Now',
    accent: 'Daily Deals',
    stats: 'Save up to $200/month'
  },
];

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Animation trigger on component mount
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsLoading(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow isHero={true}/>,
    beforeChange: (current, next) => setCurrentSlide(next),
    customPaging: (i) => (
      <div className="hero-dot">
        <span className={`block w-3 h-3 rounded-full transition-all duration-300 ${
          i === currentSlide ? 'bg-green-500 scale-125' : 'bg-white/50'
        }`}></span>
      </div>
    ),
    appendDots: dots => (
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-3"> {dots} </ul>
      </div>
    )
  };

  return (
    <div className="hero-section">
      {/* Desktop Hero */}
      <div className="container overflow-hidden hidden lg:block">
        <div className="relative">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div className="my-[30px] outline-none overflow-hidden relative" key={slide.id}>
                {/* Background Image with Overlay */}
                <div className="relative rounded-[30px] overflow-hidden">
                  <img 
                    src={slide.img} 
                    alt={slide.title}
                    className="w-full h-[600px] object-cover" 
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Content */}
                <div className={`absolute top-0 left-0 w-full h-full flex items-center transition-all duration-1000 ${
                  isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                }`}>
                  <div className="pl-20 pr-10 max-w-4xl">
                    {/* Accent Badge */}
                    <div className="inline-flex items-center bg-green-500/10 backdrop-blur-sm border border-green-500/20 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                      {slide.accent}
                    </div>

                    {/* Main Title */}
                    <h1 className={`text-[#253D4E] max-w-[680px] text-6xl xl:text-7xl leading-tight font-bold mb-6 transition-all duration-700 delay-200 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                      {slide.title}
                    </h1>

                    {/* Subtitle */}
                    <p className={`font-lato text-[#7E7E7E] text-2xl xl:text-3xl leading-relaxed mb-8 transition-all duration-700 delay-400 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                      {slide.sub}
                    </p>

                    {/* Stats */}
                    <div className={`flex items-center mb-8 transition-all duration-700 delay-500 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                      <div className="flex items-center bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                        <IoCheckmarkCircle className="text-green-500 text-xl mr-2" />
                        <span className="text-gray-700 font-medium">{slide.stats}</span>
                      </div>
                    </div>

                    {/* Email Subscription Form */}
                    <div className={`transition-all duration-700 delay-600 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                    }`}>
                      <form onSubmit={handleSubscribe} className="flex items-center w-full max-w-[520px] bg-white/95 backdrop-blur-sm rounded-full shadow-xl overflow-hidden border border-white/20">
                        <IoPaperPlaneOutline className="text-gray-500 text-2xl ml-6" />
                        <input
                          className="flex-1 px-4 h-16 text-gray-700 outline-none bg-transparent text-lg placeholder-gray-500"
                          type="email"
                          placeholder="Enter your email address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading || isSubscribed}
                        />
                        <button 
                          type="submit"
                          disabled={!email || isLoading || isSubscribed}
                          className={`h-16 px-8 font-semibold text-white rounded-full transition-all duration-300 min-w-[140px] flex items-center justify-center ${
                            isSubscribed 
                              ? 'bg-green-600 cursor-default' 
                              : isLoading 
                              ? 'bg-gray-400 cursor-not-allowed' 
                              : 'bg-green-600 hover:bg-green-700 hover:shadow-lg hover:scale-105 active:scale-95'
                          }`}
                        >
                          {isSubscribed ? (
                            <>
                              <IoCheckmarkCircle className="mr-2" />
                              <span>Subscribed!</span>
                            </>
                          ) : isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                              <span>Please wait...</span>
                            </>
                          ) : (
                            <span>{slide.cta}</span>
                          )}
                        </button>
                      </form>
                      
                      {/* Form Helper Text */}
                      <p className="text-gray-500 text-sm mt-3 ml-1">
                        🔒 We respect your privacy. Unsubscribe anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="lg:hidden">
        <div className="container px-4">
          <Slider {...{...settings, arrows: false}}>
            {slides.map((slide) => (
              <div className="outline-none" key={slide.id}>
                <div className="relative rounded-2xl overflow-hidden my-6">
                  <img 
                    src={slide.img} 
                    alt={slide.title}
                    className="w-full h-[400px] object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    {/* Mobile Badge */}
                    <div className="inline-flex items-center bg-green-500/20 backdrop-blur-sm border border-green-500/30 text-green-300 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                      {slide.accent}
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3">
                      {slide.title}
                    </h1>
                    <p className="text-gray-200 text-lg mb-4 leading-relaxed">
                      {slide.sub}
                    </p>
                    
                    {/* Mobile CTA */}
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;