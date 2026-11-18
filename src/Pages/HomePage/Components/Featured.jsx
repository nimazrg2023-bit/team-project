export default function () {
    return (
        <>
        <div className="w-310 mx-auto mt-20">
                <div className="w-full flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
                        <span className="text-[#DB4444] text-[16px] font-medium">Featured</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <h2 className="text-[36px] font-medium">
                            New Arrival
                        </h2>

                    </div>
                </div>
                <div className="w-310 h-150  flex mt-10 gap-8">
                    <div className="w-full h-150 bg-amber-700">
                        <img src="/Image-HomePage/ps5.png" alt="Image" className="w-full h-full" />
                    </div>
                    <div>
                        <div className="w-full h-71  bg-blue-800"><img src="/Image-HomePage/border.png" alt="Image" className="w-full h-full" /></div>
                        <div className="flex gap-8 mt-8 ">
                            <div className="w-67.5 h-71 bg-fuchsia-700"><img src="/Image-HomePage/Gucci.png" alt="Image" className="w-full h-full" /></div>
                            <div className="w-67.5 h-71 bg-emerald-600"><img src="/Image-HomePage/speakers.png" alt="Image" className="w-full h-full" /></div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}