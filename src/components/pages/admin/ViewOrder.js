import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderService from "service/OrderService";

const ViewOrder = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [books, setBooks] = useState([]);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Handle form submission based on formData
    try {
      await OrderService.editOrder(id, order);
      navigate("/admin/orders");
    } catch (error) {
      console.error("Failed to add Order");
    }
  };

  const fetchOrder = async () => {
    try {
      const response = await OrderService.getOrder(id);
      setOrder(response);
      setBooks(response.books);
    } catch (error) {
      console.error("Failed to fetch Order");
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="bg-white gap-y-4 flex flex-col p-6 rounded-xl"
    >
      <div className="textDiv flex flex-col gap-y-1 border-b-2">
        <h1 className="font-semibold text-xl">View Order details</h1>
        <h2 className="text-gray-500 mb-4 text-lg font-medium">
          View the details of the order you want.
        </h2>
      </div>
      <div className="flex flex-col pt-1 gap-y-4 xl:w-1/2">
        <div className="flex items-center gap-y-4">
          <label htmlFor="orderId" className="label w-2/4 2xl:w-1/4 text-base">
            Order ID
          </label>
          <input
            type="text"
            id="Order ID"
            name="id"
            value={order ? order.id : "Loading data..."}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full read-only:opacity-75"
            required
            readOnly
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="name" className="label w-2/4 2xl:w-1/4 text-base">
            Books Borrowed
          </label>
          <input
            type="text"
            id="booksBorrowed"
            name="booksBorrowed"
            value={
              books
                ? books.map((book) => book.title).join(", ")
                : "Loading data..."
            }
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full read-only:opacity-75"
            required
            readOnly
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="email" className="label w-2/4 2xl:w-1/4 text-base">
            Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            value={order ? order.status : "Loading data..."}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full read-only:opacity-75"
            required
            readOnly
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="password" className="label w-2/4 2xl:w-1/4 text-base">
            Borrowed At
          </label>
          <input
            type="text"
            id="borrowedAt"
            name="borrowedAt"
            value={order ? formatDate(order.borrowed_at) : "Loading data..."}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full read-only:opacity-75"
            required
            readOnly
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="password" className="label w-2/4 2xl:w-1/4 text-base">
            Returned At
          </label>
          <input
            type="text"
            id="returnedAt"
            name="returnedAt"
            value={
              order
                ? order.returned_at !== null
                  ? formatDate(order.returned_at)
                  : "To be returned"
                : "Loading data..."
            }
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full read-only:opacity-75"
            required
            readOnly
          />
        </div>
        <button
          onClick={() => navigate("/admin/orders")}
          className="btn btn-error text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ViewOrder;
