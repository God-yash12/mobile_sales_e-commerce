import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Banner from "../../assets/Navbar/BannerTop.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok, FaHome, FaPhone } from "react-icons/fa";
import Hero from '../Hero/Hero';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav'

const data = [
  {
    id: 1,
    text: "Discount up to 20% on prepaid order.",
  },
  {
    id: 2,
    text: "No Cost EMI Available",
  },
  {
    id: 3,
    text: "20% discount on iPhone Buying",
  },
];

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShowNavbar(false);
      } else {
        // Scroll up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);

      // Show the navbar when reaching the Hero section
      // const heroSection = document.getElementById("hero-section");
      // if (heroSection && window.scrollY < heroSection.offsetTop) {
      //   setShowNavbar(true);
      // }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const BannerBg = {
    backgroundImage: `url(${Banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      {/* Banner */}
      <div style={BannerBg} className="relative h-16 sm:h-20 md:h-24 lg:h-32">
        <div className="container mx-auto h-full">
          {/* Upper Navbar */}
          <Slider {...settings} className="h-full">
            {data.map((textItem, index) => (
              <div key={index} className="h-full flex justify-center items-center text-wrap sm:text-wrap">
                <h1 className="text-white text-[15px] sm:text-xl text-center mt-2 mb-3 px-2">{textItem.text}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Middle Navbar */}
      <div className={`bg-gray-300 px-4 py-2 flex justify-between items-center sm:flex transition-transform duration-300 ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        {/* Social Icons */}
        <div className="flex gap-4 text-[15px] ml-4 sm:text-2xl md-text-xl justify-center">
          <a href="#"><FaFacebook className="text-blue-900 cursor-pointer" /></a>
          <a href="#"><FaInstagram className="text-[#260c38] cursor-pointer" /></a>
          <a href="#"><FaTiktok className="cursor-pointer" /></a>
          <a href="#"><FaYoutube className="text-red-900 cursor-pointer" /></a>
        </div>

        {/* Buy Big Pay Small */}
        <div className="hidden lg:flex md:hidden md:text-wrap items-center gap-2 flex-grow justify-center">
        <Link to="/"><FaHome className="text-2xl cursor-pointer" /></Link>
          <p className="text-[15px] text-primary">Buy Big Pay Small</p>
          <span className="h-6 w-0.5 bg-primary mx-2"></span>
          <a href="#" className="text-black cursor-pointer">
            Discover more
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex gap-2 ml-auto sm:mr-10">
          <FaPhone className="text-xs sm:text-xl md:text-lg text-primary cursor-pointer" />
          <p className="text-xs sm:text-xl md:text-lg text-primary">+977 9860603673</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Navbar;
