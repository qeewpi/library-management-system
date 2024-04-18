import React from "react";
import BookLibrary from "components/BookLibrary";
import BookSelected from "components/BookSelected";

function ReadingList() {
    return (
      <div className="flex flex-1 items-center gap-12 bg-gray-200 md:flex-col md:self-stretch md:p-5">
        <div className="flex flex-1 md:flex-row space-x-12">
          <div className="flex-1">
            <BookLibrary />
          </div>
          <div className="flex-1">
            <BookSelected />
          </div>
        </div>
      </div>
    );
  }
  

export default ReadingList;
