import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "service/AuthService";
import brandSVG from "../../icons/brand.svg";
import email from "../../icons/email.svg";
import fullname from "../../icons/fullname.svg";
import password from "../../icons/password.svg";
import librarytwo from "../../img/librarytwo.png";

function SignUp() {
  let navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [fullnameInput, setFullnameInput] = useState("");
  const [registerFailed, setRegisterFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleFullnameChange = (e) => {
    setFullnameInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      await AuthService.register(
        usernameInput,
        fullnameInput,
        emailInput,
        passwordInput
      );
      navigate("/log-in");
    } catch (error) {
      console.error(error);
      setRegisterFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

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
        <form action="" onSubmit={handleSubmit}>
          <div
            className="header flex flex-col gap-y-6
          "
          >
            <div className="flex flex-row gap-2 items-center justify-center">
              <img src={brandSVG} alt="" />
              <h1 className="text-xl">BookMarked</h1>
            </div>
            <div>
              <h2 className="text-xl mt-2">Create an Account</h2>
              {registerFailed && (
                <p className="mt-2 text-red-900">
                  Signup failed, please try again.
                </p>
              )}
            </div>
          </div>

          <div className="input-box flex items-center mt-4 text-gray-400 ">
            <div className="flex flex-grow relative items-center">
              <input
                type="text"
                placeholder="Username"
                required
                value={usernameInput}
                onChange={handleUsernameChange}
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
                placeholder="Full Name"
                required
                value={fullnameInput}
                onChange={handleFullnameChange}
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
                type="email"
                placeholder="you@example.com"
                required
                value={emailInput}
                onChange={handleEmailChange}
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
                value={passwordInput}
                onChange={handlePasswordChange}
                className="w-full pl-12 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
              />
              <img
                src={password}
                alt=""
                className="absolute left-0 h-5 w-5 ml-3 pointer-events-none"
              />
            </div>
          </div>
          {isLoading ? (
            <button
              type="submit"
              className="btn mt-8 w-full py-4 rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
            >
              <span className="loading loading-spinner loading-xs"></span>
              Creating your account...
            </button>
          ) : (
            <button
              type="submit"
              className="btn mt-8 w-full py-4 rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
            >
              Sign Up
            </button>
          )}
        </form>

        <div className="register-link flex justify-center mt-6 text-gray-500">
          <p>
            Already have an account?{" "}
            <Link to="/log-in" className="text-primaryBlue">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
