import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookService from "service/BookService";

function DeleteBook() {
  let navigate = useNavigate();

  const [bookId, setBookId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await BookService.deleteBook(bookId);
      console.log("Book deleted successfully");
      navigate("/admin/library-catalog");
    } catch (error) {
      setError("Failed to delete book");
    }
  };

  const handleChange = (e) => {
    setBookId(e.target.value);
  };

  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="textDiv flex flex-col gap-y-1 border-b-2">
          <h1 className="font-semibold text-xl">Delete a book</h1>
          <h2 className="text-gray-500 mb-4 text-lg font-medium">
            Fill in the details of the book you want to delete.
          </h2>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="flex flex-col gap-y-4 w-1/2 mt-6">
          <div className="flex items-center gap-y-4">
            <label htmlFor="bookId" className="label w-1/4 text-base">
              Book ID
            </label>
            <input
              type="number"
              id="bookId"
              name="bookId"
              value={bookId}
              onChange={handleChange}
              className="input-grow input input-bordered text-base font-medium w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-error text-white">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteBook;
