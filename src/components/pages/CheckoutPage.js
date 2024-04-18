import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cart from "components/Cart";


function CheckoutPage() {
  return (
    <div>
        <div className="bg-white p-6 rounded-xl">
            <span>
                <h1 className="flex flex-col p-8">
                    <span className="font-bold text-primaryBlack">
                        Cart
                    </span>
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

        
    </div>
  )
}

export default CheckoutPage