import { MdKeyboardArrowLeft } from "react-icons/md";

const PrevArrow = ({ onClick, isSingleProduct = false, isAbout = false, isFeatured = false, isHero=false }) => {
  return (
    <div
      className={`h-[40px] w-[40px] rounded-full flex justify-center items-center text-2xl text-[#7E7E7E] bg-[#F2F3F4] absolute z-10 cursor-pointer shadow-md top-1/2 -translate-y-1/2 hover:text-white hover:bg-greeny ${isSingleProduct ? 'left-[0px]' : ""} ${isAbout ? 'left-[0px] text-greeny' : ''} ${isFeatured ? 'right-12 top-[-60px] hidden lg:flex' : ''} ${isHero ? 'left-5' : ''}`}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft />
    </div>
  );
};

export default PrevArrow;