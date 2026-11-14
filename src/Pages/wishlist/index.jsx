import React, { useState } from 'react';

import { wishlistItems as initialWishlist, justForYouItems } from '../../core/constant';

// --- آیکون‌ها ---
const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const StarIcon = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#FFAD33" : "#D1D5DB"} stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

// --- کامپوننت کارت محصول ---
const ProductCard = ({ product, type, onRemove }) => {
  return (
    <div className="flex flex-col w-full group">
      {/* بخش تصویر */}
      <div className="relative bg-[#F5F5F5] rounded-md flex items-center justify-center h-[250px] overflow-hidden">
        {/* برچسب تخفیف یا جدید */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs font-medium px-2 py-1 rounded">
            {product.discount}
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#0F6] text-white text-xs font-medium px-2 py-1 rounded">
            NEW
          </span>
        )}

        {/* دکمه عملیات (حذف یا مشاهده) */}
        <button 
          onClick={() => type === 'wishlist' && onRemove(product.id)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition"
        >
          {type === 'wishlist' ? <TrashIcon /> : <EyeIcon />}
        </button>

        {/* تصویر محصول */}
        <img 
          src={product.image} 
          alt={product.title} 
          className="object-contain h-[180px] w-[180px] transition-transform group-hover:scale-105"
        />

        {/* دکمه افزودن به سبد خرید */}
        <button className="absolute bottom-0 w-full bg-black text-white py-2 flex items-center justify-center gap-2 hover:bg-gray-800 transition">
          <CartIcon />
          <span className="text-sm font-medium">Add To Cart</span>
        </button>
      </div>

      {/* بخش اطلاعات */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-semibold text-gray-900 truncate">{product.title}</h3>
        
        <div className="flex items-center gap-3">
          <span className="text-[#DB4444] font-medium">${product.price}</span>
          {product.oldPrice && (
            <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
          )}
        </div>

        {/* نمایش امتیاز فقط برای بخش پایین */}
        {type === 'justForYou' && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} filled={i < product.rating} />
            ))}
            <span className="text-gray-400 text-sm ml-1">({product.reviews})</span>
          </div>
        )}
      </div>
    </div>
  );
};

// --- کامپوننت اصلی ---
export default function Whishlist() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-right" dir="ltr">
      
      {/* بخش اول: Wishlist */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Wishlist ({wishlist.length})</h2>
          <button className="border border-gray-400 px-6 py-3 rounded hover:bg-gray-50 transition text-sm font-medium">
            Move All To Bag
          </button>
        </div>

        {wishlist.length === 0 ? (
          <p className="text-gray-500 text-center py-10">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <ProductCard 
                key={item.id} 
                product={item} 
                type="wishlist" 
                onRemove={handleRemove} 
              />
            ))}
          </div>
        )}
      </div>

      {/* بخش دوم: Just For You */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-4 h-8 bg-[#DB4444] rounded"></div>
            <h2 className="text-xl font-medium">Just For You</h2>
          </div>
          <button className="border border-gray-400 px-6 py-3 rounded hover:bg-gray-50 transition text-sm font-medium">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {justForYouItems.map((item) => (
            <ProductCard 
              key={item.id} 
              product={item} 
              type="justForYou" 
            />
          ))}
        </div>
      </div>

    </div>
  );
}