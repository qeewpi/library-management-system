import SearchBar from "components/admin-components/SearchBar";
import React, { useState } from "react";
import BooksTable from "./../../admin-components/BooksTable";
import { ButtonGroup } from "./../../admin-components/ButtonGroup";

function LibraryCatalog() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  return (
    <div className="flex flex-col gap-y-6 max-w-screen">
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-xl">Library Catalog</h1>
          <div className="flex flex-row justify-between">
            <SearchBar onSearchChange={handleSearchChange} />
            <ButtonGroup
              button1={"Add Book"}
              button2={"Delete Book"}
              button1Link={"add/book"}
              button2Link={"delete/book"}
            />
          </div>
        </div>
        <BooksTable searchValue={searchValue} />
      </div>
    </div>
  );
}

export default LibraryCatalog;
