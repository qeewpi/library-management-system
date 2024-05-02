import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import OrderService from "service/OrderService";

const RenewOrder = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [booksArray, setBooksArray] = useState({
    books: [],
  });

  const [bookIdInput, setBookIdInput] = useState("");

  useEffect(() => {
    loadOrderBooks();
  }, []);

  const loadOrderBooks = async () => {
    try {
      const order = await OrderService.getOrder(id);
      setBooksArray({ books: order.books.map((book) => ({ id: book.id })) });
    } catch (error) {
      console.error("Failed to load order books", error);
    }
  };

  const handleBookIdChange = (e) => {
    setBookIdInput(e.target.value);
  };

  const handleAddBookToArray = (e) => {
    e.preventDefault();
    console.log(booksArray.books);
    // add bookId to booksArray
    //if bookId is not in booksArray, add it
    const bookIdInputStr = String(bookIdInput);
    if (!booksArray.books.some((book) => String(book.id) === bookIdInputStr)) {
      setBooksArray({
        books: [...booksArray.books, { id: bookIdInputStr }],
      });
      toast.success(
        `Added "${bookIdInputStr}" to the list of books to be ordered! 😄`,
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
    if (bookIdInputStr === "") {
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
    } else if (
      booksArray.books.some((book) => String(book.id) === bookIdInputStr)
    ) {
      toast.error(`"${bookIdInputStr}" is already in your cart. 😟`, {
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

  const handleRenewWithBooks = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    console.log(booksArray.books);
    try {
      await OrderService.renewOrderWithBooks(id, booksArray.books);
      toast.success(`Order renewed successfully with selected books! 😄`, {
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
      console.error("Failed to renew order with books", error);
      toast.error(`Failed to renew order with books! 😟`, {
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

  const handleRenewEntireOrder = async () => {
    setIsLoading(true);
    try {
      await OrderService.renewEntireOrder(id);
      toast.success(`Entire order renewed successfully! 😄`, {
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
      console.error("Failed to renew entire order", error);
      toast.error(`Failed to renew entire order! 😟`, {
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
      onSubmit={handleRenewWithBooks}
      className="bg-white gap-y-4 flex flex-col p-6 rounded-xl"
    >
      <div className="textDiv flex flex-col gap-y-1 border-b-2">
        <h1 className="font-semibold text-xl">Renew an order</h1>
        <h2 className="text-gray-500 mb-4 text-lg font-medium">
          Fill in the details of the order you want to renew.
        </h2>
      </div>
      <div className="flex flex-col pt-1 gap-y-4 xl:w-1/2">
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
                <span className="indicator-item badge badge-dark">x</span>
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
              Renew with selected books
            </button>
          )}
          <button
            onClick={handleRenewEntireOrder}
            className="btn btn-primary text-white btn-block join-item"
          >
            Renew entire order
          </button>
        </div>
        <button
          onClick={() => navigate("/admin/orders")}
          className="btn btn-error text-white btn-block join-item"
        >
          Cancel
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default RenewOrder;
