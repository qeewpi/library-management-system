import { default as React } from "react";
import AuthService from "service/AuthService";
function AdminWelcome() {
  const currentUser = AuthService.getCurrentUser();
  return (
    <div className="text-2xl bg-white font-semibold p-6 rounded-xl">
      <h1 className="text-primaryBlack font-medium">
        Welcome,
        <span className="font-semibold"> {currentUser.name}</span>! 👋
      </h1>
    </div>
  );
}

export default AdminWelcome;
