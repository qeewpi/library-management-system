import PopularBooks from "components/PopularBooks";
import Reminders from "components/Reminders";
import WelcomeHeader from "components/WelcomeHeader";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="w-full ">
        <WelcomeHeader />
      </div>
      <div className="w-full">
        <Reminders />
      </div>
      <div className="w-full">
        <PopularBooks />
      </div>
    </div>
  );
}

export default Home;
