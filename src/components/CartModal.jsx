

const CartModal = () => {
    return (
        <>
            {/* Cart Dropdown */}
            {isCartOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-300 shadow-lg p-4 rounded-md z-50">
                    <h3 className="font-bold text-lg mb-3">Your Cart</h3>

                    {cartItems.length === 0 ? (
                        <p className="text-gray-500 text-sm">Your cart is empty.</p>
                    ) : (
                        <ul className="cart-item-list max-h-[300px] overflow-y-auto space-y-3 pr-2">
                            {cartItems.map((item) => (
                                <li key={item.id} className="flex items-center gap-3 border-b pb-2">
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-12 h-12 object-cover rounded"
                                    />

                                    {/* Product Info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-semibold">{item.title}</p>
                                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                                    </div>

                                    {/* Price */}
                                    <p className="text-sm font-bold text-gray-800 whitespace-nowrap">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>

                                    {/* Quantity Controls */}
                                    <div className="flex items-center gap-2">
                                        <button
                                            className="bg-gray-200 px-2 py-1 rounded text-sm font-bold hover:bg-gray-300"
                                            onClick={() => dispatch(increaseQuantity(item.id))}
                                        >
                                            +
                                        </button>
                                        <button
                                            className="bg-gray-200 px-2 py-1 rounded text-sm font-bold hover:bg-gray-300"
                                            onClick={() => dispatch(decreaseQuantity(item.id))}
                                        >
                                            -
                                        </button>
                                    </div>

                                    {/* Delete Item */}
                                    <button
                                        className="text-red-500 text-lg"
                                        onClick={() => dispatch(removeFromCart(item.id))}
                                    >
                                        <IoMdTrash />
                                    </button>
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

                    {/* Checkout Button */}
                    {cartItems.length > 0 && (
                        <div className="mt-4">
                            <button className="w-full bg-headerBackgroundColor text-white py-2 rounded-md text-sm font-bold">
                                Go to Checkout
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default CartModal