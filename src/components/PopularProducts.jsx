import Product from "./Product"
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory, setProducts } from "../redux/slices/filterSlice";
import { productsData } from "../data/DB";
import { useEffect } from "react";
import { addToCart } from "../redux/slices/cartSlice";

const PopularProducts = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.filter.selectedCategory);
  const products = useSelector((state) => state.filter.products);

  // ✅ Fetch products when component mounts
  useEffect(() => {
    dispatch(setProducts(productsData)); // ✅ Ensure this is dispatched
  }, [dispatch]);

  // Filtering Logic
  const filteredProducts = Array.isArray(products)
    ? selectedCategory === "All"
      ? products
      : products.filter((product) => product.cat === selectedCategory)
    : [];

  // 🛒 Function to add a product to the cart
  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        img: product.img,
        img2: product.img2,
        title: product.title,
        cat: product.cat,
        rating: product.rating,
        author: product.author,
        price: product.price,
        oldPrice: product.oldPrice,
        quantity: 1, // Default quantity when adding the item
      })
    );
  };

  return (
    <>
      <section className="mt-[55px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-6 items-baseline justify-between mb-12">
            <h2 className="font-bold text-[32px] leading-[38px]">Popular Products</h2>

            {/* Category buttons */}
            <ul className="flex gap-x-7 items-center flex-wrap">
              {["All", "Hodo Foods", "Pet Foods", "Snack", "Meats", "Vegetables", "Coffee", "Cream"].map((category) => (
                <li
                  key={category}
                  className={`font-semibold cursor-pointer transition-all ease-in-out duration-200 hover:translate-y-[-4px] ${selectedCategory === category
                    ? "text-greeny" // For selected category
                    : "hover:text-greeny" // For unselected category
                    }`}
                  onClick={() => dispatch(setSelectedCategory(category))}
                >
                  {category}
                </li>
              ))}
            </ul>

          </div>
          <div className="flex flex-wrap justify-center gap-5">
            {filteredProducts.map((product, index) => (
              <div className="w-full sm:w-[300px]" key={index}>
                <Product product={product} handleAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default PopularProducts