export default function Footer() {
    return (
        <div className="relative top-10">

            <div className="w-full bg-black text-white mt-10 ">
                <div className="max-w-292.5 mx-auto h-81 flex items-start justify-between pt-17">
                    <div className="w-46.5">
                        <h3 className="text-[24px] font-bold mb-5">
                            Exclusive
                        </h3>
                        <p className="text-[20px] mb-5">
                            Subscribe
                        </p>
                        <p className="text-[16px] mb-4 whitespace-nowrap">
                            Get 10% off your first order
                        </p>
                        <div className="w-51.25 h-10.5 border border-white rounded flex items-center px-3">
                            <input type="text" placeholder="Enter your email" className="w-full bg-transparent outline-none text-[14px] placeholder:text-[#FAFAFA]" />
                            <div className="text-[23px]">
                                <img src="/icon-HomePage/icon-send.png" alt="icon" className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                    <div className="w-42.5">
                        <h3 className="text-[20px] mb-5">
                            Support
                        </h3>
                        <p className="text-[16px] mb-4">
                            111 Bijoy sarani, Dhaka,
                            <br />
                            DH 1515, Bangladesh.
                        </p>
                        <p className="text-[16px] mb-4">
                            exclusive@gmail.com
                        </p>
                        <p className="text-[16px]">
                            +88015-88888-9999
                        </p>
                    </div>


                    <div className="w-30">
                        <h3 className="text-[18px] mb-5">
                            Account
                        </h3>

                        <div className="flex flex-col gap-3.5 text-[16px]">
                            <a href="/account">My Account</a>
                            <p>Login / Register</p>
                            <a href="/cart">Cart</a>
                            <a href="/whishlist">Wishlist</a>
                            <p>Shop</p>
                        </div>
                    </div>
                    <div className="w-35">
                        <h3 className="text-[20px] mb-5">
                            Quick Link
                        </h3>
                        <div className="flex flex-col gap-3.5 text-[16px]">
                            <p>Privacy Policy</p>
                            <p>Terms Of Use</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <div className="w-50">
                        <h3 className="text-[20px] mb-5 font-bold">
                            Download App
                        </h3>
                        <p className="text-[12px] text-[#FAFAFA] mb-2">
                            Save $3 with App New User Only
                        </p>
                        <div className="flex gap-2">
                            <div className="w-20 h-20 border border-white">
                                <img src="/Image-HomePage/QrCode.png" alt="Image" className="w-20 h-20" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <div className="w-27.5 h-8.75 border border-gray-500 rounded">
                                    <img src="Image-HomePage/googleplay.png" alt="image" className="w-full h-full" />
                                </div>
                                <div className="w-27.5 h-8.75 border border-gray-500 rounded">
                                    <img src="Image-HomePage/appstore.png" alt="image" className="w-full h-full" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center mt-5 w-42.5 text-[19px]">
                            <img src="icon-HomePage/Icon-Facebook.png" alt="icon" className="w-6 h-6" />
                            <img src="icon-HomePage/Icon-Twitter.png" alt="icon" className="w-6 h-6" />
                            <img src="icon-HomePage/icon-instagram.png" alt="icon" className="w-6 h-6" />
                            <img src="icon-HomePage/Icon-Linkedin.png" alt="icon" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
                <div className="w-full h-11.25 border-t border-[#1d1d1d] flex justify-center items-center">
                    <p className="text-[16px] text-gray-600 flex">
                        <img src="/icon-HomePage/icon-copyright.png" alt="icon" className="w-5 h-5 mt-0.5 mr-1" /> Copyright Rimel 2022. All right reserved
                    </p>
                </div>
            </div>
        </div>
    )
}