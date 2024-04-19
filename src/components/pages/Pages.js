import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./user/Home";
import Profile from "./user/Profile";

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default Pages;
