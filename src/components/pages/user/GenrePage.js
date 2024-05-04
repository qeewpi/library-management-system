import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookService from "service/BookService";

function GenrePage() {
  let params = useParams();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const allBooks = await BookService.getAllBooks();
        const searchedBooks = allBooks.filter((book) => {
          return book.genre
            .toLowerCase()
            .includes(processGenrePath(params.genre));
        });
        setBooks(searchedBooks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    };

    fetchAllBooks();
  }, [params.search]);

  const processGenrePath = (genre) => {
    return genre.replace("-", "_").toLowerCase();
  };

  const processGenreTitle = (genre) => {
    return genre
      .replace(/_/g, "-")
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join("-");
  };

  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white md:p-5  w-full pb-8">
      <div className="ml-5 mt-5 md:ml-2 pb-8">
        <h1 className="text-2xl">{processGenreTitle(params.genre)} Books</h1>
        <div className="grid gap-4 mt-4 grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 min-h-full">
          {books.map((book) => (
            <Link
              to={"/book/" + book.id}
              className="group hover:text-blue-900 transition duration-500 ease-in-out"
            >
              <div className="flex flex-col  transform transition duration-500 hover:scale-90">
                <img
                  src={BookService.downloadBookImage(book.imagePath)}
                  alt={book.title}
                  className="object-cover rounded-xl aspect-[1/1.6]"
                />
                <h1 className="text-base line-clamp-2 pt-2">{book.title}</h1>
                <p className="text-base text-gray-500">{book.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenrePage;
