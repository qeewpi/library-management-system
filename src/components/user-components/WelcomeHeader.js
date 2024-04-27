import React from "react";
import AuthService from "service/AuthService";
function WelcomeHeader() {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="text-xl bg-white font-semibold p-6 rounded-xl">
      <h1>
        <span className="text-gray-500">Welcome,</span> {currentUser.name}
      </h1>
    </div>
  );
}

export default WelcomeHeader;
