import { motion, useAnimationControls } from "framer-motion";
import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import AuthService from "service/AuthService";

function UserSideNavBarMobile({}) {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
    } else {
      containerControls.start("close");
    }
  }, [isOpen]);

  const containerVariants = {
    close: {
      width: 0,
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    open: {
      width: "18rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const handleBackClick = () => {
    handleOpenClose(); // Call the onClose function passed from UserNavBar
  };

  const location = useLocation();

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  if (
    location.pathname === "/" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/log-in"
  ) {
    return null;
  }

  return (
    <motion.nav
      variants={containerVariants}
      initial="close"
      className="absolute flex flex-col py-16 w-72 gap-y-2 h-screen bg-primaryBlue text-white items-start"
      animate={containerControls}
    >
      <div className=" px-8 font-semibold flex flex-row items-center gap-x-6 w-full pb-4">
        <h1 className="font-medium">
          Welcome, <span className="font-bold">{currentUser.name}</span>
        </h1>
        <button onClick={handleBackClick}>
          <span className="badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m4 10l-.707.707L2.586 10l.707-.707zm17 8a1 1 0 1 1-2 0zM8.293 15.707l-5-5l1.414-1.414l5 5zm-5-6.414l5-5l1.414 1.414l-5 5zM4 9h10v2H4zm17 7v2h-2v-2zm-7-7a7 7 0 0 1 7 7h-2a5 5 0 0 0-5-5z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
      <NavLink
        to={"/home"}
        className={`navItems px-8 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/home" ? "text-primaryYellow" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
          {location.pathname === "/home" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              className="fill-primaryYellow"
            >
              <path d="M10.45.533a2.25 2.25 0 0 0-2.9 0L.8 6.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.783 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V13.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V7.947a2.25 2.25 0 0 0-.8-1.72L10.45.534Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              className="fill-white"
            >
              <path d="M7.55.532a2.25 2.25 0 0 1 2.9 0l6.75 5.692c.507.428.8 1.057.8 1.72v9.31a1.75 1.75 0 0 1-1.75 1.75h-3.5a1.75 1.75 0 0 1-1.75-1.75v-5.007a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25v5.007a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 0 17.254v-9.31c0-.663.293-1.292.8-1.72L7.55.532Zm1.933 1.147a.75.75 0 0 0-.966 0L1.767 7.37a.75.75 0 0 0-.267.573v9.31c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-5.007c0-.967.784-1.75 1.75-1.75h3.5c.966 0 1.75.783 1.75 1.75v5.007c0 .138.112.25.25.25h3.5a.25.25 0 0 0 .25-.25v-9.31a.75.75 0 0 0-.267-.573l-6.75-5.692Z" />
            </svg>
          )}
          <h1
            className={`font-normal ${
              location.pathname === "/home" ? "font-semibold" : ""
            }`}
          >
            Home
          </h1>
        </div>
      </NavLink>
      <NavLink
        to={"/reading-list"}
        className={`navItems px-8 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/reading-list" ? "text-primaryYellow" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
          {location.pathname === "/reading-list" ? (
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow -ml-1"
            >
              <path d="M17.7499 2.00098C18.9407 2.00098 19.9155 2.92614 19.9947 4.09693L19.9999 4.25098V19.749C19.9999 20.9399 19.0747 21.9147 17.9039 21.9939L17.7499 21.999H6.25C5.05914 21.999 4.08436 21.0739 4.00519 19.9031L4 19.749V4.25098C4 3.06011 4.92516 2.08533 6.09595 2.00617L6.25 2.00098H17.7499ZM12.2481 12.9973H7.74994L7.64817 13.0042C7.28209 13.0538 6.99994 13.3676 6.99994 13.7473C6.99994 14.127 7.28209 14.4408 7.64817 14.4905L7.74994 14.4973H12.2481L12.3498 14.4905C12.7159 14.4408 12.9981 14.127 12.9981 13.7473C12.9981 13.3676 12.7159 13.0538 12.3498 13.0042L12.2481 12.9973ZM16.2499 9.99866H7.74994L7.64817 10.0055C7.28209 10.0552 6.99994 10.369 6.99994 10.7487C6.99994 11.1284 7.28209 11.4421 7.64817 11.4918L7.74994 11.4987H16.2499L16.3517 11.4918C16.7178 11.4421 16.9999 11.1284 16.9999 10.7487C16.9999 10.369 16.7178 10.0552 16.3517 10.0055L16.2499 9.99866ZM16.2499 7.00001H7.74994L7.64817 7.00686C7.28209 7.05652 6.99994 7.37031 6.99994 7.75001C6.99994 8.12971 7.28209 8.4435 7.64817 8.49316L7.74994 8.50001H16.2499L16.3517 8.49316C16.7178 8.4435 16.9999 8.12971 16.9999 7.75001C16.9999 7.37031 16.7178 7.05652 16.3517 7.00686L16.2499 7.00001Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fill-white"
            >
              <path d="M13.75.001a2.25 2.25 0 0 1 2.245 2.096L16 2.25v15.498a2.25 2.25 0 0 1-2.096 2.245l-.154.005H2.25a2.25 2.25 0 0 1-2.245-2.096L0 17.75V2.251A2.25 2.25 0 0 1 2.096.006L2.25.001h11.5Zm0 1.5H2.25a.75.75 0 0 0-.743.648l-.007.102v15.498c0 .38.282.694.648.743l.102.007h11.5a.75.75 0 0 0 .743-.648l.007-.102V2.251a.75.75 0 0 0-.648-.743L13.75 1.5Zm-5.502 9.496a.75.75 0 0 1 .102 1.494l-.102.006H3.75a.75.75 0 0 1-.102-1.493l.102-.007h4.498ZM12.25 8a.75.75 0 0 1 .102 1.493l-.102.007h-8.5a.75.75 0 0 1-.102-1.494L3.75 8h8.5Zm0-2.999a.75.75 0 0 1 .102 1.493l-.102.007h-8.5a.75.75 0 0 1-.102-1.493L3.75 5h8.5Z" />
            </svg>
          )}
          <h1
            className={`font-normal ${
              location.pathname === "/reading-list" ? "font-semibold" : ""
            }`}
          >
            Reading List
          </h1>
        </div>
      </NavLink>
      <NavLink
        to={"/browse-library"}
        className={`navItems px-8 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/browse-library" ||
          location.pathname.startsWith("/book/")
            ? "text-primaryYellow"
            : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
          {location.pathname === "/browse-library" ||
          location.pathname.startsWith("/book/") ? (
            <svg
              width="20"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow"
            >
              <path d="M3.5 0C4.328 0 5 0.672 5 1.5V16.5C5 17.328 4.328 18 3.5 18H1.5C0.672 18 0 17.328 0 16.5V1.5C0 0.672 0.672 0 1.5 0H3.5ZM9.5 0C10.328 0 11 0.672 11 1.5V16.5C11 17.328 10.328 18 9.5 18H7.5C6.672 18 6 17.328 6 16.5V1.5C6 0.672 6.672 0 7.5 0H9.5ZM16.781 3.1238L19.995 15.6428C20.201 16.4448 19.718 17.2628 18.915 17.4688L17.039 17.9498C16.236 18.1558 15.419 17.6728 15.213 16.8698L11.999 4.3528C11.793 3.5498 12.276 2.7328 13.079 2.5268L14.955 2.0438C15.758 1.8388 16.575 2.3228 16.781 3.1238Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="18"
              className="fill-white"
            >
              <path d="M2 0h1c1.054 0 1.918.816 1.995 1.85L5 2v14a2.001 2.001 0 0 1-1.85 1.994L3 18H2a2.001 2.001 0 0 1-1.995-1.85L0 16V2C0 .946.816.082 1.85.005L2 0Zm6 0h1c1.054 0 1.918.816 1.995 1.85L11 2v14a2.001 2.001 0 0 1-1.85 1.994L9 18H8a2.001 2.001 0 0 1-1.995-1.85L6 16V2C6 .946 6.816.082 7.85.005L8 0Zm6.974 2c.84 0 1.608.531 1.89 1.346l.047.156 3.015 11.747a2 2 0 0 1-1.296 2.391l-.144.043-.969.248a2.002 2.002 0 0 1-2.387-1.284l-.047-.155-3.016-11.745a2 2 0 0 1 1.298-2.392l.143-.042.968-.25c.166-.042.334-.063.498-.063ZM3 1.5H2a.501.501 0 0 0-.492.41L1.5 2v14c0 .244.177.45.41.492L2 16.5h1c.245 0 .45-.178.492-.41L3.5 16V2a.501.501 0 0 0-.41-.492L3 1.5Zm6 0H8a.501.501 0 0 0-.492.41L7.5 2v14c0 .244.177.45.41.492L8 16.5h1c.245 0 .45-.178.492-.41L9.5 16V2a.501.501 0 0 0-.41-.492L9 1.5Zm5.975 2-.063.004-.063.013-.968.248a.498.498 0 0 0-.376.51l.015.1 3.016 11.744a.5.5 0 0 0 .483.375l.063-.003.062-.012.97-.25a.5.5 0 0 0 .374-.519l-.015-.089-3.015-11.745a.501.501 0 0 0-.483-.375Z" />
            </svg>
          )}
          <h1
            className={`font-normal ${
              location.pathname === "/browse-library" ? "font-semibold" : ""
            }`}
          >
            Browse Library
          </h1>
        </div>
      </NavLink>
      <NavLink
        to={"/checkout-page"}
        className={`navItems px-8 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/checkout-page" ? "text-primaryYellow" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
          {location.pathname === "/checkout-page" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow -ml-1"
            >
              <path d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25ZM9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21ZM16 21C17.1046 21 18 20.1046 18 19C18 17.8954 17.1046 17 16 17C14.8954 17 14 17.8954 14 19C14 20.1046 14.8954 21 16 21Z" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white -ml-1"
            >
              <path d="M2.5 4.25C2.5 3.83579 2.83579 3.5 3.25 3.5H3.80826C4.75873 3.5 5.32782 4.13899 5.65325 4.73299C5.87016 5.12894 6.02708 5.58818 6.14982 6.00395C6.18306 6.00134 6.21674 6 6.2508 6H18.7481C19.5783 6 20.1778 6.79442 19.9502 7.5928L18.1224 14.0019C17.7856 15.1832 16.7062 15.9978 15.4779 15.9978H9.52977C8.29128 15.9978 7.2056 15.1699 6.87783 13.9756L6.11734 11.2045L4.85874 6.95578L4.8567 6.94834C4.701 6.38051 4.55487 5.85005 4.33773 5.4537C4.12686 5.0688 3.95877 5 3.80826 5H3.25C2.83579 5 2.5 4.66421 2.5 4.25ZM7.57283 10.8403L8.32434 13.5786C8.47333 14.1215 8.96682 14.4978 9.52977 14.4978H15.4779C16.0362 14.4978 16.5268 14.1275 16.68 13.5906L18.4168 7.5H6.58549L7.55906 10.7868C7.56434 10.8046 7.56892 10.8224 7.57283 10.8403ZM11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19ZM9.5 19C9.5 18.7239 9.27614 18.5 9 18.5C8.72386 18.5 8.5 18.7239 8.5 19C8.5 19.2761 8.72386 19.5 9 19.5C9.27614 19.5 9.5 19.2761 9.5 19ZM18 19C18 20.1046 17.1046 21 16 21C14.8954 21 14 20.1046 14 19C14 17.8954 14.8954 17 16 17C17.1046 17 18 17.8954 18 19ZM16.5 19C16.5 18.7239 16.2761 18.5 16 18.5C15.7239 18.5 15.5 18.7239 15.5 19C15.5 19.2761 15.7239 19.5 16 19.5C16.2761 19.5 16.5 19.2761 16.5 19Z" />
            </svg>
          )}
          <h1
            className={`font-normal ${
              location.pathname === "/cart" ? "font-semibold" : ""
            }`}
          >
            Cart
          </h1>
        </div>
      </NavLink>
      <NavLink
        to={"/profile"}
        className={`navItems px-8 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/profile" ? "text-primaryYellow" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
          {location.pathname === "/profile" ? (
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow"
            >
              <path d="M13.7545 12.0002C14.9966 12.0002 16.0034 13.007 16.0034 14.2491V15.1675C16.0034 15.7409 15.8242 16.2999 15.4908 16.7664C13.9449 18.9296 11.4206 20.0013 8.0004 20.0013C4.5794 20.0013 2.05643 18.9292 0.514266 16.7648C0.182306 16.2989 0.00390625 15.7411 0.00390625 15.169V14.2491C0.00390625 13.007 1.01076 12.0002 2.25278 12.0002H13.7545ZM8.0004 0.00488281C10.7618 0.00488281 13.0004 2.24346 13.0004 5.00488C13.0004 7.76631 10.7618 10.0049 8.0004 10.0049C5.23894 10.0049 3.00036 7.76631 3.00036 5.00488C3.00036 2.24346 5.23894 0.00488281 8.0004 0.00488281Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              className="fill-white"
            >
              <path d="M13.755 12a2.249 2.249 0 0 1 2.248 2.25v.575c0 .894-.32 1.759-.9 2.438-1.57 1.833-3.957 2.738-7.103 2.738s-5.532-.905-7.098-2.74a3.75 3.75 0 0 1-.898-2.434v-.578A2.249 2.249 0 0 1 2.253 12h11.502Zm0 1.5H2.252a.749.749 0 0 0-.75.75v.577c0 .535.192 1.053.54 1.46 1.253 1.469 3.22 2.214 5.957 2.214 2.739 0 4.706-.745 5.963-2.213a2.25 2.25 0 0 0 .54-1.463v-.576a.749.749 0 0 0-.748-.749ZM8 .005a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
            </svg>
          )}
          <h1
            className={`font-normal ${
              location.pathname === "/profile" ? "font-semibold" : ""
            }`}
          >
            Profile
          </h1>
        </div>
      </NavLink>
    </motion.nav>
  );
}

export default UserSideNavBarMobile;
