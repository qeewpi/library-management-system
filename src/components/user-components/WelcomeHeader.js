import React from "react";
import AuthService from "service/AuthService";
import { Link } from "react-router-dom";
function WelcomeHeader() {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="text-2xl bg-white font-semibold p-6 rounded-xl">
      <h1 className="text-primaryBlack font-medium">
        Welcome,
        <Link to="/profile">
          <span className="font-semibold  "> {currentUser.name}</span>! 👋
        </Link>
      </h1>
    </div>
  );
}

export default WelcomeHeader;
