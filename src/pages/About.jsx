import AboutPerson from '/about-person.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from '../components/NextArrow';
import PrevArrow from '../components/PrevArrow';
import AboutSlider01 from '/about-slider-01.png'
import AboutSlider02 from '/about-slider-02.png'
import AboutSlider03 from '/about-slider-03.png'
import Divider from '/about-divider.png'
import AboutFeatureCard from '../components/AboutFeatureCard';

const About = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow isAbout={true} />,
    prevArrow: <PrevArrow isAbout={true} />,
    cssEase: 'linear',
  };

  const catSlides = [
    {
      id: 1,
      img: AboutSlider01,
    },
    {
      id: 2,
      img: AboutSlider02,
    },
    {
      id: 3,
      img: AboutSlider03,
    },
    {
      id: 4,
      img: AboutSlider02,
    },

    {
      id: 5,
      img: AboutSlider01,
    },
    {
      id: 6,
      img: AboutSlider03,
    },
    {
      id: 7,
      img: AboutSlider02,
    },
    {
      id: 8,
      img: AboutSlider03
    },
  ];

  return (
    <>
      {/* Welcome Section */}
      <section>
        <div className="max-w-[1341px] mx-auto mt-[50px]">
          <div className="flex items-center gap-x-[49px]">
            <div className="w-[646px] h-auto">
              <img src={AboutPerson} alt="" className='w-full h-full' />
            </div>
            <div className="flex-1">
              <h1 className='font-bold text-[40px] leading-12 mb-8'>Welcome to Nest</h1>
              <p className='font-lato leading-6 text-[#7E7E7E] mb-[30px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate id est laborum.</p>
              <p className='font-lato leading-6 text-[#7E7E7E]'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
                interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
                orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
                lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate id est laborum.</p>

              {/* Slider Part  */}
              <div className="mt-[53px] overflow-hidden max-w-[620px] h-auto">
                <Slider {...settings} className="overflow-hidden cat-slide">
                  {catSlides.map((slide, index) => (
                    <div key={index} className="w-[192px]">
                      <img src={slide.img} alt='' className="w-full object-cover" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide Section */}
      <section>
        <div className="max-w-[1341px] mx-auto mt-[57px]">
          <div className="relative mb-10">
            <h2 className='font-bold text-[40px] text-center leading-12 pb-6'>What We Provide?</h2>
            <img src={Divider} alt="" className='absolute bottom-0 left-1/2 -translate-x-1/2'/>
          </div>
          <div className="flex flex-wrap">
            <AboutFeatureCard/>
            <AboutFeatureCard/>
            <AboutFeatureCard/>
            <AboutFeatureCard/>
            <AboutFeatureCard/>
            <AboutFeatureCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default About