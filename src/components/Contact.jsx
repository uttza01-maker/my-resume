import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const ref = useReveal();

  return (
    <section ref={ref} className="reveal my-20 p-8 bg-gray-50 rounded-2xl text-center border border-gray-100">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Let's Connect!</h3>
      <p className="text-gray-600 mb-6 text-sm">พร้อมสำหรับการฝึกงานและร่วมงานกับทีมงานคุณภาพครับ</p>
      <a 
        href="mailto:uttza01@gmail.com" 
        className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200"
      >
        ส่งอีเมลหาผม
      </a>
    </section>
  )
}