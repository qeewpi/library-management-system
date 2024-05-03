import { default as React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
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
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  const renewOrder = async (orderId) => {
    try {
      const orderData = await OrderService.getOrder(orderId);
      if (orderData.returned_at) {
        toast.error(
          `Order #${orderId} is already marked as returned. Please submit a new order instead.`,
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
        return;
      } else {
        const response = await toast.promise(
          OrderService.renewEntireOrder(orderId),
          {
            pending: "Renewing order...",
            success: `Order #${orderId} renewed successfully!`,
            error: `Failed to renew order #${orderId}.`,
          },
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
        loadOrders();
      }
    } catch (error) {
      console.error("Failed to renew order", error);
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
        <thead className="text-sm text-gray-500 bg-gray-100">
          <tr className="border-gray-200 border-b">
            <th className="font-medium border-b p-4">Order ID</th>
            <th className="font-medium border-b p-4">ID of Books Borrowed</th>
            <th className="font-medium border-b p-4">Status</th>
            <th className="font-medium border-b p-4">Borrowed At</th>
            <th className="font-medium border-b p-4">Due Date</th>
            <th className="font-medium border-b p-4">Returned At</th>
            <th className="font-medium border-b p-4">Actions</th>
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
                className="text-sm font-medium text-primaryBlack border-gray-200 h-full w-full"
              >
                <td className="border-b p-4">{order.id}</td>
                <td className="border-b p-4">
                  {order.books.map((book) => book.id).join(", ")}
                </td>
                <td className="border-b p-4">{order.status}</td>
                <td className="border-b p-4">
                  {formatDate(order.borrowed_at)}
                </td>
                <td className="border-b p-4">{formatDate(order.due_date)}</td>
                <td className="border-b p-4">
                  {order.returned_at
                    ? formatDate(order.returned_at)
                    : "To Be Returned"}
                </td>
                <td className="border-b p-4">
                  <div className="container flex flex-row">
                    <button>
                      <Link
                        to={`/order-summary/${order.id}`}
                        className="text-green-900 flex items-center gap-x-1 tooltip tooltip-left tooltip-primary"
                        data-tip="View Order Details"
                      >
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="fill-blue-900"
                        >
                          <path d="M12.3568 9.00462C14.5659 9.00462 16.3568 10.7955 16.3568 13.0046C16.3568 15.2138 14.5659 17.0046 12.3568 17.0046C10.1477 17.0046 8.3568 15.2138 8.3568 13.0046C8.3568 10.7955 10.1477 9.00462 12.3568 9.00462ZM12.3568 10.5046C10.9761 10.5046 9.8568 11.6239 9.8568 13.0046C9.8568 14.3853 10.9761 15.5046 12.3568 15.5046C13.7375 15.5046 14.8568 14.3853 14.8568 13.0046C14.8568 11.6239 13.7375 10.5046 12.3568 10.5046ZM12.3568 5.5C16.9703 5.5 20.9529 8.65001 22.0579 13.0644C22.1585 13.4662 21.9143 13.8735 21.5125 13.9741C21.1106 14.0746 20.7034 13.8305 20.6028 13.4286C19.6639 9.67796 16.2781 7 12.3568 7C8.43374 7 5.0469 9.68026 4.10966 13.4332C4.0093 13.835 3.60216 14.0794 3.20029 13.9791C2.79842 13.8787 2.554 13.4716 2.65436 13.0697C3.75745 8.65272 7.74129 5.5 12.3568 5.5Z" />
                        </svg>
                      </Link>
                    </button>
                    <button
                      className="tooltip tooltip-left tooltip-success"
                      data-tip="Renew Order"
                      onClick={() => renewOrder(order.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-green-900"
                      >
                        <path d="M5.235 15.204q-.358-.739-.546-1.537T4.5 12.05q0-3.139 2.19-5.344T12 4.5h1.387l-2.1-2.1l.707-.708L15.302 5l-3.308 3.308l-.707-.708l2.1-2.1H12q-2.711 0-4.606 1.907T5.5 12.05q0 .592.121 1.208q.121.615.363 1.196zm6.77 7.104L8.699 19l3.308-3.308l.708.708l-2.1 2.1H12q2.712 0 4.606-1.907T18.5 11.95q0-.592-.121-1.208q-.121-.615-.364-1.196l.75-.75q.358.739.546 1.537t.189 1.617q0 3.139-2.19 5.344T12 19.5h-1.386l2.1 2.1z"></path>
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
}
