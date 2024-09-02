import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg shadow-gray-300 border-solid border-2">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          تسجيل الدخول
        </h2>

        <form onSubmit={handleSubmit}>
         
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">
              عنوان البريد الإلكتروني
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">كلمة المرور</label>
            <input
              type="password"
              className="w-full px-4 py-3 text-right border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

         
          <div className="mb-6 text-right">
            <Link to="/forgotpassword" className="text-teal-600 hover:underline">
              نسيت كلمة المرور؟
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            تسجيل الدخول
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
