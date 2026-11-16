import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../../Redux/Slices/Cartslice";
import { ChevronDownIcon, ChevronUpIcon } from "../../components/ui/icons";
export default function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [coupon, setCoupon] = useState("");

    const handleQuantityChange = (id, color, size, newQuantity) => {
        if (newQuantity < 1) return;
        dispatch(updateQuantity({ id, color, size, newQuantity }));
    };

    const handleRemove = (id, color, size) => {
        dispatch(removeFromCart({ id, color, size }));
    };

    // محاسبه جمع کل
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 font-sans" dir="ltr">
            <div className="text-sm text-gray-500 mb-10">
                Home / <span className="text-black">Cart</span>
            </div>

            {cartItems.length === 0 ? (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
                    <Link to="/" className="text-[#DB4444] underline">Go back to shop</Link>
                </div>
            ) : (
                <>
                    {/* هدر جدول */}
                    <div className="hidden md:grid grid-cols-4 gap-4 p-4 bg-white shadow-[0_1px_13px_rgba(0,0,0,0.05)] rounded-md mb-6 font-medium">
                        <span>Product</span>
                        <span>Price</span>
                        <span>Quantity</span>
                        <span className="text-right">Subtotal</span>
                    </div>

                    {/* آیتم‌های سبد خرید */}
                    <div className="flex flex-col gap-4 mb-8">
                        {cartItems.map((item, index) => (
                            <div key={`${item.id}-${index}`} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center p-4 bg-white shadow-[0_1px_13px_rgba(0,0,0,0.05)] rounded-md relative">

                                {/* دکمه حذف برای موبایل */}
                                <button onClick={() => handleRemove(item.id, item.color, item.size)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 md:hidden">X</button>

                                {/* ستون ۱: تصویر و نام محصول */}
                                <div className="flex items-center gap-4">
                                    <div className="relative w-14 h-14 bg-gray-100 p-2 rounded-md flex items-center justify-center">
                                        <img src={item.image} alt={item.title} className="object-contain w-full h-full" />
                                        {/* دکمه حذف کوچک روی تصویر */}
                                        <button onClick={() => handleRemove(item.id, item.color, item.size)} className="absolute -top-1 -left-1 bg-[#DB4444] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">x</button>
                                    </div>
                                    <span className="font-medium truncate">{item.title} {item.size ? `(${item.size})` : ''}</span>
                                </div>

                                {/* ستون ۲: قیمت */}
                                <span className="text-gray-700">${item.price}</span>

                                {/* ستون ۳: تغییر تعداد (کد جدید شما اینجاست) */}
                                <div className="flex justify-center md:justify-start">
                                    <div className="flex items-center justify-between border border-gray-400 rounded-md w-20 px-3 py-1.5">
                                        <span className="text-sm font-medium text-black">
                                            {item.quantity.toString().padStart(2, '0')}
                                        </span>
                                        <div className="flex flex-col items-center justify-center gap-0.5 ml-2">
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.color, item.size, item.quantity + 1)}
                                                className="text-gray-500 hover:text-black transition"
                                            >
                                                <ChevronUpIcon />
                                            </button>
                                            <button
                                                onClick={() => handleQuantityChange(item.id, item.color, item.size, item.quantity - 1)}
                                                className="text-gray-500 hover:text-black transition"
                                            >
                                                <ChevronDownIcon />
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* ستون ۴: جمع قیمت */}
                                <span className="font-medium text-right text-gray-800">${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>

                    {/* دکمه‌های عملیات */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 mb-16">
                        <button onClick={() => navigate("/")} className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-50 transition font-medium">
                            Return To Shop
                        </button>
                        <button onClick={() => navigate("/whishlist")} className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-50 transition font-medium">
                            Update Cart
                        </button>
                    </div>

                    {/* بخش کوپن و جمع کل */}
                    <div className="flex flex-col lg:flex-row justify-between gap-10">
                        <div className="flex gap-4 items-start lg:w-1/2">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                className="border border-black px-4 py-3 rounded-md outline-none w-full"
                            />
                            <button className="bg-[#DB4444] text-white px-8 py-3 rounded-md hover:bg-red-600 transition font-medium whitespace-nowrap">
                                Apply Coupon
                            </button>
                        </div>

                        <div className="border border-black rounded-md p-6 lg:w-1/3">
                            <h3 className="text-lg font-medium mb-4">Cart Total</h3>
                            <div className="flex justify-between py-3 border-b border-gray-300">
                                <span>Subtotal:</span>
                                <span>${subtotal}</span>
                            </div>
                            <div className="flex justify-between py-3 border-b border-gray-300">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between py-3 font-medium">
                                <span>Total:</span>
                                <span>${subtotal}</span>
                            </div>
                            <button onClick={() => navigate("/checkout")} className="w-full mt-4 bg-[#DB4444] text-white px-6 py-3 rounded-md hover:bg-red-600 transition font-medium">
                                Proceed to checkout
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}