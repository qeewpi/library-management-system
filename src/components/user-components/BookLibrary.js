import React from "react";
import { Link } from "react-router-dom";
import { borrowedBooks } from "../../data/userBorrowedBooks";

const BookLibrary = () => {
  const borrowedBooksData = borrowedBooks[0].borrowedBooks; // Extracting borrowed books data from the borrowedBooks array

  return (
    <div className="flex flex-1 flex-col items-start rounded-xl bg-white p-10 md:self-stretch md:p-5">
      <p className={`${sizesText.lg} ml-[5px] italic md:ml-0`}>Welcome!</p>
      <h1
        className={`${sizesHeading["4xl"]} ml-[5px] mt-4 !text-black-900 md:ml-0`}
        style={{ paddingBottom: "15px" }}
      >
        Your Book Library
      </h1>
      <div
        className="overflow-auto mb-[42px] ml-[5px] self-stretch md:ml-0"
        style={{ maxHeight: "calc(161vh - 300px)" }}
      >
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-2">
          {borrowedBooksData.map((book) => (
            <Link to={"/book/" + book.bookId} key={book.orderId}>
              <div className="flex flex-col items-center">
                <img
                  src={book.img}
                  alt={book.bookTitle}
                  className="h-[12rem] sm:h-[16rem] md:h-[16rem] xl:h-[320px] xl:w-[210px] object-fill rounded-xl"
                />
              </div>
            </Link>
          ))}
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
  xl: "text-sm font-medium",
};

const sizesHeading = {
  "3xl": "text-[32px] font-bold md:text-3xl sm:text-[28px]",
  "2xl": "text-2xl font-semibold md:text-[22px]",
  "4xl": "text-4xl font-semibold md:text-[34px] sm:text-[32px]",
  s: "text-[13px] font-bold",
  xs: "text-xs font-semibold",
  lg: "text-base font-semibold",
};

export default BookLibrary;
