import React from "react";
import browseLibraryIcon from "../icons/browseLibrary.svg";
import homeIcon from "../icons/home.svg";
import profileIcon from "../icons/profile.svg";
import readingListIcon from "../icons/readingList.svg";

function SideNavBar() {
  return (
    <div className="flex flex-col py-16 gap-y-2 flex-grow bg-customWhite items-start">
      <div className="navItems px-16 font-semibold flex flex-row items-center gap-x-6">
        <img src={homeIcon} alt="" className="w-4 h-4" />
        <h1 className="w-10 md:w-48">Home</h1>
      </div>
      <div className="navItems px-16 font-semibold flex flex-row items-center gap-x-6">
        <img src={readingListIcon} alt="" className="w-4 h-4" />
        <h1 className="w-10 md:w-48">Reading List</h1>
      </div>
      <div className="navItems px-16 font-semibold flex flex-row items-center gap-x-6">
        <img src={browseLibraryIcon} alt="" className="w-4 h-4" />
        <h1 className="w-10 md:w-48">Browse Library</h1>
      </div>
      <div className="navItems px-16 font-semibold flex flex-row items-center gap-x-6">
        <img src={profileIcon} alt="" className="w-4 h-4" />
        <h1 className="w-10 md:w-48">Profile</h1>
      </div>
    </div>
  );
}

export default SideNavBar;
