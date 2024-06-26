import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthService from "service/AuthService";
import brandSVG from "../../icons/brand.svg";
import userFilledSVG from "../../icons/user-filled.svg";

function AdminNavBar() {
  let navigate = useNavigate();
  const location = useLocation();
  const currentUser = AuthService.getCurrentUser();

  const handleLogout = async () => {
    AuthService.logout();
    navigate("/log-in");
  };

  if (
    location.pathname === "/" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/log-in"
  ) {
    return null;
  }

  return (
    <div className="bg-white">
      <div className="pl-16 py-12 pr-8 flex justify-between flex-row">
        <NavLink
          to={"/admin/user-list"}
          className={`navItems font-semibold flex flex-row items-center justify-start gap-x-6 w-1/4 ${
            location.pathname === "/home" ? "" : ""
          }`}
        >
          <div className="flex flex-row gap-2 items-center justify-start w-4  ```````````````````````1`0 lg:w-96 transform transition duration-500 hover:scale-110">
            <img src={brandSVG} alt="" />
            <h1 className="text-2xl flex-grow ">BookMarked</h1>
          </div>
        </NavLink>
        <div className="flex flex-row-reverse gap-x-8 w-40 lg:w-96 items-center text-sm">
          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-grow items-center pr-2">
              <img src={userFilledSVG} alt="" />
            </div>
            <NavLink to="/admin/profile" className="navItems">
              <div className="nameDiv flex flex-col hidden xl:block">
                <h1>{currentUser.name}</h1>
                <h1 className="text-gray-500">Admin</h1>
              </div>
            </NavLink>

            <button
              className="p-2 items-start transform transition duration-500 hover:scale-110"
              onClick={handleLogout}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logOutSVG"
              >
                <path
                  d="M8.50215 11.4995C9.05562 11.4995 9.5043 11.9482 9.5043 12.5017C9.5043 13.0552 9.05562 13.5038 8.50215 13.5038C7.94868 13.5038 7.5 13.0552 7.5 12.5017C7.5 11.9482 7.94868 11.4995 8.50215 11.4995ZM12 4.3537V10.4995L12.0005 11.0045L19.442 11.0035L17.7196 9.27977C17.4534 9.01346 17.4292 8.59679 17.6471 8.30321L17.7198 8.21911C17.9861 7.95289 18.4027 7.92875 18.6963 8.14666L18.7804 8.21929L21.777 11.2169C22.043 11.483 22.0674 11.8992 21.85 12.1928L21.7775 12.2769L18.7809 15.2803C18.4884 15.5736 18.0135 15.5741 17.7203 15.2816C17.4537 15.0156 17.429 14.599 17.6465 14.3051L17.7191 14.2209L19.432 12.5035L12.0005 12.5045L12 19.2495C12 19.7159 11.5788 20.0692 11.1196 19.9881L2.61955 18.4868C2.26121 18.4235 2 18.1121 2 17.7482V5.74953C2 5.38222 2.26601 5.06896 2.62847 5.00944L11.1285 3.61361C11.5851 3.53863 12 3.89097 12 4.3537ZM10.5 5.2369L3.5 6.38641V17.1191L10.5 18.3555V5.2369ZM13 18.5008L13.7652 18.501L13.867 18.4941C14.2335 18.4443 14.5158 18.1299 14.5152 17.7497L14.508 13.4995H13V18.5008ZM13.002 9.99953L13 8.72487V4.99952L13.7453 4.99953C14.1245 4.99953 14.4381 5.28105 14.4883 5.64664L14.4953 5.74829L14.502 9.99953H13.002Z"
                  fill="#212121"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavBar;
