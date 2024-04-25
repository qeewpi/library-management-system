import { default as React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookService from "service/BookService";
import CartService from "service/CartService";
import RecommendedBooks from "../../user-components/RecommendedBooks";

function BookDetails() {
  // Get the id parameter from the URL
  const { id } = useParams();

  const [book, setBook] = useState(null);

  const notify = () => {
    toast("Default Notification !");
  };

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const book = await BookService.getBook(id);
      if (book.imagePath) {
        const imageUrl = await BookService.downloadBookImage(book.imagePath);
        setBook({ ...book, imageUrl });
      } else {
        setBook(book);
      }
    } catch (error) {
      console.error("Failed to fetch book", error);
    }
  };

  const handleAddToCart = async () => {
    // if book already exists in cart, show a message
    if (CartService.getCart().books.find((book) => book.id === id)) {
      toast.error(`Book already exists in cart! 😟`, {
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
      return;
    }
    try {
      await CartService.addBookToCart([id]);
      toast.success(`Added ${book.title} to cart! 😄`, {
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
    } catch (error) {
      toast.error(`Failed to add ${book.title} to cart! 😟`, {
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
      console.error("Failed to add book to cart", error);
    }
  };

  // If book is not found, display a message
  if (!book) {
    return <div>Book not found</div>;
  }

  // Display the book details
  return (
    <div className="flex flex-col gap-y-6">
      <div className="book-details-wrapper text-xl bg-white font-semibold p-6 rounded-xl flex">
        <div className="flex flex-row gap-x-8 flex-grow justify-items-stretch">
          <div className="imageContainer flex w-4/12 xl:w-full 2xl:w-4/12">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="h-[26rem] 2xl:h-[32rem] w-full rounded-xl object-cover"
            />
          </div>
          <div className="textDiv flex flex-col gap-y-6 w-full">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-2xl">{book.title}</h1>
              <h1 className="text-base text-gray-500">{book.author}</h1>
            </div>
            <div>
              <p className="text-base">{book.description}</p>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="p-4 px-12 bg-primaryBlue text-white rounded-xl text-sm"
              >
                Add to cart
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      <RecommendedBooks imageBaseUrl="../../" />
    </div>
  );
}

export default BookDetails;
