import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const OrderService = {
  getAllOrders: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/orders`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch orders");
    }
  },

  getUserByOrderId: async (orderId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/order/${orderId}/user`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  addOrder: async (orderData) => {
    try {
      await axios.post(`${API_BASE_URL}/order`, orderData);
    } catch (error) {
      throw new Error("Failed to add order");
    }
  },

  getOrder: async (orderId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/order/${orderId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch order");
    }
  },

  editOrder: async (orderId, orderData) => {
    try {
      await axios.put(`${API_BASE_URL}/order/${orderId}`, orderData);
    } catch (error) {
      throw new Error("Failed to edit order");
    }
  },

  deleteOrder: async (orderId) => {
    try {
      await axios.delete(`${API_BASE_URL}/order/${orderId}`);
    } catch (error) {
      throw new Error("Failed to delete order");
    }
  },

  markOrderAsReturned: async (orderId) => {
    try {
      await axios.put(`${API_BASE_URL}/order/return/${orderId}`);
    } catch (error) {
      throw new Error("Failed to mark order as returned");
    }
  },
};

export default OrderService;
