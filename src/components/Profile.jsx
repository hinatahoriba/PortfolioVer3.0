import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Paper } from "@mui/material";

export default function Profile() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-8">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full flex justify-center">
              <img
                src="/profile.jpg"
                alt="profile"
                className="rounded-xl shadow-md w-full max-w-md object-cover h-64"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex justify-center">
              <img
                src="/presentation.jpg"
                alt="profile"
                className="rounded-xl shadow-md w-full max-w-md object-cover h-64"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex justify-center">
              <img
                src="/vietnam.jpg"
                alt="profile"
                className="rounded-xl shadow-md w-full max-w-md object-cover h-64"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full flex justify-center">
              <img
                src="/with-friends.jpg"
                alt="profile"
                className="rounded-xl shadow-md w-full max-w-md object-cover h-64"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 space-y-4">
        {/* Name */}
        <h1 className="text-4xl font-bold text-700">堀場 日向</h1>
        <p className="text-gray-500 text-lg">Horiba Hinata</p>

        {/* Info Boxes */}
        <div className="space-y-3">
          <InfoItem label="出身" value="東京都町田市" />
          <InfoItem label="趣味" value="筋トレ・読書・登山" />
          <InfoItem label="資格" value="基本情報技術者 TOEIC795" />
          <InfoItem label="メッセージ" value="プロダクトエンジニア目指して奮闘中" />
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <Paper className="flex items-center p-3 rounded-lg shadow-sm border border-gray-200" elevation={0}>
      <span className="text-600 font-semibold w-24">{label}</span>
      <span className="text-gray-800">{value}</span>
    </Paper>
  );
}
