import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const cartItems = useSelector((state) => state.cart.items);
    const navigate = useNavigate();
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const formik = useFormik({
        initialValues: {
            firstName: "",
            companyName: "",
            streetAddress: "",
            apartment: "",
            townCity: "",
            phoneNumber: "",
            email: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First name is required"),
            streetAddress: Yup.string().required("Street address is required"),
            townCity: Yup.string().required("Town/City is required"),
            phoneNumber: Yup.string().matches(/^[0-9+() -]+$/, "Invalid phone number").required("Phone number is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
        }),
        onSubmit: () => {
            navigate("/");
        },
    });

    if (cartItems.length === 0) {
        return (
            <div className="flex justify-center items-center h-[50vh] text-xl font-bold text-gray-500">
                سبد خرید شما خالی است. ابتدا محصولی اضافه کنید.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-16 font-sans" dir="ltr">
            <div className="text-sm text-gray-500 mb-10">
                Account / My Account / Product / View Cart / <span className="text-black">CheckOut</span>
            </div>

            <h1 className="text-3xl font-semibold mb-10">Billing Details</h1>

            <div className="flex flex-col lg:flex-row gap-16">
                <form onSubmit={formik.handleSubmit} className="lg:w-1/2 flex flex-col gap-6">
                    <div>
                        <label className="block mb-2 text-gray-500">First Name*</label>
                        <input type="text" name="firstName" {...formik.getFieldProps("firstName")} className={`w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-400 ${formik.touched.firstName && formik.errors.firstName ? "border border-red-500" : ""}`} />
                        {formik.touched.firstName && formik.errors.firstName && <p className="text-red-500 text-xs mt-1">{formik.errors.firstName}</p>}
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-500">Company Name</label>
                        <input type="text" name="companyName" {...formik.getFieldProps("companyName")} className="w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none" />
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-500">Street Address*</label>
                        <input type="text" name="streetAddress" {...formik.getFieldProps("streetAddress")} className={`w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none ${formik.touched.streetAddress && formik.errors.streetAddress ? "border border-red-500" : ""}`} />
                        {formik.touched.streetAddress && formik.errors.streetAddress && <p className="text-red-500 text-xs mt-1">{formik.errors.streetAddress}</p>}
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-500">Apartment, floor, etc. (optional)</label>
                        <input type="text" name="apartment" {...formik.getFieldProps("apartment")} className="w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none" />
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-500">Town/City*</label>
                        <input type="text" name="townCity" {...formik.getFieldProps("townCity")} className={`w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none ${formik.touched.townCity && formik.errors.townCity ? "border border-red-500" : ""}`} />
                        {formik.touched.townCity && formik.errors.townCity && <p className="text-red-500 text-xs mt-1">{formik.errors.townCity}</p>}
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-500">Phone Number*</label>
                        <input type="tel" name="phoneNumber" {...formik.getFieldProps("phoneNumber")} className={`w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none ${formik.touched.phoneNumber && formik.errors.phoneNumber ? "border border-red-500" : ""}`} />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{formik.errors.phoneNumber}</p>}
                    </div>

                    <div>
                        <label className="block mb-2 text-gray-500">Email Address*</label>
                        <input type="email" name="email" {...formik.getFieldProps("email")} className={`w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none ${formik.touched.email && formik.errors.email ? "border border-red-500" : ""}`} />
                        {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>}
                    </div>

                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" className="w-5 h-5 accent-[#DB4444]" />
                        <span className="text-sm">Save this information for faster check-out next time</span>
                    </label>
                </form>

                <div className="lg:w-4/10 flex mt-8 flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-gray-100 p-2 rounded-md">
                                        <img src={item.image} alt={item.title} className="object-contain w-full h-full" />
                                    </div>
                                    <span className="font-medium">{item.title} x{item.quantity}</span>
                                </div>
                                <span className="font-medium">${item.price * item.quantity}</span>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between ">
                        <span>Subtotal:</span>
                        <span>${subtotal}</span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between ">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="flex justify-between  font-medium">
                        <span>Total:</span>
                        <span>${subtotal}</span>
                    </div>

                    <div className="flex flex-col gap-3 mt-2">
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="payment" value="bank" className="w-4 h-4 accent-black" />
                            <span className="font-medium">Bank</span>
                            <div className="ml-auto flex gap-2">
                                <div className="h-6 w-10 ">
                                    <img src="/b1.png" alt="" />
                                </div>
                                <div className="h-6 w-10 ">
                                    <img src="/b2.png" alt="" />
                                </div>
                                <div className="h-6 w-10 ">
                                    <img src="/b3.png" alt="" />
                                </div>
                                <div className="h-6 w-10 ">
                                    <img src="/b4.png" alt="" />
                                </div>
                            </div>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="payment" value="cash" className="w-4 h-4 accent-black" defaultChecked />
                            <span className="font-medium">Cash on delivery</span>
                        </label>
                    </div>

                    <div className="flex gap-4 mt-4">
                        <input type="text" placeholder="Coupon Code" className="border border-black px-4 py-3 rounded-md outline-none w-full" />
                        <button type="button" className="bg-[#DB4444] text-white px-8 py-3 rounded-md hover:bg-red-600 transition font-medium whitespace-nowrap">Apply Coupon</button>
                    </div>
                    <button onClick={formik.handleSubmit} className="bg-[#DB4444] text-white px-8 py-3 rounded-md hover:bg-red-600 transition font-medium w-max mt-2">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
}