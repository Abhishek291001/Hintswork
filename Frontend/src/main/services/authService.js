import { loginApi } from "../api/auth";

export const loginService = async (email, password) => {
  try {
    const { data } = await loginApi(email, password);
    // only return, no localStorage side effects
    return data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed";
  }
};

export const logoutService = () => {
  localStorage.removeItem("token");
};
