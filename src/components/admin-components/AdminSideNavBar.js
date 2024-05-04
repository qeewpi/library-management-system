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
        className={`navItems px-16 flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/user-list" ||
          location.pathname.startsWith("/admin/add/user") ||
          location.pathname.startsWith("/admin/delete/user") ||
          location.pathname.startsWith("/admin/edit/user") ||
          location.pathname.startsWith("/admin/view/user")
            ? "text-primaryYellow"
            : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
          {location.pathname === "/admin/user-list" ||
          location.pathname.startsWith("/admin/add/user") ||
          location.pathname.startsWith("/admin/delete/user") ||
          location.pathname.startsWith("/admin/edit/user") ||
          location.pathname.startsWith("/admin/view/user") ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow -ml-1"
            >
              <path d="M7.5 7.99981C9.15685 7.99981 10.5 6.65671 10.5 4.9999C10.5 3.3431 9.15685 2 7.5 2C5.84315 2 4.5 3.3431 4.5 4.9999C4.5 6.65671 5.84315 7.99981 7.5 7.99981ZM2 10.7678C2 9.79149 2.79149 9 3.76784 9H8.53514C8.19479 9.58834 8 10.2714 8 11C8 12.1947 8.52377 13.2671 9.3542 14H8.26784C7.08102 14 6.06867 14.747 5.67527 15.7964C4.17656 15.4301 3.24767 14.6128 2.70086 13.7027C1.99994 12.536 1.99999 11.3355 2 11.1272V10.7678ZM16.0001 11C16.0001 10.2714 15.8054 9.58834 15.465 9H20.2322C21.2085 9 22 9.79149 22 10.7678V11.1272C22 11.3355 22.0001 12.536 21.2991 13.7027C20.7523 14.6128 19.8234 15.4301 18.3247 15.7964C17.9313 14.747 16.919 14 15.7322 14H14.6459C15.4764 13.2671 16.0001 12.1947 16.0001 11ZM19.5 4.9999C19.5 6.65671 18.1569 7.99981 16.5 7.99981C14.8431 7.99981 13.5 6.65671 13.5 4.9999C13.5 3.3431 14.8431 2 16.5 2C18.1569 2 19.5 3.3431 19.5 4.9999ZM6.5 16.7678C6.5 15.7915 7.29149 15 8.26784 15H15.7322C16.7085 15 17.5 15.7915 17.5 16.7678V17.1272C17.5 17.3355 17.5001 18.536 16.7991 19.7027C16.0578 20.9367 14.614 22 12 22C9.38597 22 7.94224 20.9367 7.20085 19.7027C6.49994 18.536 6.49999 17.3355 6.5 17.1272V16.7678ZM12 13.9998C13.6569 13.9998 15 12.6567 15 10.9999C15 9.3431 13.6569 8 12 8C10.3431 8 9 9.3431 9 10.9999C9 12.6567 10.3431 13.9998 12 13.9998Z" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white -ml-1"
            >
              <path d="M7.50007 3.5C6.67158 3.5 6 4.1716 6 5C6 5.8284 6.67158 6.5 7.50007 6.5C8.32856 6.5 9.00014 5.8284 9.00014 5C9.00014 4.1716 8.32856 3.5 7.50007 3.5ZM4.5 5C4.5 3.34312 5.8432 2 7.50007 2C9.15694 2 10.5001 3.34312 10.5001 5C10.5001 6.65688 9.15694 8 7.50007 8C5.8432 8 4.5 6.65688 4.5 5ZM3.76784 9C2.79149 9 2 9.79149 2 10.7678V11.1272C1.99999 11.3355 1.99994 12.536 2.70086 13.7027C3.24767 14.6128 4.17656 15.4301 5.67527 15.7964C5.8811 15.2473 6.25637 14.7811 6.73742 14.4612C5.13355 14.2896 4.37565 13.5776 3.98665 12.9302C3.5026 12.1245 3.5 11.2669 3.5 11.125V10.7678C3.5 10.6199 3.61992 10.5 3.76784 10.5H8.03095C8.09841 9.95903 8.27389 9.4516 8.53514 9H3.76784ZM15.465 9C15.7263 9.4516 15.9017 9.95903 15.9692 10.5H20.2322C20.3801 10.5 20.5 10.6199 20.5 10.7678V11.125C20.5 11.2669 20.4974 12.1245 20.0134 12.9302C19.6244 13.5776 18.8664 14.2896 17.2626 14.4612C17.7436 14.7811 18.1189 15.2473 18.3247 15.7964C19.8234 15.4301 20.7523 14.6128 21.2991 13.7027C22.0001 12.536 22 11.3355 22 11.1272V10.7678C22 9.79149 21.2085 9 20.2322 9H15.465ZM15 5C15 4.1716 15.6716 3.5 16.5001 3.5C17.3286 3.5 18.0001 4.1716 18.0001 5C18.0001 5.8284 17.3286 6.5 16.5001 6.5C15.6716 6.5 15 5.8284 15 5ZM16.5001 2C14.8432 2 13.5 3.34312 13.5 5C13.5 6.65688 14.8432 8 16.5001 8C18.1569 8 19.5001 6.65688 19.5001 5C19.5001 3.34312 18.1569 2 16.5001 2ZM12.0001 9.5C11.1716 9.5 10.5 10.1716 10.5 11C10.5 11.8284 11.1716 12.5 12.0001 12.5C12.8286 12.5 13.5001 11.8284 13.5001 11C13.5001 10.1716 12.8286 9.5 12.0001 9.5ZM9 11C9 9.34312 10.3432 8 12.0001 8C13.6569 8 15.0001 9.34312 15.0001 11C15.0001 12.6569 13.6569 14 12.0001 14C10.3432 14 9 12.6569 9 11ZM6.5 16.7678C6.5 15.7915 7.29149 15 8.26784 15H15.7322C16.7085 15 17.5 15.7915 17.5 16.7678V17.1272C17.5 17.3355 17.5001 18.536 16.7991 19.7027C16.0578 20.9367 14.614 22 12 22C9.38597 22 7.94224 20.9367 7.20085 19.7027C6.49994 18.536 6.49999 17.3355 6.5 17.1272V16.7678ZM8.26784 16.5C8.11992 16.5 8 16.6199 8 16.7678V17.125C8 17.2669 8.0026 18.1245 8.48665 18.9302C8.93276 19.6727 9.86403 20.5 12 20.5C14.136 20.5 15.0672 19.6727 15.5134 18.9302C15.9974 18.1245 16 17.2669 16 17.125V16.7678C16 16.6199 15.8801 16.5 15.7322 16.5H8.26784Z" />
            </svg>
          )}
          <h1
            className={`font-normal ${
              location.pathname === "/admin/user-list" ||
              location.pathname.startsWith("/admin/add/user") ||
              location.pathname.startsWith("/admin/delete/user") ||
              location.pathname.startsWith("/admin/edit/user") ||
              location.pathname.startsWith("/admin/view/user")
                ? "font-semibold"
                : ""
            }`}
          >
            User List
          </h1>
        </div>
      </NavLink>

      <NavLink
        to={"/admin/library-catalog"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/library-catalog" ||
          location.pathname.startsWith("/admin/library-catalog/") ||
          location.pathname.startsWith("/admin/add/book") ||
          location.pathname.startsWith("/admin/delete/book") ||
          location.pathname.startsWith("/admin/edit/book") ||
          location.pathname.startsWith("/admin/view/book")
            ? "text-primaryYellow"
            : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
          {location.pathname === "/admin/library-catalog" ||
          location.pathname.startsWith("/admin/library-catalog/") ||
          location.pathname.startsWith("/admin/add/book") ||
          location.pathname.startsWith("/admin/delete/book") ||
          location.pathname.startsWith("/admin/edit/book") ||
          location.pathname.startsWith("/admin/view/book") ? (
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
          <h1
            className={`font-normal ${
              location.pathname === "/admin/library-catalog" ||
              location.pathname.startsWith("/admin/add/book") ||
              location.pathname.startsWith("/admin/delete/book") ||
              location.pathname.startsWith("/admin/edit/book") ||
              location.pathname.startsWith("/admin/view/book")
                ? "font-semibold"
                : ""
            }`}
          >
            Library Catalog
          </h1>
        </div>
      </NavLink>

      <NavLink
        to={"/admin/orders"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/orders" ||
          location.pathname.startsWith("/admin/orders") ||
          location.pathname.startsWith("/admin/view/order") ||
          location.pathname.startsWith("/admin/renew-order") ||
          location.pathname.startsWith("/admin/add/order") ||
          location.pathname.startsWith("/admin/delete/order")
            ? "text-primaryYellow"
            : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
          {location.pathname === "/admin/orders" ||
          location.pathname.startsWith("/admin/orders") ||
          location.pathname.startsWith("/admin/view/order") ||
          location.pathname.startsWith("/admin/renew-order") ||
          location.pathname.startsWith("/admin/add/order") ||
          location.pathname.startsWith("/admin/delete/order") ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-primaryYellow -ml-1"
            >
              <path d="M21 17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75C19.5449 3 21 4.45507 21 6.25V17.75ZM17 7.75C17 7.3703 16.7178 7.05651 16.3518 7.00685L16.25 7H7.75L7.64823 7.00685C7.28215 7.05651 7 7.3703 7 7.75C7 8.1297 7.28215 8.44349 7.64823 8.49315L7.75 8.5H16.25L16.3518 8.49315C16.7178 8.44349 17 8.1297 17 7.75ZM17 16.25C17 15.8703 16.7178 15.5565 16.3518 15.5068L16.25 15.5H7.75L7.64823 15.5068C7.28215 15.5565 7 15.8703 7 16.25C7 16.6297 7.28215 16.9435 7.64823 16.9932L7.75 17H16.25L16.3518 16.9932C16.7178 16.9435 17 16.6297 17 16.25ZM17 12C17 11.6203 16.7178 11.3065 16.3518 11.2568L16.25 11.25H7.75L7.64823 11.2568C7.28215 11.3065 7 11.6203 7 12C7 12.3797 7.28215 12.6935 7.64823 12.7432L7.75 12.75H16.25L16.3518 12.7432C16.7178 12.6935 17 12.3797 17 12Z" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-white -ml-1"
            >
              <path d="M21 17.75C21 19.5449 19.5449 21 17.75 21H6.25C4.45507 21 3 19.5449 3 17.75V6.25C3 4.45507 4.45507 3 6.25 3H17.75C19.5449 3 21 4.45507 21 6.25V17.75ZM19.5 17.75V6.25C19.5 5.2835 18.7165 4.5 17.75 4.5H6.25C5.2835 4.5 4.5 5.2835 4.5 6.25V17.75C4.5 18.7165 5.2835 19.5 6.25 19.5H17.75C18.7165 19.5 19.5 18.7165 19.5 17.75ZM17 7.75C17 8.1297 16.7178 8.44349 16.3518 8.49315L16.25 8.5H7.75C7.33579 8.5 7 8.16421 7 7.75C7 7.3703 7.28215 7.05651 7.64823 7.00685L7.75 7H16.25C16.6642 7 17 7.33579 17 7.75ZM17 16.25C17 16.6297 16.7178 16.9435 16.3518 16.9932L16.25 17H7.75C7.33579 17 7 16.6642 7 16.25C7 15.8703 7.28215 15.5565 7.64823 15.5068L7.75 15.5H16.25C16.6642 15.5 17 15.8358 17 16.25ZM17 12C17 12.3797 16.7178 12.6935 16.3518 12.7432L16.25 12.75H7.75C7.33579 12.75 7 12.4142 7 12C7 11.6203 7.28215 11.3065 7.64823 11.2568L7.75 11.25H16.25C16.6642 11.25 17 11.5858 17 12Z" />
            </svg>
          )}
          <h1
            className={`font-normal ${
              location.pathname === "/admin/orders" ||
              location.pathname.startsWith("/admin/view/order") ||
              location.pathname.startsWith("/admin/renew-order") ||
              location.pathname.startsWith("/admin/add/order") ||
              location.pathname.startsWith("/admin/delete/order")
                ? "font-semibold"
                : ""
            }`}
          >
            Orders
          </h1>
        </div>
      </NavLink>

      <NavLink
        to={"/admin/profile"}
        className={`navItems px-16 font-semibold flex flex-row items-center gap-x-6 w-full ${
          location.pathname === "/admin/profile" ? "text-primaryYellow" : ""
        }`}
      >
        <div className="flex flex-row items-center gap-x-6 transform transition duration-500 hover:scale-110">
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
          <h1
            className={`font-normal ${
              location.pathname === "/admin/profile" ? "font-semibold" : ""
            }`}
          >
            Profile
          </h1>
        </div>
      </NavLink>
    </div>
  );
}

export default AdminSideNavBar;
