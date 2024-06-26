import { ButtonGroup } from "components/admin-components/ButtonGroup";
import SearchBar from "components/admin-components/SearchBar";
import React, { useState } from "react";
import { OrderTable } from "../../admin-components/OrderTable";

function OrderList() {
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const handleSearchChange = (searchValue) => {
    setSearchValue(searchValue);
  };

  const handleFilterChange = (filterValue) => {
    setFilterValue(filterValue);
  };

  const filters = [
    { value: "BORROWED", label: "Borrowed" },
    { value: "OVERDUE", label: "Overdue" },
    { value: "RETURNED", label: "Returned" },
    { value: "", label: "All Orders" },
  ];

  // Use filterValue if it's not an empty string, otherwise use searchValue
  const valueToUse = filterValue !== "" ? filterValue : searchValue;

  return (
    <div className="flex flex-col gap-y-6 max-w-screen">
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div>
          <h1 className="text-xl">Order Table</h1>
        </div>
        <div className="flex gap-y-4 flex-col lg:flex-row justify-between">
          <SearchBar
            onSearchChange={handleSearchChange}
            onFilterChange={handleFilterChange}
            filters={filters}
          />
          <div className="w-2/4">
            <ButtonGroup
              button1={"Add Order"}
              button2={"Delete Order"}
              button1Link={"add/order"}
              button2Link={"delete/order"}
            />
          </div>
        </div>
        <OrderTable searchValue={valueToUse} />
      </div>
    </div>
  );
}

export default OrderList;
