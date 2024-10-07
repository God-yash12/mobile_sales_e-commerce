import React, { useContext } from "react";
import UserProfile from "../assets/Logo.png";
import { FaBars, FaSun, FaMoon, FaSearch, FaTimes } from "react-icons/fa";
import { MdNotifications, MdMessage } from "react-icons/md";
import { DarkModeContext } from "../Context/DarkModeContext";
import Logo from "../assets/Logo.png"

const TopNavbar = ({togglSidebar, isSidebarOpen}) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`fixed shadow-lg top-0 w-full
      ${darkMode ? "bg-gray-900" : ""}
    `}
    >
      <div className="py-3">
        <div className="flex justify-between items-center flex-wrap">
          {/* logo */}
        <div className="hidden lg:flex items-center ml-8">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-gray-600 text-lg font-bold ml-4">A2Z Mobile Shop</span>
        </div>
          {/* Hamburger button visible only on medium and small screens */}
          <div className="block md:hidden ml-5">
            {isSidebarOpen ? (
              <FaTimes
                onClick={togglSidebar}
                className={`w-6 h-6 cursor-pointer z-50 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              />
            ) : (
              <FaBars
                onClick={togglSidebar}
                className={`w-6 h-6 cursor-pointer z-50 ${
                  darkMode ? "text-white" : "text-gray-700"
                }`}
              />
            )}
          </div>
    
          {/* Search - hidden on medium and small screens */}
          <div className="hidden lg:flex items-center space-x-2 cursor-pointer ">
            <FaSearch
              className={`w-6 h-5 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            />
            <input
              type="text"
              placeholder="Search..."
              className={`w-full lg:w-auto outline-none border-none h-8 px-2 rounded-md 
              ${
                darkMode
                  ? "bg-gray-900 text-gray-200"
                  : " text-gray-800"
              }
            `}
            />
          </div>

          {/* Notification, Messages, Dark Mode, Profile */}
          <div className="flex items-center space-x-4 mr-10">
            {/* Dark mode */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full cursor-pointer ${
                darkMode
                  ? "bg-gray-700 text-white"
                  : "bg-gray-400 text-gray-800"
              }`}
            >
              {darkMode ? (
                <FaSun className="w-7 h-7" />
              ) : (
                <FaMoon className="w-7 h-7" />
              )}
            </button>

            {/* Notifications */}
            <div className="relative cursor-pointer">
              <MdNotifications
                className={`w-8 h-8 ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              />
            </div>

            {/* Messages */}
            <div className="relative cursor-pointer">
              <MdMessage
                className={`w-8 h-8 ${
                  darkMode ? "text-gray-200" : "text-gray-700"
                }`}
              />
            </div>

            {/* Profile and Name */}
            <div className="flex items-center space-x-2 sm:space-x-4 cursor-pointer">
              {/* Hide name on small screens */}
              <span
                className={`hidden sm:inline-block font-poppins text-sm ${
                  darkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Ganesh Thapa
              </span>
              <img
                src={UserProfile}
                alt="User profile"
                className="rounded-full w-8 h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
