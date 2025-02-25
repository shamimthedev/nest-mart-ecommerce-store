import { AiOutlineHome } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import Sidebar from "../components/Sidebar";
import SingleProduct from '/single-product.png'
import Rating from '@mui/material/Rating';
import { useState } from "react";


const ProductDetails = () => {
  const [value, setValue] = useState(2);
  return (
    <>
      <section className="border-b border-[#ECECEC]">
        <div className="max-w-[1610px] mx-auto">

          {/* Breadcrumb  */}
          <ul className="h-[66px] flex items-center font-semibold text-sm text-greeny leading-6 gap-x-[10px]">
            <li className="flex items-center gap-x-1"><AiOutlineHome />Home</li>
            <li><MdKeyboardArrowRight /></li>
            <li>Vegetables & tubers </li>
            <li><MdKeyboardArrowRight /></li>
            <li className="text-[#7E7E7E]"> Seeds of Change Organic</li>
          </ul>

          <div className="flex">

            {/* Product Details */}
            <div className="flex-1">
              <div className="flex">

                {/* Product Image  */}
                <div className="w-[48%]">
                  <img src={SingleProduct} alt="single product" />
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