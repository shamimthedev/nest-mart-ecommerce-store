import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange, setColorFilter, setConditionFilter } from '../redux/slices/filterSlice';
import { CiFilter } from "react-icons/ci";
import ResetFiltersButton from './ResetFiltersButton';

function valuetext(value) {
    return `$${value}`;
}

const FillByPrice = () => {
    const dispatch = useDispatch();
    const { colorFilter, conditionFilter } = useSelector((state) => state.filter);

    const [priceValue, setPriceValue] = useState([500, 1000]); // Default price range

    const handlePriceChange = (event, newValue) => {
        setPriceValue(newValue);
        dispatch(setPriceRange(newValue));
    };

    const handleColorChange = (color) => {
        dispatch(setColorFilter(color));
    };

    const handleConditionChange = (condition) => {
        dispatch(setConditionFilter(condition));
    };

    return (
        <section className="w-full p-[31px] bg-white rounded-[15px] border border-[#ECECEC] shadow-md relative">
            <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">
                Fill By Price
            </h2>

            {/* Price Filter */}
            <div>
                <Slider
                    value={priceValue}
                    onChange={handlePriceChange}
                    valueLabelDisplay="auto"
                    valueLabelFormat={valuetext}
                    step={1}
                    min={500}
                    max={5000}
                    sx={{ color: '#3BB77E' }}
                />
                <div className="mt-3 mb-[14px] flex justify-between text-[#7E7E7E] text-sm font-lato leading-6">
                    <span>From: <span className='text-greeny font-semibold'>${priceValue[0]}</span></span>
                    <span>To: <span className='text-greeny font-semibold'>${priceValue[1]}</span></span>
                </div>
            </div>

            {/* Color Filter */}
            <div className="mb-[23px] text-sm leading-6 font-lato">
                <h3 className='text-[#7E7E7E] mb-[10px] font-black'>Color</h3>
                <ul className="text-[#687188] ">
                    {['Red', 'Green', 'Blue'].map((color) => (
                        <li key={color} className="mb-[13px] flex items-center gap-x-2">
                            <input
                                type="checkbox"
                                checked={colorFilter === color}
                                onChange={() => handleColorChange(color)}
                                className="w-[17px] h-[17px] border border-[#CED4DA] rounded-sm appearance-none checked:bg-[#3BB77E] checked:border-[#3BB77E] checked:relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-[12px] font-bold"
                            />
                            {color}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Condition Filter */}
            <div className="mb-5 text-sm leading-6 font-lato">
                <h3 className='text-[#7E7E7E] mb-[10px] font-black'>Item Condition</h3>
                <ul className="text-[#687188] ">
                    {['New', 'Refurbished', 'Used'].map((condition) => (
                        <li key={condition} className="mb-[13px] flex items-center gap-x-2">
                            <input
                                type="checkbox"
                                checked={conditionFilter === condition}
                                onChange={() => handleConditionChange(condition)}
                                className="w-[17px] h-[17px] border border-[#CED4DA] rounded-sm appearance-none checked:bg-[#3BB77E] checked:border-[#3BB77E] checked:relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-[12px] font-bold"
                            />
                            {condition}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-between">
                <button className="font-bold leading-[21px] tracking-[0.5px] text-sm bg-greeny rounded-sm text-white py-3 px-4 flex items-center gap-2 hover:bg-[#FDC040]">
                    <CiFilter className="w-4 h-4" />
                    Filter
                </button>
                <ResetFiltersButton/>
            </div>
        </section>
    );
};

export default FillByPrice;
