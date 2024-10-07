import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import {
  MdOutlineDashboard,
  MdFormatListBulletedAdd,
  MdOutlineSettings,
  MdLogout,
} from "react-icons/md";
import { FaCalendar, FaTable } from "react-icons/fa";
import "@fontsource/poppins";

const SideNavbar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="w-auto  ">
        {/* Logo section */}
        <div className="lg:hidden flex mt-5 items-center ml-6">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-white text-lg font-bold ml-4">A2Z Mobile Shop</span>
        </div>

        {/* Menu section */}
        <div>
          <div className="ml-9 flex justify-between items-center">
            <header className="text-gray-400 mt-10 text-2xl font-bold uppercase font-poppins tracking-wider">
              Menu
            </header>
          </div>

          {/* Menu items */}
          <div className="mt-10">
            {/* Dashboard */}
            <Link to="dashboard">
              <div
                onClick={() => handleActiveItem("Dashboard")}
                className={`flex items-center text-gray-400 text-xl hover:bg-gray-600 ml-2 px-6 transition-all duration-300 py-2 mr-7 cursor-pointer rounded-md ${
                  activeItem === "Dashboard" ? "bg-gray-600 text-gray-100" : ""
                }`}
              >
                <MdOutlineDashboard className="text-xl text-gray-200" />
                <span className="ml-4 text-lg font-poppins">Dashboard</span>
              </div>
            </Link>

            {/* Calendar */}
            <Link to="calendar">
              <div
                onClick={() => handleActiveItem("Calendar")}
                className={`flex items-center text-gray-400 text-xl hover:bg-gray-600 ml-2 px-6 transition-all duration-300 py-2 mr-7 mt-2 cursor-pointer rounded-md ${
                  activeItem === "Calendar" ? "bg-gray-600 text-gray-100" : ""
                }`}
              >
                <FaCalendar className="text-xl text-gray-200" />
                <span className="ml-4 text-lg font-poppins">Calendar</span>
              </div>
            </Link>

            {/* Table */}
            <Link to="tables">
              <div
                onClick={() => handleActiveItem("Table")}
                className={`flex items-center text-gray-400 text-xl hover:bg-gray-600 ml-2 px-6 transition-all duration-300 py-2 mr-7 mt-2 cursor-pointer rounded-md ${
                  activeItem === "Table" ? "bg-gray-600 text-gray-100" : ""
                }`}
              >
                <FaTable className="text-xl text-gray-200" />
                <span className="ml-4 text-lg font-poppins">Table</span>
              </div>
            </Link>

            {/* Forms */}
            <Link to="forms">
              <div
                onClick={() => handleActiveItem("Forms")}
                className={`flex items-center text-gray-400 text-xl hover:bg-gray-600 ml-2 px-6 transition-all duration-300 py-2 mr-7 mt-2 cursor-pointer rounded-md ${
                  activeItem === "Forms" ? "bg-gray-600 text-gray-100" : ""
                }`}
              >
                <MdFormatListBulletedAdd className="text-xl text-gray-200" />
                <span className="ml-4 text-lg font-poppins">Forms</span>
              </div>
            </Link>

            {/* Settings */}
            <Link to="settings">
              <div
                onClick={() => handleActiveItem("Settings")}
                className={`flex items-center text-gray-400 text-xl hover:bg-gray-600 ml-2 px-6 transition-all duration-300 py-2 mr-7 mt-2 cursor-pointer rounded-md ${
                  activeItem === "Settings" ? "bg-gray-600 text-gray-100" : ""
                }`}
              >
                <MdOutlineSettings className="text-xl text-gray-200" />
                <span className="ml-4 text-lg font-poppins">Settings</span>
              </div>
            </Link>

            {/* Logout */}
            <div className="mt-5">
              <span className="text-gray-300 font-bold text-lg uppercase font-poppins tracking-wider ml-8">
                Others
              </span>
              <Link to="logout">
                <div
                  onClick={() => handleActiveItem("Logout")}
                  className={`flex items-center text-gray-400 text-xl hover:bg-gray-600 transition-all duration-300 py-2 mr-7 cursor-pointer rounded-md mt-5 ml-2 px-6 ${
                    activeItem === "Logout" ? "bg-gray-600 text-gray-100" : ""
                  }`}
                >
                  <MdLogout className="text-xl text-gray-200" />
                  <span className="ml-4 text-lg font-poppins">Logout</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
