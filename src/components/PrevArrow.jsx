import { MdKeyboardArrowLeft } from "react-icons/md";

const PrevArrow = ({ onClick, isFeatured = false, isSingleProduct = false, isAbout=false }) => {
  return (
    <div
      className={`h-[40px] w-[40px] rounded-full flex justify-center items-center text-2xl text-[#7E7E7E] bg-[#F2F3F4] absolute z-10 cursor-pointer shadow-md hover:text-white hover:bg-greeny ${isFeatured ? "right-14 -top-20" : "top-1/2 left-5 -translate-y-1/2"} ${isSingleProduct ? 'left-[0px]' : "top-1/2 left-5 -translate-y-1/2"} ${isAbout ? 'left-[0px] text-greeny' : ''}`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </div>
  );
};

export default PrevArrow;