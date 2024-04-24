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

const AdminService = {
  getAllAdmins: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admins`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch admins");
    }
  },

  addAdmin: async (adminData) => {
    try {
      await axios.post(`${API_BASE_URL}/admin`, adminData, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to add admin");
    }
  },

  getAdmin: async (adminId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/${adminId}`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch admin");
    }
  },

  editAdmin: async (adminId, adminData) => {
    try {
      await axios.put(`${API_BASE_URL}/admin/${adminId}`, adminData, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to edit admin");
    }
  },

  deleteAdmin: async (adminId) => {
    try {
      await axios.delete(`${API_BASE_URL}/admin/${adminId}`, {
        headers: getAuthHeader(),
      });
    } catch (error) {
      throw new Error("Failed to delete admin");
    }
  },
};

export default AdminService;
