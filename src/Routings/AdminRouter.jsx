// AdminRouter.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import Forms from "../Admin/Forms";
import AdminLayout from "../layout/AdminLayout"; // Import the AdminLayout
import Calendar from "../Admin/Calender"
import Tables from "../Admin/Tables";
import Settings from "../Admin/Settings";
// import Logout from "../Admin/Logout";

const AdminRouter = () => {
  return (
    <Routes>
     
      <Route path="/" element={<AdminLayout />}>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="Forms" element={<Forms />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="Tables" element={<Tables />} />
        <Route path="Settings" element={<Settings />} />
        {/* <Route path="Logout" element={<Logout />} /> */}
      </Route>
    </Routes>
  );
};

export default AdminRouter;
