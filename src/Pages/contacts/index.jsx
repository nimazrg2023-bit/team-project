import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MailIcon, PhoneIcon } from "../../components/ui/icons";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().matches(/^[0-9+() -]+$/, "Phone number is not valid").required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: { name: "", email: "", phone: "", message: "" },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      setIsSubmitted(true);
      resetForm();
      setTimeout(() => setIsSubmitted(false), 3000);
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-sans" dir="ltr">
      <div className="text-sm text-gray-500 mb-16">
        Home / <span className="text-black">Contact</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-md p-8 flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                <PhoneIcon />
              </div>
              <h3 className="font-semibold text-lg">Call To Us</h3>
            </div>
            <p className="text-sm mb-4">We are available 24/7, 7 days a week.</p>
            <p className="text-sm">Phone: +8801611112222</p>
          </div>

          <hr className="border-gray-300" />

          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-[#DB4444] rounded-full flex items-center justify-center">
                <MailIcon />
              </div>
              <h3 className="font-semibold text-lg">Write To Us</h3>
            </div>
            <p className="text-sm mb-4">Fill out our form and we will contact you within 24 hours.</p>
            <p className="text-sm mb-1">Emails: customer@exclusive.com</p>
            <p className="text-sm">Emails: support@exclusive.com</p>
          </div>
        </div>

        <div className="lg:w-2/3 bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] rounded-md p-8">
          {isSubmitted && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
              Your message has been sent successfully!
            </div>
          )}

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <input type="text" name="name" placeholder="Your Name *" className={`w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-400 ${formik.touched.name && formik.errors.name ? "border border-red-500" : ""}`} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                {formik.touched.name && formik.errors.name && <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>}
              </div>

              <div>
                <input type="email" name="email" placeholder="Your Email *" className={`w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-400 ${formik.touched.email && formik.errors.email ? "border border-red-500" : ""}`} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>}
              </div>

              <div>
                <input type="tel" name="phone" placeholder="Your Phone *" className={`w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-400 ${formik.touched.phone && formik.errors.phone ? "border border-red-500" : ""}`} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>}
              </div>
            </div>

            <div>
              <textarea name="message" placeholder="Your Message" rows="8" className={`w-full bg-[#F5F5F5] px-4 py-3 rounded-md outline-none resize-none focus:ring-1 focus:ring-gray-400 ${formik.touched.message && formik.errors.message ? "border border-red-500" : ""}`} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message}></textarea>
              {formik.touched.message && formik.errors.message && <p className="text-red-500 text-xs mt-1">{formik.errors.message}</p>}
            </div>

            <div className="flex justify-end mt-2">
              <button type="submit" className="bg-[#DB4444] text-white px-10 py-3 rounded-md hover:bg-red-600 transition font-medium">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}