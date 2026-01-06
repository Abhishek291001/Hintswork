export const validateEmail = (email) =>
  /\S+@\S+\.\S+/.test(email) ? "" : "Invalid email format";

export const validatePassword = (password) =>
  password.length >= 6 ? "" : "Password must be at least 6 characters";
