import AdminWelcome from "components/admin-components/AdminWelcome";
import { ButtonGroup } from "components/admin-components/ButtonGroup";
import SearchBar from "components/admin-components/SearchBar";
import React from "react";
import { UserTable } from "../../admin-components/UserTable";

function UserList() {
  return (
    <div className="flex flex-col gap-y-6">
      <AdminWelcome />
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div>
          <h1 className="text-xl">User Table</h1>
        </div>
        <div className="flex flex-row justify-between">
          <SearchBar />
          <ButtonGroup />
        </div>
        <UserTable />
      </div>
    </div>
  );
}

export default UserList;
