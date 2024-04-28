import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookService from "service/BookService";

function AddBook() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = e.target.type === "file" ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await BookService.addBook(formData);
      console.log("Book added successfully");
      navigate("/admin/library-catalog");
    } catch (error) {
      console.error("Failed to add book", error);
    }
  };

  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="textDiv flex flex-col gap-y-1 border-b-2">
          <h1 className="font-semibold text-xl">Add a book</h1>
          <h2 className=" text-gray-500 mb-4 text-lg font-medium">
            Fill in the details of the book you want to add.
          </h2>
        </div>
        <div className="flex flex-col pt-6 gap-y-4 xl:w-1/2">
          <div className="flex items-center gap-y-4">
            <label htmlFor="title" className="label w-4/12 text-base">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter book title"
              className="input-grow input input-bordered text-base font-medium w-8/12"
              required
            />
          </div>
          <div className="flex items-center gap-y-4">
            <label htmlFor="author" className="label w-4/12 text-base">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Enter book author"
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
              value={formData.genre}
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
            <label htmlFor="description" className="label w-4/12 text-base">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter book description"
              className="textarea textarea-bordered input-grow w-8/12 text-base font-medium"
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
    </div>
  );
}

export default AddBook;
