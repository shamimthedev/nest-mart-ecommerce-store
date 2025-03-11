import { IoIosArrowDown } from "react-icons/io"
import Logo from '/logo.png'
import { IoLocationOutline } from "react-icons/io5"
import Browse from '/browse.svg'
import Compare from '/compare.svg'
import Wishlist from '/wishlist.svg'
import Cart from '/cart.svg'
import Account from '/account.svg'
import Support from '/support.svg'
import SelectDrop from "./SelectDrop"
import { useEffect, useMemo, useRef, useState } from "react"
import axios from "axios"
import { FiClipboard, FiHeart, FiSettings, FiTarget, FiUser } from "react-icons/fi"
import { GoSignOut } from "react-icons/go"
import Navbar from "./Navbar"
import { Link } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../redux/slices/cartSlice";
import { RxCross2 } from "react-icons/rx";
import SearchInput from "./SearchInput"
import AllCategory from "./AllCategory"

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccOpen, setIsAccOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAllCategoryOpen, setIsAllCategoryOpen] = useState(false);
  const categoryRef = useRef(null);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAccOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close cart when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
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
      {/* Top Header  */}
      <div id="topSection" className="hidden lg:block border-b border-[#ECECEC] font-lato">
        <div className="container">
          <div className="h-[37px] flex justify-between items-center text-[#7E7E7E] text-[13px] leading-[13px]">
            <ul className="flex gap-3 xl:gap-5 font-medium">
              <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">About Us</li>
              <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">My Account</li>
              <li className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">Wishlist</li>
              <li>Order Tracking</li>
            </ul>
            <p className="text-xs xl:text-sm leading-4 text-center">
              Supper Value Deals - <span className="text-greeny">Save</span> more with coupons
            </p>
            <div className="flex gap-3 xl:gap-5">
              <p className="relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">
                Need help? Call Us: <span className="font-semibold text-[#3BB77E]">+ 1800 900</span>
              </p>
              <div className="flex items-center gap-[2px] relative after:absolute after:content-[''] after:bg-[#DEDFE2] after:w-[1px] after:h-[100%] after:right-[-7px] xl:after:right-[-10px]">
                <span className="font-medium">English</span>
                <IoIosArrowDown />
              </div>
              <div className="flex items-center gap-[2px]">
                <span className="font-medium">USD</span>
                <IoIosArrowDown />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Middle Section */}
      <div id="middleSection" className='border-b border-[#ECECEC]' >
        <div className="container ">
          <div className="flex justify-between items-center gap-x-10 2xl:gap-x-11 lg:h-[96px] h-[70px]">

            {/* Mobile Menu  */}
            <div className="w-[44px] text-3xl lg:hidden">
              &equiv;
            </div>

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
                    {/* Clear Cart Btn  */}
                    {cartItems.length > 0 && (
                      <button
                        onClick={handleClearCart}
                        className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                      >
                        Clear Cart
                      </button>
                    )}

                    {/* Checkout Button */}
                    {cartItems.length > 0 && (
                      <div className="mt-4">
                        <button className="w-full bg-greeny text-white py-2 rounded-md text-sm font-bold">
                          Go to Checkout
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

      {/* Placeholder for fixed header */}
      {isScrolled && <div className="h-[70px] lg:h-[96px]"></div>}
      {/* Category with Menu Section  - Fixed Header */}
      <div id="header-bottom" className={`hidden lg:block border-y border-[#ECECEC] transition-all duration-300 ${isScrolled ? "fixed top-0 left-0 w-full z-50 bg-white shadow-md py-1" : " bg-transparent py-4"}`}>
        <div className="container">
          <div className="h-[73px] py-[15px] flex items-center justify-between gap-x-5 2xl:gap-x-[35px] relative">
            {/* Browse Categories Button */}
            <div
              className="flex gap-x-1 xl:gap-x-2 py-2 xl:py-3 px-2 xl:px-3 2xl:px-5 font-bold bg-greeny rounded-[5px] text-white items-center cursor-pointer text-xs xl:text-sm 2xl:text-base relative"
              aria-label="Browse All Categories"
              ref={categoryRef} onClick={() => setIsAllCategoryOpen(!isAllCategoryOpen)}
            >
              <img src={Browse} loading="lazy" alt="Browse icon" className="w-3 xl:w-4" />
              <span>Browse All Categories</span>
              <IoIosArrowDown />
            </div>

            {isAllCategoryOpen && (
              <div className="absolute left-0 top-full z-50">
                <AllCategory />
              </div>
            )}
            {/* Navigation Links */}
            <Navbar className={'mr-auto'} />
            <div className="hidden lg:flex items-center gap-x-2 2xl:gap-x-3">
              <img src={Support} alt="" className="w-5 2xl:w-8" />
              <div className="flex flex-col">
                <span className="text-greeny font-bold text-lg 2xl:text-[26px]">1900 - 888</span>
                <span className="text-[#7E7E7E] font-medium text-[10px] 2xl:text-xs font-lato">24/7 Support Center</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header