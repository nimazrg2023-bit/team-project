export default function Head() {
    return (
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
    )
}