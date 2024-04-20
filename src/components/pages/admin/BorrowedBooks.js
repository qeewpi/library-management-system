import SearchBar from "components/admin-components/SearchBar";
import React from "react";
import { BooksBorrowedDetails } from "../../admin-components/BooksBorrowedDetails";
import { ButtonGroup } from "../../admin-components/ButtonGroup";

function BorrowedBooks() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div>
          <h1 className="text-xl">Borrowed Books</h1>
        </div>
        <div className="flex flex-row justify-between">
          <SearchBar />
          <ButtonGroup
            button1={"Add Borrowed Book"}
            button2={"Delete Borrowed Book"}
          />
        </div>
        <BooksBorrowedDetails />
      </div>
    </div>
  );
}

export default BorrowedBooks;
