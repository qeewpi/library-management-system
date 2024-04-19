import BookSelected from "components/user-components/BookSelected";
import BookLibrary from "components/user-components/BookLibrary";
import React from "react";

function ReadingList() {
  return (
    <div className="flex flex-1 items-center gap-12 md:flex-col md:self-stretch">
      <div className="flex flex-1 md:flex-row space-x-8">
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
