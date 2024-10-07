import React, { useState } from "react";
import TopNavbar from "../Admin/TopNavbar";
import SideNavbar from "../Admin/SideNavbar";
import { Outlet } from "react-router-dom";
import { DarkModeProvider } from "../Context/DarkModeContext";

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const togglSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <DarkModeProvider>
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed h-full top-16 w-64 left-0 z-20 bg-gray-900 transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full top-0"
          } md:translate-x-0`}
        >
          <SideNavbar />
        </div>

        {/* Main Content */}
        <div className="flex-grow transition-all duration-300 ease-in-out">
          {/* Top Navbar */}
          <div className={`fixed w-full z-50`}>
            <TopNavbar togglSidebar={togglSidebar} isSidebarOpen={isSidebarOpen}/>
          </div>

          {/* Page Content */}
          <div className="mt-12">
            <Outlet />
          </div>
        </div>
      </div>
    </DarkModeProvider>
  );
};

export default AdminLayout;
