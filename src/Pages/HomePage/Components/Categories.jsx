export default function Categories() {
    return (
        <>
            <div className="w-310 mx-auto mt-20">
                <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
                        <span className="text-[#DB4444] text-[16px] font-medium">Categories</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="text-[36px] font-medium">
                            Browse By Category
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
                <div className="w-full flex gap-5 mt-8">


                    <button className="flex-1 w-42.5 h-36.25 flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-sm">
                        <img src="/icon-HomePage/phone.png" alt="icon" className="w-11.5 h-11.5 -mb-2" />
                        <span>Phones</span>
                    </button>
                    <button className="flex-1 w-42.5 h-36.25 flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-sm">
                        <img src="/icon-HomePage/computr.png" alt="icon" className="w-11.5 h-11.5 -mb-2" />
                        <span>Computers</span>
                    </button>
                    <button className="flex-1 w-42.5 h-36.25 flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-sm">
                        <img src="/icon-HomePage/Watch.png" alt="icon" className="w-11.5 h-11.5 -mb-2" />
                        <span>SmartWatch</span>
                    </button>
                    <button className="flex-1 w-42.5 h-36.25 flex flex-col items-center justify-center gap-3 bg-[#DB4444] text-white rounded-sm">
                        <img src="/icon-HomePage/Camera.png" alt="icon" className="w-11.5 h-11.5 -mb-2" />
                        <span>Camera</span>
                    </button>
                    <button className="flex-1 w-42.5 h-36.25 flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-sm">
                        <img src="/icon-HomePage/Headphone.png" alt="icon" className="w-11.5 h-11.5 -mb-2" />
                        <span>HeadPhones</span>
                    </button>
                    <button className="flex-1 w-42.5 h-36.25 flex flex-col items-center justify-center gap-3 border border-gray-200 rounded-sm">
                        <img src="/icon-HomePage/Gamepad.png" alt="icon" className="w-11.5 h-11.5 -mb-2" />
                        <span>Gaming</span>
                    </button>
                </div>
            </div>
            <div className="w-310 border-b  border-b-gray-300 mx-auto mt-20"></div>
        </>
    )
}