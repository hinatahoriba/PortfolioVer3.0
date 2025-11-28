import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-900/70 backdrop-blur border-b border-slate-700/50">

      {/* 左ロゴ */}
      <div className="flex items-center gap-2">
        <span className="text-xl">🧑‍💻</span>
        <span className="font-semibold tracking-wide text-slate-100">
          My Portfolio
        </span>
      </div>

      {/* SNSリンク */}
      <nav className="flex items-center gap-4">
        <a
          href="https://x.com/pKPVfL6hORinvVo?t=5fGY9ws3i_y0sgOv_CrGNA&s=09"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-700/50 hover:border-slate-400 transition"
        >
          <FaXTwitter className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/hinatahoriba"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-700/50 hover:border-slate-400 transition"
        >
          <FaGithub className="w-5 h-5" />
        </a>

        <a
          href="https://www.instagram.com/h.hinata1125?igsh=MWJxMXBvZnJkcml6cA=="
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-9 h-9 rounded-full border border-slate-600 text-slate-200 hover:bg-slate-700/50 hover:border-slate-400 transition"
        >
          <FaInstagram className="w-5 h-5" />
        </a>
      </nav>
    </header>
  );
}
