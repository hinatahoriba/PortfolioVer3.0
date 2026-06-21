import { Paper } from "@mui/material";

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 gap-6 md:gap-10 w-full">
      {/* Left Image (Desktop) */}
      <div className="hidden md:flex shrink-0 w-1/3 justify-center md:justify-end">
        <img
          src="/profile.jpg"
          alt="profile"
          className="rounded-2xl object-cover shadow-lg w-full max-w-xs h-[250px] lg:h-[350px]"
        />
      </div>

      {/* Right Content */}
      <div className="flex-1 w-full md:w-2/3 flex flex-col space-y-4 md:space-y-6">
        {/* Name & Mobile Image */}
        <div className="flex flex-row items-center gap-4 md:gap-6">
          <img
            src="/profile.jpg"
            alt="profile"
            className="md:hidden w-28 h-28 rounded-full object-cover shadow-md shrink-0"
          />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">堀場 日向</h1>
            <p className="text-gray-500 text-base md:text-xl mt-1">Horiba Hinata</p>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="space-y-3 md:space-y-4">
          <InfoItem label="出身" value="東京都町田市" />
          <InfoItem label="趣味" value="筋トレ・読書・登山" />
          <InfoItem label="資格" value="基本情報技術者 TOEIC795" />
          <InfoItem label="一言" value="「アイデアはあるけど形にできない」「こんなツールが欲しい」という方、ぜひお気軽にご相談ください！" />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="flex items-center p-3 md:p-4">
      <span className="text-gray-600 font-semibold w-20 md:w-28 text-sm md:text-lg shrink-0">{label}</span>
      <span className="text-gray-800 text-sm md:text-lg leading-tight">{value}</span>
    </div>
  );
}
