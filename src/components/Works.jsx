import React from "react";

const works = [
  { title: "Preness", description: "TOEFL ITP®試験特化型の学習アプリ。間違えた問題の傾向から「真の弱点」を特定する高度な分析レポート機能がある。", image: "/preness.png", url: "https://toefl.preness-app.com/" },
  { title: "縁 E-NISHI", description: "1秒でつながる、新しい時代のデジタル名刺「縁（E-NISHI）」。「人と人との縁を、もっと身近に。」をコンセプトにしたデジタル名刺アプリ。", image: "/e-nishi.png", url: "https://e-nishi.vercel.app/" },
  { title: "VIRTUAL DRIVING SCHOOL", description: "オンライン運転シミュレーター。運転技術の向上をサポートします。", image: "/virtual-driving-school.png", url: "https://drivingsupport.vercel.app/" },
  { title: "Meetingood", description: "会議の司会や進行に不安を感じる初心者向けウェブアプリケーション。", image: "/meetingood.png", url: "https://meetingood.vercel.app/" },
  { title: "MINIMALIST TODO LIST", description: "ローカルストレージでHTMLファイル1つだけで作成した。TODOリストです。", image: "/minimalist-todo-list.png", url: "https://website-playground-rosy.vercel.app/todo.html" }
];

export default function Works() {
  return (
    <section className="w-full py-6 tracking-tight">
      {/* 💡 元の美しい中央寄せデザインを維持 */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
          Works
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 w-full">
        {works.map((work, index) => (
          <div key={index} className="group flex flex-col bg-transparent overflow-hidden">
            <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 rounded-xl">
              <img src={work.image} alt={work.title} className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105" />
            </div>
            <div className="flex-1 flex flex-col pt-4">
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{work.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{work.description}</p>
              <a href={work.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors duration-300">
                詳細を見る
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
