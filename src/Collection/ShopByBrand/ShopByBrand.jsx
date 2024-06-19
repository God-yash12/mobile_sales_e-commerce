import React from "react";
import AppleLogo from "../../assets/ShopByBrand/appleLogo.png";
import GoogleLogo from "../../assets/ShopByBrand/googleLogo.png";
import SamsungLogo from "../../assets/ShopByBrand/samsungLogo.png";
import SonyLogo from "../../assets/ShopByBrand/sonyLogo.png";
import VivoLogo from "../../assets/ShopByBrand/vivoLogo.png";
import XioamiLogo from "../../assets/ShopByBrand/miLogo.png";
import OnePlusLogo from "../../assets/ShopByBrand/1plusLogo.png";
import HuaweiLogo from "../../assets/ShopByBrand/huaweiLogo.png";
import OppoLogo from "../../assets/ShopByBrand/oppoLogo.png"
import Star from "../../assets/star.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Mousewheel, Keyboard, Autoplay, Pagination } from 'swiper/modules';

const items = [
  { id: 1, image: AppleLogo, link: "/applephone" },
  { id: 2, image: GoogleLogo, link: "/google" },
  { id: 3, image: SamsungLogo, link: "/samsung" },
  { id: 4, image: XioamiLogo, link: "/mi" },
  { id: 5, image: SonyLogo, link: "/sony" },
  { id: 6, image: VivoLogo, link: "/vivo" },
  { id: 7, image: HuaweiLogo, link: "/huawei" },
  { id: 8, image: OnePlusLogo, link: "/oneplus" },
  { id: 9, image: OppoLogo, link: "/oppo" },
];

const ShopByBrand = () => {
  return (
    <div className="mx-2 mt-20 mb-20 ml-6">
      {/* heading section */}
      <div className="flex justify-center items-center gap-4">
        <img src={Star} alt="" className="w-8 h-8" />
        <h1 className="text-3xl sm:lg md:2xl">Shop By Brand</h1>
        <img src={Star} alt="" className="w-8 h-8" />
      </div>
      {/* Brand Images Section */}
      <div className="hidden lg:grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-5 px-2 mt-10 mx-20">
        {items.map((data, index) => (
          <Link key={index} to={`${data.link}/${data.id}`}>
            <div>
              <img
                src={data.image}
                alt={`brand-${data.id}`}
                className="w-30 h-20 hover:scale-150 transition-all duration-200"
              />
            </div>
          </Link>
        ))}
      </div>
      {/* Swiper Slider for small screens */}
      <div className="lg:hidden w-full mt-10">
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 4, spaceBetween: 10 },
            1024: { slidesPerView: 8, spaceBetween: 10 },
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
          {items.map((data, index) => (
            <SwiperSlide key={index}>
              <Link 
              to={`${data.link}/${data.id}`}>
                <div className="flex justify-center items-center">
                  <img
                    src={data.image}
                    alt={`brand-${data.id}`}
                    className="w-64 h-20 px-10 mb-14 hover:scale-150 transition-all duration-200"
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ShopByBrand;
