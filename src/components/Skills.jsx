import { 
  SiHtml5, SiJavascript, SiNodedotjs, SiReact, 
  SiDart, SiFlutter, SiSupabase 
} from 'react-icons/si';

export default function Skills() {
const skills = [
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "React / Vite", icon: <SiReact className="text-blue-400" /> },
  // ตรงนี้ครับ: นำมาใส่ใน Array เพื่อใช้งาน
  { name: "Dart", icon: <SiDart className="text-blue-500" /> },
  { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
];
  return (
    <section className="my-12">
      <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-6">Technical Skills</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
            <span className="text-xl">{skill.icon}</span>
            <span className="text-xs font-medium text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}