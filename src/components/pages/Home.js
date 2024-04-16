import PopularBooks from "components/PopularBooks";
import Reminders from "components/Reminders";
import SideNavBar from "components/SideNavBar";
import WelcomeHeader from "components/WelcomeHeader";
import React from "react";
import NavBar from "../NavBar";

function Home() {
  return (
    <div>
      <div className="sticky top-0">
        <NavBar />
      </div>
      <div className="flex h-ful">
        <div className="hidden md:flex flex-col flex-grow w-3/12 md:w-4/12">
          <SideNavBar />
        </div>
        <div className="contentDiv px-8 py-16 flex flex-col flex-grow h-full w-full bg-[#EDEDED] gap-y-6">
          <div className="w-full">
            <WelcomeHeader />
          </div>
          <div className="w-full">
            <Reminders />
          </div>
          <div className="w-full">
            <PopularBooks />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
