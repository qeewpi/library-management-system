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

const UserService = {
  getAllUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  },

  addUser: async (userData) => {
    try {
      await axios.post(`${API_BASE_URL}/user`, userData, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to add user");
    }
  },

  getUser: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user");
    }
  },

  editUser: async (userId, userData) => {
    try {
      await axios.put(`${API_BASE_URL}/user/${userId}`, userData, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to edit user");
    }
  },

  deleteUser: async (userId) => {
    try {
      await axios.delete(`${API_BASE_URL}/user/${userId}`, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  },
};

export default UserService;
