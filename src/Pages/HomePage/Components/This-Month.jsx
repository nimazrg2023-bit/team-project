export default function ThisMonth() {
    return (
        <>
        <div className="w-310 mx-auto mt-20">
                <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
                        <span className="text-[#DB4444] text-[16px] font-medium">This Month</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="text-[36px] font-medium">
                            Best Selling Products
                        </h2>
                        <div className="flex items-center gap-2">
                            <button className="w-39.75 h-14 rounded-sm bg-[#DB4444] hover:bg-red-800 text-white transition flex items-center justify-center duration-400">
                                View All
                            </button>

                        </div>
                    </div>
                </div>
                <div className="flex gap-17 mt-10">
                    {[
                        {
                            name: "The north coat",
                            price: "$260",
                            oldPrice: "$360",
                            rating: 65,
                            image: "/Image-HomePage/coat.png",
                        },
                        {
                            name: "Gucci duffle bag",
                            price: "$960",
                            oldPrice: "$1160",
                            rating: 65,
                            image: "/Image-HomePage/bag.png",
                        },
                        {
                            name: "RGB liquid CPU Cooler",
                            price: "$160",
                            oldPrice: "$170",
                            rating: 65,
                            image: "/Image-HomePage/cooler.png",
                        },
                        {
                            name: "Small BookSelf",
                            price: "$360",
                            oldPrice: "$400",
                            rating: 65,
                            image: "/Image-HomePage/bookshelf.png",
                        },
                    ].map((item, index) => (
                        <div key={index} className="w-67.5 group ">
                            <div className="relative w-full h-40.75 bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
                                <div className="absolute top-2 right-2 flex flex-col gap-2">
                                    <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                        <img src="/icon-HomePage/heart.png" alt="icon" className="w-4.75 h-4.75" />
                                    </button>
                                    <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                        <img src="/icon-HomePage/view.png" alt="icon" className="w-4.25 h-3.25" />
                                    </button>
                                </div>
                                <img src={item.image} className="w-[85%] h-[85%] object-contain" />
                                <button className="absolute bottom-0 left-0 w-full h-7.5 bg-black text-white text-xs opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                    Add To Cart
                                </button>
                            </div>
                            <h3 className="text-[16px] font-medium mt-3">{item.name}</h3>
                            <div className="flex gap-3 mt-2 text-[14px]">
                                <span className="text-[#DB4444]">{item.price}</span>
                                <del className="text-gray-400">{item.oldPrice}</del>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-[#FFAD33] text-[16px] tracking-[-2px]">★★★★★</span>
                                <span className="text-[14px] text-gray-500">({item.rating})</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}