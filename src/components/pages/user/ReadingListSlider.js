import BookCardSlider from "components/user-components/BookCardSlider";
import React, { useEffect, useState } from "react";
import AuthService from "service/AuthService";
import OrderService from "service/OrderService";

const ReadingListSlider = () => {
  const [books, setBooks] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await OrderService.getOrdersByUserId(currentUser.id);
      const borrowedBooks = orders
        .filter(
          (order) => order.status === "BORROWED" || order.status === "OVERDUE"
        )
        .flatMap((order) => order.books);
      setBooks(borrowedBooks);
    };

    fetchOrders();
  }, []);

  return (
    <div className="bg-white font-semibold p-6 rounded-xl flex flex-col gap-y-4">
      <h1 className="text-xl">Your Reading List</h1>
      {books.length > 0 ? (
        <BookCardSlider books={books} />
      ) : (
        <p className="font-medium text-gray-600">
          Your reading list is empty. Start exploring the library to find books
          to borrow! 📚🔍
        </p>
      )}
    </div>
  );
};

export default ReadingListSlider;
