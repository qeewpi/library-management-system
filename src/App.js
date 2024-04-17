import NavBar from "components/NavBar";
import SideNavBar from "components/SideNavBar";
import Home from "components/pages/Home";
import LandingPage from "components/pages/LandingPage";
import LogIn from "components/pages/LogIn";
import Profile from "components/pages/Profile";
import SignUp from "components/pages/SignUp";
import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  // Conditional rendering logic for screens-container
  const renderScreensContainer = () => {
    if (
      location.pathname === "/" ||
      location.pathname === "/sign-up" ||
      location.pathname === "/log-in"
    ) {
      return null;
    }
    return (
      <div className="screens-container flex h-full">
        <div className="hidden lg:flex flex-col flex-grow w-5/12 xl:w-96 h-screen">
          <SideNavBar />
        </div>
        <div className="contentDiv px-8 py-16 flex flex-col flex-grow min-h-screen max-h-full w-full bg-[#EDEDED] gap-y-6">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="sticky top-0">
        <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>

      {renderScreensContainer()}
    </>
  );
}

export default App;
