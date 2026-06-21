import { FaPython, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiFlask, SiFastapi, SiRuby, SiRubyonrails, SiTypescript, SiNextdotjs, SiMysql, SiPostgresql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> }, { name: "Flask", icon: <SiFlask /> }, { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Ruby", icon: <SiRuby /> }, { name: "Rails", icon: <SiRubyonrails /> }, { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> }, { name: "Next.js", icon: <SiNextdotjs /> }, { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> }, { name: "Docker", icon: <FaDocker /> }, { name: "AWS", icon: <FaAws /> },
  ];

  return (
    <section className="w-full py-6">
      {/* 💡 Works の見出しデザインに完全に統一 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Skills
        </h2>
      </div>
      
      <div className="grid grid-cols-4 md:grid-cols-6 gap-y-10 gap-x-6 w-full">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center justify-center transition-opacity duration-200 hover:opacity-60">
            <div className="text-4xl md:text-5xl mb-2 text-gray-800">{skill.icon}</div>
            <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
