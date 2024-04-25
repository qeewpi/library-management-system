import React from "react";

function Checkout({ books }) {
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
            <span>Items:</span>
            <span>{books.length}</span>
          </h1>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="btn mt-4 w-full  rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
