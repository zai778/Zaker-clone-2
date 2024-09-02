
import React from "react";
import { Link } from "react-router-dom";

const CardsSection = () => {
  return (
    <div className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
       
        <div className="bg-white text-teal-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">عنوان الكارد الأول</h3>
          <p className="text-lg mb-6">
            يمكن أن يحتوي هذا الوصف على تفاصيل مختصرة عن المحتوى
          </p>
          <Link to="/Hamla" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-500 transition-colors duration-300">
            اقرأ المزيد
          </Link>
        </div>

        
        <div className="bg-white text-teal-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">عنوان الكارد الثاني</h3>
          <p className="text-lg mb-6">
            يمكن أن يحتوي هذا الوصف على تفاصيل مختصرة عن المحتوى
          </p>
          <Link to="/Hamla" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-500 transition-colors duration-300">
            اقرأ المزيد
          </Link>
        </div>

        
        <div className="bg-white text-teal-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold mb-4">عنوان الكارد الثالث</h3>
          <p className="text-lg mb-6">
            يمكن أن يحتوي هذا الوصف على تفاصيل مختصرة عن المحتوى
          </p>
          <Link to="/Hamla" className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-500 transition-colors duration-300">
            اقرأ المزيد
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
