import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function AdminSideNavBar() {
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/log-in"
  ) {
    return null;
  }

  return (
    <div className="flex flex-col py-16 gap-y-2 h-screen bg-primaryBlue text-white items-start">
      <NavLink
        to={"/admin/user-list"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/user-list" ? "text-primaryYellow" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/admin/user-list" ? (
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
          <h1 className="">User List</h1>
        </div>
      </NavLink>
      <NavLink
        to={"/admin/admin-list"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/admin-list" ? "text-primaryYellow" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/admin/admin-list" ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow -ml-1"
            >
              <path d="M12.3329 2.50076C12.1313 2.36641 11.8687 2.36641 11.6672 2.50076C9.34133 4.05131 6.82597 5.01875 4.11512 5.40603C3.81953 5.44825 3.59998 5.7014 3.59998 5.99999V11.4C3.59998 16.0696 6.36836 19.4768 11.7846 21.56C11.9232 21.6133 12.0768 21.6133 12.2154 21.56C17.6316 19.4768 20.4 16.0696 20.4 11.4V5.99999C20.4 5.7014 20.1804 5.44825 19.8848 5.40603C17.174 5.01875 14.6586 4.05131 12.3329 2.50076ZM12 11.3994C10.6745 11.3994 9.59998 10.3249 9.59998 8.99941C9.59998 7.67392 10.6745 6.59941 12 6.59941C13.3255 6.59941 14.4 7.67392 14.4 8.99941C14.4 10.3249 13.3255 11.3994 12 11.3994ZM12 17.3994C8.99998 17.3994 7.79998 15.8993 7.79998 14.3994C7.79998 13.4053 8.60586 12.5994 9.59998 12.5994H14.4C15.3941 12.5994 16.2 13.4053 16.2 14.3994C16.2 15.8936 15 17.3994 12 17.3994Z" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white -ml-1"
            >
              <path d="M12 11.3994C13.3255 11.3994 14.4 10.3249 14.4 8.99941C14.4 7.67392 13.3255 6.59941 12 6.59941C10.6745 6.59941 9.59998 7.67392 9.59998 8.99941C9.59998 10.3249 10.6745 11.3994 12 11.3994ZM12 17.3994C15 17.3994 16.2 15.8936 16.2 14.3994C16.2 13.4053 15.3941 12.5994 14.4 12.5994H9.59998C8.60586 12.5994 7.79998 13.4053 7.79998 14.3994C7.79998 15.8993 8.99998 17.3994 12 17.3994ZM12.3329 2.50076C12.1313 2.36641 11.8687 2.36641 11.6672 2.50076C9.34133 4.05131 6.82597 5.01875 4.11512 5.40603C3.81953 5.44825 3.59998 5.7014 3.59998 5.99999V11.4C3.59998 16.0696 6.36836 19.4768 11.7846 21.56C11.9232 21.6133 12.0768 21.6133 12.2154 21.56C17.6316 19.4768 20.4 16.0696 20.4 11.4V5.99999C20.4 5.7014 20.1804 5.44825 19.8848 5.40603C17.174 5.01875 14.6586 4.05131 12.3329 2.50076ZM4.79998 6.51344C7.18247 6.10865 9.42328 5.27527 11.5189 4.01499L12 3.71657L12.4811 4.01499C14.5767 5.27527 16.8175 6.10865 19.2 6.51344V11.4C19.2 15.4704 16.8385 18.4361 12 20.3558C7.16152 18.4361 4.79998 15.4704 4.79998 11.4V6.51344Z" />
            </svg>
          )}
          <h1 className="">Admin List</h1>
        </div>
      </NavLink>
      <NavLink
        to={"/admin/library-catalog"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/library-catalog" ||
          location.pathname.startsWith("/admin/library-catalog/")
            ? "text-primaryYellow"
            : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/admin/library-catalog" ||
          location.pathname.startsWith("/admin/library-catalog/") ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow -ml-1"
            >
              <path d="M6.5 2C5.11929 2 4 3.11929 4 4.5V19.5C4 20.8807 5.11929 22 6.5 22H19.75C20.1642 22 20.5 21.6642 20.5 21.25C20.5 20.8358 20.1642 20.5 19.75 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5H19.75C20.1642 19.5 20.5 19.1642 20.5 18.75V4.5C20.5 3.11929 19.3807 2 18 2H6.5ZM8 5H16C16.5523 5 17 5.44772 17 6V7C17 7.55228 16.5523 8 16 8H8C7.44772 8 7 7.55228 7 7V6C7 5.44772 7.44772 5 8 5Z" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white -ml-1"
            >
              <path d="M6.64289 2.14285C5.10438 2.14285 3.85718 3.39006 3.85718 4.92857V19.0714C3.85718 20.6099 5.10438 21.8571 6.64289 21.8571H19.5C19.8551 21.8571 20.1429 21.5693 20.1429 21.2143C20.1429 20.8593 19.8551 20.5714 19.5 20.5714H6.64289C5.88722 20.5714 5.26206 20.0127 5.15808 19.2857H19.5C19.8551 19.2857 20.1429 18.9979 20.1429 18.6429V4.92857C20.1429 3.39006 18.8957 2.14285 17.3572 2.14285H6.64289ZM18.8572 18H5.14289V4.92857C5.14289 4.10014 5.81446 3.42857 6.64289 3.42857H17.3572C18.1856 3.42857 18.8572 4.10014 18.8572 4.92857V18ZM7.92861 5.14285C7.33687 5.14285 6.85718 5.62254 6.85718 6.21428V7.92857C6.85718 8.5203 7.33687 9 7.92861 9H16.0715C16.6632 9 17.1429 8.5203 17.1429 7.92857V6.21428C17.1429 5.62254 16.6632 5.14285 16.0715 5.14285H7.92861ZM8.14289 7.71428V6.42857H15.8572V7.71428H8.14289Z" />
            </svg>
          )}
          <h1 className="">Library Catalog</h1>
        </div>
      </NavLink>
      <NavLink
        to={"/admin/borrowed-books"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/borrowed-books" ||
          location.pathname.startsWith("/admin/borrowed-books/")
            ? "text-primaryYellow"
            : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/admin/borrowed-books" ||
          location.pathname.startsWith("/admin/borrowed-books/") ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow -ml-1"
            >
              <path d="M6.5 2C5.11929 2 4 3.11929 4 4.5V19.5C4 20.8807 5.11929 22 6.5 22H19.75C20.1642 22 20.5 21.6642 20.5 21.25C20.5 20.8358 20.1642 20.5 19.75 20.5H6.5C5.94772 20.5 5.5 20.0523 5.5 19.5H19.75C20.1642 19.5 20.5 19.1642 20.5 18.75V4.5C20.5 3.11929 19.3807 2 18 2H6.5ZM8 5H16C16.5523 5 17 5.44772 17 6V7C17 7.55228 16.5523 8 16 8H8C7.44772 8 7 7.55228 7 7V6C7 5.44772 7.44772 5 8 5Z" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white -ml-1"
            >
              <path d="M15.5 12.25C15.5 11.8358 15.1642 11.5 14.75 11.5H9.75C9.33579 11.5 9 11.8358 9 12.25V12.7495C9 13.75 10.3831 14.5 12.25 14.5C14.1168 14.5 15.5 13.75 15.5 12.7495V12.25ZM14 8.74547C14 7.77863 13.2168 7 12.25 7C11.2832 7 10.5 7.77863 10.5 8.74547C10.5 9.71231 11.2832 10.4961 12.25 10.4961C13.2168 10.4961 14 9.71231 14 8.74547ZM4 4.5C4 3.11929 5.11929 2 6.5 2H18C19.3807 2 20.5 3.11929 20.5 4.5V18.75C20.5 19.1642 20.1642 19.5 19.75 19.5H5.5C5.5 20.0523 5.94772 20.5 6.5 20.5H19.75C20.1642 20.5 20.5 20.8358 20.5 21.25C20.5 21.6642 20.1642 22 19.75 22H6.5C5.11929 22 4 20.8807 4 19.5V4.5ZM5.5 4.5V18H19V4.5C19 3.94772 18.5523 3.5 18 3.5H6.5C5.94772 3.5 5.5 3.94772 5.5 4.5Z" />
            </svg>
          )}
          <h1 className="">Borrowed Books</h1>
        </div>
      </NavLink>
      <NavLink
        to={"/admin/library-logs"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/library-logs" ||
          location.pathname.startsWith("/admin/library-logs/")
            ? "text-primaryYellow"
            : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/admin/library-logs" ||
          location.pathname.startsWith("/admin/library-logs/") ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow -ml-1"
            >
              <path d="M9.00009 2C8.52964 2 8.0693 2.04651 7.62366 2.13542C7.32497 2.19501 7.09198 2.42932 7.03408 2.72835L6.67421 4.58681C6.6453 4.73609 6.49094 4.82522 6.34721 4.77561L4.55651 4.1576C4.26924 4.05845 3.95053 4.14246 3.74946 4.37033C3.14139 5.05944 2.66642 5.86988 2.36568 6.76139C2.26844 7.04965 2.35496 7.3681 2.58471 7.56752L4.01727 8.81096C4.1321 8.91063 4.1321 9.08888 4.01727 9.18856L2.58458 10.4321C2.35485 10.6315 2.26832 10.9499 2.36553 11.2382C2.6662 12.1297 3.1411 12.9401 3.74909 13.6293C3.95016 13.8572 4.26889 13.9412 4.55618 13.842L6.34721 13.2239C6.49094 13.1743 6.6453 13.2634 6.67421 13.4127L7.03417 15.2717C7.09208 15.5707 7.32507 15.805 7.62377 15.8646C8.06938 15.9535 8.52968 16 9.00009 16C9.47379 16 9.93723 15.9528 10.3857 15.8627C10.684 15.8028 10.9165 15.5687 10.9743 15.27L11.334 13.4127C11.3629 13.2634 11.5172 13.1743 11.661 13.2239L13.4459 13.8399C13.7333 13.9391 14.0521 13.855 14.2532 13.6269C14.8615 12.9367 15.3365 12.125 15.6367 11.2322C15.7336 10.9441 15.647 10.626 15.4174 10.4267L13.9909 9.18855C13.8761 9.08888 13.8761 8.91063 13.9909 8.81096L15.4173 7.57289C15.6468 7.37364 15.7334 7.05553 15.6365 6.76741C15.3363 5.87455 14.8613 5.06285 14.2528 4.3727C14.0518 4.14465 13.7329 4.06053 13.4455 4.15971L11.661 4.77561C11.5172 4.82522 11.3629 4.73609 11.334 4.58682L10.9744 2.73001C10.9166 2.43136 10.6841 2.19721 10.3859 2.13729C9.93731 2.04716 9.47383 2 9.00009 2ZM7.25101 9.00002C7.25101 8.03361 8.03448 7.25012 9.00101 7.25012C9.96754 7.25012 10.751 8.03361 10.751 9.00002C10.751 9.96644 9.96754 10.7499 9.00101 10.7499C8.03448 10.7499 7.25101 9.96644 7.25101 9.00002ZM13.4119 14.7838C13.5343 14.6223 13.749 14.5678 13.9405 14.6339L15.2 15.0686C15.4613 15.1588 15.742 14.9968 15.7945 14.7254L16.0479 13.417C16.0864 13.2178 16.2413 13.059 16.4427 13.0342C16.6253 13.0116 16.8113 13 17 13C17.1887 13 17.3746 13.0116 17.5572 13.0342C17.7586 13.059 17.9135 13.2178 17.9521 13.417L18.2054 14.7254C18.258 14.9968 18.5386 15.1588 18.8 15.0686L20.0594 14.6339C20.251 14.5678 20.4656 14.6223 20.588 14.7838C20.8121 15.0793 21.0004 15.4033 21.1467 15.7495C21.2257 15.9362 21.1656 16.1495 21.0125 16.2824L20.0054 17.1565C19.7966 17.3378 19.7966 17.6618 20.0054 17.8431L21.0126 18.7174C21.1657 18.8502 21.2258 19.0635 21.1469 19.2502C21.0006 19.5963 20.8123 19.9203 20.5883 20.2158C20.4659 20.3773 20.2512 20.4319 20.0596 20.3658L18.8 19.931C18.5386 19.8408 18.258 20.0028 18.2054 20.2742L17.952 21.583C17.9134 21.7822 17.7585 21.941 17.5571 21.9658C17.3746 21.9884 17.1886 22 17 22C16.8113 22 16.6254 21.9884 16.4428 21.9658C16.2414 21.941 16.0865 21.7822 16.0479 21.583L15.7945 20.2742C15.742 20.0028 15.4613 19.8408 15.2 19.931L13.9403 20.3658C13.7487 20.4319 13.5341 20.3773 13.4117 20.2158C13.1877 19.9203 12.9993 19.5963 12.8531 19.2502C12.7742 19.0635 12.8343 18.8502 12.9874 18.7173L13.9946 17.8431C14.2033 17.6618 14.2033 17.3378 13.9946 17.1565L12.9875 16.2824C12.8344 16.1495 12.7743 15.9362 12.8532 15.7495C12.9995 15.4034 13.1879 15.0793 13.4119 14.7838ZM18.2503 17.5C18.2503 16.8094 17.6904 16.2495 16.9998 16.2495C16.3091 16.2495 15.7492 16.8094 15.7492 17.5C15.7492 18.1907 16.3091 18.7506 16.9998 18.7506C17.6904 18.7506 18.2503 18.1907 18.2503 17.5Z" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white -ml-1"
            >
              <path d="M8.4064 3.5316L8.14685 4.87197C7.94451 5.91693 6.86398 6.54078 5.85785 6.19354L4.56441 5.74714C4.3293 6.0671 4.12811 6.41323 3.966 6.78022L5.00052 7.67816C5.80436 8.37588 5.80435 9.62363 5.00052 10.3214L3.96585 11.2194C4.12792 11.5864 4.32906 11.9325 4.56412 12.2525L5.85785 11.806C6.86398 11.4587 7.94451 12.0826 8.14685 13.1275L8.40649 14.4684C8.79883 14.5104 9.20971 14.5101 9.60186 14.4675L9.86133 13.1275C10.0637 12.0826 11.1442 11.4587 12.1503 11.806L13.4377 12.2503C13.6731 11.9295 13.8745 11.5824 14.0366 11.2144L13.0077 10.3214C12.2038 9.62363 12.2038 8.37588 13.0077 7.67816L14.0364 6.78524C13.8743 6.41723 13.6729 6.07015 13.4374 5.74935L12.1503 6.19354C11.1442 6.54078 10.0637 5.91693 9.86133 4.87198L9.60196 3.53249C9.20974 3.48987 8.7988 3.48956 8.4064 3.5316ZM7.62366 2.13542C8.0693 2.04651 8.52964 2 9.00009 2C9.47383 2 9.93731 2.04716 10.3859 2.13729C10.6841 2.19721 10.9166 2.43136 10.9744 2.73001L11.334 4.58682C11.3629 4.73609 11.5172 4.82522 11.661 4.77561L13.4455 4.15971C13.7329 4.06053 14.0518 4.14465 14.2528 4.3727C14.8613 5.06285 15.3363 5.87455 15.6365 6.76741C15.7334 7.05553 15.6468 7.37364 15.4173 7.57289L13.9909 8.81096C13.8761 8.91063 13.8761 9.08888 13.9909 9.18855L15.4174 10.4267C15.647 10.626 15.7336 10.9441 15.6367 11.2322C15.3365 12.125 14.8615 12.9367 14.2532 13.6269C14.0521 13.855 13.7333 13.9391 13.4459 13.8399L11.661 13.2239C11.5172 13.1743 11.3629 13.2634 11.334 13.4127L10.9743 15.27C10.9165 15.5687 10.684 15.8028 10.3857 15.8627C9.93723 15.9528 9.47379 16 9.00009 16C8.52968 16 8.06938 15.9535 7.62377 15.8646C7.32507 15.805 7.09208 15.5707 7.03417 15.2717L6.67421 13.4127C6.6453 13.2634 6.49094 13.1743 6.34721 13.2239L4.55618 13.842C4.26889 13.9412 3.95016 13.8572 3.74909 13.6293C3.1411 12.9401 2.6662 12.1297 2.36553 11.2382C2.26832 10.9499 2.35485 10.6315 2.58458 10.4321L4.01727 9.18856C4.1321 9.08888 4.1321 8.91063 4.01727 8.81096L2.58471 7.56752C2.35496 7.3681 2.26844 7.04965 2.36568 6.76139C2.66642 5.86988 3.14139 5.05944 3.74946 4.37033C3.95053 4.14246 4.26924 4.05845 4.55651 4.1576L6.34721 4.77561C6.49094 4.82522 6.6453 4.73609 6.67421 4.58681L7.03408 2.72835C7.09198 2.42932 7.32497 2.19501 7.62366 2.13542ZM13.9406 14.6339C13.749 14.5678 13.5344 14.6223 13.4119 14.7838C13.1879 15.0793 12.9995 15.4034 12.8532 15.7495C12.7743 15.9362 12.8344 16.1495 12.9875 16.2824L13.9946 17.1565C14.2034 17.3378 14.2034 17.6618 13.9946 17.8431L12.9874 18.7173C12.8343 18.8502 12.7742 19.0635 12.8531 19.2502C12.9994 19.5963 13.1877 19.9203 13.4117 20.2158C13.5341 20.3773 13.7488 20.4319 13.9403 20.3658L15.2 19.931C15.4614 19.8408 15.742 20.0028 15.7946 20.2742L16.048 21.583C16.0866 21.7822 16.2415 21.941 16.4429 21.9658C16.6254 21.9884 16.8114 22 17 22C17.1887 22 17.3746 21.9884 17.5571 21.9658C17.7585 21.941 17.9135 21.7822 17.952 21.583L18.2054 20.2742C18.258 20.0028 18.5387 19.8408 18.8 19.931L20.0597 20.3658C20.2513 20.4319 20.4659 20.3773 20.5883 20.2158C20.8123 19.9203 21.0006 19.5963 21.1469 19.2502C21.2258 19.0635 21.1657 18.8502 21.0126 18.7174L20.0054 17.8431C19.7966 17.6618 19.7966 17.3378 20.0054 17.1565L21.0125 16.2824C21.1656 16.1495 21.2257 15.9362 21.1468 15.7495C21.0005 15.4033 20.8121 15.0793 20.5881 14.7838C20.4656 14.6223 20.251 14.5678 20.0595 14.6339L18.8 15.0686C18.5387 15.1588 18.258 14.9968 18.2054 14.7254L17.9521 13.417C17.9135 13.2178 17.7586 13.059 17.5572 13.0342C17.3747 13.0116 17.1887 13 17 13C16.8113 13 16.6254 13.0116 16.4428 13.0342C16.2414 13.059 16.0865 13.2178 16.0479 13.417L15.7946 14.7254C15.742 14.9968 15.4614 15.1588 15.2 15.0686L13.9406 14.6339ZM16.9998 18.7506C16.3091 18.7506 15.7492 18.1907 15.7492 17.5C15.7492 16.8094 16.3091 16.2495 16.9998 16.2495C17.6905 16.2495 18.2504 16.8094 18.2504 17.5C18.2504 18.1907 17.6905 18.7506 16.9998 18.7506ZM8.00003 8.99993C8.00003 8.44771 8.44772 8 9.00003 8C9.55234 8 10 8.44771 10 8.99993C10 9.55215 9.55234 9.99986 9.00003 9.99986C8.44772 9.99986 8.00003 9.55215 8.00003 8.99993ZM9.00003 6.5C7.61935 6.5 6.50003 7.61923 6.50003 8.99993C6.50003 10.3806 7.61935 11.4999 9.00003 11.4999C10.3807 11.4999 11.5 10.3806 11.5 8.99993C11.5 7.61923 10.3807 6.5 9.00003 6.5Z" />
            </svg>
          )}
          <h1 className="">Library Logs</h1>
        </div>
      </NavLink>
      <NavLink
        to={"/admin/profile"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/profile" ? "text-primaryYellow" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6">
          {location.pathname === "/admin/profile" ? (
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
          <h1 className="">Profile</h1>
        </div>
      </NavLink>
    </div>
  );
}

export default AdminSideNavBar;