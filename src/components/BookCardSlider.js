import React from "react";

function BookCardSlider() {
  return (
    <div>
      {books.map((book) => (
        <div>
          <div>
            <img src={book.img} alt="" />
          </div>
          <div>
            {" "}
            <h1>{book.bookTitle}</h1>
            <h2>{book.bookAuthor}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

const books = [
  {
    bookTitle: "The Lord of the Rings",
    bookAuthor: "J.R.R. Tolkien",
    img: "library-management-system/src/img/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Hitchhiker's Guide to the Galaxy",
    bookAuthor: "Douglas Adams",
    img: "img/cardItemPlaceholder.png",
  },
  {
    bookTitle: "Pride and Prejudice",
    bookAuthor: "Jane Austen",
    img: "img/cardItemPlaceholder.png",
  },
  {
    bookTitle: "To Kill a Mockingbird",
    bookAuthor: "Harper Lee",
    img: "img/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Great Gatsby",
    bookAuthor: "F. Scott Fitzgerald",
    img: "img/cardItemPlaceholder.png",
  },
  {
    bookTitle: "1984",
    bookAuthor: "George Orwell",
    img: "img/cardItemPlaceholder.png",
  },
  {
    bookTitle: "Harry Potter and the Sorcerer's Stone",
    bookAuthor: "J.K. Rowling",
    img: "img/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Hunger Games",
    bookAuthor: "Suzanne Collins",
    img: "img/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Alchemist",
    bookAuthor: "Paulo Coelho",
    img: "img/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Book Thief",
    bookAuthor: "Markus Zusak",
    img: "img/cardItemPlaceholder.png",
  },
];

export default BookCardSlider;
