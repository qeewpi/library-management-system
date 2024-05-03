import SearchBar from "components/admin-components/SearchBar";
import BookLibrary from "components/user-components/BookLibrary";
import BookSelected from "components/user-components/BookSelected";
import { UserOrderTable } from "components/user-components/UserOrderTable";
import React, { useState } from "react";

function ReadingList() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue);
  };
  return (
    <div>
      <div className="flex flex-1 items-center gap-4 flex-col md:self-stretch max-w-screen">
        <div className="flex flex-col lg:flex-row space-x-4 max-w-screen">
          <div className="flex-1">
            <BookLibrary setSelectedBook={setSelectedBook} />
          </div>
          <div className="flex-1">
            <BookSelected selectedBook={selectedBook} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl flex flex-col gap-y-6 p-6 mt-4">
        <h1 className="text-xl font-semibold text-black-900">
          Your Order History
        </h1>
        <SearchBar onSearchChange={handleSearchChange} />
        <UserOrderTable searchValue={searchValue} />
      </div>
    </div>
  );
}

export default ReadingList;
