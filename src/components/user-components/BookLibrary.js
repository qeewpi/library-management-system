import React, { useEffect, useState } from "react";
import AuthService from "service/AuthService";
import OrderService from "service/OrderService";
import BookService from "./../../service/BookService";

const BookLibrary = ({ setSelectedBook }) => {
  const [orders, setOrders] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await OrderService.getOrdersByUserId(currentUser.id);
      setOrders(orders);
    };

    fetchOrders();
  }, []);

  if (!orders.some((order) => order.status === "BORROWED")) {
    return (
      <div className="flex flex-1 flex-col items-start rounded-xl bg-white p-5 min-h-full">
        <div className="containerDiv flex-grow flex flex-col w-full">
          <p className={`${sizesText.lg} ml-[5px] italic md:ml-0`}>Welcome!</p>
          <h1
            className={`${sizesHeading["4xl"]} ml-[5px] mt-4 !text-black-900 md:ml-0`}
            style={{ paddingBottom: "15px" }}
          >
            Your Book Library
          </h1>
          <div className="overflow-auto mb-[42px] ml-[5px]  md:ml-0 min-h-full w-full flex">
            <p className="text-gray-600 font-medium">
              Your reading list is empty. Start exploring the library to find
              books to borrow! 📚🔍
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col items-start rounded-xl bg-white p-6 min-h-full">
      <div className="containerDiv flex-grow flex flex-col">
        <p className={`${sizesText.lg} ml-[5px] italic md:ml-0`}>Welcome!</p>
        <h1
          className={`${sizesHeading["4xl"]} ml-[5px] mt-4 !text-black-900 md:ml-0`}
          style={{ paddingBottom: "15px" }}
        >
          Your Book Library
        </h1>
        <div className="overflow-auto mb-[42px] ml-[5px]  md:ml-0 min-h-full">
          <div
            className={`grid gap-4 mt-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 min-h-full`}
          >
            {orders
              .filter((order) => order.status === "BORROWED")
              .flatMap((order) =>
                order.books.map((book) => (
                  <button onClick={() => setSelectedBook({ ...book, order })}>
                    <div className="flex flex-col items-center ">
                      <img
                        src={BookService.downloadBookImage(book.imagePath)}
                        alt={book.title}
                        className="object-cover rounded-xl aspect-[1/1.6]"
                      />
                    </div>
                  </button>
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

const sizesText = {
  xs: "text-[8px] font-normal",
  lg: "text-[13px] font-normal",
  s: "text-[10px] font-medium",
  "2xl": "text-[15px] font-medium",
  "3xl": "text-base font-medium",
  xl: "text-base font-medium",
};

const sizesHeading = {
  "3xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  "2xl": "text-2xl font-semibold md:text-[22px]",
  "4xl": "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  s: "text-[13px] font-bold",
  xs: "text-base font-semibold",
  lg: "text-base font-semibold",
};

export default BookLibrary;
