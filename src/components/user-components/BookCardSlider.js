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
                <Link
                  to={"/book/" + book.id}
                  className="group hover:text-blue-900 transition duration-500 ease-in-out"
                >
                  <div className="overflow-hidden rounded-xl relative group ">
                    <img
                      src={BookService.downloadBookImage(book.imagePath)} //
                      alt=""
                      className="aspect-[1/1.6] w-full rounded-xl object-cover transform transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-500 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-12 h-12 transition duration-500 ease-in-out group-hover:scale-110 opacity-100 group-hover:opacity-100 fill-white"
                      >
                        <path d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="pt-3 text-base">
                    <h1>{book.title}</h1>
                    <h2 className="text-gray-500 font-medium">{book.author}</h2>
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
