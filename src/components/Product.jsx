import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router';
import { useState } from 'react';

const Product = ({ product, handleAddToCart, handleAddToWishlist, isInWishlist = false, showQuickAddFeedback = false }) => {
    const { id, img, img2, title, cat, rating, author, badge, price, oldPrice } = product;
    
    // State for interactions
    const [isAddingToCart, setIsAddingToCart] = useState(false);
    const [justAdded, setJustAdded] = useState(false);
    const [isWishlisted, setIsWishlisted] = useState(isInWishlist);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Handle add to cart with feedback
    const handleCartClick = async () => {
        setIsAddingToCart(true);
        
        try {
            await handleAddToCart(product);
            
            if (showQuickAddFeedback) {
                setJustAdded(true);
                setTimeout(() => setJustAdded(false), 2000);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        } finally {
            setIsAddingToCart(false);
        }
    };

    // Handle wishlist toggle
    const handleWishlistClick = () => {
        setIsWishlisted(!isWishlisted);
        if (handleAddToWishlist) {
            handleAddToWishlist(product);
        }
    };

    // Calculate discount percentage
    const discountPercentage = oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

    return (
        <div className="w-full rounded-2xl p-6 border border-gray-100 bg-white transition-all ease-in-out duration-300 hover:border-green-200 hover:shadow-xl hover:-translate-y-1 relative group overflow-hidden">
            
            {/* Badge */}
            {badge && (
                <div className={`absolute top-0 left-0 z-20 rounded-tl-2xl rounded-br-2xl ${
                    badge === 'Hot' ? 'bg-gradient-to-r from-pink-500 to-red-500' : 
                    badge === 'Sale' ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 
                    'bg-gradient-to-r from-blue-500 to-indigo-500'
                }`}>
                    <span className="text-white font-semibold text-xs px-4 py-2 block">
                        {badge}
                    </span>
                </div>
            )}

            {/* Discount Badge */}
            {discountPercentage > 0 && (
                <div className="absolute top-4 right-4 z-20 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{discountPercentage}%
                </div>
            )}

            {/* Image Container */}
            <div className="relative mb-4">
                <Link to={`/shop/${product.slug}`}>
                    <div className="overflow-hidden w-full h-64 rounded-xl relative group bg-gray-100">
                        {/* Main Image */}
                        <img 
                            src={img} 
                            alt={title}
                            className={`absolute w-full h-full object-cover top-0 left-0 transition-all duration-500 ${
                                imageLoaded ? 'opacity-100' : 'opacity-0'
                            }`}
                            onLoad={() => setImageLoaded(true)}
                        />
                        {/* Hover Image */}
                        {img2 && (
                            <img 
                                src={img2} 
                                alt={`${title} alternate view`}
                                className="absolute w-full h-full object-cover top-0 left-0 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110"
                            />
                        )}
                        
                        {/* Loading placeholder */}
                        {!imageLoaded && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>
                        )}
                    </div>
                </Link>

                {/* Quick Action Buttons */}
                <div className="absolute top-4 left-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="flex flex-col gap-2">
                        {/* Wishlist Button */}
                        <button
                            onClick={handleWishlistClick}
                            className={`p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110 ${
                                isWishlisted 
                                    ? 'bg-red-500 text-white' 
                                    : 'bg-white text-gray-600 hover:text-red-500'
                            }`}
                            title="Add to Wishlist"
                        >
                            {isWishlisted ? <FavoriteIcon size="small" /> : <FavoriteBorderOutlinedIcon size="small" />}
                        </button>

                        {/* Compare Button */}
                        <button
                            className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:text-blue-500 hover:scale-110 transition-all duration-200"
                            title="Compare"
                        >
                            <CompareArrowsOutlinedIcon size="small" />
                        </button>

                        {/* Quick View Button */}
                        <Link to={`/shop/${product.slug}`}>
                            <button
                                className="p-2 bg-white text-gray-600 rounded-full shadow-lg hover:text-green-500 hover:scale-110 transition-all duration-200"
                                title="Quick View"
                            >
                                <VisibilityOutlinedIcon size="small" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="space-y-3">
                {/* Category */}
                <span className="text-gray-400 text-sm font-medium tracking-wide uppercase">
                    {cat}
                </span>

                {/* Title */}
                <Link to={`/shop/${product.slug}`}>
                    <h3 className="font-bold text-gray-900 leading-tight hover:text-green-600 transition-colors duration-200 line-clamp-2">
                        {title}
                    </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center gap-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                ⭐
                            </span>
                        ))}
                    </div>
                    <span className="text-gray-500 text-sm">({rating})</span>
                </div>

                {/* Author */}
                <p className="text-gray-500 text-sm">
                    By <span className="text-green-600 font-medium">{author}</span>
                </p>
            </div>

            {/* Price and Add to Cart */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-4">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">
                        ${price}
                    </span>
                    {oldPrice && (
                        <span className="text-gray-400 text-sm line-through">
                            ${oldPrice}
                        </span>
                    )}
                </div>

                {/* Enhanced Add to Cart Button */}
                <button
                    onClick={handleCartClick}
                    disabled={isAddingToCart || justAdded}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 min-w-[100px] justify-center ${
                        justAdded
                            ? 'bg-green-100 text-green-700 cursor-default'
                            : isAddingToCart
                            ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                            : 'bg-green-50 text-green-700 hover:bg-green-600 hover:text-white hover:shadow-lg hover:scale-105'
                    }`}
                >
                    {justAdded ? (
                        <>
                            <CheckCircleIcon size="small" />
                            <span>Added!</span>
                        </>
                    ) : isAddingToCart ? (
                        <>
                            <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                            <span>Adding...</span>
                        </>
                    ) : (
                        <>
                            <ShoppingCartOutlinedIcon size="small" />
                            <span className="hidden sm:inline">Add</span>
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Product;