import AddBook from "components/pages/admin/AddBook";
import AddBorrowedBook from "components/pages/admin/AddBorrowedBook";
import AddUser from "components/pages/admin/AddUser";
import BorrowedBooks from "components/pages/admin/BorrowedBooks";
import DeleteBook from "components/pages/admin/DeleteBook";
import DeleteBorrowedBook from "components/pages/admin/DeleteBorrowedBook";
import DeleteUser from "components/pages/admin/DeleteUser";
import Profile from "components/pages/admin/Profile";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LibraryCatalog from "../pages/admin/LibraryCatalog";
import UserList from "../pages/admin/UserList";
import AdminList from "components/pages/admin/AdminList";

function AdminContent() {
  return (
    <div className="screens-container flex flex-grow">
      <div className="contentDiv px-8 py-16 flex flex-col flex-grow min-h-screen min-w-full bg-[#EDEDED] gap-y-6 overflow-auto">
        <Routes>
          <Route path="/admin/user-list" element={<UserList />} />
          <Route path="/admin/admin-list" element={<AdminList />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/library-catalog" element={<LibraryCatalog />} />
          <Route path="/admin/borrowed-books" element={<BorrowedBooks />} />
          <Route path="/admin/add/book" element={<AddBook />} />
          <Route path="/admin/add/user" element={<AddUser />} />
          <Route path="admin/add/borrowed-book" element={<AddBorrowedBook />} />
          <Route path="admin/delete/book" element={<DeleteBook />} />
          <Route path="admin/delete/user" element={<DeleteUser />} />
          <Route
            path="admin/delete/borrowed-book"
            element={<DeleteBorrowedBook />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default AdminContent;
