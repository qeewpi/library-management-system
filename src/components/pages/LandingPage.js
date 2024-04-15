import React from "react";
import { Link } from "react-router-dom";
import brandSVG from "../../icons/brand.svg";
import landingPageImg from "../../img/landingPageImage.png";

function LandingPage() {
  return (
    <div className="font-semibold">
      <div className="px-64 pt-12 flex justify-center">
        <div className="flex flex-row gap-2">
          <img src={brandSVG} alt="" />
          <h1 className="text-xl">eLibrary</h1>
        </div>
      </div>
      <div className="px-16 pt-24 flex flex-row">
        <div className=" flex flex-col gap-y-5">
          <h1 className="header text-4xl flex">Welcome to eLibrary</h1>
          <p className="text-xl text-gray-500">
            eLibrary is a digital library that allows you to borrow and return
            books online.
          </p>
          <div className="buttonsDiv gap-x-4 flex flex-row">
            <Link to="/SignUp">
              <button className="p-4 px-12 bg-secondaryBlue text-white rounded-xl">
                Sign Up
              </button>
            </Link>
            <Link to="/LogIn">
              <button className="p-4 px-12 bg-primaryYellow text-white rounded-xl">
                Log In
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img src={landingPageImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
