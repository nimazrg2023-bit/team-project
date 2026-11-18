import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateProfile } from "../../Redux/Slices/UserSlice";

export default function MyAccount() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      address: Yup.string().required("Address is required"),
      currentPassword: Yup.string().test("is-current-password", "Current password is incorrect", function (value) {
        if (!value && !this.parent.newPassword && !this.parent.confirmPassword) return true;
        return value === user.password;
      }),
      newPassword: Yup.string().test("new-password-required", "New password is required", function (value) {
        if (this.parent.currentPassword && !value) return false;
        if (value && value.length < 6) return false;
        return true;
      }),
      confirmPassword: Yup.string().test("passwords-match", "Passwords must match", function (value) {
        if (this.parent.newPassword && value !== this.parent.newPassword) return false;
        return true;
      }),
    }),
    onSubmit: (values) => {
      dispatch(updateProfile(values));
      setIsEditMode(false);
      formik.resetForm();
    },
  });

  const handleCancel = () => {
    formik.resetForm();
    setIsEditMode(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 font-sans" dir="ltr">
      <div className="flex justify-between items-center mb-16">
        <div className="text-sm text-gray-500">
          Home / <span className="text-black">My Account</span>
        </div>
        <div className="text-sm">
          Welcome! <span className="text-[#DB4444]">{user.firstName} {user.lastName}</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-1/4 flex flex-col gap-8">
          <div>
            <h3 className="font-medium text-lg mb-4">Manage My Account</h3>
            <ul className="flex flex-col gap-2 pl-4 text-gray-500 text-sm">
              <li className="text-[#DB4444] cursor-pointer">My Profile</li>
              <li className="cursor-pointer hover:text-black">Address Book</li>
              <li className="cursor-pointer hover:text-black">My Payment Options</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-4">My Orders</h3>
            <ul className="flex flex-col gap-2 pl-4 text-gray-500 text-sm">
              <li className="cursor-pointer hover:text-black">My Returns</li>
              <li className="cursor-pointer hover:text-black">My Cancellations</li>
            </ul>
          </div>
          <div>
            <h3 onClick={() => navigate("/whishlist")} className="font-medium text-lg cursor-pointer hover:text-[#DB4444] transition">
              My WishList
            </h3>
          </div>
        </div>

        <div className="w-full md:w-3/4 bg-white shadow-[0_1px_13px_rgba(0,0,0,0.05)] rounded-md p-8 md:p-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl text-[#DB4444] font-medium">
              {isEditMode ? "Edit Your Profile" : "Profile Details"}
            </h2>
            {!isEditMode && (
              <button onClick={() => setIsEditMode(true)} className="bg-[#DB4444] text-white px-6 py-2 rounded-md hover:bg-red-600 transition text-sm">
                Edit Profile
              </button>
            )}
          </div>

          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-sm">First Name</label>
                <input type="text" name="firstName" {...formik.getFieldProps("firstName")} disabled={!isEditMode} className={`w-full px-4 py-3 rounded-md outline-none transition ${!isEditMode ? "bg-[#F5F5F5] text-gray-500 border-none" : "bg-transparent border border-gray-400 focus:border-black"}`} />
              </div>
              <div>
                <label className="block mb-2 font-medium text-sm">Last Name</label>
                <input type="text" name="lastName" {...formik.getFieldProps("lastName")} disabled={!isEditMode} className={`w-full px-4 py-3 rounded-md outline-none transition ${!isEditMode ? "bg-[#F5F5F5] text-gray-500 border-none" : "bg-transparent border border-gray-400 focus:border-black"}`} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium text-sm">Email</label>
                <input type="email" name="email" {...formik.getFieldProps("email")} disabled={!isEditMode} className={`w-full px-4 py-3 rounded-md outline-none transition ${!isEditMode ? "bg-[#F5F5F5] text-gray-500 border-none" : "bg-transparent border border-gray-400 focus:border-black"}`} />
              </div>
              <div>
                <label className="block mb-2 font-medium text-sm">Address</label>
                <input type="text" name="address" {...formik.getFieldProps("address")} disabled={!isEditMode} className={`w-full px-4 py-3 rounded-md outline-none transition ${!isEditMode ? "bg-[#F5F5F5] text-gray-500 border-none" : "bg-transparent border border-gray-400 focus:border-black"}`} />
              </div>
            </div>

            {isEditMode && (
              <div className="mt-4">
                <h3 className="font-medium text-base mb-4">Password Changes</h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <input type="password" name="currentPassword" placeholder="Current Password" {...formik.getFieldProps("currentPassword")} className={`w-full px-4 py-3 rounded-md outline-none transition bg-transparent border border-gray-400 focus:border-black ${formik.touched.currentPassword && formik.errors.currentPassword ? "border-red-500" : ""}`} />
                    {formik.touched.currentPassword && formik.errors.currentPassword && <p className="text-red-500 text-xs mt-1">{formik.errors.currentPassword}</p>}
                  </div>
                  <input type="password" name="newPassword" placeholder="New Password" {...formik.getFieldProps("newPassword")} disabled={!formik.values.currentPassword} className={`w-full px-4 py-3 rounded-md outline-none transition border border-gray-400 focus:border-black ${!formik.values.currentPassword ? "bg-gray-100 cursor-not-allowed opacity-50" : "bg-transparent"}`} />
                  <input type="password" name="confirmPassword" placeholder="Confirm New Password" {...formik.getFieldProps("confirmPassword")} disabled={!formik.values.currentPassword} className={`w-full px-4 py-3 rounded-md outline-none transition border border-gray-400 focus:border-black ${!formik.values.currentPassword ? "bg-gray-100 cursor-not-allowed opacity-50" : "bg-transparent"}`} />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</p>}
                </div>
              </div>
            )}

            {isEditMode && (
              <div className="flex justify-end items-center gap-6 mt-4">
                <button type="button" onClick={handleCancel} className="font-medium hover:text-gray-600 transition">
                  Cancel
                </button>
                <button type="submit" className="bg-[#DB4444] text-white px-8 py-3 rounded-md hover:bg-red-600 transition font-medium">
                  Save Changes
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}