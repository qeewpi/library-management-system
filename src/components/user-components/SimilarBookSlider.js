import React from "react";
import BookService from "service/BookService";
import BookCardSlider from "./BookCardSlider";

function SimilarBookSlider({ genre, excludeBookId }) {
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    const fetchBooks = async () => {
      const allBooks = await BookService.getAllBooks();
      const filteredBooks = allBooks.filter(
        (book) => book.genre === genre && book.id !== excludeBookId
      );
      setBooks(filteredBooks);
    };

    fetchBooks();
  }, [genre, excludeBookId]);

  if (books.length === 0) return null;

  return (
    <div className="sliderContainer bg-white font-semibold p-6 rounded-xl flex flex-col gap-y-4">
      <h1 className="text-xl">
        More {""}
        <span>
          {genre
            .replace(/_/g, "-")
            .split("-")
            .map((word) => word.slice(0).toLowerCase())
            .join("-")}
        </span>{" "}
        {""}
        books
      </h1>
      <BookCardSlider books={books} />
    </div>
  );
}

export default SimilarBookSlider;
