import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BookService from "service/BookService";

const EditBook = () => {
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
    const { name, value, files } = e.target;
    const newValue = e.target.type === "file" ? files[0] : value;
    setBook({ ...book, [name]: newValue });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(book).forEach((key) => {
      formData.append(key, book[key]);
    });
    try {
      await BookService.editBook(id, formData);
      navigate("/admin/library-catalog");
    } catch (error) {
      console.error("Failed to edit book", error);
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
        <h1 className="font-semibold text-xl">Edit book details</h1>
        <h2 className="text-gray-500 mb-4 text-lg font-medium">
          Fill in the details of the book you want to edit.
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
            className="input-grow input input-bordered text-base font-medium w-8/12"
            required
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
            className="input-grow input input-bordered text-base font-medium w-8/12"
            required
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="genre" className="label w-4/12 text-base">
            Genre
          </label>
          <select
            id="genre"
            name="genre"
            value={genre}
            onChange={handleChange}
            className="select select-bordered text-base font-medium w-8/12"
            required
          >
            <option disabled value="" className="">
              Select book genre
            </option>
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non-fiction</option>
            <option value="MYSTERY">Mystery</option>
            <option value="FANTASY">Fantasy</option>
            <option value="BIOGRAPHY">Biography</option>
          </select>
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="password" className="label w-4/12 text-base">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-8/12"
            required
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="image" className="label w-4/12 text-base">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className="file-input file-input-primary w-8/12 text-base font-medium"
          />
        </div>
        <div className="join w-1/2">
          <button
            type="submit"
            className="btn btn-success text-white btn-block join-item"
          >
            Submit
          </button>
          <button
            onClick={() => navigate("/admin/library-catalog")}
            className="btn btn-error text-white btn-block join-item"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditBook;
