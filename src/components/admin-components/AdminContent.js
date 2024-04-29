import AddAdmin from "components/pages/admin/AddAdmin";
import AddBook from "components/pages/admin/AddBook";
import AddBorrowedBook from "components/pages/admin/AddBorrowedBook";
import AddUser from "components/pages/admin/AddUser";
import AdminList from "components/pages/admin/AdminList";
import BorrowedBooks from "components/pages/admin/BorrowedBooks";
import DeleteAdmin from "components/pages/admin/DeleteAdmin";
import DeleteBook from "components/pages/admin/DeleteBook";
import DeleteBorrowedBook from "components/pages/admin/DeleteBorrowedBook";
import DeleteUser from "components/pages/admin/DeleteUser";
import EditUser from "components/pages/admin/EditUser";
import OrderList from "components/pages/admin/OrderList";
import Profile from "components/pages/admin/Profile";
import ViewUser from "components/pages/admin/ViewUser";
import React from "react";
import { Route, Routes } from "react-router-dom";
import LibraryCatalog from "../pages/admin/LibraryCatalog";
import UserList from "../pages/admin/UserList";
import ViewBook from "../pages/admin/ViewBook";
import EditBook from "components/pages/admin/EditBook";
import ViewOrder from "../pages/admin/ViewOrder";
import DeleteOrder from "components/pages/admin/DeleteOrder";

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
          {/* USER OPERATIONS */}
          <Route path="/admin/add/book" element={<AddBook />} />
          <Route path="/admin/add/user" element={<AddUser />} />
          <Route path="/admin/edit/user/:id" element={<EditUser />} />
          <Route path="/admin/view/user/:id" element={<ViewUser />} />
          <Route path="/admin/view/book/:id" element={<ViewBook />} />
          <Route path="/admin/edit/book/:id" element={<EditBook />} />
          <Route path="/admin/view/order/:id" element={<ViewOrder />} />

          <Route path="/admin/add/admin" element={<AddAdmin />} />
          <Route path="admin/add/borrowed-book" element={<AddBorrowedBook />} />
          <Route path="admin/delete/admin" element={<DeleteAdmin />} />
          <Route path="admin/delete/book" element={<DeleteBook />} />
          <Route path="admin/delete/user" element={<DeleteUser />} />
          <Route path="admin/delete/order" element={<DeleteOrder />} />
          <Route
            path="admin/delete/borrowed-book"
            element={<DeleteBorrowedBook />}
          />

          <Route path="admin/orders" element={<OrderList />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminContent;
