import React from "react";
import AuthService from "service/AuthService";
function AdminWelcome() {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="text-2xl bg-white font-semibold p-6 rounded-xl">
      <h1>
        <span className="text-primaryBlack font-medium">Welcome,</span>{" "}
        {currentUser.name}
      </h1>
    </div>
  );
}

export default AdminWelcome;
