import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "../pages/admin/UserList";
// Import admin-specific components
// import AdminDashboard from "components/pages/AdminDashboard";
// import AdminUsers from "components/pages/AdminUsers";

function AdminContent() {
  return (
    <div className="screens-container flex flex-grow">
      <div className="contentDiv px-8 py-16 flex flex-col flex-grow min-h-screen min-w-full bg-[#EDEDED] gap-y-6 overflow-auto">
        <Routes>
          {/* Define routes for admin pages */}
          {/* Example: */}
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
          {/* <Route path="/admin/users" element={<AdminUsers />} /> */}
          <Route path="/admin/user-list" element=<UserList /> />
        </Routes>
      </div>
    </div>
  );
}

export default AdminContent;
