import AdminWelcome from "components/admin-components/AdminWelcome";
import { ButtonGroup } from "components/admin-components/ButtonGroup";
import SearchBar from "components/admin-components/SearchBar";
import React from "react";
import { OrderTable } from "../../admin-components/OrderTable";

function OrderList() {
  return (
    <div className="flex flex-col gap-y-6">
      <AdminWelcome />
      <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
        <div>
          <h1 className="text-xl">Order Table</h1>
        </div>
        <div className="flex gap-y-4 flex-col lg:flex-row justify-between">
          <SearchBar />
          <div className="w-2/4">
            <ButtonGroup
              button1={"Add Order"}
              button2={"Delete Order"}
              button1Link={"add/order"}
              button2Link={"delete/order"}
            />
          </div>
        </div>
        <OrderTable />
      </div>
    </div>
  );
}

export default OrderList;
