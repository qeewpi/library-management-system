import React from "react";
import BookCardSlider from "./BookCardSlider";

function RecommendedBooks() {
  return (
    <div>
      <div className="bg-white font-semibold p-6 rounded-xl flex flex-col gap-y-4">
        <h1 className="text-xl">Recommended for you</h1>
        <BookCardSlider />
      </div>
    </div>
  );
}

export default RecommendedBooks;
