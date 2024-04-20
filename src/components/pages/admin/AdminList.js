import { ButtonGroup } from "components/admin-components/ButtonGroup";
import SearchBar from "components/admin-components/SearchBar";
import React from "react";
import { AdminTable } from "components/admin-components/AdminTable";

function AdminList() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div>
          <h1 className="text-xl">Admin Table</h1>
        </div>
        <div className="flex gap-y-4 flex-col xl:flex-row justify-between">
          <SearchBar />
          <div className="w-2/4 2xl:w-1/4">
            <ButtonGroup
              button1={"Add User"}
              button2={"Delete User"}
              button1Link={"add/user"}
              button2Link={"delete/user"}
            />
          </div>
        </div>
        <AdminTable />
      </div>
    </div>
  );
}

export default AdminList;
