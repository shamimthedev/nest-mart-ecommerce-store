import { FiClipboard, FiHeart, FiSettings, FiTarget, FiUser } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import SearchInput from "./SearchInput";
import { Link, NavLink } from "react-router";
import SelectDrop from "./SelectDrop";
import Logo from '/logo.png'
import Compare from '/compare.svg'
import { useEffect, useMemo, useRef, useState } from "react";
import axios from "axios";
import Wishlist from '/wishlist.svg'
import { useDispatch, useSelector } from "react-redux";
import Cart from '/cart.svg'
import Account from '/account.svg'
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import MobileMenu from "./MobileMenu";

const HeaderMiddle = () => {
    const cartItems = useSelector((state) => state.cart.cartItems) || [];
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAccOpen, setIsAccOpen] = useState(false)
    const cartRef = useRef(null);
    const dropdownRef = useRef(null);
    const dispatch = useDispatch();

    const categories = useMemo(() => [
        "All Categories", "Milks and Dairies", "Wines & Alcohol",
        "Clothing & Beauty", "Pet Foods & Toy", "Fast food",
        "Baking material", "Vegetables", "Fresh Seafood",
        "Noodles & Rice", "Ice cream"
    ], []);

    const countryList = []
    useEffect(() => {
        const getCountry = async () => {
            try {
                await axios.get('https://countriesnow.space/api/v0.1/countries/').then((res) => {
                    if (res !== null) {
                        res.data.data.map((item, index) => {
                            countryList.push(item.country)
                        })
                    }
                })
            } catch (err) {
                console.log("Error fetching countries:", err.message);
            }
        };

        getCountry();
    }, []);

    // Close Account/Cart when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsAccOpen(false);
            }
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setIsCartOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClearCart = () => {
        dispatch(clearCart()); // Dispatch the clearCart action
    };

    return (
        <>
            <div id="middleSection" className='border-b border-[#ECECEC]' >
                <div className="container ">
                    <div className="flex justify-between items-center gap-x-10 2xl:gap-x-11 lg:h-[96px] h-[70px]">

                        {/* Mobile Menu */}
                        <MobileMenu />

                        {/* Logo here  */}
                        <div className="w-[150px] 2xl:w-[180px]">
                            <Link to='/'><img src={Logo} loading="lazy" alt="Logo" className="w-full" /></Link>
                        </div>

                        {/* Search Bar */}
                        <div className="hidden lg:flex flex-1 max-w-[700px] items-center rounded-sm border-2 border-[#BCE3C9] h-[44px] xl:h-[48px]">
                            {/* Category Dropdown */}
                            <div className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[80%] after:right-0 after:top-1/2 after:-translate-y-1/2">
                                <SelectDrop data={categories} placeholder="All Categories" icon={false} />
                            </div>

                            {/* Search Input */}
                            <SearchInput />
                        </div>

                        {/* location and icons here */}
                        <div className="flex items-center gap-x-6 lg:gap-x-4 2xl:gap-x-5">
                            <div className="hidden 2xl:flex items-center justify-center xl:mr-3 h-10 rounded-sm cursor-pointer text-[#B6B6B6] text-xs xl:text-sm border border-[#ECECEC] shadow-sm hover:shadow-md">
                                <SelectDrop data={countryList} placeholder="Your Location" icon={<IoLocationOutline />} />
                            </div>
                            <div className="hidden lg:flex items-baseline gap-x-1 cursor-pointer">
                                <div className="relative">
                                    <img src={Compare} loading="lazy" alt="Compare icon" className="w-[20px] h-[px] 2xl:w-[25px] 2xl:h-[25px]" />
                                    <span className="absolute right-[-10px] top-[-12px] h-4 w-4 xl:w-5 xl:h-5 bg-greeny text-white rounded-full flex items-center justify-center font-lato font-medium text-[10px] xl:text-xs">
                                        3
                                    </span>
                                </div>
                                <span className="font-lato text-[#7E7E7E] text-sm xl:text-base">Compare</span>
                            </div>
                            <div className="flex items-baseline gap-x-1 cursor-pointer">
                                <div className="relative">
                                    <img src={Wishlist} loading="lazy" alt="Wishlist icon" className="w-[20px] h-[px] 2xl:w-[25px] 2xl:h-[25px]" />
                                    <span className="absolute right-[-10px] top-[-12px] h-4 w-4 xl:w-5 xl:h-5 bg-greeny text-white rounded-full flex items-center justify-center font-lato font-medium text-[10px] xl:text-xs">
                                        6
                                    </span>
                                </div>
                                <span className="hidden lg:block font-lato text-[#7E7E7E] text-sm xl:text-base">Wishlist</span>
                            </div>
                            <div className="flex items-baseline gap-x-1 cursor-pointer relative" ref={cartRef} onClick={() => setIsCartOpen(!isCartOpen)}>
                                <button className="relative cursor-pointer">
                                    <img src={Cart} loading="lazy" alt="Cart icon" className="w-[20px] h-[px] 2xl:w-[25px] 2xl:h-[25px]" />
                                    <span className="absolute right-[-10px] top-[-12px] h-4 w-4 xl:w-5 xl:h-5 bg-greeny text-white rounded-full flex items-center justify-center font-lato font-medium text-[10px] xl:text-xs">
                                        {totalQuantity}
                                    </span>
                                </button>
                                <span className="hidden lg:block font-lato text-[#7E7E7E] text-sm xl:text-base">Cart</span>

                                {/* Cart Dropdown */}
                                {isCartOpen && (
                                    <div className="absolute right-0 top-10 mt-2 w-80 bg-white border border-gray-300 shadow-lg p-4 rounded-md z-50">

                                        {cartItems.length === 0 ? (
                                            <p className="text-gray-500 text-sm">Your cart is empty.</p>
                                        ) : (
                                            <ul className="cart-item-list max-h-[300px] overflow-y-auto space-y-3 pr-2 custom-scrollbar">
                                                {cartItems.map((item) => (
                                                    <li key={item.id} className="flex items-center gap-3 border-b border-[#ECECEC] pb-2">
                                                        <img
                                                            src={item.img}
                                                            alt={item.title}
                                                            className="w-[60px]"
                                                        />

                                                        {/* Product Info */}
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex justify-between">
                                                                <p className="text-sm text-greeny font-semibold truncate">{item.title}</p>

                                                                {/* Delete Item */}
                                                                <button
                                                                    className="text-[#7E7E7E] text-lg cursor-pointer"
                                                                    onClick={(event) => {
                                                                        event.stopPropagation(); // Stop event propagation
                                                                        dispatch(removeFromCart(item.id));
                                                                    }}
                                                                >
                                                                    <RxCross2 />
                                                                </button>
                                                            </div>

                                                            {/* Price */}
                                                            <div className="">
                                                                <h4 className="flex gap-x-[6px] items-center text-xs text-[#7E7E7E]"><span>{item.quantity} × </span>${(item.price * item.quantity).toFixed(2)}</h4>
                                                            </div>
                                                        </div>

                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Total Price Section */}
                                        {cartItems.length > 0 && (
                                            <div className="mt-4 flex justify-between items-center">
                                                <span className="font-bold text-sm">Total Price:</span>
                                                <span className="text-primary font-semibold text-lg">
                                                    ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                                                </span>
                                            </div>
                                        )}

                                        {cartItems.length > 0 && (
                                            <div className="flex mt-4 justify-between">
                                                {/* View Cart Button */}
                                                <Link to="/cart">
                                                    <button className="w-max border border-greeny text-greeny py-2 px-5 rounded-sm text-sm cursor-pointer">
                                                        View Cart
                                                    </button>
                                                </Link>

                                                {/* Checkout Button */}
                                                <button className="w-max bg-greeny text-white py-2 px-5 rounded-sm cursor-pointer text-sm">
                                                    Checkout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div ref={dropdownRef} className="hidden lg:block relative">
                                <div onClick={() => setIsAccOpen(!isAccOpen)} className="cursor-pointer flex items-baseline gap-1">
                                    <img src={Account} alt="Account icon" className="w-4 object-cover" />
                                    <span className="font-lato text-[#7E7E7E] text-sm">Account</span>
                                </div>
                                {isAccOpen && (<ul className="absolute right-0 top-[150%] rounded-[10px] px-5 py-7 bg-white shadow-lg border border-[#ECECEC] min-w-[220px] h-auto z-50 mt-2 flex flex-col gap-y-2">
                                    <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiUser /><span>My Account</span></li>
                                    <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiTarget /><span>Order Tracking</span></li>
                                    <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiClipboard /><span>My Voucher</span></li>
                                    <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiHeart /><span>My Wishlist</span></li>
                                    <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><FiSettings /><span>Setting</span></li>
                                    <li className="flex items-center text-sm gap-x-3 rounded-md cursor-pointer hover:bg-greeny hover:text-white p-2"><GoSignOut /><span>Sign out</span></li>
                                </ul>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderMiddle