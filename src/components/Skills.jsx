import { FaPython, FaReact, FaDocker, FaAws } from "react-icons/fa";
import { SiFlask, SiFastapi, SiRuby, SiRubyonrails, SiTypescript, SiNextdotjs, SiMysql, SiPostgresql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Python", icon: <FaPython /> },
    { name: "Flask", icon: <SiFlask /> },
    { name: "FastAPI", icon: <SiFastapi /> },
    { name: "Ruby", icon: <SiRuby /> },
    { name: "Rails", icon: <SiRubyonrails /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "Docker", icon: <FaDocker /> },
    { name: "AWS", icon: <FaAws /> },
  ];

  return (
    <section className="w-full py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-6 max-w-5xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-4 bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-200"
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
