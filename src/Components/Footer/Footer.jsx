import React, { useState } from "react";
import FooterBanner from "./FooterBanner.jpg";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";


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
  const bgImage = {
    backgroundImage: `url(${FooterBanner})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "auto",
  };

  const [showLocation, setShowLocation] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showQuickLink, setShowQuickLink] = useState(false);

  const toggleLocation = () => {
    setShowLocation(!showLocation);
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const toggleQuickLink = () => {
    setShowQuickLink(!showQuickLink);
  };

  return (
    <div className="w-auto h-auto">
      <div style={bgImage}>
        <div className="hidden lg:grid grid-cols-5 w-auto gap-4">
          {/* logo Section */}
          <div className="flex flex-col items-center">
            <img src={Logo} alt="" className="w-20 h-20 mt-10 rounded-full" />
            <h1 className="text-center sm:text-xl lg:text-4xl font-bold text-white mt-4 tracking-wide ">
              Mobile Hub
            </h1>
            <p className="text-white lg:text-2xl md:text-xl sm:text-xs">
              Buy Big Pay Small
            </p>
          </div>
          {/* Location Section */}
          <div className="flex flex-col item-center mt-4 w-[300px]">
            <h1 className="font-bold text-white tracking-wide text-xl sm:text-3xl mb-4">
              Our Location
            </h1>
            <h2 className="text-white font-semibold lg:text-[20px] tracking-wide sm:text-xl">
              Corporate office:
            </h2>
            <p className=" text-white text-wrap">
              Mobile Hub Private Limited, Rupandehi, Butwal Municipality-5
              Traffic chock. Global IME Bank Building 3rd floor 32900
            </p>
            <h2 className="text-white font-semibold text-xl mt-4 mb-1 tracking-wide">
              Store Address:
            </h2>
            <p className="text-white mb-4">Rupandehi, Tilottom-1 Janakinagar</p>
            <h2 className="text-white font-semibold tracking-wide text-xl mb-1">
              Working Hour:
            </h2>
            <p className="text-white mb-8">Mon-Sat: 10:00AM to 6:00PM</p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col item-center w-auto gap-2 ml-16">
            <h1 className="text-white font-bold text-xl sm:text-3xl mt-4 tracking-wide">
              Contact Us
            </h1>
            <p className="text-white">+977 9860603673</p>
            <p className="text-white">supportmobilehub1@gmail.com</p>
            {/* Follow Us */}
            <h1 className="text-white font-bold text-xl sm:text-2xl tracking-wide">
              Follow US:
            </h1>
            <div className="flex gap-4">
              <FaFacebook className="text-white w-10 h-10 rounded-full hover:scale-125  hover:text-blue-700 transition-all duration-500" />
              <FaInstagram className="text-white w-10 h-10 rounded-full hover:scale-125  hover:text-red-700 transition-all duration-500" />
              <FaWhatsapp className="text-white w-10 h-10 rounded-full hover:scale-125 hover:text-green-600 transition-all duration-500" />
              <FaYoutube className="text-white w-10 h-10 rounded-full hover:scale-125  hover:text-red-700 transition-all duration-500" />
              <FaTiktok className="text-white w-10 h-10 rounded-full hover:scale-125  hover:text-black transition-all duration-500" />
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex flex-col item-left gap-2 ml-24">
            <h1 className="text-white text-3xl font-bold  mt-4 mb-2">
              Quick Links
            </h1>
            <Link to={"/aboutus"}>
              <p className="text-white underline tracking-wide">About Us</p>
            </Link>
            <Link to={"/termsandconditions"}>
              <p className="text-white underline tracking-wide">
                Terms & Conditions
              </p>
            </Link>
            <Link to={"/warrantypolicy"}>
              <p className="text-white underline tracking-wide">
                Warranty policy
              </p>
            </Link>
            <Link to={"/shippingpolicy"}>
              <p className="text-white underline tracking-wide">
                Shipping policy
              </p>
            </Link>
            <Link to={"/bluedarttracking"}>
              <p className="text-white underline tracking-wide">
                Bluedart Tracking
              </p>
            </Link>
          </div>
          {/* FAQs Privacy Policy and others */}
          <div className="flex flex-col items-left gap-2 mt-16 ml-10">
            <Link to={"/faqs"}>
              <p className="text-white underline tracking-wide">FAQs</p>
            </Link>
            <Link to={"/privacypolicy"}>
              <p className="text-white underline tracking-wide">
                Privacy Policy
              </p>
            </Link>
            <Link to={"/replacementpolicy"}>
              <p className="text-white underline tracking-wide">
                Replacement policy
              </p>
            </Link>
            <Link to={"/refund&cancellationpolicy"}>
              <p className="text-white underline tracking-wide">
                Refund & Cancellation Policy
              </p>
            </Link>
            <Link to={"/ecomexpresstracking"}>
              <p className="text-white underline tracking-wide">
                Ecom Express Tracking
              </p>
            </Link>
          </div>
        </div>
        <div className="bg-white w-auto h-[1px]"></div>
        <div className=" hidden lg:flex  text-center justify-center items-center pb-4 mt-3 gap-2">
          <h3 className="text-center text-white text-xs ">Mobile Hub</h3>
          <p className="text-white">
            <FaRegRegistered />
          </p>
          <p className="text-white text-xs text-center">All Right Reserved</p>
        </div>

        {/* Mobile and medium screen responsiveness */}
        <div className="lg:hidden">
          {/* Logo Section*/}
          <div className="flex justify-center items-center mb-4">
            <img src={Logo} alt="" className="w-10 h-10 mt-2 rounded-full" />
            <div>
              <h1 className="text-center text-2xl font-bold text-white mt-4 ml-4 tracking-wider">
                Mobile Hub
              </h1>
              <p className="text-center text-white text-xs ml-4">Buy Big Pay Small</p>
            </div>
          </div>
          {/* Location Section */}
          <div className="mb-5">
            <h1
              className="flex justify-between items-center gap-5 text-white text-2xl mt-4 ml-10"
              onClick={toggleLocation}
            >
              Our Location
              <RiArrowDropDownLine className="mr-10 text-white text-4xl" />
            </h1>
            {showLocation && (
              <div className="ml-10 mt-2">
                <h2 className="text-white font-semibold tracking-wide text-xl">
                  Corporate office:
                </h2>
                <p className="text-white text-wrap">
                  Mobile Hub Private Limited, Rupandehi, Butwal Municipality-5
                  Traffic chock. Global IME Bank Building 3rd floor 32900
                </p>
                <h2 className="text-white font-semibold text-xl mt-4 mb-1 tracking-wide">
                  Store Address:
                </h2>
                <p className="text-white mb-4">Rupandehi, Tilottom-1 Janakinagar</p>
                <h2 className="text-white font-semibold tracking-wide text-xl mb-1">
                  Working Hour:
                </h2>
                <p className="text-white mb-8">Mon-Sat: 10:00AM to 6:00PM</p>
              </div>
            )}
          </div>

          {/* Our Contact */}
          <div className="mb-5">
            <h1
              className="flex justify-between items-center gap-5 text-white text-2xl mt-4 ml-10"
              onClick={toggleContact}
            >
              Our Contact
              <RiArrowDropDownLine className="mr-10 text-white text-4xl" />
            </h1>
            {showContact && (
              <div className="ml-10 mt-2">
                <p className="text-white text-xl">+977 9860603673</p>
                <p className="text-white text-xl">mobilehubsupport123@gmail.com</p>
                {/* Follow Us */}
                <h1 className="text-white font-bold text-xl sm:text-2xl tracking-wide mt-4 mb-3">
                  Follow US:
                </h1>
                <div className="flex gap-5 mb-5">
                  <FaFacebook className="text-white w-10 h-10 rounded-full hover:scale-125 hover:text-blue-700 transition-all duration-500" />
                  <FaInstagram className="text-white w-10 h-10 rounded-full hover:scale-125 hover:text-red-700 transition-all duration-500" />
                  <FaWhatsapp className="text-white w-10 h-10 rounded-full hover:scale-125 hover:text-green-600 transition-all duration-500" />
                  <FaYoutube className="text-white w-10 h-10 rounded-full hover:scale-125  hover:text-red-700 transition-all duration-500" />
                  <FaTiktok className="text-white w-10 h-10 rounded-full hover:scale-125  hover:text-black transition-all duration-500" />
                </div>
              </div>
            )}
          </div>
          {/* Quick Links */}
          <div className="mb-10">
            <h1
              className="flex justify-between items-center gap-5 text-white text-2xl mt-4 ml-10 mb-6"
              onClick={toggleQuickLink}
            >
              Links, FAQs and Policies
              <RiArrowDropDownLine className="mr-10 text-white text-4xl" />
            </h1>
            {showQuickLink && (
              <div className="ml-10 mt-2">
                <Link to={"/aboutus"}>
                  <p className="text-2xl text-white underline tracking-wide mb-2">
                    About Us
                  </p>
                </Link>
                <Link to={"/termsandconditions"}>
                  <p className="text-2xl text-white underline tracking-wide mb-2">
                    Terms & Conditions
                  </p>
                </Link>
                <Link to={"/warrantypolicy"}>
                  <p className="text-2xl text-white underline tracking-wide mb-2">
                    Warranty policy
                  </p>
                </Link>
                <Link to={"/shippingpolicy"}>
                  <p className="text-2xl text-white underline tracking-wide mb-2">
                    Shipping policy
                  </p>
                </Link>
                <Link to={"/bluedarttracking"}>
                  <p className="text-2xl text-white underline tracking-wide mb-5">
                    Bluedart Tracking
                  </p>
                </Link>
                {/* FAQs and Policies */}
                <Link to={"/FAQs"}>
                  <p className="text-2xl text-white underline tracking-wide mb-2">
                    FAQs
                  </p>
                </Link>
                <Link to={"/privacypolicy"}>
                  <p className="text-2xl text-white underline tracking-wide mb-2">
                    Privacy Policy
                  </p>
                </Link>
                <Link to={"/replacementpolicy"}>
                  <p className="text-2xl text-white underline tracking-wide mb-2">
                    Replacement policy
                  </p>
                </Link>
                <Link to={"/refund&cancellationpolicy"}>
                  <p className="text-2xl text-white underline tracking-wide mb-2">
                    Refund & Cancellation Policy
                  </p>
                </Link>
                <Link to={"/ecomexpresstracking"}>
                  <p className="text-2xl text-white underline tracking-wide mb-10">
                    Ecom Express Tracking
                  </p>
                </Link>
              </div>
            )}
          </div>
          <div className="bg-white w-full h-[1px]"></div>
          {/* Right Reserved */}
          <div className="flex text-center justify-center items-center pb-4 mt-3 gap-2">
            <h3 className="text-center text-white text-xs">Mobile Hub</h3>
            <p className="text-white">
              <FaRegRegistered />
            </p>
            <p className="text-white text-xs text-center">All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
