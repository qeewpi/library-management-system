import React from "react";
import { Link } from "react-router-dom";
import brandSVG from "../../icons/brand.svg";
import email from "../../icons/email.svg";
import password from "../../icons/password.svg";
import library from "../../img/library.jpg";

function LogIn() {
  return (
    <div className="login-page flex justify-center items-center h-screen font-semibold">
      <div className="image w-1/2 h-full bg-cover bg-no-repeat bg-center relative overflow-hidden">
        <img
          src={library}
          alt="Library"
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
              <h2 className="text-xl mt-2">Welcome Back!</h2>
              <p className="mt-2 text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>
          </div>

          <div className="input-box flex items-center mt-4 text-gray-400 ">
            <div className="flex flex-grow relative items-center">
              <input
                type="text"
                placeholder="Email"
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
                placeholder="Password"
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

        <div className="forgot flex justify-end mt-4 text-primaryBlue">
          <label>
            <a href="#">Forgot password?</a>
          </label>
        </div>

        <button
          type="submit"
          className="btn mt-8 w-full py-4 rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
        >
          Login
        </button>

        <div className="register-link flex justify-center mt-6 text-gray-500">
          <p>
            Don't have an account?{" "}
            <Link to="/SignUp" className="text-primaryBlue">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
