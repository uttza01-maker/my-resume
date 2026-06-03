import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal my-20 p-8 bg-white border border-gray-100 rounded-2xl text-center shadow-sm">
      <h3 className="text-xl font-bold text-gray-900 mb-3">พร้อมเริ่มงานกับคุณแล้ว</h3>
      <p className="text-gray-600 mb-8 text-sm max-w-sm mx-auto">
        หากมีโอกาสหรืออยากพูดคุยเกี่ยวกับโปรเจกต์ สามารถติดต่อผมได้ทางอีเมลครับ
      </p>
      
      <a 
        href="mailto:uttza01@gmail.com" 
        className="inline-flex items-center px-10 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
      >
        ติดต่อผม (uttza01@gmail.com)
      </a>
    </section>
  )
}