
import React from "react";
import { Link } from "react-router-dom"; 
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-gradient-to-b from-teal-700 to-teal-900 shadow-lg"> 
      <div className="flex space-x-4 ml-5">
        <Link to="/" className="text-white">
          الصفحة الرئيسية
        </Link>
        <Link to="/login" className="text-white">
          تسجيل دخول
        </Link>
        <Link to="/signup" className="text-white">
          انشاء حساب
        </Link>
      </div>
      <div className="text-white text-xl font-bold mr-5">
        <img
          src={logo}
          alt="Logo"
          className="md:w-20 md:h-20 rounded-full bg-gray-300 p-4 shadow-lg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
