import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";

function BookCardSlider() {
  return (
    <div className="overflow-hidden">
      <div className="sliderContainer">
        <Splide
          options={{
            perPage: 5,
            gap: "1rem",
            arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {books.map((book) => (
            <SplideSlide>
              <div className="sliderItem flex flex-col gap-y-3">
                <div>
                  <img src={book.img} alt="" className="w-full h-full" />
                </div>
                <div>
                  <h1>{book.bookTitle}</h1>
                  <h2 className="text-gray-500">{book.bookAuthor}</h2>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

const books = [
  {
    bookTitle: "The Lord of the Rings",
    bookAuthor: "J.R.R. Tolkien",
    img: "images/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Hitchhiker's Guide to the Galaxy",
    bookAuthor: "Douglas Adams",
    img: "images/cardItemPlaceholder.png",
  },
  {
    bookTitle: "Pride and Prejudice",
    bookAuthor: "Jane Austen",
    img: "images/cardItemPlaceholder.png",
  },
  {
    bookTitle: "To Kill a Mockingbird",
    bookAuthor: "Harper Lee",
    img: "images/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Great Gatsby",
    bookAuthor: "F. Scott Fitzgerald",
    img: "images/cardItemPlaceholder.png",
  },
  {
    bookTitle: "1984",
    bookAuthor: "George Orwell",
    img: "images/cardItemPlaceholder.png",
  },
  {
    bookTitle: "Harry Potter and the Sorcerer's Stone",
    bookAuthor: "J.K. Rowling",
    img: "images/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Hunger Games",
    bookAuthor: "Suzanne Collins",
    img: "images/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Alchemist",
    bookAuthor: "Paulo Coelho",
    img: "images/cardItemPlaceholder.png",
  },
  {
    bookTitle: "The Book Thief",
    bookAuthor: "Markus Zusak",
    img: "images/cardItemPlaceholder.png",
  },
];

export default BookCardSlider;
