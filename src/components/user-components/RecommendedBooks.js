import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Link } from "react-router-dom";
import { popularBooks } from "../../data/recommendedBooks";

function RecommendedBooks({ imageBaseUrl }) {
  return (
    <div>
      <div className="bg-white font-semibold p-6 rounded-xl flex flex-col gap-y-4">
        <h1 className="text-xl">Recommended for you</h1>
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
            {popularBooks.map((book) => (
              <SplideSlide>
                <div className="sliderItem flex flex-col">
                  <Link to={"/book/" + book.id}>
                    <div>
                      <img
                        src={`${imageBaseUrl}/${book.img}`}
                        alt=""
                        className="aspect-[1/1.6] rounded-xl object-cover"
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
    </div>
  );
}

export default RecommendedBooks;
