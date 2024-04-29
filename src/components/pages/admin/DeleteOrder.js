import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OrderService from "service/OrderService";

function DeleteOrder() {
  let navigate = useNavigate();

  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await OrderService.deleteOrder(orderId);
      // Handle successful deletion, such as redirecting to another page or showing a success message
      console.log("Order deleted successfully");
      navigate("/admin/orders");
    } catch (error) {
      setError("Failed to delete order");
    }
  };

  const handleChange = (e) => {
    setOrderId(e.target.value);
  };

  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="textDiv flex flex-col gap-y-1 border-b-2">
          <h1 className="font-semibold text-xl">Delete a Order</h1>
          <h2 className="text-gray-500 mb-4 text-lg font-medium">
            Fill in the details of the Order you want to delete.
          </h2>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="flex flex-col gap-y-4 w-1/2 mt-6">
          <div className="flex items-center gap-y-4">
            <label htmlFor="userId" className="label w-1/4 text-base">
              Order ID
            </label>
            <input
              type="number"
              id="orderId"
              name="orderId"
              value={orderId}
              onChange={handleChange}
              className="input-grow input input-bordered text-base font-medium w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-error text-white">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteOrder;
