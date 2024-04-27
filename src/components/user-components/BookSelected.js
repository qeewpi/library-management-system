import React from "react";
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
      <div className="flex w-[45%] flex-col gap-[26px] bg-white pb-[27px] md:w-full md:p-5 sm:pb-5 rounded-xl">
        <div className="relative h-[471px] md:h-auto">
          <img
            src={cardItemPlaceholder}
            alt="Book Placeholder"
            className="relative aspect-[1/0.75] rounded-xl object-cover filter blur-sm border border-white"
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
            <p className={`${sizesText["2xl"]}`}>
              Select a book to display its details
            </p>
          </div>
          <div className="flex w-[91%] items-center justify-between gap-4 pr-[5px] md:w-full">
            <div className="flex flex-col items-start">
              <p className={`${sizesText.s}`}>Status</p>
              <h3 className={`${sizesHeading.s} !text-black`}>...</h3>
            </div>
            <div className="flex flex-col items-start">
              <p className={`${sizesText.s}`}>Borrowed On</p>
              <h4 className={`${sizesHeading.s} !text-black`}>...</h4>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className={`${sizesText.s}`}>Deadline</p>
              <h5 className={`${sizesHeading.s} !text-black`}>...</h5>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <p className={`${sizesText.s}`}>Days Remaining</p>
              <h6 className={`${sizesHeading.s} !text-black`}>...</h6>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch">
            <p className={`${sizesHeading.s} !text-black`}>Description</p>
            <p className="text-[13px] font-light !text-black">...</p>
          </div>
          <div className="flex w-full">
            <button className="bg-primaryYellow p-3 rounded-xl text-white text-xs">
              Browse Library
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-[45%] flex-col gap-4 bg-white pb-[27px] md:w-full md:p-5 sm:pb-5 rounded-xl h-full">
      <div className="relative h-[471px] md:h-auto">
        <img
          src={BookService.downloadBookImage(selectedBook.imagePath)}
          alt={selectedBook.title}
          className="relative aspect-[1/0.75] rounded-xl object-cover filter blur-sm border border-white"
        />
        <img
          src={BookService.downloadBookImage(selectedBook.imagePath)}
          alt={selectedBook.title}
          className="absolute bottom-0 left-0 right-0 top-0 m-auto aspect-[1/1.6] scale-[0.4] rounded-[20px] object-cover drop-shadow-xl"
        />
        <div className="absolute z-5 p-4 -mt-[4.5rem]">
          <button
            className="min-w-[160px] rounded-xl sm:px-5 bg-secondaryBlue text-white px-3 py-3 text-xs font-bold flex justify-center items-center drop-shadow-xl"
            disabled
            aria-disabled="true"
            title="This book is currently borrowed."
          >
            Currently Borrowed
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[21px] ">
        <div className="flex items-center justify-between gap-5 self-stretch bg-white-A700"></div>
        <div className="px-5 pb-5 flex flex-col gap-y-4 w-full">
          <div className="flex flex-col items-start gap-0.5">
            <h2 className={`${sizesHeading["3xl"]} !text-black`}>
              {selectedBook.title}
            </h2>
            <p className={`${sizesText["2xl"]}`}>{selectedBook.author}</p>
          </div>
          <div className="flex w-[91%] items-center justify-between gap-5 pr-[5px] md:w-full">
            <div className="flex flex-col items-start">
              <p className={`${sizesText.s}`}>Status</p>
              <h3 className={`${sizesHeading.s} !text-black`}>
                {selectedBook.order.status ? "Borrowed" : "Available"}
              </h3>
            </div>
            <div className="flex flex-col items-start">
              <p className={`${sizesText.s}`}>Borrowed On</p>
              <h4 className={`${sizesHeading.s} !text-black`}>
                {formatDate(selectedBook.order.borrowed_at)}
              </h4>
            </div>
            <div className="flex flex-col gap-0.5">
              <p className={`${sizesText.s}`}>Deadline</p>
              <h5 className={`${sizesHeading.s} !text-black`}>
                {formatDate(selectedBook.order.due_date)}
              </h5>
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <p className={`${sizesText.s}`}>Days Remaining</p>
              <h6 className={`${sizesHeading.s} !text-black`}>
                {calculateDaysRemaining(selectedBook.order.due_date)}
              </h6>
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch">
            <p className={`${sizesHeading.s} !text-black`}>Description</p>
            <p className="text-[13px] font-light !text-black">
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

export default BookSelected;
