import React, { useRef, useState, useEffect } from 'react';
import Logo from "../../assets/Logo.png";
import NavLinks from './NavData';
import { MdOutlineArrowDropDown, MdAccountBox, MdClose, MdArrowForwardIos } from "react-icons/md";
import { FaSearch, FaShoppingBag, FaBars } from "react-icons/fa";

const BottomNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSubMenu, setCurrentSubMenu] = useState(null);
  const sidebarRef = useRef(null);
  const navLinksRef = useRef(null);

  const toggleSubMenu = (event, submenuId) => {
    event.preventDefault(); // Prevent the default anchor tag behavior
    setCurrentSubMenu(currentSubMenu === submenuId ? null : submenuId);
  };

  const handleMouseEnter = (submenuId) => {
    setCurrentSubMenu(submenuId);
  };

  const handleMouseLeave = () => {
    setCurrentSubMenu(null);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target) && navLinksRef.current && !navLinksRef.current.contains(event.target)) {
      setCurrentSubMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-between items-center bg-gray-100 p-4">
      {/* Logo section */}
      <div className="flex items-center ml-5 gap-4 h-6">
        <div className="text-primary text-2xl md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <MdClose /> : <FaBars />}
        </div>
        <img src={Logo} alt="Logo" className="h-12 w-12 rounded-full hidden md:block" />
        <h1 className="font-bold text-2xl text-primary/100 hidden md:block">
          Mobile Hub
        </h1>
      </div>
      <div className="flex justify-center flex-grow">
        <ul className="hidden md:flex items-center justify-around gap-4 text-sm lg:text-lg xl:text-xl" ref={navLinksRef}>
          {NavLinks.map((items, index) => (
            <li
              key={index}
              className="relative text-blue-700 group"
              onMouseEnter={() => handleMouseEnter(items.id)}
              onMouseLeave={handleMouseLeave}
            > 
              <a href={items.link} className="flex items-center justify-around cursor-pointer md:text-[18px] relative">
                {items.title}
                {items.dropdownIcon && <MdOutlineArrowDropDown className="text-2xl md:text-3xl group-hover:rotate-180 transition-all duration-1500 " />}
                <div className="absolute left-0 bottom-0 bg-blue-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
              </a>
              {items.submenu && currentSubMenu === items.id && (
                <ul className=" absolute mb-1 w-40 bg-white z-[999] shadow-lg rounded-lg opacity-100 transition-opacity duration-300">
                  {items.submenu.map((submenuItem, subIndex) => (
                    <li key={subIndex} className="border-b last:border-0">
                      <a href={submenuItem.link} className="block px-4 py-2 text-black hover:bg-gray-200">
                        {submenuItem.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-7 ml-4 md:mr-2 cursor-pointer">
        <div className="relative group">
          <FaSearch className="text-primary text-2xl" />
          <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-max p-1 text-xs z-[9999] bg-primary text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Search</span>
        </div>
        <div className="relative group hidden md:block">
          <MdAccountBox className="text-primary text-2xl" />
          <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-max p-1 text-xs z-[9999] bg-primary text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Account</span>
        </div>
        <div className="relative group">
          <FaShoppingBag className="text-primary text-2xl" />
          <span className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-max p-1 text-xs z-[9999] bg-primary text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Cart</span>
        </div>
      </div>
      {/* Side Navbar */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-gray-800 text-white z-[9999] transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} ref={sidebarRef}>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full md:block" />
            <h1 className="font-bold text-2xl">Mobile Hub</h1>
            <MdClose className="text-2xl cursor-pointer" onClick={() => setIsMenuOpen(false)} />
          </div>
          <ul className="mt-10">
            {NavLinks.map((items, index) => (
              <li key={index} className="text-[18px] text-white py-2 border-b border-gray-700">
                <a href={items.link} className="flex items-center justify-between cursor-pointer" onClick={(e) => toggleSubMenu(e, items.id)}>
                  {items.title}
                  {items.arrowForward && <MdArrowForwardIos className={`text-xs ${currentSubMenu === items.id ? 'rotate-90' : ''}`} />}
                </a>
                {items.submenu && currentSubMenu === items.id && (
                  <ul className="ml-4 mt-2">
                    {items.submenu.map((submenuItem, subIndex) => (
                      <li key={subIndex} className="text-[16px] text-gray-300 py-1">
                        <a href={submenuItem.link}>
                          {submenuItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {/* Account section */}
        <div className="md:hidden mt-[200px]">
          <p className="text-white text-center mb-4">
            My Account 
          </p>
          <div className="grid grid-rows-2 gap-4">
            <div className="bottom-0 ml-2 w-60 bg-primary flex justify-center shadow-md cursor-pointer rounded-md">
              <a href="/login" className="text-center text-xl py-2">
                Log in
              </a>
            </div>
            <div className="bottom-0 ml-2 w-60 bg-white flex justify-center shadow-md cursor-pointer rounded-md">
              <a href="/register" className="text-center text-xl text-black py-2">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNav;
