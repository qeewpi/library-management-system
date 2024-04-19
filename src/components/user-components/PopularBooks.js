import React from "react";
import BookCardSlider from "./BookCardSlider";

function PopularBooks() {
  return (
    <div className="bg-white font-semibold p-6 rounded-xl flex flex-col gap-y-4">
      <h1 className="text-xl">Popular Books</h1>
      <BookCardSlider />
    </div>
  );
}

export default PopularBooks;
