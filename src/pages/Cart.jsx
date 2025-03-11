import Breadcrumb from "../components/Breadcrumb"
import { MdOutlineLogout, MdOutlineDeleteForever, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { IoClipboardOutline } from "react-icons/io5";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../redux/slices/cartSlice";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <>
            <section>
                <div>
                    <Breadcrumb />
                </div>

                <div className="container">
                    {/* Header */}
                    <h1 className="font-bold text-5xl mb-[10px]">Your Cart</h1>
                    <div className="max-w-[1050px] flex items-center justify-between font-semibold">
                        <p className="text-[#7E7E7E]">There are <span className="text-greeny">{cartItems.length}</span> products in your cart.</p>
                        {cartItems.length > 0 && (
                            <button className="flex items-center gap-x-[6px] justify-center text-[#b6b6b6] cursor-pointer"><MdOutlineDeleteForever />Clear Cart</button>)}
                    </div>

                    {/* Cart Content  */}
                    <div className="flex flex-wrap gap-x-[46px] mt-9">
                        {/* Cart Item List */}
                        <div className="flex-1">
                            <div className="overflow-x-auto w-full">
                                <table className="min-w-[500px] w-full mb-4 table-auto border-spacing-2 border border-[#ECECEC] leading-6 font-semibold">
                                    <tbody>
                                        <tr className="border text-[17px] font-bold border-[#ECECEC] bg-[#ececec]">
                                            <th className="text-left px-4 py-[18px]">Product</th>
                                            <th className="text-left px-2 py-[18px]">Unit Price</th>
                                            <th className="text-left px-2 py-[18px]">Quantity</th>
                                            <th className="text-left px-2 py-[18px]">Subtotal</th>
                                            <th className="text-left px-2 py-[18px]">Remove</th>
                                        </tr>
                                        {cartItems.length === 0 ? <p className="py-5 px-4">Your cart is empty!</p> : null}
                                        {cartItems.map((item) => (
                                            <tr key={item.id} className="border border-[#ECECEC]">
                                                <td className="px-4 flex flex-wrap items-center gap-4 py-[15px] text-[#7e7e7e]">
                                                    <img src={item.img} alt="" className="w-[80px] sm:w-[120px] border border-[#ECECEC]" />
                                                    <h3 className="text-sm sm:text-base">{item.title}</h3>
                                                </td>
                                                <td className="px-2 py-2">
                                                    <p className="font-bold text-xl text-[#7e7e7e]">${item.price}</p>
                                                </td>
                                                <td className="px-2 py-[15px]">
                                                    <div className="h-[40px] w-[80px] relative font-lato font-bold text-lg">
                                                        <input type="number" value={item.quantity} className="border-2 border-greeny rounded-md outline-none w-full h-full px-5 text-center" />
                                                        <MdKeyboardArrowUp onClick={() => dispatch(increaseQuantity(item.id))} className="absolute top-1 right-2 text-greeny cursor-pointer" />
                                                        <MdKeyboardArrowDown onClick={() => dispatch(decreaseQuantity(item.id))} className="absolute bottom-1 right-2 text-greeny cursor-pointer" />
                                                    </div>
                                                </td>
                                                <td className="px-2 py-[15px]">
                                                    <p className="font-bold text-xl text-greeny">${(item.price * item.quantity).toFixed(2)}</p>
                                                </td>
                                                <td className="px-2 py-[15px]">
                                                    <p className="font-bold cursor-pointer" onClick={() => dispatch(removeFromCart(item.id))}>
                                                        <MdOutlineDeleteForever size={22} />
                                                    </p>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Btn */}
                            <div className="mt-8 mb-10 flex flex-wrap justify-between">
                                <Link to='#'><button className="py-3 px-[30px] bg-greeny text-white font-semibold flex items-center gap-x-[6px] justify-center rounded-md cursor-pointer"><FaLongArrowAltLeft />Continue Shopping</button></Link>
                                <Link to='#'><button className="py-3 px-[30px] bg-greeny text-white font-semibold flex items-center gap-x-[6px] justify-center rounded-md cursor-pointer"><RxUpdate />Update Cart</button></Link>
                            </div>

                            {/* Coupon */}
                            <div className="mb-12">
                                <h3 className="text-2xl font-bold mb-2">Apply Coupon</h3>
                                <span className="text-[#B6B6B6] text-[17px]">Using A Promo Code?</span>
                                <form action="#" className='mt-8 flex items-center gap-x-5'>
                                    <input className="py-3 px-4 rounded-md text-[#7e7e7e] border border-[#ECECEC] outline-none" type="text" name="" id="" placeholder="Enter coupon" />
                                    <Link to='#'> <button className="py-3 px-[30px] bg-greeny text-white font-semibold flex items-center gap-x-[6px] justify-center rounded-md cursor-pointer">< IoClipboardOutline />Apply Coupon</button></Link>
                                </form>
                            </div>

                        </div>

                        {/* Checkout */}
                        {cartItems.length > 0 && (
                            <div className="w-full lg:w-[25%]">
                                <div className="w-full p-6 rounded-[15px] border border-[#ECECEC]">
                                    <table className="w-full mb-4 table-fixed border-spacing-2 border border-[#ECECEC] leading-6 font-semibold">
                                        <tbody>
                                            {/* ✅ Subtotal Calculation */}
                                            <tr className="w-full border border-[#ECECEC]">
                                                <th className="text-left px-2 py-2 text-[#b6b6b6]">Subtotal</th>
                                                <td className="text-right px-2 py-2">
                                                    <p className="font-bold text-greeny text-2xl">
                                                        ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                                                    </p>
                                                </td>
                                            </tr>

                                            {/* Shipping (Static for now) */}
                                            <tr className="w-full border border-[#ECECEC]">
                                                <th className="text-left px-2 py-2 text-[#b6b6b6]">Shipping</th>
                                                <td className="text-right px-2 py-2">
                                                    <p className="font-bold text-xl">Free</p>
                                                </td>
                                            </tr>

                                            {/* Estimate for Country (Static for now) */}
                                            <tr className="w-full border border-[#ECECEC]">
                                                <th className="text-left px-2 py-2 text-[#b6b6b6]">Estimate for</th>
                                                <td className="text-right px-2 py-2">
                                                    <p className="font-bold text-xl">United Kingdom</p>
                                                </td>
                                            </tr>

                                            {/* ✅ Total Calculation (Same as Subtotal) */}
                                            <tr className="w-full border border-[#ECECEC]">
                                                <th className="text-left px-2 py-2 text-[#b6b6b6]">Total</th>
                                                <td className="text-right px-2 py-2">
                                                    <p className="font-bold text-greeny text-2xl">
                                                        ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                    <button className="w-full mb-2 bg-greeny text-white font-semibold flex items-center gap-x-[6px] py-3 px-[30px] justify-center rounded-md cursor-pointer">Proceed To Checkout<MdOutlineLogout /></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Cart