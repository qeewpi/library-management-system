import React from 'react';
import BookResults from "components/user-components/BookResults";


function Results() {
    return (
    <div className="contentDiv px-8 flex flex-col flex-grow h-full w-full bg-[#EDEDED] gap-y-6">
        <BookResults />
    </div>
    );
}

export default Results;
