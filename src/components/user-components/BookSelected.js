import React from "react";
import { Link } from "react-router-dom";
import BookService from "service/BookService";
import cardItemPlaceholder from "../../img/cardItemPlaceholder.png";

const BookSelected = ({ selectedBook }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  const calculateDaysRemaining = (dueDate) => {
    const due = new Date(dueDate);
    const today = new Date();
    const timeDifference = due.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysRemaining;
  };

  if (!selectedBook) {
    return (
      <div className="flex  flex-col gap-[26px] bg-white pb-[27px] md:w-full md:p-5 sm:pb-5 rounded-xl ">
        <div className="relative md:h-auto">
          <img
            src={cardItemPlaceholder}
            alt="Book Placeholder"
            className="relative aspect-[1/0.75] rounded-xl object-cover filter blur-sm border border-white "
          />
          <img
            src={cardItemPlaceholder}
            alt="Book Placeholder"
            className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-[1/1.6] scale-[0.4] rounded-[20px] object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-[21px] p-5">
          <div className="flex flex-col items-start gap-0.5">
            <h2 className={`${sizesHeading["3xl"]} !text-black`}>
              Ready to Dive In?
            </h2>
            <p className="text-base">Select a book to display its details</p>
          </div>
          <div className="flex w-[91%] items-start 2xl:items-center justify-between gap-4 pr-[5px] md:w-full ">
            <div className="flex flex-col items-start ">
              <p className="text-base">Status</p>
              <h3 className={`${sizesHeading.s} !text-black`}>...</h3>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-base">Borrowed On</p>
              <h4 className={`${sizesHeading.s} !text-black`}>...</h4>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-base">Deadline</p>
              <h5 className={`${sizesHeading.s} !text-black`}>...</h5>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <p className="text-base">Days Remaining</p>
              <h6 className={`${sizesHeading.s} !text-black`}>...</h6>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch">
            <p className={`${sizesHeading.s} !text-black`}>Description</p>
            <p className="text-[13px] font-light !text-black">...</p>
          </div>
          <div className="flex w-full">
            <Link to="/browse-library">
              <button className="bg-primaryYellow p-3 rounded-xl text-white text-sm transform transition duration-500 hover:scale-110">
                Browse Library
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 bg-white pb-[27px] md:w-full md:p-5 sm:pb-5 rounded-xl h-full ">
      <div className="relative md:h-auto">
        <img
          src={BookService.downloadBookImage(selectedBook.imagePath)}
          alt={selectedBook.title}
          className="relative aspect-[1/0.75] rounded-xl object-cover filter blur-sm border border-white"
        />
        <img
          src={BookService.downloadBookImage(selectedBook.imagePath)}
          alt={selectedBook.title}
          className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-[1/1.6] scale-[0.4] rounded-[20px] object-cover drop-shadow-xl transform transition duration-500 hover:scale-50"
        />
        <div className="absolute z-5 p-4 -mt-[4.5rem]">
          {selectedBook.order.status === "OVERDUE" ? (
            <button
              className="min-w-[160px] rounded-xl sm:px-5 bg-red-900 text-white px-3 py-3 text-sm font-bold flex justify-center items-center drop-shadow-xl"
              disabled
              aria-disabled="true"
              title="This book is currently borrowed."
            >
              Overdue
            </button>
          ) : (
            <button
              className="min-w-[160px] rounded-xl sm:px-5 bg-secondaryBlue text-white px-3 py-3 text-sm font-bold flex justify-center items-center drop-shadow-xl"
              disabled
              aria-disabled="true"
              title="This book is currently borrowed."
            >
              Currently Borrowed
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col items-start gap-[21px] ">
        <div className="flex items-center justify-between gap-5 self-stretch bg-white-A700"></div>
        <div className="px-5 pb-5 flex flex-col gap-y-4 w-full ">
          <div className="flex flex-col items-start gap-0.5">
            <h2 className={`${sizesHeading["3xl"]} !text-black`}>
              {selectedBook.title}
            </h2>
            <p className={`${sizesText["2xl"]}`}>{selectedBook.author}</p>
          </div>
          <div className="flex w-[91%] items-start 2xl:items-center justify-between gap-5 pr-[5px] md:w-full">
            <div className="flex flex-col items-start">
              <p className="text-base">Status</p>
              <h3 className={`${sizesHeading.s} text-gray-500 font-medium`}>
                {selectedBook.order.status === "OVERDUE"
                  ? "Overdue"
                  : "Borrowed"}
              </h3>
            </div>
            <div className="flex flex-col items-start">
              <p className="text-base">Borrowed On</p>
              <h4 className={`${sizesHeading.s} text-gray-500 font-medium`}>
                {formatDate(selectedBook.order.borrowed_at)}
              </h4>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className="text-base">Deadline</p>
              <h5 className={`${sizesHeading.s} text-gray-500 font-medium`}>
                {formatDate(selectedBook.order.due_date)}
              </h5>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <p className="text-base">Days Remaining</p>
              <h6 className={`${sizesHeading.s} text-gray-500 font-medium`}>
                {calculateDaysRemaining(selectedBook.order.due_date)}
              </h6>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch">
            <p className={`${sizesHeading.s}font-medium`}>Description</p>
            <p className="text-sm text-gray-500 font-medium">
              {selectedBook.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// nilagyan ko ng ganito kasi medj nalilito pa ako paano yung styles HWHAHAHHAHHAHA sori sori
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

export default BookSelected;
