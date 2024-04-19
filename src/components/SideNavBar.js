import React from "react";
import UserSideNavBar from "./user-components/UserSideNavBar";
import AdminSideNavBar from "./admin-components/AdminSideNavBar";

function SideNavBar({ isAdmin }) {
  return (
    <div className="">{isAdmin ? <AdminSideNavBar /> : <UserSideNavBar />}</div>
  );
}

export default SideNavBar;
