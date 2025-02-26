import { MdKeyboardArrowRight } from "react-icons/md";

const NextArrow = ({ onClick, isFeatured = false, isSingleProduct = false }) => {
  return (
    <div
      className={`h-[40px] w-[40px] rounded-full shadow-md flex justify-center items-center text-2xl text-[#7E7E7E] bg-[#F2F3F4] absolute cursor-pointer hover:text-white hover:bg-greeny ${isFeatured ? "right-0 -top-20" : "top-1/2 right-5 -translate-y-1/2"} ${isSingleProduct ? 'right-[0px]' : "top-1/2 right-5 -translate-y-1/2"}`}
      onClick={onClick} 
    >
      <MdKeyboardArrowRight/>
    </div>
  );
};

export default NextArrow;