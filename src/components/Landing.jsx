// src/components/Landing.jsx
import { Link } from "react-router-dom";

export default function Landing() {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Mobile Application",
  ];

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-6">
      {/* รูปโปรไฟล์ */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
        <img
          src="/me.png"
          alt="Piyapan Kummoon"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ชื่อและตำแหน่ง */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Piyapan Kummoon</h1>

      {/* Badge สายงาน */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {roles.map((role, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100"
          >
            {role}
          </span>
        ))}
      </div>

      {/* ข้อความใหม่ที่ปรับปรุงแล้ว */}
      <p className="text-gray-600 mb-8 max-w-lg leading-relaxed">
       นิสิตนักศึกษาที่สนใจฝึกงานในตำแหน่ง<strong>Frontend Developer (Internship)</strong>{" "}
        ที่มุ่งมั่นพัฒนา Web และ Mobile Application ด้วย{" "}
        <strong>React, Next.js และ Flutter</strong>
        พร้อมทักษะการเชื่อมต่อข้อมูลด้วย <strong>Supabase</strong>{" "}
        มุ่งมั่นที่จะใช้กระบวนการคิดเชิงนวัตกรรมสร้างสรรค์ผลงานคุณภาพและร่วมเติบโตไปพร้อมกับทีมงานมืออาชีพ
      </p>

      {/* ปุ่มกดไปหน้า Portfolio */}
      <Link
        to="/portfolio"
        className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition shadow-lg transform hover:-translate-y-1"
      >
        View Portfolio →
      </Link>
    </section>
  );
}
