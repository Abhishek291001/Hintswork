import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { jwtDecode } from "jwt-decode";

export default function PrivateRoute({ element }) {
  const { user, logout } = useAuth();

  if (!user) return <Navigate to="/login" />;

  try {
    const decoded = jwtDecode(user.token);
    if (decoded.exp * 1000 < Date.now()) {
      logout();
      return <Navigate to="/login" />;
    }
  } catch {
    logout();
    return <Navigate to="/login" />;
  }

  return element;
}
