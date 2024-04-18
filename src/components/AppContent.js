import React from "react";
import { useLocation } from "react-router-dom";
import AdminContent from "./AdminContent";
import UserContent from "./UserContent";

function AppContent({ isAdmin }) {
  const location = useLocation();

  // Conditional rendering logic for content
  const renderContent = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/sign-up" ||
      location.pathname === "/log-in"
    ) {
      return null;
    }
    return isAdmin ? <AdminContent /> : <UserContent />;
  };

  return (
    <>
      <div className="appContainerDiv overflow-hidden max-h-screen flex flex-grow">
        {renderContent()}
      </div>
    </>
  );
}

export default AppContent;
