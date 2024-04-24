import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const AdminService = {
  getAllAdmins: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admins`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch admins");
    }
  },

  addAdmin: async (adminData) => {
    try {
      await axios.post(`${API_BASE_URL}/admin`, adminData);
    } catch (error) {
      throw new Error("Failed to add admin");
    }
  },

  getAdmin: async (adminId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/${adminId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch admin");
    }
  },

  editAdmin: async (adminId, adminData) => {
    try {
      await axios.put(`${API_BASE_URL}/admin/${adminId}`, adminData);
    } catch (error) {
      throw new Error("Failed to edit admin");
    }
  },

  deleteAdmin: async (adminId) => {
    try {
      await axios.delete(`${API_BASE_URL}/admin/${adminId}`);
    } catch (error) {
      throw new Error("Failed to delete admin");
    }
  },
};

export default AdminService;
