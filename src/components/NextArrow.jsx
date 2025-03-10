import { MdKeyboardArrowRight } from "react-icons/md";

const NextArrow = ({ onClick, isFeatured = false, isSingleProduct = false, isAbout=false }) => {
  return (
    <div
      className={`h-[40px] w-[40px] rounded-full shadow-md flex justify-center items-center text-2xl text-[#7E7E7E] bg-[#F2F3F4] absolute cursor-pointer top-1/2  -translate-y-1/2 hover:text-white hover:bg-greeny ${isFeatured ? "right-[0px] top-[-60px] hidden lg:flex" : "right-5"} ${isSingleProduct ? 'right-[0px]' : "right-5"} ${isAbout ? 'right-[0px] text-greeny' : 'right-5'}`}
      onClick={onClick} 
    >
      <MdKeyboardArrowRight/>
    </div>
  );
};

export default NextArrow;