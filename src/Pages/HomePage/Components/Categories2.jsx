export default function Categories2() {
    return (
        <>
        
            <div className="w-310 h-125 mx-auto mt-20 bg-black relative overflow-hidden flex items-center">
                <div className="absolute right-25 -mb-5 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(150,150,150,1.35)_0%,rgba(100,100,100,0.65)_45%,transparent_75%)] blur-3xl"></div>
                <div className="relative ml-13">
                    <span className="text-[#00FF66] text-[16px] font-medium">
                        Categories
                    </span>
                    <h2 className="text-white text-[48px] font-semibold mt-5">
                        Enhance Your <br />
                        Music Experience
                    </h2>
                    <div className="flex gap-4 mt-6">
                        <div className="w-15 h-15 rounded-full bg-white flex flex-col items-center justify-center">
                            <span className="text-[16px] font-semibold">23</span>
                            <span className="text-[11px]">Hours</span>
                        </div>
                        <div className="w-15 h-15 rounded-full bg-white flex flex-col items-center justify-center">
                            <span className="text-[16px] font-semibold">05</span>
                            <span className="text-[11px]">Days</span>
                        </div>
                        <div className="w-15 h-15 rounded-full bg-white flex flex-col items-center justify-center">
                            <span className="text-[16px] font-semibold">59</span>
                            <span className="text-[11px]">Minutes</span>
                        </div>
                        <div className="w-15 h-15 rounded-full bg-white flex flex-col items-center justify-center">
                            <span className="text-[16px] font-semibold">35</span>
                            <span className="text-[11px]">Seconds</span>
                        </div>
                    </div>
                    <button className="w-29.5 h-10 bg-[#00FF66] text-white text-[16px] rounded-sm mt-8 hover:bg-green-600 transition duration-400">
                        Buy Now!
                    </button>
                </div>
                <div className="absolute right-10 top-0 w-150 h-full flex items-center justify-center">
                    <img src="/Image-HomePage/jbl.png" alt="Image" />

                </div>
            </div>
        </>
    )
}