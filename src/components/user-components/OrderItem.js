import React from "react";
import BookService from "service/BookService";

function OrderItem({ book }) {
  // map books into book
  // If book is not found, display a message
  if (!book) {
    return <div>Book not found</div>;
  }

  // Display the book details
  return (
    <div className="flex flex-col md:flex-row gap-x-8">
      <div className="flex md:w-2/12 lg:w-1/12 mb-2 md:mb-0">
        <img
          src={BookService.downloadBookImage(book.imagePath)}
          alt={book.title}
          className="aspect-[1/1.6] object-cover rounded-xl"
        />
      </div>
      <div className="textDiv flex flex-col gap-y-6 justify-between">
        <div className="flex flex-col gap-y-1">
          <h1 className="">{book.title}</h1>
          <h1 className=" text-gray-500">{book.author}</h1>
        </div>
        <div>
          <h1 className=" text-primaryBlack font-semibold">
            Quantity: <span className="font-medium">1</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
