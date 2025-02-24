import Slider from '@mui/material/Slider';
import { useState } from 'react';

function valuetext(value) {
    return `${value}°C`;
}

const FillByPrice = () => {
    const [value, setValue] = useState([20, 50]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <section className="w-[300px] p-[31px] bg-white rounded-[15px] border border-[#ECECEC] shadow-md">
                <h2 className="font-bold text-2xl mb-[30px] pb-[17px] border-b border-[#ECECEC] relative after:absolute after:content-[''] after:w-[80px] after:h-[2px] after:bg-[#BCE3C9] after:bottom-0 after:left-0">Fill By Price</h2>
                <Slider
                    getAriaLabel={() => 'Product Price range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    sx={{color: '#3BB77E'}}
                    step={1}
                />
                
            </section>
        </>
    )
}

export default FillByPrice