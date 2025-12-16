import {
  FaInstagram, FaLine, FaFacebook, FaLinkedin, FaDiscord,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const DEFAULT_LINKS = [
  {
    key: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/h.hinata1125?igsh=MWJxMXBvZnJkcml6cA==",
    Icon: FaInstagram,
    colorClass: "text-pink-500",
    hoverColorClass: "group-hover:text-pink-700",
  },
  {
    key: "line",
    label: "LINE",
    href: "https://line.me/ti/p/Dnpd3EnIcN",
    Icon: FaLine,
    colorClass: "text-green-500",
    hoverColorClass: "group-hover:text-green-700",
  },
  {
    key: "x",
    label: "X",
    href: "https://x.com/pKPVfL6hORinvVo",
    Icon: FaXTwitter,
    colorClass: "text-zinc-800",
    hoverColorClass: "group-hover:text-black",
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/17RvQnMfKw/",
    Icon: FaFacebook,
    colorClass: "text-blue-500",
    hoverColorClass: "group-hover:text-blue-700",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/%E6%97%A5%E5%90%91-%E5%A0%80%E5%A0%B4-29109a32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    Icon: FaLinkedin,
    colorClass: "text-sky-500",
    hoverColorClass: "group-hover:text-sky-700",
  },
  {
    key: "discord",
    label: "Discord",
    href: "http://discordapp.com/users/1065236698478428222",
    Icon: FaDiscord,
    colorClass: "text-indigo-500",
    hoverColorClass: "group-hover:text-indigo-700",
  },
];

export default function SocialIcons({ links = DEFAULT_LINKS, iconSize = 26 }) {
  return (
    <section className="w-full py-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">SNS</h2>

      <ul className="grid grid-cols-3 sm:grid-cols-6 gap-4 px-6 max-w-5xl mx-auto" aria-label="SNSリンク">
        {links.map(({ key, label, href, Icon, colorClass, hoverColorClass }) => (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="group flex items-center justify-center w-full aspect-square rounded-2xl border border-black/10 bg-white shadow transition duration-200 hover:shadow-lg"
            >
              <Icon
                size={iconSize}
                className={`${colorClass} ${hoverColorClass} transition-colors duration-200`}
                aria-hidden="true"
                focusable="false"
              />
              <span className="sr-only">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
