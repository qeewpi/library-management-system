import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "service/AuthService";
import OrderService from "service/OrderService";

export function UserOrderTable({ searchValue }) {
  const [orders, setOrders] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      let orders = await OrderService.getOrdersByUserId(currentUser.id);
      setOrders(orders);
      console.log(orders);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  const deleteOrder = async (id) => {
    try {
      await OrderService.deleteOrder(id);
      loadOrders();
    } catch (error) {
      console.error("Failed to delete order", error);
    }
  };

  const markOrderAsReturned = async (id) => {
    try {
      await OrderService.markOrderAsReturned(id);
      loadOrders();
    } catch (error) {
      console.error("Failed to mark order as returned", error);
    }
  };

  const fetchUserName = async (orderId) => {
    try {
      const order = await OrderService.getUserByOrderId(orderId);
      return order.username;
    } catch (error) {
      console.error("Failed to fetch order", error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <div className="overflow-hidden border border-b-0 rounded-xl border-gray-200">
      <table className="table table-lg border-gray-500 border-spacing-y-4">
        {/* head */}
        <thead className="text-base text-gray-500 bg-gray-100">
          <tr className="border-gray-200 border-b">
            <th className="font-medium border-b p-6">Order ID</th>
            <th className="font-medium border-b p-6">ID of Books Borrowed</th>
            <th className="font-medium border-b p-6">Status</th>
            <th className="font-medium border-b p-6">Borrowed At</th>
            <th className="font-medium border-b p-6">Due Date</th>
            <th className="font-medium border-b p-6">Returned At</th>
            <th className="font-medium border-b p-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {orders
            .filter((item) => {
              if (searchValue.toLowerCase() === "") {
                return true;
              } else {
                return Object.values(item).some(
                  (value) =>
                    value &&
                    value
                      .toString()
                      .toLowerCase()
                      .includes(searchValue.toLowerCase())
                );
              }
            })
            .map((order, index) => (
              <tr
                key={index}
                className="text-base font-medium text-primaryBlack border-gray-200 h-full w-full"
              >
                <td className="border-b p-6">{order.id}</td>
                <td className="border-b p-6">
                  {order.books.map((book) => book.id).join(", ")}
                </td>
                <td className="border-b p-6">{order.status}</td>
                <td className="border-b p-6">
                  {formatDate(order.borrowed_at)}
                </td>
                <td className="border-b p-6">{formatDate(order.due_date)}</td>
                <td className="border-b p-6">
                  {order.returned_at
                    ? formatDate(order.returned_at)
                    : "To Be Returned"}
                </td>
                <td className="border-b p-6">
                  <div className="flex gap-x-3 items h-full">
                    <Link
                      to={`/order-summary/${order.id}`}
                      className="text-green-900 flex items-center gap-x-1"
                    >
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-green-900"
                      >
                        <path d="M12.3568 9.00462C14.5659 9.00462 16.3568 10.7955 16.3568 13.0046C16.3568 15.2138 14.5659 17.0046 12.3568 17.0046C10.1477 17.0046 8.3568 15.2138 8.3568 13.0046C8.3568 10.7955 10.1477 9.00462 12.3568 9.00462ZM12.3568 10.5046C10.9761 10.5046 9.8568 11.6239 9.8568 13.0046C9.8568 14.3853 10.9761 15.5046 12.3568 15.5046C13.7375 15.5046 14.8568 14.3853 14.8568 13.0046C14.8568 11.6239 13.7375 10.5046 12.3568 10.5046ZM12.3568 5.5C16.9703 5.5 20.9529 8.65001 22.0579 13.0644C22.1585 13.4662 21.9143 13.8735 21.5125 13.9741C21.1106 14.0746 20.7034 13.8305 20.6028 13.4286C19.6639 9.67796 16.2781 7 12.3568 7C8.43374 7 5.0469 9.68026 4.10966 13.4332C4.0093 13.835 3.60216 14.0794 3.20029 13.9791C2.79842 13.8787 2.554 13.4716 2.65436 13.0697C3.75745 8.65272 7.74129 5.5 12.3568 5.5Z" />
                      </svg>
                      View Order
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
