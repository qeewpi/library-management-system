import AdminWelcome from "components/AdminWelcome";
import React from "react";
import { UserTable } from "../UserTable";

function UserList() {
  return (
    <div className="flex flex-col gap-y-6">
      <AdminWelcome />
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div>
          <h1 className="text-xl">User Table</h1>
        </div>
        <UserTable />
      </div>
    </div>
  );
}

export default UserList;
