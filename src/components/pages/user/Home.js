import BooksCatalog from "components/user-components/BooksCatalog";
import RecommendedBooks from "components/user-components/RecommendedBooks";
import Reminders from "components/user-components/Reminders";
import WelcomeHeader from "components/user-components/WelcomeHeader";
import React from "react";

function Home() {
  return (
    <div className="flex flex-col gap-y-6">
      <WelcomeHeader />
      <Reminders />
      <BooksCatalog />
      <RecommendedBooks imageBaseUrl={""} />
    </div>
  );
}

export default Home;
