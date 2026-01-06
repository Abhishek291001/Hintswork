import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "https://hintswork-backend.vercel.app/api";

export const loginApi = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, { email, password });
  return data;
};
