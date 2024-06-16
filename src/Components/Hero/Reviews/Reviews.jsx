import React from "react";
import ReviewData from "./reviewData";
import Star from "../../../assets/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel, Keyboard, Autoplay, Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';

const Reviews = () => {
  return (
    <div className="mt-4 mx-auto mb-10">
      <div className="container">
        {/* heading section */}
        <div className="flex justify-center items-center gap-3 mb-10">
          <img src={Star} alt="" className="w-8 h-8" />
          <h1 className="text-3xl sm:lg md:2xl text-center">Reviews From Our Customers</h1>
          <img src={Star} alt="" className="w-8 h-8" />
        </div>
        {/* Review Section */}
        <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2},
          768: { slidesPerView: 2},
          1024: { slidesPerView: 2},
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
          <div className="hidden lg:grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-4 mx-2">
          {ReviewData.map((data) =>(
           <SwiperSlide key={data.id}>
           <div className="flex flex-col items-center justify-center w-[400px] h-auto p-4 mx-auto bg-gray-100 rounded-lg shadow-lg mb-16">
             <h1 className="text-xl font-bold mb-3 mt-4">{data.name}</h1>
             <p className="text-center text-wrap px-2">{data.text}</p>
             <div className="flex items-center mb-3 mt-2">
               <FaStar className="text-yellow-500 mr-1" />
               <FaStar className="text-yellow-500 mr-1" />
               <FaStar className="text-yellow-500 mr-1" />
               <FaStar className="text-yellow-500 mr-1" />
               <FaStar className="text-yellow-500" />
             </div>
           </div>
           
         </SwiperSlide>
          ))}
        </div>
        </Swiper>
        
      </div>
    </div>
  );
};

export default Reviews;
