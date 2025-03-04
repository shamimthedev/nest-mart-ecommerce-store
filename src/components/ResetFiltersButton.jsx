import { useDispatch } from "react-redux";
import { resetFilters } from "../redux/slices/filterSlice";

const ResetFiltersButton = () => {
  const dispatch = useDispatch();

  return <button className="font-bold leading-[21px] tracking-[0.5px] text-sm bg-greeny rounded-sm text-white py-3 px-4 hover:bg-[#FDC040]" onClick={() => dispatch(resetFilters())}>Reset Filters</button>;
};

export default ResetFiltersButton;
