import React, { useEffect, useState } from "react";
import BookService from "service/BookService";
import BookCardSlider from "./BookCardSlider";

function BooksCatalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BookService.getAllBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="bg-white font-semibold p-6 rounded-xl flex flex-col gap-y-4">
      <h1 className="text-xl">Library Catalog</h1>
      <BookCardSlider books={books} />
    </div>
  );
}

export default BooksCatalog;
