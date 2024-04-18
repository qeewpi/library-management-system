import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";
import { Link } from "react-router-dom";
import { books } from "../data/booksData.js";

function BookCardSlider() {
  return (
    <div className="">
      <div className="sliderContainer">
        <Splide
          options={{
            perPage: 8,
            gap: "1rem",
            arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {books.map((book) => (
            <SplideSlide>
              <div className="sliderItem flex flex-col">
                <Link to={"/book/" + book.id}>
                  <div>
                    <img
                      src={book.img}
                      alt=""
                      className="h-[18rem] rounded-xl object-cover"
                    />
                  </div>
                  <div className="pt-3">
                    <h1>{book.bookTitle}</h1>
                    <h2 className="text-gray-500">{book.bookAuthor}</h2>
                  </div>
                </Link>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

export default BookCardSlider;
