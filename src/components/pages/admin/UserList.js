import AdminWelcome from "components/admin-components/AdminWelcome";
import { ButtonGroup } from "components/admin-components/ButtonGroup";
import SearchBar from "components/admin-components/SearchBar";
import React, { useState } from "react";
import { UserTable } from "../../admin-components/UserTable";

function UserList() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  const handleFilterChange = (filterValue) => {
    setFilterValue(filterValue);
  };

  const filters = [
    { value: "Admin", label: "Admin" },
    { value: "User", label: "User" },
    { value: "", label: "All Users" },
  ];

  // Use filterValue if it's not an empty string, otherwise use searchValue
  const valueToUse = filterValue !== "" ? filterValue : searchValue;

  return (
    <div className="flex flex-col gap-y-6 max-w-screen">
      <AdminWelcome />
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div>
          <h1 className="text-xl">User Table</h1>
        </div>
        <div className="flex gap-y-4 flex-col lg:flex-row justify-between">
          <SearchBar
            onSearchChange={handleSearchChange}
            onFilterChange={handleFilterChange}
            filters={filters}
          />
          <div className="w-2/4">
            <ButtonGroup
              button1={"Add User"}
              button2={"Delete User"}
              button1Link={"add/user"}
              button2Link={"delete/user"}
            />
          </div>
        </div>
        <UserTable searchValue={valueToUse} />
      </div>
    </div>
  );
}

export default UserList;
