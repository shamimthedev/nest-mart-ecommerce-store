import { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";


const SelectDrop = ({ data, placeholder, icon }) => {
    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(placeholder);
    const dropdownRef = useRef(null);

    const [listData, setListData] = useState(data)
    const [listData2, setListData2] = useState(data)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenSelect(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const closeSelect = (index, item) => {
        setSelectedIndex(index);
        setSelectedItem(item);
        setIsOpenSelect(false);
        if (onSelect) onSelect(item);
    };

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        const list = listData2.filter((item) => item.toLowerCase().includes(keyword));
    
        // Remove duplicates using Set
        const uniqueList = [...new Set(list)];
    
        setListData(uniqueList);
    };

    return (
        <div
            ref={dropdownRef}
            className="relative flex items-center gap-2 px-2 xl:px-5 text-[#253D4E] text-xs 2xl:text-sm font-bold cursor-pointer"
            onClick={() => setIsOpenSelect(!isOpenSelect)}
            aria-expanded={isOpenSelect}
        >
            {icon}
            <span className="w-[120px] truncate">{selectedItem}</span>
            <IoIosArrowDown className="text-[#7E7E7E]" />

            {isOpenSelect && (
                <div className="absolute top-[150%] left-0 p-3 bg-white shadow-lg border border-[#ECECEC] min-w-[220px] h-auto z-50 mt-2">
                    <input
                        className="w-full h-[40px] px-3 text-[#B6B6B6] text-sm rounded-sm border border-[#ECECEC] outline-none"
                        type="text"
                        placeholder={placeholder}
                        onChange={filterList}
                        onClick={(e) => e.stopPropagation()}
                    />
                    <ul className="w-full mt-2 max-h-[250px] overflow-y-auto custom-scrollbar">
                        {listData.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => closeSelect(index, item)}
                                className={`p-2 rounded-md cursor-pointer hover:bg-greeny hover:text-white ${selectedIndex === index ? "bg-greeny text-white" : ""
                                    }`}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SelectDrop;
