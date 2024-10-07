import React from "react";
import { DarkModeContext } from "../Context/DarkModeContext";
import { useContext } from "react";
import { FaEye, FaOpencart, FaShoppingBag, FaUsers  } from "react-icons/fa";

const AdminDashboard = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div
      className={`w-full h-full top-0 right-0 overflow-y-auto ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mt-24">
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center mt-4 mb-10 justify-center">
          <div
            className={`w-64 h-44 border border-gray-400 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-100"
            }`}
          >
            <div className="flex justify-center items-center w-10 h-10 bg-gray-400 rounded-full ml-5 mt-4">
              <FaEye
                className={`text-2xl text-center ${
                  darkMode ? "text-gray-800" : "text-blue-400"
                } `}
              />
            </div>
            <p
              className={`text-3xl font-semibold mt-5 ml-5 -tracking-tighter font-poppins`}
            >
              2425K
            </p>
            <p className={`text-xl font-sans mt-1 ml-5 ${darkMode ? "text-gray-500" : "text-gray-600"}`}>Total Views</p>
          </div>

          <div
            className={`w-64 h-44 border border-gray-400 mt-5 lg:ml-10 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-100"
            }`}
          >
            <div className="flex justify-center items-center w-10 h-10 bg-gray-400 rounded-full ml-5 mt-4">
              <FaOpencart
                className={`text-2xl text-center ${
                  darkMode ? "text-gray-800" : "text-blue-500"
                } `}
              />
            </div>
            <p
              className={`text-3xl font-semibold mt-5 ml-5 -tracking-tighter font-poppins`}
            >
              $321K
            </p>
            <p className={`text-xl font-sans mt-1 ml-5 ${darkMode ? "text-gray-500" : "text-gray-600"}`}>Total Profit</p>
          </div>   
          
          <div
            className={`w-64 h-44 border border-gray-400 mt-5 lg:ml-10 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-100"
            }`}
          >
            <div className="flex justify-center items-center w-10 h-10 bg-gray-400 rounded-full ml-5 mt-4">
              <FaShoppingBag
                className={`text-2xl text-center ${
                  darkMode ? "text-gray-800" : "text-blue-400"
                } `}
              />
            </div>
            <p
              className={`text-3xl font-semibold mt-5 ml-5 -tracking-tighter font-poppins`}
            >
              1459K
            </p>
            <p className={`text-xl font-sans mt-1 ml-5 ${darkMode ? "text-gray-500" : "text-gray-600"}`}>Total Product</p>
          </div>
          
          <div
            className={`w-64 h-44 border border-gray-400 mt-5 lg:ml-10 ${
              darkMode ? "bg-gray-800 text-white" : "bg-gray-100"
            }`}
          >
            <div className="flex justify-center items-center w-10 h-10 bg-gray-400 rounded-full ml-5 mt-4">
              <FaUsers
                className={`text-2xl text-center ${
                  darkMode ? "text-gray-800" : "text-blue-500"
                } `}
              />
            </div>
            <p
              className={`text-3xl font-semibold mt-5 ml-5 -tracking-tighter font-poppins`}
            >
              56790K
            </p>
            <p className={`text-xl font-sans mt-1 ml-5 ${darkMode ? "text-gray-500" : "text-gray-600"}`}>Total Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
