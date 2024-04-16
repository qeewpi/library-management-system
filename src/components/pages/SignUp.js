import React from "react";
import { Link } from "react-router-dom";
import brandSVG from "../../icons/brand.svg";
import email from "../../icons/email.svg";
import fullname from "../../icons/fullname.svg";
import password from "../../icons/password.svg";
import librarytwo from "../../img/librarytwo.png";

function SignUp() {
  return (
    <div className="login-page flex justify-center items-center h-screen font-semibold">
      <div className="image w-1/2 h-full bg-cover bg-no-repeat bg-center relative overflow-hidden">
        <img
          src={librarytwo}
          alt="Librarytwo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="form w-1/2 max-w-screen px-24 lg:p-32 py-10 overflow-hidden">
        <form action="">
          <div
            className="header flex flex-col gap-y-6
          "
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <img src={brandSVG} alt="" />
              <h1 className="text-xl">eLibrary</h1>
            </div>
            <div>
              <h2 className="text-xl mt-2">Create an Account</h2>
              <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

          <div className="input-box flex items-center mt-4 text-gray-400 ">
            <div className="flex flex-grow relative items-center">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full pl-12 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
              />

              <img
                src={fullname}
                alt=""
                className="absolute left-0 h-5 w-5 ml-3 pointer-events-none"
              />
            </div>
          </div>

          <div className="input-box flex items-center mt-4 text-gray-400 ">
            <div className="flex flex-grow relative items-center">
              <input
                type="text"
                placeholder="you@example.com"
                required
                className="w-full pl-12 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
              />

              <img
                src={email}
                alt=""
                className="absolute left-0 h-5 w-5 ml-3 pointer-events-none"
              />
            </div>
          </div>

          <div className="input-box flex items-center mt-4 text-gray-400 ">
            <div className="flex flex-grow relative items-center">
              <input
                type="password"
                placeholder="At least 8 characters"
                required
                className="w-full pl-12 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
              />
              <img
                src={password}
                alt=""
                className="absolute left-0 h-5 w-5 ml-3 pointer-events-none"
              />
            </div>
          </div>
        </form>

        <button
          type="submit"
          className="btn mt-8 w-full py-4 rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
        >
          Sign Up
        </button>

        <div className="register-link flex justify-center mt-6 text-gray-500">
          <p>
            Already have an account?{" "}
            <Link to="/LogIn" className="text-primaryBlue">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
