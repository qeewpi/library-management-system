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

  if (
    !orders.some(
      (order) => order.status === "BORROWED" || order.status === "OVERDUE"
    )
  ) {
    return (
      <div className="flex flex-1 flex-col items-start rounded-xl bg-white p-5 min-h-full ">
        <div className="containerDiv flex-grow flex flex-col w-full">
          <p className={`${sizesText.lg} ml-[5px] italic md:ml-0`}>Welcome!</p>
          <h1
            className={`${sizesHeading["4xl"]} ml-[5px] mt-4 !text-black-900 md:ml-0`}
            style={{ paddingBottom: "15px" }}
          >
            Your Book Library
          </h1>
          <div className="overflow-auto mb-[42px] ml-[5px]  md:ml-0 min-h-full w-full flex ">
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
        <h1
          className={`${sizesHeading["4xl"]} ml-[5px] !text-black-900 md:ml-0`}
        >
          Your Book Library
        </h1>
        <div className="overflow-auto mb-[42px] ml-[5px]  md:ml-0 min-h-full">
          <div
            className={`grid gap-4 mt-4 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 min-h-full`}
          >
            {orders
              .filter(
                (order) =>
                  order.status === "BORROWED" || order.status === "OVERDUE"
              )
              .flatMap((order) =>
                order.books.map((book) => (
                  <button
                    onClick={() => setSelectedBook({ ...book, order })}
                    key={order.id}
                  >
                    <div className="flex flex-col items-center transform transition duration-500 hover:scale-90">
                      {order.status === "BORROWED" ? (
                        <img
                          src={BookService.downloadBookImage(book.imagePath)}
                          alt={book.title}
                          className="object-cover rounded-xl aspect-[1/1.6]"
                        />
                      ) : (
                        <div className="overflow-hidden rounded-xl relative group ">
                          <img
                            src={BookService.downloadBookImage(book.imagePath)} //
                            alt=""
                            className="aspect-[1/1.6] w-full rounded-xl object-cover transform transition duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-red-900 opacity-80 transition duration-500 pointer-events-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1em"
                              height="1em"
                              viewBox="0 0 24 24"
                              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 transition duration-500 ease-in-out group-hover:scale-110 opacity-100 group-hover:opacity-100 fill-white"
                            >
                              <path
                                fill="currentColor"
                                d="M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m-1-4h2V7h-2zm1 9q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      )}
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
