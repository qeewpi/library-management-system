import React from "react";
import UserSideNavBar from "../components/UserSideNavBar";
import AdminSideNavBar from "./AdminSideNavBar";

function SideNavBar({ isAdmin }) {
  return (
    <div className="">{isAdmin ? <AdminSideNavBar /> : <UserSideNavBar />}</div>
  );
}

export default SideNavBar;
