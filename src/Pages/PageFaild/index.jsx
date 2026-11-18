import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mt-15 mx-auto px-4  font-sans" dir="ltr">
      <div className="text-sm text-gray-500 mb-20">
        Home / <span className="text-black">404 Error</span>
      </div>

      <div className="flex flex-col items-center justify-center text-center mt-10 mb-20">
        <h1 className="text-7xl md:text-9xl mt-15 font-bold tracking-wider text-black mb-6">
          404 Not Found
        </h1>
        
        <p className="text-gray-800 text-base mb-10">
          Your visited page not found. You may go home page.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-[#DB4444] text-white px-10 py-4 rounded-md hover:bg-red-600 transition font-medium"
        >
          Back to home page
        </button>
      </div>
    </div>
  );
}