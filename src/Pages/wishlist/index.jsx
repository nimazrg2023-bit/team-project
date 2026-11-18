import React, { useState } from 'react';

import { wishlistItems, justForYouItems } from '../../core/constant';
import { CartIcon, EyeIcon, StarIcon, TrashIcon } from '../../components/ui/icons';
import { NavLink } from 'react-router-dom';
import { ProductCard } from './components';



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