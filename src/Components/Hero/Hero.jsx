import React from 'react';
import Slider from "react-slick";
import Banner1 from "../../assets/Hero/Banner1.png";
import Banner2 from "../../assets/Hero/Banner2.png";
import Banner3 from "../../assets/Hero/Banner3.png";
import Banner4 from "../../assets/Hero/Banner4.png";
import Banner5 from "../../assets/Hero/Banner5.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Features from "./Features";
import About from '../About/About';
import ShopByPocket from '../../Collection/ShopByPocket/ShopByPocket';
import ShopByBrand from '../../Collection/ShopByBrand/ShopByBrand';
import Reviews from "./Reviews/Reviews";
import Condition from './Conditions/Condition';

const Hero = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    autoplay: true,
    autoplaySpeed: 2950,
    arrows: false,
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          <div className="w-full">
            <img src={Banner1} alt="Banner 1" className="w-full h-auto" />
          </div>
          <div className="w-full">
            <img src={Banner2} alt="Banner 2" className="w-full h-auto" />
          </div>
          <div className="w-full">
            <img src={Banner3} alt="Banner 3" className="w-full h-auto" />
          </div>
          <div className="w-full">
            <img src={Banner4} alt="Banner 4" className="w-full h-auto" />
          </div>
          <div className="w-full">
            <img src={Banner5} alt="Banner 5" className="w-full h-auto" />
          </div>
        </Slider>
        </div>
        <Features />
        <About />
        <ShopByPocket />
        <ShopByBrand />
        <Reviews />
        <Condition />
    </div>
  );
};

export default Hero;
