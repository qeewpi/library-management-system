import React from "react";
import BookService from "service/BookService";

function Cart({ book, handleDeleteBookToast, onDeleteBook, loadCart }) {
  // If book is not found, display a message
  if (!book) {
    return <div></div>;
  }

  // Delete the book from the cart
  const handleDeleteBook = (book) => {
    console.log("Deleting book from cart:", book.id);
    onDeleteBook(book.id);
    handleDeleteBookToast(book);
    loadCart();
  };

  // Display the book details
  return (
    <div className="flex flex-row gap-x-4">
      <div className="flex w-2/12">
        <img
          src={BookService.downloadBookImage(book.imagePath)}
          alt={book.title}
          className="aspect-[1/1.6] object-cover rounded-xl"
        />
      </div>
      <div className="textDiv flex flex-grow flex-col gap-y-6 justify-between">
        <div className="flex flex-col font-semibold">
          <h1 className="">{book.title}</h1>
          <h1 className=" text-gray-400">{book.author}</h1>
        </div>

        <div className="flex flex-row justify-between">
          <div className=" text-primaryBlack font-bold"></div>

          <button onClick={() => handleDeleteBook(book)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 5H14C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5ZM8.5 5C8.5 3.067 10.067 1.5 12 1.5C13.933 1.5 15.5 3.067 15.5 5H21.25C21.6642 5 22 5.33579 22 5.75C22 6.16421 21.6642 6.5 21.25 6.5H19.9309L18.7589 18.6112C18.5729 20.5334 16.9575 22 15.0263 22H8.97369C7.04254 22 5.42715 20.5334 5.24113 18.6112L4.06908 6.5H2.75C2.33579 6.5 2 6.16421 2 5.75C2 5.33579 2.33579 5 2.75 5H8.5ZM10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75V17.25C9 17.6642 9.33579 18 9.75 18C10.1642 18 10.5 17.6642 10.5 17.25V9.75ZM14.25 9C14.6642 9 15 9.33579 15 9.75V17.25C15 17.6642 14.6642 18 14.25 18C13.8358 18 13.5 17.6642 13.5 17.25V9.75C13.5 9.33579 13.8358 9 14.25 9ZM6.73416 18.4667C6.84577 19.62 7.815 20.5 8.97369 20.5H15.0263C16.185 20.5 17.1542 19.62 17.2658 18.4667L18.4239 6.5H5.57608L6.73416 18.4667Z"
                fill="#212121"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
