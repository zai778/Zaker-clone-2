
import React from "react";
import { Link } from "react-router-dom"; 
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center py-4 px-8 bg-gradient-to-b from-teal-700 to-teal-900 shadow-lg">
      {/* العناصر الموجودة في الجانب الأيسر */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 ml-0 sm:ml-5">
        <Link to="/" className="text-white text-center sm:text-left">
          الصفحة الرئيسية
        </Link>
        <Link to="/login" className="text-white text-center sm:text-left">
          تسجيل دخول
        </Link>
        <Link to="/signup" className="text-white text-center sm:text-left">
          انشاء حساب
        </Link>
      </div>
      
      {/* شعار الموقع */}
      <div className="text-white text-xl font-bold mr-0 sm:mr-5 mt-4 sm:mt-0">
        <img
          src={logo}
          alt="Logo"
          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-300 p-4 shadow-lg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
