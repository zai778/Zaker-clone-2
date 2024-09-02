
import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl bg-white p-10 rounded-lg shadow-lg shadow-gray-300 border-solid border-2">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          التسجيل في الموقع
        </h2>

        <form>
       
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="relative order-1 md:order-2">
              <label className="block text-gray-700 mb-2">الاسم الأول</label>
              <input
                type="text"
                className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="الاسم الأول"
              />
            </div>
            <div className="relative order-2 md:order-1">
              <label className="block text-gray-700 mb-2">الكنية</label>
              <input
                type="text"
                className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="الكنية"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="relative">
              <label className="block text-gray-700 mb-2">
                عنوان البريد الإلكتروني
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="عنوان البريد الإلكتروني"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-2">الجنسية</label>
              <select className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option value="" disabled selected>
                  الجنسية
                </option>
                <option value="Jordanian">أردني</option>
                <option value="Syrian">سوري</option>
                <option value="Egyptian">مصري</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="relative">
              <label className="block text-gray-700 mb-2">الجنس</label>
              <div className="flex justify-center space-x-6 space-x-reverse">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="ml-4"
                  />
                  أنثى
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="ml-4"
                  />
                  ذكر
                </label>
              </div>
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-2">العمر</label>
              <input
                type="number"
                className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="العمر"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="relative">
              <label className="block text-gray-700 mb-2">كلمة السر</label>
              <input
                type="password"
                className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="كلمة السر"
              />
            </div>

            <div className="relative">
              <label className="block text-gray-700 mb-2">
                تأكيد كلمة السر
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="تأكيد كلمة السر"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            تسجيل
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

