import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { books } from "../../data/booksData";

function BookDetails() {
  // Get the id parameter from the URL
  const { id } = useParams();

  // Find the book with the matching id
  const book = books.find((book) => book.id === parseInt(id));

  useEffect(() => {
    // Scroll to the top of the page when the component mounts or updates
    console.log(book.img);
    window.scrollTo(0, 0);
  }, [id]); // Scroll to the top whenever the id changes

  // If book is not found, display a message
  if (!book) {
    return <div>Book not found</div>;
  }

  // Display the book details
  return (
    <div className="text-xl bg-white font-semibold p-6 rounded-xl">
      <div className="flex flex-row gap-x-8">
        <div className="flex">
          <img src={`../../${book.img}`} alt={book.bookTitle} />
        </div>
        <div className="textDiv flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-1">
            <h1 className="text-2xl">{book.bookTitle}</h1>
            <h1 className="text-base text-gray-500">{book.bookAuthor}</h1>
          </div>
          <div>
            <p className="text-base ">{book.bookDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
