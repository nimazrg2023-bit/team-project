import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slices/Cartslice"; 
import { wishlistItems, justForYouItems, galleryImages } from "../../core/constant";
import { StarIcon, HeartIcon, TruckIcon, ReturnIcon, CartIcon } from "../../components/ui/icons";
import { ProductCard } from "../wishlist/components";

const allProducts = [...wishlistItems, ...justForYouItems];

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = allProducts.find((item) => item.id === Number(id));

  const [activeImage, setActiveImage] = useState(product?.image);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[1] || product?.sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[50vh] text-xl font-bold text-red-500">
        محصول مورد نظر یافت نشد!
      </div>
    );
  }

  const productGallery = [product.image, ...galleryImages];

  const handleQuantity = (type) => {
    if (type === "increment") setQuantity((prev) => prev + 1);
    if (type === "decrement" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity, selectedColor, selectedSize }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans" dir="ltr">
      <div className="text-sm text-gray-500 mb-10">
        Account / Gaming / <span className="text-black">{product.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 mb-20">
        <div className="flex flex-col-reverse sm:flex-row gap-4 lg:w-55/100">
          <div className="flex sm:flex-col gap-4 overflow-x-auto sm:overflow-visible">
            {productGallery.map((img, index) => (
              <button key={index} onClick={() => setActiveImage(img)} className={`bg-[#F5F5F5] rounded-md p-2 w-25 h-25 flex-shrink-0 flex items-center justify-center transition ${activeImage === img ? "border-2 border-black" : ""}`}>
                <img src={img} alt={`Thumbnail ${index}`} className="object-contain w-full h-full" />
              </button>
            ))}
          </div>
          <div className="relative bg-[#F5F5F5] rounded-md flex-1 flex items-center justify-center sm:h-[570px]">
            <img src={activeImage} alt={product.title} className="object-contain w-full h-full p-8" />
            <button onClick={handleAddToCart} className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition shadow-lg" title="Add to Cart">
              <CartIcon />
            </button>
          </div>
        </div>

        <div className="lg:w-2/5 flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">{product.title}</h1>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <StarIcon key={star} filled={star <= product.rating} />
              ))}
            </div>
            <span className="text-gray-400 text-sm">({product.reviews} Reviews)</span>
            <span className="text-green-500 text-sm font-medium border-l pl-4 border-gray-300">In Stock</span>
          </div>

          <p className="text-2xl font-normal">${product.price.toFixed(2)}</p>
          <p className="text-sm text-gray-600 leading-relaxed border-b pb-6">{product.description}</p>

          {product.colors && product.colors.length > 0 && (
            <div className="flex items-center gap-4">
              <span className="font-medium">Colors:</span>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button key={color} onClick={() => setSelectedColor(color)} className={`w-5 h-5 rounded-full flex items-center justify-center transition ${selectedColor === color ? "ring-2 ring-offset-2 ring-black" : ""}`} style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          )}

          {product.sizes && product.sizes.length > 0 && (
            <div className="flex items-center gap-4">
              <span className="font-medium">Size:</span>
              <div className="flex gap-2">
                {product.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`w-8 h-8 flex items-center justify-center border rounded-md text-sm font-medium transition ${selectedSize === size ? "bg-[#DB4444] text-white border-[#DB4444]" : "border-gray-300 hover:border-black"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <button onClick={() => handleQuantity("decrement")} className="px-4 py-2 hover:bg-gray-100 border-r border-gray-300 font-bold transition">-</button>
              <span className="px-6 py-2 font-medium text-center min-w-[3rem]">{quantity}</span>
              <button onClick={() => handleQuantity("increment")} className="px-4 py-2 bg-[#DB4444] text-white hover:bg-red-600 font-bold transition">+</button>
            </div>

            <button onClick={handleAddToCart} className="bg-[#DB4444] text-white px-10 py-2.5 rounded-md hover:bg-red-600 transition font-medium flex-1">Buy Now</button>

            <button onClick={() => setIsWishlisted(!isWishlisted)} className="border border-gray-300 p-2.5 rounded-md hover:bg-gray-50 transition">
              <HeartIcon filled={isWishlisted} />
            </button>
          </div>

          <div className="border border-gray-300 rounded-md mt-4">
            <div className="flex items-center gap-4 p-4 border-b border-gray-300">
              <TruckIcon />
              <div>
                <h4 className="font-medium">Free Delivery</h4>
                <p className="text-xs text-gray-500 underline cursor-pointer">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <ReturnIcon />
              <div>
                <h4 className="font-medium">Return Delivery</h4>
                <p className="text-xs text-gray-500">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-4 h-8 bg-[#DB4444] rounded"></div>
          <h2 className="text-xl text-[#DB4444] font-medium">Related Item</h2>
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