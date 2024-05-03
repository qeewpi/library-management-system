import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "service/AuthService";
import OrderService from "service/OrderService";

function Reminders() {
  const [overdueOrders, setOverdueOrders] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    loadOverdueOrders();
    loadOrdersDueTomorrow();
  }, []);

  const loadOverdueOrders = async () => {
    try {
      let allOrders = await OrderService.getOrdersByUserId(currentUser.id);
      let overdueOrders = allOrders.filter(
        (order) => new Date(order.due_date) < new Date()
      );
      setOverdueOrders(overdueOrders);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  const loadOrdersDueTomorrow = async () => {
    try {
      let allOrders = await OrderService.getOrdersByUserId(currentUser.id);
      let ordersDueTomorrow = allOrders.filter(
        (order) =>
          new Date(order.due_date) > new Date() &&
          new Date(order.due_date) < new Date(new Date().getTime() + 86400000)
      );
      return ordersDueTomorrow;
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  return (
    <div className="flex flex-col bg-white px-6 pt-6 pb-2 rounded-xl text-gray-500 gap-y-4 font-medium text-lg">
      {overdueOrders.length > 0 && loadOrdersDueTomorrow.length > 0 ? (
        <h1>
          You have{" "}
          <span className="text-primaryBlue">
            {overdueOrders.length} overdue book(s)
          </span>{" "}
          and{" "}
          <span className="text-primaryYellow">
            {loadOrdersDueTomorrow.length} book(s) due tomorrow
          </span>
          . Please return or renew to avoid late fees.
        </h1>
      ) : (
        <h1>No reminders at the moment. Keep up the good work! 📚</h1>
      )}
      {overdueOrders.length > 0 && loadOrdersDueTomorrow.length > 0 ? (
        <div className="buttonsDiv flex flex-col lg:flex-row gap-y-4 gap-x-3 ">
          <Link to="/overdue-books">
            <button className="p-4 px-12 bg-secondaryBlue text-white rounded-xl w-full h-full transform transition duration-500 hover:scale-90">
              View overdue books
            </button>
          </Link>
          <Link to="/renew">
            <button className="p-4 px-12 bg-primaryYellow text-white rounded-xl w-full h-full transform transition duration-500 hover:scale-90">
              Renew books online
            </button>
          </Link>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Reminders;
