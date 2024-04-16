import Reminders from "components/Reminders";
import SideNavBar from "components/SideNavBar";
import WelcomeHeader from "components/WelcomeHeader";
import React from "react";
import NavBar from "../NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <div className="flex h-screen">
        <div className="hidden md:flex flex-col flex-grow w-3/12 md:w-4/12 h-full">
          <SideNavBar />
        </div>
        <div className="px-8 py-16 flex flex-col flex-grow h-full w-full bg-[#EDEDED] gap-y-4">
          <div className="w-full">
            <WelcomeHeader />
          </div>
          <div className="w-full">
            <Reminders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
