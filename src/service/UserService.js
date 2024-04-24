import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const UserService = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  },

  addUser: async (userData) => {
    try {
      await axios.post(`${API_BASE_URL}/user`, userData);
    } catch (error) {
      throw new Error("Failed to add user");
    }
  },

  getUser: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  },

  editUser: async (userId, userData) => {
    try {
      await axios.put(`${API_BASE_URL}/user/${userId}`, userData);
    } catch (error) {
      throw new Error("Failed to edit user");
    }
  },

  deleteUser: async (userId) => {
    try {
      await axios.delete(`${API_BASE_URL}/user/${userId}`);
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  },
};

export default UserService;
