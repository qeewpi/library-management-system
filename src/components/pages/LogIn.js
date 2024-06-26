import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartService from "service/CartService";
import brandSVG from "../../icons/brand.svg";
import email from "../../icons/email.svg";
import password from "../../icons/password.svg";
import library from "../../img/library.jpg";
import AuthService from "../../service/AuthService";

function LogIn() {
  let navigate = useNavigate();

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const user = await AuthService.login(usernameInput, passwordInput);

      CartService.createCart();

      if (user.roles.includes("ROLE_ADMIN")) {
        navigate("/admin/user-list");
        window.location.reload();
      } else {
        navigate("/home");
        window.location.reload();
      }
    } catch (error) {
      console.error(error);
      setLoginFailed(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-page md:flex justify-center items-center h-screen font-semibold">
      <div className="image md:w-1/2 h-full bg-cover bg-no-repeat bg-center relative overflow-hidden hidden md:block">
        <img
          src={library}
          alt="Library"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="form mx-auto px-8 pt-40 md:pt-0 md:w-1/2 max-w-screen md:px-16 lg:px-24 lg:p-32 py-10 overflow-hidden">
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
              <h2 className="text-xl mt-2">Welcome Back!</h2>

              {loginFailed && (
                <p className="mt-2 text-red-900">
                  Login failed, please try again.
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
                onChange={(e) => handleUsernameChange(e)}
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
                value={passwordInput}
                onChange={(e) => handlePasswordChange(e)}
                className="w-full pl-12 py-4 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
              />
              <img
                src={password}
                alt=""
                className="absolute left-0 h-5 w-5 ml-3 pointer-events-none"
              />
            </div>
          </div>
          <div className="forgot flex justify-end mt-4 text-primaryBlue">
            <label>
              <a href="#">Forgot password?</a>
            </label>
          </div>
          {isLoading ? (
            <button
              type="submit"
              className="btn mt-8 w-full py-4 rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
            >
              <span className="loading loading-spinner loading-xs"></span>
              Logging you in
            </button>
          ) : (
            <button
              type="submit"
              className="btn mt-8 w-full py-4 rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
            >
              Login
            </button>
          )}
        </form>

        <div className="register-link flex justify-center mt-6 text-gray-500">
          <p>
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-primaryBlue">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
