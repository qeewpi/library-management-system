import { AdminTable } from "components/admin-components/AdminTable";
import { ButtonGroup } from "components/admin-components/ButtonGroup";
import SearchBar from "components/admin-components/SearchBar";
import React, { useState } from "react";

function AdminList() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div>
          <h1 className="text-xl">Admin Table</h1>
        </div>
        <div className="flex gap-y-4 flex-col xl:flex-row justify-between">
          <SearchBar onSearchChange={handleSearchChange} />
          <div className="w-2/4">
            <ButtonGroup
              button1={"Add Admin"}
              button2={"Delete Admin"}
              button1Link={"add/admin"}
              button2Link={"delete/admin"}
            />
          </div>
        </div>
        <AdminTable searchValue={searchValue} />
      </div>
    </div>
  );
}

export default AdminList;
