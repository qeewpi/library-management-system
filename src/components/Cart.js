import { books } from "data/booksData";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Cart() {
  // Display the book details
  // Generate a random id
  const randomId = Math.floor(Math.random() * books.length) + 1;

  // Find the book with the random id
  const book = books.find((book) => book.id === randomId);

  // If book is not found, display a message
  if (!book) {
    return <div>Book not found</div>;
  }

  // Display the book details
  return (
    <div className="flex flex-row gap-x-8">
      <div className="flex">
        <img
          src={`../../${book.img}`}
          alt={book.bookTitle}
          className="h-[12rem] w-[8rem] object-cover rounded-xl"
        />
      </div>
      <div className="textDiv flex flex-grow flex-col gap-y-6 justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="">{book.bookTitle}</h1>
          <h1 className=" text-gray-500">{book.bookAuthor}</h1>
        </div>

        <div className="flex flex-row justify-between">
          <h1 className=" text-primaryBlack font-bold">Quantity: 1</h1>

          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.4 3.09999H9.6C9.6 2.21633 8.88368 1.49999 8 1.49999C7.11632 1.49999 6.4 2.21633 6.4 3.09999ZM5.2 3.09999C5.2 1.55359 6.4536 0.299988 8 0.299988C9.5464 0.299988 10.8 1.55359 10.8 3.09999H15.4C15.7314 3.09999 16 3.36862 16 3.69999C16 4.03136 15.7314 4.29999 15.4 4.29999H14.3447L13.4071 13.9889C13.2583 15.5267 11.966 16.7 10.421 16.7H5.57895C4.03403 16.7 2.74172 15.5267 2.5929 13.9889L1.65526 4.29999H0.6C0.268632 4.29999 0 4.03136 0 3.69999C0 3.36862 0.268632 3.09999 0.6 3.09999H5.2ZM6.8 6.89999C6.8 6.56862 6.53136 6.29999 6.2 6.29999C5.86863 6.29999 5.6 6.56862 5.6 6.89999V12.9C5.6 13.2313 5.86863 13.5 6.2 13.5C6.53136 13.5 6.8 13.2313 6.8 12.9V6.89999ZM9.8 6.29999C9.46864 6.29999 9.2 6.56862 9.2 6.89999V12.9C9.2 13.2313 9.46864 13.5 9.8 13.5C10.1314 13.5 10.4 13.2313 10.4 12.9V6.89999C10.4 6.56862 10.1314 6.29999 9.8 6.29999Z"
              fill="#212121"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Cart;
