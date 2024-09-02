import React from "react";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          إعادة تعيين كلمة المرور
        </h2>
        <p className="text-center text-gray-600 mb-8">
          ادخل بريدك الإلكتروني وسنرسل لك رابطًا لإعادة تعيين كلمة المرور
        </p>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="البريد الإلكتروني"
            />
          </div>

          <div className="flex justify-between items-center">
            <Link to="/login" className="text-teal-600 hover:underline text-sm">
              العودة لتسجيل الدخول
            </Link>
            <button
              type="submit"
              className="px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              أرسل رابط إعادة التعيين
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
