import AddBook from "components/pages/admin/AddBook";
import AddBorrowedBook from "components/pages/admin/AddBorrowedBook";
import AddUser from "components/pages/admin/AddUser";
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
          <Route path="/admin/add/book" element={<AddBook />} />
          <Route path="/admin/add/user" element={<AddUser />} />
          <Route path="admin/add/borrowed-book" element={<AddBorrowedBook />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminContent;
