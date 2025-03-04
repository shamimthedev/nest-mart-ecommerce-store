import { useState } from 'react';
import Slider from 'react-slider'; // Import react-slider package

const CustomPriceRangeSlider = ({ min, max, onPriceChange }) => {
    const [priceRange, setPriceRange] = useState([min, max]);

    // Handle changes in slider
    const handleSliderChange = (value) => {
        setPriceRange(value);
        onPriceChange(value);  // Call the parent function to update the filter state
    };

    return (
        <div className="w-full flex flex-col gap-3">
            <Slider
                value={priceRange}
                onChange={handleSliderChange}
                min={min}
                max={max}
                step={1}
                renderTrack={(props, state) => (
                    <div {...props} className="slider-track" />
                )}
                renderThumb={(props, state) => (
                    <div {...props} className="slider-thumb" />
                )}
            />

            <div className="flex justify-between">
                <span>Min: ${priceRange[0]}</span>
                <span>Max: ${priceRange[1]}</span>
            </div>
        </div>
    );
};

export default CustomPriceRangeSlider;
