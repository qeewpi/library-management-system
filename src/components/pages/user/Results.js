import BookResults from "components/user-components/BookResults";
import React from "react";

function Results() {
  return (
    <div className="contentDiv flex flex-col w-full bg-[#EDEDED] gap-y-6">
      <BookResults />
    </div>
  );
}

export default Results;
