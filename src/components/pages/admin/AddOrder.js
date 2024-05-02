import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import OrderService from "service/OrderService";

const AddOrder = () => {
  let navigate = useNavigate();

  const [order, setOrder] = useState({
    userId: "",
    bookId: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const [booksArray, setBooksArray] = useState({
    books: [],
  });

  const [bookIdInput, setBookIdInput] = useState("");

  const { userId, bookId } = order;

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleBookIdChange = (e) => {
    setBookIdInput(e.target.value);
  };

  const handleAddBookToArray = (e) => {
    e.preventDefault();
    // add bookId to booksArray
    //if bookId is not in booksArray, add it
    if (!booksArray.books.some((book) => book.id === bookIdInput)) {
      setBooksArray({
        books: [...booksArray.books, { id: bookIdInput }],
      });
      toast.success(
        `Added "${bookIdInput}" to the list of books to be ordered! 😄`,
        {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }
      );
    }
    if (bookIdInput === "") {
      toast.error(`Book ID field can't be empty! 😟`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else if (booksArray.books.some((book) => book.id === bookIdInput)) {
      toast.error(`"${bookIdInput}" is already in your cart. 😟`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const orderData = {
        user: {
          id: order.userId,
        },
        books: booksArray.books,
      };
      await OrderService.addOrder(orderData);
      toast.success(`Order added successfully! 😄`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      navigate("/admin/orders");
    } catch (error) {
      console.error("Failed to add order");
      toast.error(`Failed to add order! 😟`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white gap-y-4 flex flex-col p-6 rounded-xl"
    >
      <div className="textDiv flex flex-col gap-y-1 border-b-2">
        <h1 className="font-semibold text-xl">Add an order</h1>
        <h2 className="text-gray-500 mb-4 text-lg font-medium">
          Fill in the details of the order you want to add.
        </h2>
      </div>
      <div className="flex flex-col pt-1 gap-y-4 xl:w-1/2">
        <div className="flex items-center gap-y-4">
          <label htmlFor="bookId" className="label w-2/4 2xl:w-1/4 text-base">
            User ID
          </label>
          <input
            type="number"
            id="userId"
            name="userId"
            value={userId}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full"
            required
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="bookId" className="label w-2/4 2xl:w-1/4 text-base">
            Book ID
          </label>
          <input
            type="number"
            id="bookId"
            name="bookId"
            value={bookIdInput}
            onChange={handleBookIdChange}
            className="input-grow input input-bordered text-base font-medium w-full"
            required
          />
        </div>
        <button type="button" onClick={handleAddBookToArray} className="btn">
          Add Book
        </button>
        <div className="flex gap-x-2">
          <h1>Added books: </h1>

          {booksArray.books.map((book, index) => (
            <div className="btn disabled relative" key={book.id}>
              <h1>{book.id}</h1>
              <button
                className="indicator absolute top-0 right-0"
                onClick={() => {
                  const newBooksArray = [...booksArray.books];
                  newBooksArray.splice(index, 1);
                  setBooksArray({ books: newBooksArray });
                }}
              >
                <span className="indicator-item badge badge-secondary">x</span>
              </button>
            </div>
          ))}
        </div>

        <div className="join w-1/2">
          {isLoading ? (
            <button
              type="submit"
              className="btn btn-success text-white btn-block join-item"
            >
              <span className="loading loading-spinner loading-xs"></span>
              Loading
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-success text-white btn-block join-item"
            >
              Submit
            </button>
          )}
          <button
            onClick={() => navigate("/admin/orders")}
            className="btn btn-error text-white btn-block join-item"
          >
            Cancel
          </button>
        </div>
      </div>
      <ToastContainer />
    </form>
  );
};

export default AddOrder;
