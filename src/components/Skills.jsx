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
    <section className="w-full py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-10 text-gray-800">Skills</h2>
      
      {/* 画像1をベースにした、カード枠のないシンプルな4列グリッドレイアウト */}
      <div className="grid grid-cols-4 gap-y-10 gap-x-4 max-w-2xl mx-auto px-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center justify-center transition-opacity duration-200 hover:opacity-60"
          >
            {/* アイコン：モダンな濃いめのグレー */}
            <div className="text-4xl mb-2 text-gray-800">
              {skill.icon}
            </div>
            {/* テキスト：少しマイルドなグレーで洗練された印象に */}
            <p className="text-xs sm:text-sm font-medium text-gray-500 tracking-wide">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
