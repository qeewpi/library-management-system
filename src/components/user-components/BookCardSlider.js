import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";
import { Link } from "react-router-dom";
import BookService from "service/BookService";

function BookCardSlider({ books }) {
  return (
    <div className="">
      <div className="sliderContainer">
        <Splide
          options={{
            perPage: 8,
            breakpoints: {
              1536: {
                perPage: 8,
              },
              1280: {
                perPage: 5,
              },
              1024: {
                perPage: 5,
              },
              768: {
                perPage: 3,
              },
              640: {
                perPage: 2,
              },
              480: {
                perPage: 1,
              },
            },
            gap: "1rem",
            arrows: false,
            pagination: false,
            drag: "free",
          }}
        >
          {books.map((book) => (
            <SplideSlide key={book.id}>
              <div className="sliderItem flex flex-col">
                <Link to={"/book/" + book.id}>
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={BookService.downloadBookImage(book.imagePath)}
                      alt=""
                      className="aspect-[1/1.6] w-full rounded-xl object-cover transform transition duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="pt-3 text-sm">
                    <h1>{book.title}</h1>
                    <h2 className="text-gray-500">{book.author}</h2>
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
