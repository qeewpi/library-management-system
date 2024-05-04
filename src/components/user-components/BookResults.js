import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BookService from "service/BookService";

function BookResults() {
  let params = useParams();

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const allBooks = await BookService.getAllBooks();
        const searchedBooks = allBooks.filter((book) => {
          return Object.values(book).some((value) =>
            value.toString().toLowerCase().includes(params.search.toLowerCase())
          );
        });
        setBooks(searchedBooks);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books: ", error);
      }
    };

    fetchAllBooks();
  }, [params.search]);

  return (
    <div className="flex flex-col gap-8 rounded-xl bg-white md:p-5 flex-grow w-full">
      <div className="ml-5 mt-5 md:ml-2 pb-8">
        <h1 className="text-2xl">Results for "{params.search}"</h1>
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
                <h1 className="text-sm line-clamp-2 pt-2">{book.title}</h1>
                <p className="text-xs text-gray-500">{book.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookResults;
