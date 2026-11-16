import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../../Redux/Slices/Cartslice";
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
                <button onClick={() => handleRemove(item.id, item.color, item.size)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 md:hidden">X</button>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 bg-gray-100 p-2 rounded-md flex items-center justify-center">
                    <img src={item.image} alt={item.title} className="object-contain w-full h-full" />
                    <button onClick={() => handleRemove(item.id, item.color, item.size)} className="absolute -top-1 -left-1 bg-[#DB4444] text-white w-5 h-5 rounded-full flex items-center justify-center text-xs">x</button>
                  </div>
                  <span className="font-medium truncate">{item.title} {item.color && `(${item.size})`}</span>
                </div>

                <span className="text-gray-700">${item.price}</span>

                <div className="flex items-center border border-gray-300 rounded-md w-max overflow-hidden">
                  <button onClick={() => handleQuantityChange(item.id, item.color, item.size, item.quantity - 1)} className="px-2 py-1 hover:bg-gray-100">-</button>
                  <span className="px-4 py-1 text-center min-w-[2rem]">{item.quantity.toString().padStart(2, '0')}</span>
                  <button onClick={() => handleQuantityChange(item.id, item.color, item.size, item.quantity + 1)} className="px-2 py-1 hover:bg-gray-100">+</button>
                </div>

                <span className="font-medium text-right md:text-left lg:text-right text-gray-800">${item.price * item.quantity}</span>
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