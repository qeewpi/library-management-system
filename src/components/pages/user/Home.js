import Reminders from "components/user-components/Reminders";
import WelcomeHeader from "components/user-components/WelcomeHeader";
import PopularBooks from "components/user-components/BooksCatalog";
import RecommendedBooks from "components/user-components/RecommendedBooks";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col gap-y-6">
      <WelcomeHeader />
      <Reminders />
      <PopularBooks />
      <RecommendedBooks imageBaseUrl={""} />
    </div>
  );
}

export default Home;
