import SearchBar from "components/admin-components/SearchBar";
import React, { useState } from "react";
import BooksTable from "./../../admin-components/BooksTable";
import { ButtonGroup } from "./../../admin-components/ButtonGroup";

function LibraryCatalog() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  const handleFilterChange = (filterValue) => {
    setFilterValue(filterValue);
  };

  const genres = ["FICTION", "NON_FICTION", "MYSTERY", "FANTASY", "BIOGRAPHY"];

  const filters = [
    { value: "FICTION", label: "Fiction" },
    { value: "NON_FICTION", label: "Non-fiction" },
    { value: "MYSTERY", label: "Mystery" },
    { value: "FANTASY", label: "Fantasy" },
    { value: "BIOGRAPHY", label: "Biography" },
    { value: "", label: "All Genres" },
  ];

  // Use filterValue if it's not an empty string, otherwise use searchValue
  const valueToUse = filterValue !== "" ? filterValue : searchValue;

  return (
    <div className="flex flex-col gap-y-6 max-w-screen">
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-xl">Library Catalog</h1>
          <div className="flex flex-row justify-between">
            <SearchBar
              onSearchChange={handleSearchChange}
              onFilterChange={handleFilterChange}
              filters={filters}
            />
            <ButtonGroup
              button1={"Add Book"}
              button2={"Delete Book"}
              button1Link={"add/book"}
              button2Link={"delete/book"}
            />
          </div>
        </div>
        <BooksTable searchValue={valueToUse} />
      </div>
    </div>
  );
}

export default LibraryCatalog;
