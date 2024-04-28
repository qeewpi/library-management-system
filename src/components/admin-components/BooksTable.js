import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookService from "service/BookService";

function BooksTable({ searchValue }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const books = await BookService.getAllBooks();
      const updatedBooks = await Promise.all(
        books.map(async (book) => {
          if (book.imagePath) {
            const imageUrl = BookService.downloadBookImage(book.imagePath);
            return { ...book, imageUrl };
          }
          return book;
        })
      );
      setBooks(updatedBooks);
    } catch (error) {
      console.error("Failed to fetch books", error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await BookService.deleteBook([id]);
      loadBooks();
    } catch (error) {
      console.error("Failed to delete book", error);
    }
  };

  return (
    <div className="overflow-hidden border border-b-0 rounded-xl border-gray-200">
      <table className="table table-lg border-gray-500 border-spacing-y-4">
        <thead className="text-sm text-gray-500 bg-gray-100">
          <tr className="border-gray-200 border-b">
            <th className="font-medium border-b p-6">Book ID</th>
            <th className="font-medium border-b p-6">Image</th>
            <th className="font-medium border-b p-6">Title</th>
            <th className="font-medium border-b p-6">Author</th>
            <th className="font-medium border-b p-6">Genre</th>
            <th className="font-medium border-b p-6">Description</th>
            <th className="font-medium border-b p-6">Image Path</th>
            <th className="font-medium border-b p-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books
            .filter((item) => {
              if (searchValue.toLowerCase() === "") {
                return true;
              } else {
                return Object.values(item).some((value) =>
                  value
                    .toString()
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                );
              }
            })
            .map((book, index) => (
              <tr className="text-sm font-medium text-primaryBlack border-gray-200 h-full w-full">
                <th
                  scope="row"
                  key={index}
                  className="border-b p-6 font-medium"
                >
                  {book.id}
                </th>
                <td className="border-b p-6">
                  <img
                    src={book.imageUrl}
                    alt=""
                    className="aspect-[1/1.6] rounded-xl object-cover"
                  />
                </td>
                <td className="border-b p-6">{book.title}</td>
                <td className="border-b p-6">{book.author}</td>
                <td className="border-b p-6">{book.genre}</td>
                <td className="border-b p-6 break-all">
                  {book.description.substring(0, 30) + "..."}
                </td>
                <td className="border-b p-6 break-all">{book.imagePath}</td>
                <td className="border-b p-6">
                  <div className="flex gap-x-3 items h-full">
                    <Link
                      to={`/admin/view/book/${book.id}`}
                      className="text-blue-900"
                    >
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-green-900"
                      >
                        <path d="M12.3568 9.00462C14.5659 9.00462 16.3568 10.7955 16.3568 13.0046C16.3568 15.2138 14.5659 17.0046 12.3568 17.0046C10.1477 17.0046 8.3568 15.2138 8.3568 13.0046C8.3568 10.7955 10.1477 9.00462 12.3568 9.00462ZM12.3568 10.5046C10.9761 10.5046 9.8568 11.6239 9.8568 13.0046C9.8568 14.3853 10.9761 15.5046 12.3568 15.5046C13.7375 15.5046 14.8568 14.3853 14.8568 13.0046C14.8568 11.6239 13.7375 10.5046 12.3568 10.5046ZM12.3568 5.5C16.9703 5.5 20.9529 8.65001 22.0579 13.0644C22.1585 13.4662 21.9143 13.8735 21.5125 13.9741C21.1106 14.0746 20.7034 13.8305 20.6028 13.4286C19.6639 9.67796 16.2781 7 12.3568 7C8.43374 7 5.0469 9.68026 4.10966 13.4332C4.0093 13.835 3.60216 14.0794 3.20029 13.9791C2.79842 13.8787 2.554 13.4716 2.65436 13.0697C3.75745 8.65272 7.74129 5.5 12.3568 5.5Z" />
                      </svg>
                    </Link>
                    <Link to={`/admin/edit/book/${book.id}`}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-blue-900"
                      >
                        <path d="M20.9519 3.0481C19.5543 1.65058 17.2885 1.65064 15.8911 3.04825L3.94103 14.9997C3.5347 15.4061 3.2491 15.9172 3.116 16.4762L2.02041 21.0777C1.96009 21.3311 2.03552 21.5976 2.21968 21.7817C2.40385 21.9659 2.67037 22.0413 2.92373 21.981L7.52498 20.8855C8.08418 20.7523 8.59546 20.4666 9.00191 20.0601L20.952 8.10861C22.3493 6.71112 22.3493 4.4455 20.9519 3.0481ZM16.9518 4.10884C17.7634 3.29709 19.0795 3.29705 19.8912 4.10876C20.7028 4.9204 20.7029 6.23632 19.8913 7.04801L19 7.93946L16.0606 5.00012L16.9518 4.10884ZM15 6.06084L17.9394 9.00018L7.94119 18.9995C7.73104 19.2097 7.46668 19.3574 7.17755 19.4263L3.76191 20.2395L4.57521 16.8237C4.64402 16.5346 4.79168 16.2704 5.00175 16.0603L15 6.06084Z" />
                      </svg>
                    </Link>
                    <button>
                      <div onClick={() => deleteBook(book.id)}>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-red-900"
                        >
                          <path d="M10 5H14C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5ZM8.5 5C8.5 3.067 10.067 1.5 12 1.5C13.933 1.5 15.5 3.067 15.5 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H19.9309L18.7589 18.6112C18.5729 20.5334 16.9575 22 15.0263 22H8.97369C7.04254 22 5.42715 20.5334 5.24113 18.6112L4.06908 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75C2 5.33579 2.33579 5 2.75 5H8.5ZM10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75V17.25C9 17.6642 9.33579 18 9.75 18C10.1642 18 10.5 17.6642 10.5 17.25V9.75ZM14.25 9C14.6642 9 15 9.33579 15 9.75V17.25C15 17.6642 14.6642 18 14.25 18C13.8358 18 13.5 17.6642 13.5 17.25V9.75C13.5 9.33579 13.8358 9 14.25 9ZM6.73416 18.4667C6.84577 19.62 7.815 20.5 8.97369 20.5H15.0263C16.185 20.5 17.1542 19.62 17.2658 18.4667L18.4239 6.5H5.57608L6.73416 18.4667Z" />
                        </svg>
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default BooksTable;
