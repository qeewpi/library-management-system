import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookService from "service/BookService";

const ViewBook = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
  });

  const { title, author, genre, description } = book;

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Handle form submission based on formData
    try {
      await BookService.editBook(id, book);
      navigate("/admin/book-list");
    } catch (error) {
      console.error("Failed to add book");
    }
  };

  const fetchUser = async () => {
    try {
      const response = await BookService.getBook(id);
      setBook(response);
    } catch (error) {
      console.error("Failed to fetch book");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="bg-white gap-y-4 flex flex-col p-6 rounded-xl"
    >
      <div className="textDiv flex flex-col gap-y-1 border-b-2">
        <h1 className="font-semibold text-xl">View book details</h1>
        <h2 className="text-gray-500 mb-4 text-lg font-medium">
          View the details of the book you want.
        </h2>
      </div>
      <div className="flex flex-col pt-1 gap-y-4 xl:w-1/2">
        <div className="flex items-center gap-y-4">
          <label htmlFor="username" className="label w-4/12 text-base">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-8/12  read-only:opacity-75"
            required
            readOnly
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="name" className="label w-4/12 text-base">
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-8/12  read-only:opacity-75"
            required
            readOnly
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="email" className="label w-4/12 text-base">
            Genre
          </label>
          <input
            type="text"
            id="genre"
            name="genre"
            value={genre}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-8/12 read-only:opacity-75"
            required
            readOnly
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="description" className="label w-4/12 text-base">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Enter book description"
            className="textarea textarea-bordered input-grow w-8/12 text-base font-medium read-only:opacity-75"
            required
            readOnly
          />
        </div>
        <button
          onClick={() => navigate("/admin/library-catalog")}
          className="btn btn-error text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ViewBook;
