import React from "react";
import { Link, useParams } from "react-router-dom";
import { books } from "../../data/booksData";
import RecommendedBooks from "./../RecommendedBooks";

function BookDetails() {
  // Get the id parameter from the URL
  const { id } = useParams();

  // Find the book with the matching id
  const book = books.find((book) => book.id === parseInt(id));

  // If book is not found, display a message
  if (!book) {
    return <div>Book not found</div>;
  }

  // Display the book details
  return (
    <div className="flex flex-col gap-y-6">
      <div className="book-details-wrapper text-xl bg-white font-semibold p-6 rounded-xl flex">
        <div className="flex flex-row gap-x-8 flex-grow justify-items-stretch">
          <div className="flex w-3/12">
            <img
              src={`../../${book.img}`}
              alt={book.bookTitle}
              className="h-[28rem] w-full rounded-xl object-cover"
            />
          </div>
          <div className="textDiv flex flex-col gap-y-6 w-full">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-2xl">{book.bookTitle}</h1>
              <h1 className="text-base text-gray-500">{book.bookAuthor}</h1>
            </div>
            <div>
              <p className="text-base">{book.bookDescription}</p>
            </div>
            <div>
              <Link to="/return">
                <button className="p-4 px-12 bg-primaryBlue text-white rounded-xl text-sm">
                  Add to cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <RecommendedBooks />
    </div>
  );
}

export default BookDetails;
