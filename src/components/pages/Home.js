import SideNavBar from "components/SideNavBar";
import React from "react";
import NavBar from "../NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="">
        <div className="flex flex-col flex-grow w-4/12 min-h-screen">
          <SideNavBar />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Home;
