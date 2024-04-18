import Cart from "components/Cart";
import Checkout from "components/Checkout";
import React from "react";

function CheckoutPage() {
  return (
    <div className="flex flex-grow flex-row gap-4">
      <div className="flex flex-col bg-white p-6 rounded-xl w-3/4">
        <div>
          <h1 className="font-bold text-primaryBlack">Cart</h1>

          <div className="flex flex-row justify-between">
            <h1 className="text-gray-400">3 Items</h1>
            <h1 className="text-primaryBlue"> Empty cart</h1>
          </div>
        </div>

        <div className="p-4 border-b-4">
          <Cart />
        </div>

        <div className="p-4 border-b-4">
          <Cart />
        </div>

        <div className="p-4 border-b-4">
          <Cart />
        </div>
      </div>

      <div className="flex flex-col bg-white p-6 rounded-xl w-1/4 h-max">
        <Checkout />
      </div>
    </div>
  );
}

export default CheckoutPage;
