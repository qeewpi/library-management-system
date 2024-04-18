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
import CheckoutPage from "components/pages/CheckoutPage";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="sticky top-0 z-10">
          <NavBar />
        </div>
        <div className="flex">
          <div className="hidden lg:flex flex-col w-[19rem] lg:[]xl:w-96 max-h-screen fixed z-20">
            <SideNavBar />
          </div>
          <div className="flex flex-grow w-full h-full ml-0 lg:ml-[19rem]">
            <AppContent />
          </div>
        </div>
        <IndividualContent />
      </BrowserRouter>
    </div>
  );
}

function AppContent() {
  const location = useLocation();

  // Scroll to the top of the page whenever the URL changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      <div className="screens-container flex flex-grow">
        <div className="contentDiv px-8 py-16 flex flex-col flex-grow min-h-screen min-w-full bg-[#EDEDED] gap-y-6 overflow-auto">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/results" element={<Results />} />
            <Route path="/reading-list" element={<ReadingList />} />
            <Route path="/order-summary" element={<OrderSummary />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="appContainerDiv overflow-hidden max-h-screen flex flex-grow">
        {renderScreensContainer()}
      </div>
    </>
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
