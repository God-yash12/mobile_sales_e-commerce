import React from 'react';
import Star from "../../../assets/star.png";
import ConditionData from './ConditionData';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel, Keyboard, Autoplay, Pagination } from 'swiper/modules';

const Condition = () => {
  return (
    <div className="mt-20 mb-20 overflow-x-hidden">
      
        <div className="flex justify-center items-center gap-8 mb-10">
          <img src={Star} alt="" className="w-8 h-8" />
          <h1 className="text-4xl sm:lg md:2xl text-center font-bold">Conditions</h1>
          <img src={Star} alt="" className="w-8 h-8" />
        </div>
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-14 space-x-4">
          {ConditionData.map((data) => (
            <div key={data.id} className="flex flex-col justify-center items-center shadow-lg shadow-gray-300 min-w-auto h-auto my-10 px-2 rounded-lg">
              <h1 className="text-3xl text-primary text-center mb-2 mt-4 font-bold">
                {data.title}
              </h1>
              <div className="px-2 py-2">
                <h3 className="text-gray-600 text-[20px]">
                  {data.subTitle}
                </h3>
                <p className="text-gray-700 mb-3 text-wrap">
                  {data.text}
                </p>
              </div>
              <div className="text-gray-700 text-[17px] mx-2 mb-2 px-2">
                <p className="text-center text-gray-700 font-semibold mb-2 text-[20px]">
                  {data.question}
                </p>
                <p className="text-center">
                  {data.answer1}
                </p>
                <p className="text-center">
                  {data.answer2}
                </p>
                <p className="text-center">
                  {data.answer3}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* for mobile and medium screen */}
        <div className="lg:hidden w-full">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              1024: { slidesPerView: 2 },
            }}
            cssMode={true}
            mousewheel={true}
            keyboard={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Mousewheel, Keyboard, Autoplay, Pagination]}
            className="mySwiper"
          >
            {ConditionData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="flex flex-col justify-center items-center shadow-md w-full md:w-[300px] h-auto py-1 px-4 mb-16 mt-8 rounded-lg mx-auto">
                  <h1 className="text-3xl text-primary text-center mb-2 font-bold">
                    {data.title}
                  </h1>
                  <div className="px-2 py-2">
                    <h3 className="text-gray-600 text-[20px]">
                      {data.subTitle}
                    </h3>
                    <p className="text-gray-700 mb-3">
                      {data.text}
                    </p>
                  </div>
                  <div className="text-gray-700 text-[17px] mx-2 mb-2 px-2">
                    <p className="text-center text-gray-700 font-semibold mb-2 text-[20px]">
                      {data.question}
                    </p>
                    <p className="text-center">
                      {data.answer1}
                    </p>
                    <p className="text-center">
                      {data.answer2}
                    </p>
                    <p className="text-center">
                      {data.answer3}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
     
    </div>
  );
}

export default Condition;
