import { useState, useEffect } from "react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let url = "https://fakestoreapi.com/products";
                if (selectedCategory) {
                    url = `https://fakestoreapi.com/products/category/${selectedCategory}`;
                }
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [selectedCategory]);

    // Sorting
    const sortedProducts = [...products].sort((a, b) => {
        if (sortOption === "price-low-high") return a.price - b.price;
        if (sortOption === "price-high-low") return b.price - a.price;
        if (sortOption === "name-a-z") return a.title.localeCompare(b.title);
        if (sortOption === "name-z-a") return b.title.localeCompare(a.title);
        return 0;
    });

    // Search Filtering
    const filteredProducts = sortedProducts.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    return (
        <section className="max-w-[1610px] mx-auto">
            {/* Search Bar & Sorting */}
            <div className="flex justify-between items-center mb-4">
                <input 
                    type="text"
                    placeholder="Search products..."
                    className="border p-2 rounded w-[300px]"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select 
                    className="border p-2 rounded"
                    onChange={(e) => setSortOption(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="name-a-z">Name: A to Z</option>
                    <option value="name-z-a">Name: Z to A</option>
                </select>
            </div>

            <div className="flex gap-x-3">
                {/* Sidebar */}
               <div className="w-[20%]">
               <Sidebar onCategorySelect={setSelectedCategory} />
               </div>

                {/* Product List */}
                <div className="flex-1 flex flex-wrap gap-x-6 gap-y-[30px]">
                    {loading && <p className="text-center w-full text-gray-500">Loading products...</p>}
                    {error && <p className="text-center w-full text-red-500">{error}</p>}
                    {filteredProducts.length === 0 && !loading && !error && (
                        <p className="text-center w-full text-gray-500">No products found.</p>
                    )}
                    {!loading && !error && currentProducts.map((product) => (
                        <Product key={product.id} img={ product.image} title={product.title} category={product.category} price={product.price} rating={product.rating} brand={product.brand}/>
                    ))} 
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                    <button 
                        key={index} 
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 border rounded ${
                            currentPage === index + 1 ? "bg-green-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Shop;