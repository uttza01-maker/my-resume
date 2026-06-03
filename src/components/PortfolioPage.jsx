import { Helmet, HelmetProvider } from 'react-helmet-async';
import Hero from './Hero';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';

export default function PortfolioPage() {
  return (
    <HelmetProvider>
      <main className="max-w-2xl mx-auto px-6 py-16">
        <Helmet>
          <title>Piyapan Kummoon - Frontend Developer Portfolio</title>
          <meta name="description" content="Portfolio ของ ปิยพันธ์ คำมูล - นักศึกษาที่มุ่งมั่นเป็น Frontend Developer เชี่ยวชาญ React, Next.js และ Flutter" />
        </Helmet>
        
        <Hero />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </HelmetProvider>
  )
}