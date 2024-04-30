import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
};

const OrderService = {
  getAllOrders: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/orders`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch orders");
    }
  },

  getUserByOrderId: async (orderId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/order/${orderId}/user`,
        {
          headers: getAuthHeader(),
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addOrder: async (orderData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/order`, orderData, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to add order");
    }
  },

  getOrder: async (orderId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/order/${orderId}`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch order");
    }
  },

  getOrdersByUserId: async (userId) => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/user/${userId}/orders`,
        {
          headers: getAuthHeader(),
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch order");
    }
  },

  editOrder: async (orderId, orderData) => {
    try {
      await axios.put(`${API_BASE_URL}/order/${orderId}`, orderData, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to edit order");
    }
  },

  deleteOrder: async (orderId) => {
    try {
      await axios.delete(`${API_BASE_URL}/order/${orderId}`, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to delete order");
    }
  },

  markOrderAsReturned: async (orderId) => {
    try {
      await axios.put(
        `${API_BASE_URL}/order/return/${orderId}`,
        {},
        {
          headers: getAuthHeader(),
        }
      );
    } catch (error) {
      throw new Error("Failed to mark order as returned");
    }
  },

  markOrderAsPickedUp: async (orderId) => {
    try {
      await axios.put(
        `${API_BASE_URL}/order/pickup/${orderId}`,
        {},
        {
          headers: getAuthHeader(),
        }
      );
    } catch (error) {
      throw new Error("Failed to mark order as picked up.");
    }
  },
};

export default OrderService;
