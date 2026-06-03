import { useReveal } from '../hooks/useReveal'

export default function Education() {
  const ref = useReveal()

  return (
    <section ref={ref} className="reveal my-8" aria-label="Education Section">
      <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-4">Education</p>
      
      <div className="flex gap-3">
        {/* จุดนำสายตา */}
        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
        
        {/* รายละเอียดการศึกษา */}
        <div className="flex justify-between w-full">
          <div>
            <p className="text-sm font-medium">สาขาวิชา เทคโนโลยีและนวัตกรรม</p>
            <p className="text-xs text-gray-400 mt-0.5">มหาวิทยาลัย เอเชียอาคเนย์</p>
          </div>
          
          {/* สถานะปีการศึกษา */}
          <p className="text-xs font-semibold text-blue-600 shrink-0 mt-0.5">
            2025 - ปัจจุบัน
          </p>
        </div>
      </div>
    </section>
  )
}