import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartService from "service/CartService";
import OrderService from "service/OrderService";

function Checkout({ books }) {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const handleOrderCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await OrderService.addOrder(cart);
      const orderId = response.id;
      localStorage.removeItem("cart");
      navigate(`/order-summary/${orderId}`);
      CartService.createCart();
    } catch (error) {
      console.error("Failed to checkout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-1 rounded-xl">
      <div className="text-primaryBlack flex flex-col gap-y-2">
        <h1 className="font-semibold text-xl w-full">Order Summary</h1>
        <div className="pb-4 border-b-2">
          {books.map((book) => (
            <div key={book.id} className="">
              <h1 className="font-medium">{book.title}</h1>
            </div>
          ))}
        </div>
        <div className="">
          {/* Total quantity of books */}
          <h1 className="flex justify-between">
            <span>Books:</span>
            <span>{books.length}</span>
          </h1>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="btn mt-4 w-full  rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
          onClick={handleOrderCheckout}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Checkout"}
        </button>
      </div>
    </div>
  );
}

export default Checkout;
