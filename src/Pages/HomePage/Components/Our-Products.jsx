export default function () {
    return (
        <>
        <div className="w-310 mx-auto mt-20">
                <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
                        <span className="text-[#DB4444] text-[16px] font-medium">Our Products</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="text-[36px] font-medium">
                            Explore Our Products
                        </h2>
                        <div className="flex items-center gap-2">
                            <button className="w-11.5 h-11.5 rounded-full bg-[#F5F5F5] hover:bg-gray-300 transition flex items-center justify-center duration-400">
                                <img src="/icon-HomePage/arrow-left.png" alt="icon" className="w-6 h-6" />
                            </button>
                            <button className="w-11.5 h-11.5 rounded-full bg-[#F5F5F5] hover:bg-gray-300 transition flex items-center justify-center duration-400">
                                <img src="/icon-HomePage/arrow-right.png" alt="icon" className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-17 gap-y-10 mt-10">

                    {[
                        {
                            name: "Breed Dry Dog Food",
                            price: "$100",
                            rating: 35,
                            image: "/Image-HomePage/FoodDog.png",
                        },
                        {
                            name: "CANON EOS DSLR Camera",
                            price: "$360",
                            rating: 95,
                            image: "/Image-HomePage/Camera1.png",
                        },
                        {
                            name: "ASUS FHD Gaming Laptop",
                            price: "$700",
                            rating: 325,
                            image: "/Image-HomePage/Laptop.png",
                        },
                        {
                            name: "Curology Product Set",
                            price: "$500",
                            rating: 145,
                            image: "/Image-HomePage/curology.png",
                        },
                        {
                            name: "Kids Electric Car",
                            price: "$960",
                            rating: 65,
                            image: "/Image-HomePage/KidCar.png",
                            badge: "NEW",
                            colors: ["#DB4444", "#DB4444"],
                        },
                        {
                            name: "Jr. Zoom Soccer Cleats",
                            price: "$1160",
                            rating: 35,
                            image: "/Image-HomePage/Shoes.png",
                            colors: ["#EEFF61", "#DB4444"],
                        },
                        {
                            name: "GP11 Shooter USB Gamepad",
                            price: "$660",
                            rating: 55,
                            image: "/Image-HomePage/Controler1.png",
                            badge: "NEW",
                            colors: ["#000000", "#DB4444"],
                        },
                        {
                            name: "Quilted Satin Jacket",
                            price: "$660",
                            rating: 55,
                            image: "/Image-HomePage/coat1.png",
                            colors: ["#184A48", "#DB4444"],
                        },
                    ].map((item, index) => (

                        <div key={index} className="w-67.5 group">

                            <div className="relative w-full h-40.75 bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
                                {item.badge && (
                                    <span className="absolute w-12.75 h-6.5 top-2 left-2 bg-[#00FF66] text-white text-[10px] px-3.5 py-1.5 rounded-sm">
                                        {item.badge}
                                    </span>
                                )}
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-contain p-5"
                                    />
                                )}
                                <div className="absolute top-2 right-2 flex flex-col gap-2">
                                    <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                        <img src="/icon-HomePage/heart.png" alt="icon" className="w-4.75 h-4.75" />
                                    </button>

                                    <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                                        <img src="/icon-HomePage/view.png" alt="icon" className="w-4.25 h-3.25" />
                                    </button>
                                </div>
                                <button className="absolute bottom-0  w-full h-7.5 bg-black text-white text-xs translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                                    Add To Cart
                                </button>
                            </div>
                            <h3 className="text-[16px] font-medium mt-3">
                                {item.name}
                            </h3>

                            <div className="flex items-center gap-2 mt-2 text-[16px]">
                                <span className="text-[#DB4444]">
                                    {item.price}
                                </span>

                                <span className="text-[#FFAD33] text-[16px] tracking-[-2px]">
                                    ★★★★★
                                </span>

                                <span className="text-[16px] text-gray-500">
                                    ({item.rating})
                                </span>
                            </div>

                            {item.colors && (
                                <div className="flex gap-2 mt-2">
                                    {item.colors.map((color, i) => (
                                        <div key={i} className={`w-4.5 h-4.5 rounded-full ${i === 0 ? "border-2 border-black " : ""}`}
                                            style={{ backgroundColor: color }}
                                        ></div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-12">
                    <button className="w-58.5 h-14 bg-[#DB4444] text-white text-[16px] rounded-sm hover:bg-red-800 transition duration-400">
                        View All Products
                    </button>
                </div>

            </div>
        </>
    )
}