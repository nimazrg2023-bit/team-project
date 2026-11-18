export default function Services() {
    return (
        <>
            <button className="w-11.5 h-11.5 absolute top-1150 right-20 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-gray-300 transition duration-400">
                <img src="/icon-HomePage/icons_arrow-up.png" alt="icon" className="w-6 h-6" />
            </button>
            <div className="w-235.75 h-40.25  mt-20 mx-auto flex justify-between">
                <div className="w-62.25 h-full ">
                    <div><img src="/Image-HomePage/Services.png" alt="Image" className="w-20 h-20 mx-auto" /></div>
                    <div className="w-60.5 h-7  mt-6 mx-auto"><span className="text-[20px] font-medium ml-1.25">FREE AND FAST DELIVERY</span></div>
                    <div className="w-62.25 h-5.25 mx-auto mt-2 "><span className="text-[14px] font-medium ml-2.25">Free delivery for all orders over $140</span></div>
                </div>
                <div className="w-62.25 h-full ">
                    <div><img src="/Image-HomePage/Services1.png" alt="Image" className="w-20 h-20 mx-auto" /></div>
                    <div className="w-60.5 h-7  mt-6 mx-auto"><span className="text-[20px] font-medium ml-1.25">24/7 CUSTOMER SERVICE</span></div>
                    <div className="w-62.25 h-5.25 mx-auto mt-2 "><span className="text-[14px] font-medium ml-5.25">Friendly 24/7 customer support</span></div>
                </div>
                <div className="w-62.25 h-full ">
                    <div><img src="/Image-HomePage/Services2.png" alt="Image" className="w-20 h-20 mx-auto" /></div>
                    <div className="w-61.75 h-7  mt-6 mx-auto"><span className="text-[20px] font-medium ">MONEY BACK GUARANTEE</span></div>
                    <div className="w-62.25 h-5.25 mx-auto mt-2 "><span className="text-[14px] font-medium ml-5.25">We reurn money within 30 days</span></div>
                </div>
            </div>
        </>
    )
}