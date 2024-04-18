import React, { useEffect } from "react";
import Checkout from "components/Checkout";
import Cart from "components/Cart";


function CheckoutPage() {
  return (
    <div className="flex flex-1 flex-row ">
        <div className="flex flex-col bg-white p-6 rounded-xl w-3/4">
            <span>
                <h1 className="flex p-8">
                    <span className="font-bold text-primaryBlack">Cart</span>
                    <span className="text-gray-400">3 Items</span>
                </h1>
            </span>


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

        
        <div className="flex flex-1 w-1/4">
            <Checkout />     
        </div>
        

        
    </div>
  )
}

export default CheckoutPage