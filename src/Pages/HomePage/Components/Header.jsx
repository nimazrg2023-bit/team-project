export default function Header() {
    return (
        <>
            <header className="h-35.5 w-full border-b">
                <div className="h-12 bg-black text-white flex items-center justify-center">
                    <div className=" ml-74 w-235.75 px-3 flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm ">
                            <span className="text-[14px]">
                                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                            </span>
                            <a href="" className="font-semibold underline">
                                ShopNow
                            </a>
                        </div>
                        <select className="bg-black text-white text-sm outline-none ">
                            <option>English</option>
                            <option>Persian</option>
                        </select>
                    </div>
                </div>
                <div className="h-23.5 px-85 flex items-center justify-between">
                    <div className="w-310 h-9.5 items-center justify-between flex mt-5">
                        <div className="w-168.75 h-6 flex items-center justify-between">
                            <div className="w-29.5 h-6"><img src="/icon-HomePage/Exclusive.png" alt="" /></div>
                            <div className="w-91.75 h-6 flex gap-12 ">
                                <a href="" className="relative after:absolute after:left-0 after:-bottom-px after:w-0 after:h-px after:bg-black hover:after:w-full  after:duration-400 ">Home</a>
                                <a href="" className="relative after:absolute after:left-0 after:-bottom-px after:w-0 after:h-px after:bg-black hover:after:w-full  after:duration-400">Contact</a>
                                <a href="" className="relative after:absolute after:left-0 after:-bottom-px after:w-0 after:h-px after:bg-black hover:after:w-full  after:duration-400">About</a>
                                <a href="" className="relative after:absolute after:left-0 after:-bottom-px after:w-0 after:h-px after:bg-black hover:after:w-full  after:duration-400">Sign Up</a>
                            </div>
                        </div>
                        <div className="w-86.75 h-9.5 flex items-center ">
                            <div className="w-60.75 h-9.5 rounded-sm bg-[#F5F5F5] flex items-center justify-center">
                                <input type="search" placeholder="What are you looking for?" className="border-none w-48.75 outline-0 h-6 text-[12px]" />
                                <img src="/icon-HomePage/search.png" alt="icon" className=" w-4 h-4" />
                            </div>
                            <button className="w-5 h-[17.83px] ml-6">
                                <img src="/icon-HomePage/Like.png" alt="icon" />
                            </button>
                            <button className="w-6.5 h-6.5 ml-4">
                                <img src="/icon-HomePage/cart.png" alt="icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className=" h-96 w-310 mx-auto flex justify-between ">
                <div className="w-58.25 h-86 flex flex-col justify-between mt-10  ">
                    <div className="flex items-center justify-between">
                        <span className="text-[16px]">Woman's Fashion</span>
                        <img src="/icon-HomePage/DropDown.png" alt="icon" className="w-=6 h-6" />
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-[16px]">Men's Fashion</span>
                        <img src="/icon-HomePage/DropDown.png" alt="icon" className="w-=6 h-6" />
                    </div>
                    <span className="text-[16px]">Electronics</span>
                    <span className="text-[16px]">Home & Lifestyle</span>
                    <span className="text-[16px]">Medicine</span>
                    <span className="text-[16px]">Sports & Outdoor</span>
                    <span className="text-[16px]">Baby's & Toys</span>
                    <span className="text-[16px]">Groceries & Pets</span>
                    <span className="text-[16px]">Health & Beauty</span>
                </div>
                <div className="w-247.5 h-96 flex border-l" ><img src="/Image-HomePage/iphone.png" alt="Image" className="w-229 h-92 mt-4 ml-18" /></div>
            </div>
        </>
    )
}