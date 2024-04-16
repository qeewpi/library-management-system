import React from "react";
import cardItemPlaceholder from "../img/cardItemPlaceholder.png";

function PopularBooks() {
  return (
    <div className="bg-white font-semibold p-6 rounded-xl flex flex-col gap-y-4">
      <h1 className="text-xl">Popular Books</h1>
      <div className="cardsGrid flex flex-row gap-x-4">
        <div className="cardItem flex flex-col gap-y-3">
          <img src={cardItemPlaceholder} alt="" />
          <div className="cardItemDetails text-base">
            <h1 className="">Book Title</h1>
            <p className="">Author</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularBooks;
