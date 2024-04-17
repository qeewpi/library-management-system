import React from "react";
import { Link } from "react-router-dom";

function Reminders() {
  return (
    <div className="flex flex-col bg-white font-semibold p-6 rounded-xl text-gray-500 gap-y-4">
      <h1>
        You have <span className="text-primaryBlue">1 overdue book </span> and{" "}
        <span className="text-primaryYellow">1 book due tomorrow</span>. Please
        return or renew to avoid late fees.
      </h1>
      <div className="buttonsDiv flex flex-col lg:flex-row gap-y-4 gap-x-3">
        <Link to="/return">
          <button className="p-4 px-12 bg-secondaryBlue text-white rounded-xl w-full h-full">
            View overdue books
          </button>
        </Link>
        <Link to="/return">
          <button className="p-4 px-12 bg-primaryYellow text-white rounded-xl w-full h-full">
            Renew books online
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Reminders;
