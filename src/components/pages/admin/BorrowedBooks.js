import React from "react";
import AdminWelcome from "components/admin-components/AdminWelcome";
import { BooksBorrowedDetails } from "../../admin-components/BooksBorrowedDetails";

function BorrowedBooks() {
  return (
    <div className="flex flex-col gap-y-6">
      <AdminWelcome />
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div>
          <h1 className="text-xl">Borrowed Books</h1>
        </div>
        <BooksBorrowedDetails />
      </div>
    </div>
  );
}

export default BorrowedBooks;
