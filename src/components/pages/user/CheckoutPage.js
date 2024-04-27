import Cart from "components/user-components/Cart";
import Checkout from "components/user-components/Checkout";
import React, { useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import BookService from "service/BookService";
import CartService from "service/CartService";

function CheckoutPage() {
  const [cart, setCart] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const cart = CartService.getCart();
    setCart(cart);
    console.log("Cart:", cart);

    // Map over the books array in the cart object and fetch each book's details
    const bookPromises = cart.books.map((book) => {
      return BookService.getBook(book.id);
    });
    const books = await Promise.all(bookPromises);
    console.log("Fetched books:", books);
    setBooks(books);
  };

  const updateBooks = async () => {
    const cart = CartService.getCart();
    const bookPromises = cart.books.map((book) => {
      return BookService.getBook(book.id);
    });
    const books = await Promise.all(bookPromises);
    console.log("Fetched books:", books);
    setBooks(books);
  };

  const onDeleteBook = (bookId) => {
    CartService.removeBookFromCart(bookId);
    updateBooks();
  };

  const handleDeleteBookToast = (book) => {
    toast.success(`Removed "${book.title}" from your cart. 👋`, {
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
  };

  if (!cart?.books?.length || !books?.length) {
    return (
      <div className="flex flex-grow flex-row">
        <ToastContainer />
        <div className="flex flex-grow flex-row gap-4 w-full">
          <div className="flex flex-col bg-white p-6 rounded-xl w-3/4">
            <h1 className="font-semibold text-primaryBlack text-xl">Cart</h1>
            <div className="text-gray-400 mt-2 font-medium">
              Cart is currently empty. Please browse the library to add books.
            </div>
          </div>
          <div className="flex flex-col bg-white p-6 rounded-xl h-max w-1/4">
            <Checkout books={books} cart={cart} />
          </div>
        </div>
      </div>
    );
  }

  const handleEmptyCart = () => {
    CartService.emptyCart();
    setCart(CartService.getCart());
    setBooks([]);
    toast.success(`You have emptied your cart. 👋`, {
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
  };

  return (
    <div className="flex flex-grow flex-row">
      <ToastContainer />
      <div className="flex flex-grow flex-row gap-4 w-full">
        <div className="flex flex-col bg-white p-6 rounded-xl w-3/4">
          <div>
            <h1 className="font-semibold text-primaryBlack text-xl">Cart</h1>

            <div className="flex flex-row justify-between">
              <h1 className="text-gray-400">{cart.books.length} Items</h1>
              <button onClick={handleEmptyCart}>
                <h1 className="text-primaryBlue">Empty cart</h1>
              </button>
            </div>
          </div>

          {books.map((book) => (
            <div key={book.id} className="py-4 border-b-2">
              <Cart
                book={book}
                onDeleteBook={onDeleteBook}
                handleDeleteBookToast={handleDeleteBookToast}
                loadCart={loadCart}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col bg-white p-6 rounded-xl w-1/4 h-max">
          <Checkout books={books} cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
