import { books } from 'data/booksData';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Cart() {
  // Display the book details
    // Generate a random id
    const randomId = Math.floor(Math.random() * books.length) + 1;

    // Find the book with the random id
    const book = books.find((book) => book.id === randomId);

    // If book is not found, display a message
    if (!book) {
        return <div>Book not found</div>;
    }

    // Display the book details
    return (
        <div className="flex flex-row gap-x-8">
            <div className="flex">
                <img src={`../../${book.img}`} alt={book.bookTitle} />
            </div>
            <div className="textDiv flex flex-col gap-y-6 justify-between">
                <div className="flex flex-col gap-y-1">
                    <h1 className="">{book.bookTitle}</h1>
                    <h1 className=" text-gray-500">{book.bookAuthor}</h1>
                </div>
                <div>
                    <h1 className=" text-primaryBlack font-bold">Quantity: 1</h1>
                </div>
            </div>
        </div>
    );
}

export default Cart;