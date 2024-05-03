import BooksCatalog from "components/user-components/BooksCatalog";
import Reminders from "components/user-components/Reminders";
import WelcomeHeader from "components/user-components/WelcomeHeader";
import React from "react";
import ReadingListSlider from "./ReadingListSlider";

function Home() {
  return (
    <div className="flex flex-col gap-y-6">
      <WelcomeHeader />
      <Reminders />
      <BooksCatalog />
      <ReadingListSlider />
    </div>
  );
}

export default Home;
