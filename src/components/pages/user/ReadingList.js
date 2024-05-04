import SearchBar from "components/admin-components/SearchBar";
import BookLibrary from "components/user-components/BookLibrary";
import BookSelected from "components/user-components/BookSelected";
import { UserOrderTable } from "components/user-components/UserOrderTable";
import React, { useState } from "react";

function ReadingList() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  const handleFilterChange = (filterValue) => {
    setFilterValue(filterValue);
  };

  const filters = [
    { value: "BORROWED", label: "Borrowed" },
    { value: "OVERDUE", label: "Overdue" },
    { value: "RETURNED", label: "Returned" },
    { value: "", label: "All Orders" },
  ];

  // Use filterValue if it's not an empty string, otherwise use searchValue
  const valueToUse = filterValue !== "" ? filterValue : searchValue;

  return (
    <div>
      <div className="flex flex-1 items-center gap-4 flex-col md:self-stretch max-w-screen">
        <div className="flex flex-col space-y-4 xl:space-y-0 xl:flex-row xl:space-x-4 max-w-screen">
          <div className="flex-1">
            <BookLibrary setSelectedBook={setSelectedBook} />
          </div>
          <div className="flex-1">
            <BookSelected selectedBook={selectedBook} />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl flex flex-col gap-y-6 p-6 mt-4 overflow-x-auto max-w-screen">
        <h1 className="text-xl font-semibold text-black-900">
          Your Order History
        </h1>
        <SearchBar
          onSearchChange={handleSearchChange}
          onFilterChange={handleFilterChange}
          filters={filters}
        />
        <UserOrderTable searchValue={valueToUse} />
      </div>
    </div>
  );
}

export default ReadingList;
