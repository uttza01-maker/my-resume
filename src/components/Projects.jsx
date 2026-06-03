import { useReveal } from '../hooks/useReveal';

// 1. นี่คือส่วน Component ของลิงก์โปรเจกต์ (อยู่ด้านนอกฟังก์ชันหลัก)
const ProjectLink = ({ name, url, desc }) => (
  <a 
    href={url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group p-4 rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all duration-300 block bg-white"
  >
    <h5 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
      {name}
    </h5>
    <p className="text-xs text-gray-500 leading-relaxed">
      {desc}
    </p>
  </a>
);

// 2. นี่คือตัวฟังก์ชันหลักครับ
export default function Projects() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal my-16 max-w-4xl mx-auto px-6">
      <h2 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-8 font-bold">
        Projects Portfolio
      </h2>
      
      <div className="space-y-12">
        {/* กลุ่ม React Native */}
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
            Mobile Development (React Native)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectLink name="Money Tracking App" url="https://github.com/uttza01-maker/rn-money-tracking-app" desc="แอปบันทึกรายรับ-รายจ่ายส่วนบุคคล" />
            <ProjectLink name="Run Tracker App" url="https://github.com/uttza01-maker/rn-run-tracker-app" desc="แอปติดตามระยะทางการวิ่งและสถิติ" />
            <ProjectLink name="Smart Auto Loan" url="https://github.com/uttza01-maker/rn-smart-auto-loan-app" desc="ระบบคำนวณสินเชื่อรถยนต์" />
            <ProjectLink name="Top BKK Coffee" url="https://github.com/uttza01-maker/rn-top-bkk-coffee-app" desc="รวบรวมร้านกาแฟแนะนำในกรุงเทพฯ" />
          </div>
        </div>

        {/* กลุ่ม Flutter */}
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
            Mobile Development (Flutter)
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectLink name="Thai Hotline" url="https://github.com/uttza01-maker/flutter_thai_hotline_app" desc="แอปสายด่วนช่วยเหลือฉุกเฉิน" />
            <ProjectLink name="SAU Life" url="https://github.com/uttza01-maker/flutter_sau_life_app" desc="แอปพลิเคชันสำหรับนักศึกษา" />
          </div>
        </div>

        {/* กลุ่ม Web */}
        <div>
          <h4 className="text-sm font-bold text-gray-800 mb-4 border-l-4 border-blue-500 pl-3">
            Web & Full Stack
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProjectLink name="React Task App" url="https://github.com/uttza01-maker/react-task-app" desc="ระบบจัดการงานเชื่อมต่อ Supabase" />
            <ProjectLink name="MyPythonGit" url="https://github.com/uttza01-maker/MyPythonGit" desc="โปรเจกต์ Python และ Dev ops" />
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a 
          href="https://github.com/uttza01-maker?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
        >
          ดูโปรเจกต์ทั้งหมดบน GitHub ของผม →
        </a>
      </div>
    </section>
  );
}