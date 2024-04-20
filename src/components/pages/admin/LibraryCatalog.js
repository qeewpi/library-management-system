import SearchBar from "components/admin-components/SearchBar";
import React from "react";
import BooksTable from "./../../admin-components/BooksTable";
import { ButtonGroup } from "./../../admin-components/ButtonGroup";

function LibraryCatalog() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-xl">Library Catalog</h1>
          <div className="flex flex-row justify-between">
            <SearchBar />
            <ButtonGroup button1={"Add Book"} button2={"Delete Book"} />
          </div>
        </div>
        <BooksTable />
      </div>
    </div>
  );
}

export default LibraryCatalog;
