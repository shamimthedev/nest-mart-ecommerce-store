import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import FilterBg from '/filter-by-price-bg.png'

function valuetext(value) {
    return `${value}°C`;
}
const minDistance = 10;
const FillByPrice = () => {
    const [value, setValue] = useState([500, 1000]);

    const handleChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
        } else {
            setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
        }
    };

    return (
        <>
            <section className="w-full p-[31px] bg-white rounded-[15px] border border-[#ECECEC] shadow-md relative">
                <div className="">
                    <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">Fill By Price</h2>
                    <Slider
                        getAriaLabel={() => 'Minimum distance'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        getAriaValueText={valuetext}
                        sx={{ color: '#3BB77E' }}
                        step={1}
                        min={500}
                        max={1000}
                    />
                    <div className="mt-3 mb-[14px] flex justify-between text-[#7E7E7E] text-sm font-lato leading-6">
                        <span>From: <span className='text-greeny font-semibold'>${value[0]}</span></span>
                        <span>To: <span className='text-greeny font-semibold'>${value[1]}</span></span>
                    </div>
                    <div className="mb-[23px] text-sm leading-6 font-lato">
                        <h3 className='text-[#7E7E7E] mb-[10px] font-black'>Color</h3>
                        <ul className="text-[#687188] ">
                            <li className="mb-[13px] flex items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    className="w-[17px] h-[17px] border border-[#CED4DA] rounded-sm appearance-none checked:bg-[#3BB77E] checked:border-[#3BB77E] checked:relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-[12px] font-bold"
                                />
                                Red (56)
                            </li>
                            <li className="mb-[13px] flex items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    className="w-[17px] h-[17px] border border-[#CED4DA] rounded-sm appearance-none checked:bg-[#3BB77E] checked:border-[#3BB77E] checked:relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-[12px] font-bold"
                                />
                                Green (78)
                            </li>
                            <li className="mb-[13px] flex items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    className="w-[17px] h-[17px] border border-[#CED4DA] rounded-sm appearance-none checked:bg-[#3BB77E] checked:border-[#3BB77E] checked:relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-[12px] font-bold"
                                />
                                Blue (54)
                            </li>
                        </ul>
                    </div>
                    <div className="mb-5 text-sm leading-6 font-lato">
                        <h3 className='text-[#7E7E7E] mb-[10px] font-black'>Item Condition</h3>
                        <ul className="text-[#687188] ">
                            <li className="mb-[13px] flex items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    className="w-[17px] h-[17px] border border-[#CED4DA] rounded-sm appearance-none checked:bg-[#3BB77E] checked:border-[#3BB77E] checked:relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-[12px] font-bold"
                                />
                                New (1506)
                            </li>
                            <li className="mb-[13px] flex items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    className="w-[17px] h-[17px] border border-[#CED4DA] rounded-sm appearance-none checked:bg-[#3BB77E] checked:border-[#3BB77E] checked:relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-[12px] font-bold"
                                />
                                Refurbished (27)
                            </li>
                            <li className="mb-[13px] flex items-center gap-x-2">
                                <input
                                    type="checkbox"
                                    className="w-[17px] h-[17px] border border-[#CED4DA] rounded-sm appearance-none checked:bg-[#3BB77E] checked:border-[#3BB77E] checked:relative checked:before:content-['✔'] checked:before:text-white checked:before:absolute checked:before:left-1/2 checked:before:top-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 checked:before:text-[12px] font-bold"
                                />
                                Used (45)
                            </li>
                        </ul>
                    </div>
                    <button className="font-bold leading-[21px] tracking-[0.5px] text-sm bg-greeny rounded-sm text-white py-3 px-4 flex items-center gap-2 hover:bg-[#FDC040]">
                        <CiFilter className="w-4 h-4" />
                        Filter
                    </button>
                </div>
                <div className="absolute bottom-7 right-2 w-[150px]">
                    <img src={FilterBg} alt="" className='w-full'/>
                </div>
            </section>
        </>
    )
}

export default FillByPrice