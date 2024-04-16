import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import activeHomeIcon from "../icons/activeHomeIcon.svg";
import browseLibraryIcon from "../icons/browseLibrary.svg";
import homeIcon from "../icons/home.svg";
import profileIcon from "../icons/profile.svg";
import readingListIcon from "../icons/readingList.svg";

function SideNavBar() {
  const location = useLocation();

  return (
    <div className="flex flex-col py-16 gap-y-2 flex-grow bg-customWhite items-start">
      <NavLink
        to={"/home"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/home" ? "text-primaryBlue" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/home" ? (
            <img src={activeHomeIcon} alt="" className="w-4 h-4" />
          ) : (
            <img src={homeIcon} alt="" className="w-4 h-4" />
          )}
          <h1 className="">Home</h1>
        </div>
      </NavLink>
      <NavLink
        to={"/reading-list"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/reading-list" ? "text-primaryBlue" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/reading-list" ? (
            <img src={activeHomeIcon} alt="" className="w-4 h-4" />
          ) : (
            <img src={readingListIcon} alt="" className="w-4 h-4" />
          )}
          <h1 className="">Reading List</h1>
        </div>
      </NavLink>
      <NavLink
        to={"/browse-library"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/browse-library" ? "text-primaryBlue" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/browse-library" ? (
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M3.5 0C4.328 0 5 0.672 5 1.5V16.5C5 17.328 4.328 18 3.5 18H1.5C0.672 18 0 17.328 0 16.5V1.5C0 0.672 0.672 0 1.5 0H3.5ZM9.5 0C10.328 0 11 0.672 11 1.5V16.5C11 17.328 10.328 18 9.5 18H7.5C6.672 18 6 17.328 6 16.5V1.5C6 0.672 6.672 0 7.5 0H9.5ZM16.781 3.1238L19.995 15.6428C20.201 16.4448 19.718 17.2628 18.915 17.4688L17.039 17.9498C16.236 18.1558 15.419 17.6728 15.213 16.8698L11.999 4.3528C11.793 3.5498 12.276 2.7328 13.079 2.5268L14.955 2.0438C15.758 1.8388 16.575 2.3228 16.781 3.1238Z"
                fill="#00204A"
              />
            </svg>
          ) : (
            <img src={browseLibraryIcon} alt="" className="w-4 h-4" />
          )}
          <h1 className="">Browse Library</h1>
        </div>
      </NavLink>
      <NavLink
        to={"/profile"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/profile" ? "text-primaryBlue" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/profile" ? (
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
            >
              <path
                d="M13.7545 12.0002C14.9966 12.0002 16.0034 13.007 16.0034 14.2491V15.1675C16.0034 15.7409 15.8242 16.2999 15.4908 16.7664C13.9449 18.9296 11.4206 20.0013 8.0004 20.0013C4.5794 20.0013 2.05643 18.9292 0.514266 16.7648C0.182306 16.2989 0.00390625 15.7411 0.00390625 15.169V14.2491C0.00390625 13.007 1.01076 12.0002 2.25278 12.0002H13.7545ZM8.0004 0.00488281C10.7618 0.00488281 13.0004 2.24346 13.0004 5.00488C13.0004 7.76631 10.7618 10.0049 8.0004 10.0049C5.23894 10.0049 3.00036 7.76631 3.00036 5.00488C3.00036 2.24346 5.23894 0.00488281 8.0004 0.00488281Z"
                fill="#00204A"
              />
            </svg>
          ) : (
            <img src={profileIcon} alt="" className="w-4 h-4" />
          )}
          <h1 className="">Profile</h1>
        </div>
      </NavLink>
    </div>
  );
}

export default SideNavBar;
