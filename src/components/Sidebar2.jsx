import { useState, useEffect } from "react";

const Sidebar = ({ onCategorySelect }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch("https://fakestoreapi.com/products/categories");
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    return (
        <div className="w-full p-4 border border-gray-200 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="space-y-2">
                <li 
                    className="cursor-pointer hover:text-green-500" 
                    onClick={() => onCategorySelect("")}
                >
                    All Products
                </li>
                {categories.map((category) => (
                    <li 
                        key={category} 
                        className="cursor-pointer hover:text-green-500" 
                        onClick={() => onCategorySelect(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;