import { FaInstagram, FaLine, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const DEFAULT_LINKS = [
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/h.hinata1125?igsh=MWJxMXBvZnJkcml6cA==", Icon: FaInstagram, borderColorClass: "border-pink-500", textColorClass: "text-pink-500", hoverBorderColorClass: "hover:border-pink-600" },
  { key: "line", label: "LINE", href: "https://line.me/ti/p/Dnpd3EnIcN", Icon: FaLine, borderColorClass: "border-green-500", textColorClass: "text-green-500", hoverBorderColorClass: "hover:border-green-600" },
  { key: "x", label: "X", href: "https://x.com/pKPVfL6hORinvVo", Icon: FaXTwitter, borderColorClass: "border-black", textColorClass: "text-black", hoverBorderColorClass: "hover:border-gray-800" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/share/17RvQnMfKw/", Icon: FaFacebook, borderColorClass: "border-blue-600", textColorClass: "text-blue-600", hoverBorderColorClass: "hover:border-blue-700" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/%E6%97%A5%E5%90%91-%E5%A0%80%E5%A0%B4-29109a32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", Icon: FaLinkedin, borderColorClass: "border-sky-600", textColorClass: "text-sky-600", hoverBorderColorClass: "hover:border-sky-700" },
  { key: "github", label: "GitHub", href: "https://github.com/hinatahoriba", Icon: FaGithub, borderColorClass: "border-gray-800", textColorClass: "text-gray-800", hoverBorderColorClass: "hover:border-gray-900" },
];

export default function SocialIcons({ links = DEFAULT_LINKS }) {
  return (
    <section className="w-full py-4">
      {/* スマホ時はmax-w-[400px]、PC時はw-full（max-w制限なし）にすることで横幅を完全に合わせます */}
      <ul className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 w-full max-w-[400px] md:max-w-full mx-auto" aria-label="SNSリンク">
        {links.map(({ key, label, href, Icon, borderColorClass, textColorClass, hoverBorderColorClass }) => (
          <li key={key} className="w-full">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className={`group flex flex-col items-center justify-center w-full aspect-square rounded-2xl transition duration-200 border-2 bg-transparent ${borderColorClass} ${hoverBorderColorClass}`}
            >
              <Icon className={`${textColorClass} w-6 h-6 md:w-8 md:h-8 mb-1`} aria-hidden="true" focusable="false" />
              <span className={`${textColorClass} text-[10px] md:text-xs font-medium tracking-wide`}>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
