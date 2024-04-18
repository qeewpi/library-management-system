import React from "react";
import AdminNavBar from "./AdminNavBar";
import UserNavBar from "./UserNavBar";

function NavBar({ isAdmin }) {
  return (
    <div className="sticky top-0 z-10">
      {isAdmin ? <AdminNavBar /> : <UserNavBar />}
    </div>
  );
}

export default NavBar;
