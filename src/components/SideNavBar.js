import React from "react";
import AdminSideNavBar from "./admin-components/AdminSideNavBar";
import UserSideNavBar from "./user-components/UserSideNavBar";

function SideNavBar({ isAdmin }) {
  return (
    <div className="">{isAdmin ? <AdminSideNavBar /> : <UserSideNavBar />}</div>
  );
}

export default SideNavBar;
