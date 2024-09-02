// import React from "react";

// const Cardspdf = () => {
//   const pdfFiles = [
//     {
//       title: "أوراد السير والتحصين 1",
//       file: "../files/أوراد السير والتحصين1.pdf",
//     },
//     {
//       title: "أوراد السير والتحصين 2",
//       file: "../files/أوراد السير والتحصين2.pdf",
//     },
//     {
//       title: "أوراد السير والتحصين 3",
//       file: "../files/أوراد السير والتحصين3.pdf",
//     },
//     {
//       title: "أوراد السير والتحصين 4",
//       file: "../files/أوراد السير والتحصين4.pdf",
//     },
//     {
//       title: "أوراد السير والتحصين 5",
//       file: "../files/أوراد السير والتحصين5.pdf",
//     },
//     {
//       title: "مجلس الاجابة",
//       file: "../files/مجلس الاجابة.pdf",
//     },
//   ];

//   return (
//     <div className="bg-teal-700 py-16 px-8">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
//         {pdfFiles.map((pdf, index) => (
//           <div
//             key={index}
//             className="bg-white text-teal-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//             <h3 className="text-2xl font-semibold mb-4">{pdf.title}</h3>
//             <a
//               href={pdf.file}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-500 transition-colors duration-300"
//             >
//               عرض الملف
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Cardspdf;
import React from "react";

const Cardspdf = () => {
  
  const pdfFiles = [
    {
      title: "أوراد السير والتحصين 1",
      file: "../files/أوراد السير والتحصين1.pdf",
      image: "https://via.placeholder.com/400x200",
      description: "يمكن أن يحتوي هذا الوصف على تفاصيل مختصرة عن المحتوى",
    },
    {
      title: "أوراد السير والتحصين 2",
      file: "../files/أوراد السير والتحصين2.pdf",
      image: "https://via.placeholder.com/400x200",
      description: "يمكن أن يحتوي هذا الوصف على تفاصيل مختصرة عن المحتوى",
    },
    {
      title: "أوراد السير والتحصين 3",
      file: "../files/أوراد السير والتحصين3.pdf",
      image: "https://via.placeholder.com/400x200",
      description: "يمكن أن يحتوي هذا الوصف على تفاصيل مختصرة عن المحتوى",
    },
    {
      title: "أوراد السير والتحصين 4",
      file: "../files/أوراد السير والتحصين4.pdf",
      image: "https://via.placeholder.com/400x200",
      description: "يمكن أن يحتوي هذا الوصف على تفاصيل مختصرة عن المحتوى",
    },
    {
      title: "أوراد السير والتحصين 5",
      file: "../files/أوراد السير والتحصين5.pdf",
      image: "https://via.placeholder.com/400x200",
      description: "يمكن أن يحتوي هذا الوصف على تفاصيل مختصرة عن المحتوى",
    },
    {
      title: "مجلس الاجابة",
      file: "../files/مجلس الاجابة.pdf",
      image: "https://via.placeholder.com/400x200",
      description: "يمكن أن يحتوي هذا الوصف على تفاصيل مختصرة عن المحتوى",
    },
  ];

  return (
    <div className="bg-teal-700 py-16 px-8">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {pdfFiles.map((pdf, index) => (
          <div
            key={index}
            className="bg-white text-teal-800 p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Display Image */}
            <img
              src={pdf.image}
              alt={pdf.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />

            {/* Display Title */}
            <h3 className="text-2xl font-semibold mb-2">{pdf.title}</h3>

            {/* Display Description */}
            <p className="text-lg mb-4">{pdf.description}</p>

            {/* Button to View PDF */}
            <a
              href={pdf.file}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-500 transition-colors duration-300"
            >
              عرض الملف
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cardspdf;
