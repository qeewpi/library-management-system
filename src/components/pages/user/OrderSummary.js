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
    <div className="bg-white p-6 rounded-xl">
      <div className="text-center text-3xl text-primaryBlack font-semibold px-4 py-2">
        <span>ORDER</span>{" "}
        <span className="text-gray-600 font-medium">#{orderId}</span>
      </div>
      <div className="flex flex-col gap-y-1 text-center">
        <h2 className="text-base font-medium text-gray-600">
          Your order has been confirmed,{" "}
          <span className="font-semibold text-primaryBlack">
            {currentUser.name}
          </span>
          ! 🥳
        </h2>
        <span className="mr-8 text-base font-medium text-gray-600">
          {order
            ? order.pickedUp
              ? "Thanks for picking up your order!"
              : "Please proceed with picking up your order at the library."
            : "Loading..."}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-3">
        <div className="flex justify-center gap-x-1">
          <span className="text-primaryBlack font-bold">Order Status: </span>
          <span className="mr-8 font-medium">
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
        <div className="flex justify-center gap-x-1">
          <span className="text-primaryBlack font-bold">Due Date: </span>
          <span className="font-medium">
            {order ? formatDate(order.due_date) : "Loading..."}
          </span>
        </div>
      </div>
      <div className="font-bold pt-4 px-4">
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
