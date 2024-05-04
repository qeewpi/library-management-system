import React from "react";
import { Link } from "react-router-dom";
import BookService from "service/BookService";
import BookCardSlider from "./BookCardSlider";

function GenreBookSlider({ genre, excludeBookId }) {
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

  const processGenre = (genre) => {
    return genre
      .replace(/_/g, "-")
      .split("-")
      .map((word) => word.slice(0).toLowerCase())
      .join("-");
  };

  if (books.length === 0) return null;

  return (
    <div className="sliderContainer bg-white font-semibold p-6 rounded-xl flex flex-col gap-y-4">
      <Link to={`/browse-library/${processGenre(genre)}`} className="text-xl">
        <h1 className="text-xl">
          {genre
            .replace(/_/g, "-")
            .split("-")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join("-")}
        </h1>
      </Link>
      <BookCardSlider books={books} />
    </div>
  );
}

export default GenreBookSlider;
