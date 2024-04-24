import AppContent from "components/AppContent";
import NavBar from "components/NavBar";
import SideNavBar from "components/SideNavBar";
import LandingPage from "components/pages/LandingPage";
import LogIn from "components/pages/LogIn";
import SignUp from "components/pages/SignUp";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AuthService from "../src/service/AuthService";
import "./index.css";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    // Check if user is logged in and if they have admin privileges
    if (user) {
      setIsAdmin(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  return (
    <div className="true">
      <BrowserRouter>
        <NavBar isAdmin={isAdmin} />
        <div className="flex">
          <div className="hidden lg:flex flex-col w-[19rem] lg:[]xl:w-96 max-h-screen fixed z-20">
            <SideNavBar isAdmin={isAdmin} />
          </div>
          <div className="flex flex-grow w-full h-full ml-0 lg:ml-[19rem]">
            <AppContent isAdmin={isAdmin} />
          </div>
        </div>
        <IndividualContent />
      </BrowserRouter>
    </div>
  );
}

function IndividualContent() {
  const location = useLocation();

  if (
    location.pathname === "/" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/log-in"
  ) {
    return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
    );
  }
}

export default App;
