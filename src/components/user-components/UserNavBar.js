import { motion, useAnimationControls } from "framer-motion";
import { default as React, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import AuthService from "service/AuthService";
import CartService from "service/CartService";
import brandSVG from "../../icons/brand.svg";
import searchSVG from "../../icons/search.svg";
import userFilledSVG from "../../icons/user-filled.svg";

function UserNavBar() {
  let navigate = useNavigate();
  const location = useLocation();
  const currentUser = AuthService.getCurrentUser();

  const [searchInput, setSearchInput] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const containerControls = useAnimationControls();
  const textControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      textControls.start("open");
    } else {
      containerControls.start("close");
      textControls.start("close");
    }
  }, [isOpen]);

  const containerVariants = {
    close: {
      width: 0,
      opacity: 0,
      transition: {
        width: {
          type: "spring",
          damping: 15,
          duration: 0.5,
        },
        opacity: {
          duration: 1.0, // change this to the duration you want
        },
      },
    },
    open: {
      width: "18rem",
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
      opacity: 1,
    },
  };

  const textVariants = {
    close: {
      opacity: 0,
      x: -100,
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-results/${searchInput}`);
  };

  if (
    location.pathname === "/" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/log-in" ||
    location.pathname.startsWith("/admin")
  ) {
    return null;
  }

  const handleLogout = async () => {
    AuthService.logout();
    CartService.clearCart();
    navigate("/log-in");
  };

  return (
    <div className="bg-white flex flex-row">
      <div className="p-8 lg:pl-16 pr-8 py-12 lg:justify-between flex flex-row w-full">
        <button
          className="hamburger-menu flex lg:hidden items-center"
          onClick={() => handleOpenClose()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"
            ></path>
          </svg>
        </button>
        <NavLink
          to={"/home"}
          className={`justify-center lg:justify-normal navItems font-semibold flex flex-row items-center gap-x-6 w-full lg:w-1/3 ${
            location.pathname === "/home" ? "" : ""
          }`}
        >
          <div className="flex flex-row gap-2 items-center -ml-4 lg:ml-0 lg:w-40 lg:w-96 transform transition duration-500 hover:scale-110">
            <img src={brandSVG} alt="" />
            <h1 className="text-2xl flex-grow">BookMarked</h1>
          </div>
        </NavLink>

        <div className="hidden lg:block flex flex-grow justify-center items-center w-1/3">
          <form onSubmit={handleSearchSubmit}>
            <div className="searchBar hidden lg:flex flex-row mx-2 lg:mx-0 px-4 py-4 lg:w-96 rounded-xl gap-x-4 bg-customGrey items-center flex-grow ">
              <button type="submit">
                <img src={searchSVG} alt="" />
              </button>
              <input
                type="text"
                placeholder="Search titles..."
                className="text-gray-500 bg-transparent outline-none flex-grow lg:hidden focus:text-primaryBlack text-primaryBlack"
                value={searchInput}
                onChange={handleSearchChange}
              />
              <input
                type="text"
                placeholder="Search titles, authors..."
                className="text-gray-500 bg-transparent outline-none flex-grow hidden lg:block xl:hidden focus:text-primaryBlack text-primaryBlack"
                value={searchInput}
                onChange={handleSearchChange}
              />
              <input
                type="text"
                placeholder="Search book titles, authors, publishers..."
                className="text-gray-500 bg-transparent outline-none flex-grow hidden xl:block focus:text-primaryBlack text-primaryBlack"
                value={searchInput}
                onChange={handleSearchChange}
              />
            </div>
          </form>
        </div>
        <div className="flex flex-row-reverse gap-x-8 lg:w-1/3 items-center text-sm">
          <div className="flex flex-row gap-x-2 items-center">
            <div className="flex flex-grow items-center lg:pr-2">
              <img src={userFilledSVG} alt="" />
            </div>
            <div className="hidden lg:block nameDiv flex flex-col">
              <h1>{currentUser ? currentUser.name : "Guest"}</h1>
              <h1 className="text-gray-500">Student</h1>
            </div>
            <button
              className="p-2 hidden lg:block items-start transform transition duration-500 hover:scale-110"
              data-tip="Log Out"
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
      <div className="absolute side-nav min-h-screen z-10 bg-primaryBlue ">
        <motion.nav
          variants={containerVariants}
          initial="close"
          className="absolute flex flex-col py-16 gap-y-2 h-screen bg-primaryBlue text-white items-start"
          animate={containerControls}
        >
          <div className="motion-container font-semibold flex flex-row items-center gap-x-6 w-full mt-4 pb-4 px-8 justify-between text-white">
            <motion.span className="font-medium" variants={textVariants}>
              Welcome, <span className="font-bold">{currentUser.name}</span>
            </motion.span>
            <motion.span className="font-medium" variants={textVariants}>
              <button onClick={() => handleOpenClose()}>
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
            </motion.span>
          </div>
          <motion.span
            className="font-medium font-semibold flex flex-row items-center gap-x-6 w-full pb-4 text-white"
            variants={textVariants}
          >
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
          </motion.span>
          <motion.span
            className="font-medium  font-semibold flex flex-row items-center gap-x-6 w-full pb-4 text-white"
            variants={textVariants}
          >
            {" "}
            <NavLink
              to={"/reading-list"}
              className={`navItems px-8 font-semibold flex flex-row items-center gap-x-6 w-full ${
                location.pathname === "/reading-list"
                  ? "text-primaryYellow"
                  : ""
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
          </motion.span>
          <motion.span
            className="font-medium font-semibold flex flex-row items-center gap-x-6 w-full pb-4 text-white"
            variants={textVariants}
          >
            {" "}
            <NavLink
              to={"/checkout-page"}
              className={`navItems px-8 font-semibold flex flex-row items-center gap-x-6 w-full ${
                location.pathname === "/checkout-page"
                  ? "text-primaryYellow"
                  : ""
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
          </motion.span>
          <motion.span
            className="font-medium font-semibold flex flex-row items-center gap-x-6 w-full pb-4 text-white"
            variants={textVariants}
          >
            {" "}
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
          </motion.span>
          <motion.span
            className="font-medium font-semibold flex flex-row items-center gap-x-6 w-full pb-4 text-white"
            variants={textVariants}
          >
            <button
              className="navItems px-8 font-semibold flex flex-row items-center gap-x-6 w-full"
              onClick={handleLogout}
            >
              <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="logOutSVG fill-white"
                >
                  <path d="M8.50215 11.4995C9.05562 11.4995 9.5043 11.9482 9.5043 12.5017C9.5043 13.0552 9.05562 13.5038 8.50215 13.5038C7.94868 13.5038 7.5 13.0552 7.5 12.5017C7.5 11.9482 7.94868 11.4995 8.50215 11.4995ZM12 4.3537V10.4995L12.0005 11.0045L19.442 11.0035L17.7196 9.27977C17.4534 9.01346 17.4292 8.59679 17.6471 8.30321L17.7198 8.21911C17.9861 7.95289 18.4027 7.92875 18.6963 8.14666L18.7804 8.21929L21.777 11.2169C22.043 11.483 22.0674 11.8992 21.85 12.1928L21.7775 12.2769L18.7809 15.2803C18.4884 15.5736 18.0135 15.5741 17.7203 15.2816C17.4537 15.0156 17.429 14.599 17.6465 14.3051L17.7191 14.2209L19.432 12.5035L12.0005 12.5045L12 19.2495C12 19.7159 11.5788 20.0692 11.1196 19.9881L2.61955 18.4868C2.26121 18.4235 2 18.1121 2 17.7482V5.74953C2 5.38222 2.26601 5.06896 2.62847 5.00944L11.1285 3.61361C11.5851 3.53863 12 3.89097 12 4.3537ZM10.5 5.2369L3.5 6.38641V17.1191L10.5 18.3555V5.2369ZM13 18.5008L13.7652 18.501L13.867 18.4941C14.2335 18.4443 14.5158 18.1299 14.5152 17.7497L14.508 13.4995H13V18.5008ZM13.002 9.99953L13 8.72487V4.99952L13.7453 4.99953C14.1245 4.99953 14.4381 5.28105 14.4883 5.64664L14.4953 5.74829L14.502 9.99953H13.002Z" />
                </svg>
                <h1 className="font-normal">Log out</h1>
              </div>
            </button>
          </motion.span>
        </motion.nav>
      </div>
    </div>
  );
}

export default UserNavBar;
