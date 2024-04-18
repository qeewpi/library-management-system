import NavBar from "components/NavBar";
import SideNavBar from "components/SideNavBar";
import BookDetails from "components/pages/BookDetails";
import Home from "components/pages/Home";
import LandingPage from "components/pages/LandingPage";
import LogIn from "components/pages/LogIn";
import Profile from "components/pages/Profile";
import ReadingList from "components/pages/ReadingList";
import Results from "components/pages/Results";
import SignUp from "components/pages/SignUp";
import OrderSummary from "components/pages/OrderSummary";
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
      <div className="screens-container flex">
        <div className="hidden lg:flex flex-col w-5/12 xl:w-96 min-h-screen">
          <SideNavBar />
        </div>
        <div className="contentDiv px-8 py-16 flex flex-col flex-grow max-h-screen w-full bg-[#EDEDED] gap-y-6 overflow-auto">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/results" element={<Results />} />
            <Route path="/reading-list" element={<ReadingList />} />
            <Route path="/order-summary" element={<OrderSummary />} />
          </Routes>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="appContainerDiv overflow-hidden max-h-screen">
        <div className="sticky top-0">
          <NavBar />
        </div>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>

        {renderScreensContainer()}
      </div>
    </>
  );
}

export default App;
