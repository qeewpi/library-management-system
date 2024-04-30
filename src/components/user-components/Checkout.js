import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import CartService from "service/CartService";
import OrderService from "service/OrderService";

function Checkout({ books, cart }) {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleOrderCheckout = async () => {
    if (!cart || !cart.books || cart.books.length === 0) {
      toast.error(`You cannot checkout an empty cart! 😅`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    }

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
<<<<<<< HEAD
        <button
          type="submit"
          className="btn mt-4 w-full  rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue transform transition duration-500 hover:scale-90"
          onClick={handleOrderCheckout}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : "Checkout"}
        </button>
=======
        {isLoading ? (
          <button
            type="submit"
            className="btn mt-4 w-full  rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
            onClick={handleOrderCheckout}
            disabled={isLoading}
          >
            <span className="loading loading-spinner loading-xs"></span>
            Processing...
          </button>
        ) : (
          <button
            type="submit"
            className="btn mt-4 w-full  rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
            onClick={handleOrderCheckout}
            disabled={isLoading}
          >
            Checkout
          </button>
        )}
>>>>>>> 78b64dffb7dff2194422c49ce27ac8153b5222b3
      </div>
    </div>
  );
}

export default Checkout;
