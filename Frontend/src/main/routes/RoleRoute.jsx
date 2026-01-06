import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import jwtDecode from "jwt-decode";

export default function RoleBasedRoute({ element, allowedRoles }) {
  const { user, logout } = useAuth();
console.log("RoleBasedRoute user:", user);

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


  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" />;
  }


  return element;
}
