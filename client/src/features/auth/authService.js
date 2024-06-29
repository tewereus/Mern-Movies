import axios from "axios";

const login = async (data) => {
  const response = await axios.post("/api/users/login", data);
  return response.data;
};

const register = async (data) => {
  const response = await axios.post("/api/users/signup", data);
  return response.data;
};

const authService = {
  login,
  register,
};

export default authService;
