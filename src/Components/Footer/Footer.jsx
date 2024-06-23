import React, { useState } from "react";
import FooterBanner from "./FooterBanner.jpg";
import Logo from "../../assets/Logo.png";
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
  FaRegRegistered,
} from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Footer = () => {
  const [showLocation, setShowLocation] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showQuickLink, setShowQuickLink] = useState(false);
  const [showFAQs, setShowFAQs] = useState(false);

  const toggleSection = (setState, state) => {
    setState(!state);
  };

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat h-auto"
      style={{ backgroundImage: `url(${FooterBanner})` }}
    >
      <div className="px-4 py-5 mt-20 h-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center mt-8">
            <img src={Logo} alt="Logo" className="w-20 h-20 rounded-full" />
            <h1 className="text-white text-4xl font-bold mt-4 tracking-wide">
              Mobile Hub
            </h1>
            <p className="text-white text-xl">Buy Big Pay Small</p>
          </div>

          {/* Location Section */}
          <div className="text-white ml-6">
            <div className="flex justify-between items-center lg:block" onClick={() => toggleSection(setShowLocation, showLocation)}>
              <h1 className="font-bold text-3xl mt-4 mb-2">Our Location</h1>
              <RiArrowDropDownLine
                className="text-3xl cursor-pointer lg:hidden"
                
              />
            </div>
            <div className={`${showLocation ? "block" : "hidden"} lg:block`}>
              <div className="mb-4">
                <h2 className="font-semibold text-xl">Corporate office:</h2>
                <p>
                  Mobile Hub Private Limited, Rupandehi, Butwal Municipality-5
                  Traffic chock. Global IME Bank Building 3rd floor 32900
                </p>
              </div>
              <div className="mb-4">
                <h2 className="font-semibold text-xl">Store Address:</h2>
                <p>Rupandehi, Tilottom-1 Janakinagar</p>
              </div>
              <div className="mb-8">
                <h2 className="font-semibold text-xl">Working Hour:</h2>
                <p>Mon-Sat: 10:00AM to 6:00PM</p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-white ml-6">
            <div className="flex justify-between items-center lg:block" onClick={() => toggleSection(setShowContact, showContact)}>
              <h1 className="font-bold text-3xl mt-4 mb-2">Contact Us</h1>
              <RiArrowDropDownLine
                className="text-3xl cursor-pointer lg:hidden"
                
              />
            </div>
            <div className={`${showContact ? "block" : "hidden"} lg:block`}>
              <p>+977 9860603673</p>
              <p>supportmobilehub1@gmail.com</p>
              <h1 className="font-bold text-2xl mt-4 mb-2">Follow Us:</h1>
              <div className="flex gap-4 mb-8">
                <FaFacebook className="w-10 h-10 rounded-full text-white hover:scale-125 hover:text-blue-700 transition-all duration-500" />
                <FaInstagram className="w-10 h-10 rounded-full text-white hover:scale-125 hover:text-red-700 transition-all duration-500" />
                <FaWhatsapp className="w-10 h-10 rounded-full text-white hover:scale-125 hover:text-green-600 transition-all duration-500" />
                <FaYoutube className="w-10 h-10 rounded-full text-white hover:scale-125 hover:text-red-700 transition-all duration-500" />
                <FaTiktok className="w-10 h-10 rounded-full text-white hover:scale-125 hover:text-black transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Quick Links */} 
          <div className="text-white ml-6">
            <div className="flex justify-between items-center lg:block" onClick={() => toggleSection(setShowQuickLink, showQuickLink)}>
              <h1 className="text-3xl font-bold mt-4 mb-2">Quick Links</h1>
              <RiArrowDropDownLine
                className="text-3xl cursor-pointer lg:hidden"
              
              />
            </div>
            <div className={`${showQuickLink ? "block" : "hidden"} lg:block`}>
              <div>
                <Link to={"/aboutus"}><p className="underline tracking-wide text-white block mb-2">
                  About Us
                </p></Link>
                <Link to={"/termsandconditions"}><p className="underline tracking-wide text-white block mb-2">
                  Terms & Conditions
                </p></Link>
                <Link to={"/warrantypolicy"}>
                <p className="underline tracking-wide text-white block mb-2">
                  Warranty policy
                </p></Link>
                <Link to={"/shippingpolicy"}><p className="underline tracking-wide text-white block mb-2">
                  Shipping policy
                </p></Link>
                <Link to={"/bluedarttracking"}>
                <p className="underline tracking-wide text-white block mb-2">
                  Bluedart Tracking
                </p>
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs and Policies */}
          <div className="text-white ml-6">
            <div className="flex justify-between items-center lg:block" onClick={() => toggleSection(setShowFAQs, showFAQs)}>
              <h1 className="font-bold text-3xl mt-4 mb-2">FAQs and Policies</h1>
              <RiArrowDropDownLine
                className="text-3xl cursor-pointer lg:hidden"
                
              />
            </div>
            <div className={`${showFAQs ? "block" : "hidden"} lg:block`}>
              <div>
               <Link to={"/FAQs"}>
               <p className="underline tracking-wide text-white block mb-2">
                  FAQs
                </p>
               </Link>
               <Link to={"/privacypolicy"}>
               <p className="underline tracking-wide text-white block mb-2">
                  Privacy Policy
                </p>
               </Link>
               <Link to={"/replacementpolicy"}>
               <p className="underline tracking-wide text-white block mb-2">
                  Replacement policy
                </p>
               </Link>
               <Link to={"/refund&cancellationpolicy"}>
               <p className="underline tracking-wide text-white block mb-2">
                  Refund & Cancellation Policy
                </p>
               </Link>
              <Link to={"/ecomexpresstracking"}>
              <p className="underline tracking-wide text-white block mb-2">
                  Ecom Express Tracking
                </p>
              </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-white w-full h-px"></div>

        {/* Footer Bottom */}
        <div className="flex justify-center items-center text-white text-xs lg:text-center mt-6">
          <h3 className="mr-1">Mobile Hub</h3>
          <FaRegRegistered className="mr-1" />
          <p>All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
