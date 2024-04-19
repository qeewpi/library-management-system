import React from "react";
import { Route, Routes } from "react-router-dom";
import UserList from "../pages/admin/UserList";
import Profile from "components/pages/admin/Profile";
import BorrowedBooks from "components/pages/admin/BorrowedBooks";
// Import admin-specific components
// import AdminDashboard from "components/pages/AdminDashboard";
// import AdminUsers from "components/pagess/AdminUsers";

function AdminContent() {
  return (
    <div className="screens-container flex flex-grow">
      <div className="contentDiv px-8 py-16 flex flex-col flex-grow min-h-screen min-w-full bg-[#EDEDED] gap-y-6 overflow-auto">
        <Routes>
          {/* Define routes for admin pages */}
          {/* Example: */}
          {/* <Route path="/admin/dashboard" element={<AdminDashboard />} /> */}
          {/* <Route path="/admin/users" element={<AdminUsers />} /> */}
          <Route path="/admin/user-list" element={<UserList />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/borrowed-books" element={<BorrowedBooks />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminContent;
