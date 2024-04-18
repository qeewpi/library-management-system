import OrderItem from "components/OrderItem";
import React from "react";

function OrderSummary() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <div>
        <h1 className="text-center text-3xl text-primaryBlack font-bold p-8">
          <span className="">ORDER#</span> <span className="">00000</span>
        </h1>
      </div>
      <div className="">
        <h1 className="text-center">
          <span className="text-primaryBlack font-bold">Status:</span>{" "}
          <span className="mr-8">For Pickup</span>
          <span className="text-primaryBlack font-bold ml-8">Date:</span>{" "}
          <span>April 12, 2024</span>
        </h1>
      </div>

      <div className="font-bold p-4">
        <h1>Order Summary</h1>
      </div>

      <div className="p-4 border-b-2">
        <OrderItem />
      </div>

      <div className="p-4 border-b-2">
        <OrderItem />
      </div>

      <div className="p-4 border-b-2">
        <OrderItem />
      </div>
    </div>
  );
}

export default OrderSummary;
