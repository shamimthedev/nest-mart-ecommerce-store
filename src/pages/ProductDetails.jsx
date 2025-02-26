import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import SingleProduct from '/single-product.png'
import Rating from '@mui/material/Rating';
import { useState } from "react";
import PrevArrow from "../components/PrevArrow";
import NextArrow from "../components/NextArrow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductImg1 from '/product-img-gallary-01.png'
import ProductImg2 from '/product-img-gallary-02.png'
import ProductImg3 from '/product-img-gallary-03.png'
import ProductImg4 from '/product-img-gallary-04.png'

const ProductDetails = () => {
  const [value, setValue] = useState(2);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <>
      <section className="">
        <div className="mb-[30px] border-b border-[#ECECEC]">
          {/* Breadcrumb  */}
          <ul className="max-w-[1610px] mx-auto h-[66px] flex items-center font-semibold text-sm text-greeny leading-6 gap-x-[10px]">
            <li className="flex items-center gap-x-1"><AiOutlineHome />Home</li>
            <li><MdKeyboardArrowRight /></li>
            <li>Vegetables & tubers </li>
            <li><MdKeyboardArrowRight /></li>
            <li className="text-[#7E7E7E]"> Seeds of Change Organic</li>
          </ul>
        </div>
        <div className="max-w-[1610px] mx-auto">
          <div className="flex">

            {/* Product Details */}
            <div className="flex-1">
              <div className="flex items-center gap-[54px]">

                {/* Product Image  */}
                <div className="w-[48%] ">
                  <div className="w-full h-auto mb-[30px] overflow-hidden border border-[#ECECEC] rounded-[15px] flex items-center justify-center">
                    <img src={SingleProduct} alt="" />
                  </div>
                  <div className="overflow-hidden">
                    <Slider {...settings} className="cat-slide">
                      <div className="">
                        <img src={ProductImg1} alt="" className="w-full"/>
                      </div>
                      <div className="">
                        <img src={ProductImg2} alt="" className="w-full"/>
                      </div>
                      <div className="">
                        <img src={ProductImg3} alt="" className="w-full"/>
                      </div>
                      <div className="">
                        <img src={ProductImg4} alt="" className="w-full"/>
                      </div>
                      <div className="">
                        <img src={ProductImg1} alt="" className="w-full"/>
                      </div>
                      <div className="">
                        <img src={ProductImg3} alt="" className="w-full"/>
                      </div>
                    </Slider>
                  </div>
                </div>

                {/* Product Info */}
                <div className="w-[48%] font-bold">
                  <button className="text-[#F74B81] text-sm leading-[14px] bg-[#FDE0E9] rounded-[5px] px-3 py-[6px] mb-[19px]">Sale Off</button>
                  <h1 className="mb-[19px] text-[40px] leading-12 max-w-[448px]">Seeds of Change Organic Quinoa, Brown</h1>
                  <div className="mb-[34px] flex items-center gap-x-2">
                    <Rating name="read-only" value={value} readOnly />
                    <span className='text-[#B6B6B6] text-sm leading-6 font-lato'>(32 reviews)</span>
                  </div>
                  <div className="mb-[31px] flex gap-x-[15px] items-baseline relative">
                    <span className='text-[58px] leading-[58px] text-greeny '>$38</span>
                    <span className='text-[28px] leading-7 text-[#ADADAD] line-through'>$52</span>
                    <span className="font-semibold text-xs leading-[12px] text-[#FDC040] absolute left-[115px] top-3">26% Off</span>
                  </div>
                  <p className="mb-9 max-w-[466px] font-lato font-normal text-[17px] leading-6 text-[#7E7E7E] text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
                    odio minus dolore impedit fuga eum eligendi.</p>

                </div>
              </div>
            </div>

            {/* Sidebar  */}
            <div className="w-[20%]">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ProductDetails