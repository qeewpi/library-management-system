import React, { useEffect, useState } from "react";
import BookService from "service/BookService";
import BookCardSlider from "./BookCardSlider";

function BooksCatalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookService.getAllBooks()
      .then((data) => {
        // Shuffle the array
        for (let i = data.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [data[i], data[j]] = [data[j], data[i]];
        }

        // Take the first 10 books
        setBooks(data.slice(0, 10));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-white font-semibold p-6 rounded-xl flex flex-col gap-y-4">
      <h1 className="text-xl">Reccommended for you</h1>
      <BookCardSlider books={books} />
    </div>
  );
}

export default BooksCatalog;
