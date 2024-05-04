import SimilarBookSlider from "components/user-components/SimilarBookSlider";
import { default as React, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookService from "service/BookService";
import CartService from "service/CartService";

function BookDetails() {
  // Get the id parameter from the URL
  const { id } = useParams();

  const [book, setBook] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadBook();
  }, [id]);

  const loadBook = async () => {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCart = async () => {
    // if cart doesn't exist yet
    let cart = CartService.getCart();
    if (!cart) {
      CartService.createCart();
      cart = CartService.getCart();
    }

    // if book already exists in cart, show a message
    if (CartService.getCart().books.find((book) => book.id === id)) {
      toast.error(`The "${book.title}" is already in your cart! 😟`, {
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
      toast.success(`Added "${book.title}" to your cart! 😄`, {
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
      toast.error(`Failed to add "${book.title}" to cart! 😟`, {
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
  if (!book && !isLoading) {
    return <div>Book not found</div>;
  } else if (!book) {
    return (
      <div className="flex min-w-screen min-h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // If data is being loaded, display a spinner
  if (isLoading) {
    return (
      <div className="flex min-w-screen min-h-screen items-cente justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // Display the book details
  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-sm breadcrumbs -mb-4">
        <ul>
          <li>
            <Link to="/browse-library">Browse Library</Link>
          </li>
          <li>
            <Link to={`/browse-library/${book.genre}`}>
              <a>
                {" "}
                {book.genre.charAt(0).toUpperCase() +
                  book.genre.slice(1).toLowerCase()}
              </a>
            </Link>
          </li>
          <li className="font-bold">{book.title}</li>
        </ul>
      </div>

      <div className="book-details-wrapper text-xl bg-white font-semibold p-6 rounded-xl flex">
        <div className="flex flex-col md:flex-row gap-x-8 flex-grow justify-items-stretch">
          <div className="imageContainer flex w-full mb-4 md:mb-0 md:w-4/12 rounded-xl relative group overflow-hidden">
            <img
              src={book.imageUrl}
              alt={book.title}
              className="aspect-[1/1.6] w-full h-full rounded-xl object-cover transform transition duration-500 group-hover:scale-110"
            />
          </div>
          <div className="textDiv flex flex-col gap-y-6 w-full">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-2xl">{book.title}</h1>
              <h1 className="text-base text-gray-500">By {book.author}</h1>
              <h1 className="text-base text-gray-500 italic">
                {book.genre.charAt(0).toUpperCase() +
                  book.genre.slice(1).toLowerCase()}
              </h1>
            </div>
            <div>
              <p className="text-base">{book.description}</p>
            </div>
            <div>
              <button
                onClick={handleAddToCart}
                className="p-4 px-12 bg-primaryBlue text-white rounded-xl text-base hover:bg-blue-900 transition duration-300 ease-in-out w-full md:w-auto"
              >
                Add to cart
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
      <SimilarBookSlider genre={book.genre} excludeBookId={book.id} />
    </div>
  );
}

export default BookDetails;
