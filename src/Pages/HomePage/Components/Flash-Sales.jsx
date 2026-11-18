export default function FlashSales() {
    return (
        <>
            <div className="w-310 h-123.25 mx-auto mt-20">
                <div className="w-full flex items-end justify-between h-22.5 ">

                    <div className="flex flex-col justify-between h-full">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
                            <span className="text-[#DB4444] text-[16px] font-medium">
                                Today's
                            </span>
                        </div>
                        <div className="flex items-end gap-12">
                            <h2 className="  text-black -mb-2.5 text-[30px] font-bold">
                                Flash Sales
                            </h2>
                            <div className="flex items-center gap-3 ml-15 -mt-1">
                                <div className="flex flex-col items-center">
                                    <span className="text-[12px]">Days</span>
                                    <span className="text-[32px] font-bold leading-6">03</span>
                                </div>
                                <span className="text-[#E07575] font-bold -mb-5">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-[12px]">Hours</span>
                                    <span className="text-[32px] font-bold leading-6">23</span>
                                </div>
                                <span className="text-[#E07575] font-bold -mb-5">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-[12px]">Minutes</span>
                                    <span className="text-[32px] font-bold leading-6">19</span>
                                </div>
                                <span className="text-[#E07575] font-bold -mb-5">:</span>
                                <div className="flex flex-col items-center">
                                    <span className="text-[12px]">Seconds</span>
                                    <span className="text-[32px] font-bold leading-6">56</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2  -mb-1">

                        <button className="w-11.5 h-11.5 rounded-full bg-[#F5F5F5] hover:bg-gray-300 transition flex items-center justify-center duration-400">
                            <img src="/icon-HomePage/arrow-left.png" alt="icon" className="w-6 h-6" />
                        </button>

                        <button className="w-11.5 h-11.5 rounded-full bg-[#F5F5F5] hover:bg-gray-300 transition flex items-center justify-center duration-400">
                            <img src="/icon-HomePage/arrow-right.png" alt="icon" className="w-6 h-6" />
                        </button>

                    </div>

                </div>
                <div className="w-full  mt-10">
                    <div className="flex gap-7">
                        {[
                            {
                                name: "HAVIT HV-G92 Gamepad",
                                price: "$120",
                                oldPrice: "$160",
                                discount: "-40%",
                                rating: 88,
                                image: "/Image-HomePage/controler.png",
                            },
                            {
                                name: "AK-900 Wired Keyboard",
                                price: "$960",
                                oldPrice: "$1160",
                                discount: "-35%",
                                rating: 75,
                                image: "/Image-HomePage/keybord.png",
                            },
                            {
                                name: "IPS LCD Gaming Monitor",
                                price: "$370",
                                oldPrice: "$400",
                                discount: "-30%",
                                rating: 99,
                                image: "/Image-HomePage/manitor.png",
                            },
                            {
                                name: "S-Series Comfort Chair",
                                price: "$375",
                                oldPrice: "$400",
                                discount: "-25%",
                                rating: 99,
                                image: "/Image-HomePage/chair.png",
                            },
                            {
                                name: "S-Series Comfort Chair",
                                price: "$375",
                                oldPrice: "$400",
                                discount: "-25%",
                                rating: 99,
                                image: "/Image-HomePage/chair.png",
                            },].map((item, index) => (

                                <div key={index} className="w-67.5 h-75.5 group">
                                    <div className="relative w-full h-40.75 bg-[#F5F5F5] rounded-sm flex items-center justify-center overflow-hidden">
                                        <span className="absolute top-2 left-2 bg-[#DB4444] text-white text-[12px] px-2 py-1 rounded-sm w-11.25 h-6.5 ">
                                            {item.discount}
                                        </span>
                                        <div className="absolute top-2 right-2 flex flex-col gap-2 ">
                                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                                <img src="/icon-HomePage/heart.png" alt="icon" className="w-4.75 h-4.75" />
                                            </button>

                                            <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                                <img src="/icon-HomePage/view.png" alt="icon" className="w-4.25 h-3.25" />
                                            </button>
                                        </div>
                                        <img src={item.image} alt="Image" className="w-[85%] h-[85%] object-contain" />
                                        <button className="absolute bottom-0 left-0 w-full h-7.5 bg-black text-white text-xs opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                            Add To Cart
                                        </button>
                                    </div>
                                    <div className="mt-3">
                                        <h3 className="text-[16px] font-medium">
                                            {item.name}
                                        </h3>
                                        <div className="flex gap-3 mt-2 text-[14px]">
                                            <span className="text-[#DB4444]">{item.price}</span>
                                            <del className="text-gray-400">{item.oldPrice}</del>
                                        </div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="text-[#FFAD33] text-[16px] tracking-[-2px]">
                                                ★★★★★
                                            </div>
                                            <span className="text-[10px] text-gray-500">
                                                ({item.rating})
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                    <button className=" w-58.5 h-14 mx-126 items-center justify-center  bg-[#DB4444] rounded-sm text-white hover:bg-red-800 transition duration-400">View All Products</button>
                </div>
            </div>
            <div className="w-310 border-b  border-b-gray-300 mx-auto mt-20"></div>
        </>
    )
}