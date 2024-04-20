import AddBook from "components/pages/admin/AddBook";
import BorrowedBooks from "components/pages/admin/BorrowedBooks";
import Profile from "components/pages/admin/Profile";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LibraryCatalog from "../pages/admin/LibraryCatalog";
import UserList from "../pages/admin/UserList";

function AdminContent() {
  return (
    <div className="screens-container flex flex-grow">
      <div className="contentDiv px-8 py-16 flex flex-col flex-grow min-h-screen min-w-full bg-[#EDEDED] gap-y-6 overflow-auto">
        <Routes>
          <Route path="/admin/user-list" element={<UserList />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/library-catalog" element={<LibraryCatalog />} />
          <Route path="/admin/borrowed-books" element={<BorrowedBooks />} />
          <Route path="/admin/add-book/*" element={<AddBook />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminContent;
