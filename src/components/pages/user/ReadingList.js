import BookLibrary from "components/user-components/BookLibrary";
import BookSelected from "components/user-components/BookSelected";
import React from "react";

function ReadingList() {
  return (
    <div className="flex flex-1 items-center gap-4 md:flex-col md:self-stretch">
      <div className="flex flex-1 md:flex-row space-x-4">
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
