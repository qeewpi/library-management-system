import PopularBooks from "components/PopularBooks";
import Reminders from "components/Reminders";
import WelcomeHeader from "components/WelcomeHeader";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col gap-y-6">
      <WelcomeHeader />
      <Reminders />
      <PopularBooks />
    </div>
  );
}

export default Home;
