import React, { useState } from "react";

function SearchBar({ onSearchChange, onFilterChange, filters = [] }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="join">
      <div>
        <div>
          <input
            className="input input-bordered join-item"
            placeholder="Search"
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <select
        className="select select-bordered join-item"
        onChange={handleFilterChange}
      >
        <option disabled selected>
          Filter
        </option>
        {filters.map((filter, index) => (
          <option key={index} value={filter.value}>
            {filter.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;
