import OrderItem from "components/user-components/OrderItem";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthService from "service/AuthService";
import OrderService from "service/OrderService";

function OrderSummary() {
  const { id: orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [books, setBooks] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  const fetchOrder = async () => {
    try {
      const order = await OrderService.getOrder(orderId);
      setOrder(order);
      setBooks(order.books);
    } catch (error) {
      console.error("Failed to fetch order", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [orderId]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-white p-6 rounded-xl py-16">
      <div className="text-center text-3xl text-primaryBlack font-semibold px-4 py-2">
        <span>ORDER</span>{" "}
        <span className="text-gray-600 font-medium">#{orderId}</span>
      </div>
      <div className="flex flex-col gap-y-1 text-center py-4">
        {order
          ? order.status === "RETURNED"
            ? `Your order has been completed, ${currentUser.name}! 🎉`
            : order.status === "OVERDUE"
            ? `Your order is overdue, ${currentUser.name}! 😟`
            : order.pickedUp
            ? `Your order has been confirmed, ${currentUser.name}! 😄`
            : `Your order is ready for pickup, ${currentUser.name}! 📚`
          : "Loading..."}
        <span className="mr-8 text-base font-medium text-gray-600">
          {order
            ? order.status === "RETURNED"
              ? "Thanks for returning the books! You can borrow more books in the library. 📚"
              : order.status === "OVERDUE"
              ? "Please return the books to the library as soon as possible. 🙏"
              : order.pickedUp
              ? "Thanks for picking up your order! Enjoy reading your books. 📖"
              : "Please proceed with picking up your books at the library. 😄"
            : "Loading..."}
        </span>
      </div>
      <div className="md:grid justify-center lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-3">
        <div className="flex justify-center gap-x-1">
          <span className="text-primaryBlack font-bold">Order Status: </span>
          <span className="font-medium">
            {order
              ? order.status === "BORROWED"
                ? "Borrowed"
                : order.status === "OVERDUE"
                ? "Overdue"
                : "Returned"
              : "Loading..."}
          </span>
        </div>
        <div className="flex justify-center gap-x-1">
          <span className="text-primaryBlack font-bold">Order Date: </span>
          <span className="font-medium">
            {order ? formatDate(order.borrowed_at) : "Loading..."}
          </span>
        </div>
        <div className="flex justify-center gap-x-1 col-span-2 xl:col-span-1">
          <span className="text-primaryBlack font-bold">Due Date: </span>
          <span className="font-medium">
            {order ? formatDate(order.due_date) : "Loading..."}
          </span>
        </div>
      </div>
      <div className="font-bold pt-8 px-4">
        <h1>Order Summary</h1>
      </div>
      {books.map((book, index) => (
        <div key={index} className="p-4 border-b-2">
          <OrderItem book={book} />
        </div>
      ))}
    </div>
  );
}

export default OrderSummary;
