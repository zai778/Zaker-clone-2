
import React from "react";

const Video = () => {
  const videos = [
    {
      title: "أعظم حجة في الإسلام .. وأثرها في أمة الحبيب ﷺ",
      embedCode: (
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/f1kuQch_xcE?si=jfcH5LkV3pxYH_ID"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      videoLink: "https://www.youtube.com/watch?v=f1kuQch_xcE?si=jfcH5LkV3pxYH_ID",
    },
    {
      title: "أكثر من ذكر الله يا موفق.. هذه الأيام أيام ذكر",
      embedCode: (
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/CyWTUT8hruA?si=RJ2ziI8jhyVA_r14"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      videoLink: "https://www.youtube.com/watch?v=CyWTUT8hruA?si=RJ2ziI8jhyVA_r14",
    },
    {
      title: "مُقبل على أمر جديد؟ ردد دعاء الوالد والولد ",
      embedCode: (
        <iframe
          width="100%"
          height="200"
          src="https://www.youtube.com/embed/ToKSqIMxhfY?si=fhFVj8_haGhUrBRj"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      ),
      videoLink: "https://www.youtube.com/watch?v=ToKSqIMxhfY?si=fhFVj8_haGhUrBRj",
    },
  ];

  return (
    <div className="py-16 px-8 text-center bg-white">
      <h2 className="text-3xl font-bold text-teal-700 mb-8">
        من دروس مولانا الشيخ عون
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        {videos.map((video, index) => (
          <div key={index} className="max-w-xs mx-auto bg-white p-4  rounded-lg shadow-lg shadow-gray-500">
            <p className="mb-2 text-teal-700 text-lg font-semibold">{video.title}</p> {/* تقليل المسافة بين العنوان والفيديو */}
            <div className="relative pb-8">
              {video.embedCode}
            </div>
            <a
              href={video.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-500 transition-colors duration-300 shadow-lg hover:shadow-gray-400"
            >
              تشغيل الفيديو
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
