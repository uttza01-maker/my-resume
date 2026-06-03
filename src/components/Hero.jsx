import { SiLine } from 'react-icons/si';

export default function Hero() {
  return (
    <section className="my-16 flex flex-col md:flex-row items-center gap-8">
      {/* ส่วนของรูปโปรไฟล์ */}
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg shrink-0 -mt-40">
        <img 
          src="/me.png" 
          alt="Piyapan Kummoon" 
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ส่วนของข้อมูล */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Piyapan Kummoon
        </h1>
        <p className="text-lg text-blue-600 font-medium mb-3">Aspiring Full Stack Developer | Frontend Enthusiast</p>
        
        <div className="text-sm text-gray-600 space-y-2 mb-6">
          <p className="flex items-center justify-center md:justify-start gap-2">
            <span>📞</span> 099-048-4339
          </p>
          
          {/* ส่วนของ LINE ID */}
          <a 
            href="https://line.me/ti/p/~omgza01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center md:justify-start gap-2 hover:text-green-600 transition-colors"
          >
            <SiLine className="text-green-500" />
            <span>omgza01</span>
          </a>

          <p className="flex items-center justify-center md:justify-start gap-2">
            <span>📧</span> uttza01@gmail.com
          </p>
          <p className="flex items-start justify-center md:justify-start gap-2">
            <span>📍</span> 
            <span className="max-w-70">Room 2314, 43 Soi Thawi Watthana-Kanchanaphisek 2/2, Thawi Watthana, Bangkok 10170</span>
          </p>
        </div>

        {/* ปุ่มดาวน์โหลด */}
        <a 
          href="/resume.pdf" 
          download="Piyapan_Kummoon_Resume.pdf"
          className="inline-flex items-center px-5 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
        >
          <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Resume
        </a>
      </div>
    </section>
  )
}