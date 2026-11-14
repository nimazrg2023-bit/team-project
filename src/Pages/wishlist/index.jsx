import React, { useState } from 'react';

import { wishlistItems, justForYouItems } from '../../core/constant';
import { CartIcon, EyeIcon, StarIcon, TrashIcon } from '../../components/ui/icons';
import { NavLink } from 'react-router-dom';


const RatingStars = ({ rating, reviews }) => (
    <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= rating} />
        ))}
        <span className="text-gray-400 text-sm ml-1">({reviews})</span>
    </div>
);


const ProductCard = ({ product, type, onRemove }) => {
    return (
        <NavLink to={`/Detail/${item.id}`} className="flex flex-col w-full group">
            <div className="relative bg-[#F5F5F5] rounded-md flex items-center justify-center h-[250px] overflow-hidden">
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

                <button onClick={() => type === 'wishlist' && onRemove(product.id)} className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition">
                    {type === 'wishlist' ? <TrashIcon /> : <EyeIcon />}
                </button>

                <img src={product.image} alt={product.title} className="object-contain h-[180px] w-[180px] transition-transform group-hover:scale-105" />

                <button className="absolute bottom-0 w-full bg-black text-white py-2 flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                    <CartIcon />
                    <span className="text-sm font-medium">Add To Cart</span>
                </button>
            </div>

            <div className="mt-4 flex flex-col gap-2">
                <h3 className="font-semibold text-gray-900 text-left">{product.title}</h3>

                <div className="flex items-center gap-3">
                    <span className="text-[#DB4444] font-medium">${product.price}</span>
                    {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm">${product.oldPrice}</span>
                    )}
                </div>

                {type === 'justForYou' && <RatingStars rating={product.rating} reviews={product.reviews} />}
            </div>
        </NavLink>
    );
};

export default function Whishlist() {
    const [wishlist, setWishlist] = useState(wishlistItems);

    const handleRemove = (id) => {
        setWishlist(wishlist.filter(item => item.id !== id));
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 font-sans text-right" dir="ltr">

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
                            <ProductCard key={item.id} product={item} type="wishlist" onRemove={handleRemove} />
                        ))}
                    </div>
                )}
            </div>

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
                        <ProductCard key={item.id} product={item} type="justForYou" />
                    ))}
                </div>
            </div>

        </div>
    );
}