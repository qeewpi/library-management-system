import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OrderService from "service/OrderService";

const ViewOrder = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [order, setOrder] = useState({
    username: "",
    booksBorrowed: "",
    status: "",
    borrowedAt: "",
    dueDate: "",
    returnedAt: "",
  });

  const { username, booksBorrowed, status, borrowedAt, dueDate, returnedAt } =
    order;

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchUser();
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

  const fetchUser = async () => {
    try {
      const response = await OrderService.getOrder(id);
      setOrder(response);
    } catch (error) {
      console.error("Failed to fetch Order");
    }
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
          <label htmlFor="username" className="label w-2/4 2xl:w-1/4 text-base">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
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
            value={booksBorrowed}
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
            value={status}
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
            value={borrowedAt}
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
            value={returnedAt}
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
