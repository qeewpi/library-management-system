import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
};

const register = (username, name, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    name,
    email,
    password,
  });
};

// add user with specified role
const registerWithRole = (username, name, email, password, role) => {
  return axios.post(API_URL + "signup", {
    username,
    name,
    email,
    password,
    role,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const updateUserInfo = async (id, username, name, email, password) => {
  try {
    await axios.put(
      `${API_URL}update/${id}`,
      {
        username,
        name,
        email,
        password,
      },
      {
        headers: getAuthHeader(),
      }
    );
  } catch (error) {
    throw new Error("Failed to update user");
  }
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  updateUserInfo,
  registerWithRole,
};

export default AuthService;
