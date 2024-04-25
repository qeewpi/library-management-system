import Cart from "components/user-components/Cart";
import Checkout from "components/user-components/Checkout";
import React, { useEffect, useState } from "react";
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

  if (!cart || !books.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-grow flex-row gap-4">
      <div className="flex flex-col bg-white p-6 rounded-xl w-3/4">
        <div>
          <h1 className="font-bold text-primaryBlack">Cart</h1>

          <div className="flex flex-row justify-between">
            <h1 className="text-gray-400">{cart.books.length} Items</h1>
            <h1 className="text-primaryBlue"> Empty cart</h1>
          </div>
        </div>

        {books.map((book) => (
          <div key={book.id} className="p-4 border-b-4">
            <Cart book={book} />
          </div>
        ))}
      </div>

      <div className="flex flex-col bg-white p-6 rounded-xl w-1/4 h-max">
        <Checkout />
      </div>
    </div>
  );
}

export default CheckoutPage;
