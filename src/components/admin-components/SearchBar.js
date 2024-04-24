import React, { useState } from "react";

function SearchBar({ onSearchChange }) {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="w-1/2 ">
      <div className="w-full">
        <div className="w-full">
          <input
            className="input input-bordered w-full"
            placeholder="Search"
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
