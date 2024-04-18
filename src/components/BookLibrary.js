import React from "react";

const BookLibrary = () => {
  return (
    <div className="flex flex-1 flex-col items-start rounded-[20px] bg-white p-10 md:self-stretch md:p-5">
      <p className={`${sizesText.lg} ml-[5px] italic md:ml-0`}>Welcome!</p>
      <h1 className={`${sizesHeading["4xl"]} ml-[5px] mt-4 !text-black-900 md:ml-0`}>Your Book Library</h1>
      <div className="mb-[42px] ml-[5px] mt-1.5 grid grid-cols-3 gap-4 self-stretch md:ml-0 md:grid-cols-2 sm:grid-cols-1">
        {data.map((d, index) => (
          <img
            key={"gridbookone" + index}
            src="img/cardItemPlaceholder.png"
            alt="book_placeholder"
            className="h-[201px] w-full object-cover md:h-auto"
          />
        ))}
      </div>
    </div>
  );
};

// basically, tinry ko toh para may placeholder image, pero not working pa din :<
const data = [
    { bookone: "img/cardItemPlaceholder.png" },
    { bookone: "img/cardItemPlaceholder.png" },
    { bookone: "img/cardItemPlaceholder.png" },
    { bookone: "img/cardItemPlaceholder.png" },
    { bookone: "img/cardItemPlaceholder.png" },
    { bookone: "img/cardItemPlaceholder.png" },
    { bookone: "img/cardItemPlaceholder.png" },
    { bookone: "img/cardItemPlaceholder.png" },
    { bookone: "img/cardItemPlaceholder.png" },
];

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

export default BookLibrary;
