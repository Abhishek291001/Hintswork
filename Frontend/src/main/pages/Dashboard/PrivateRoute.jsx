// import { Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// const PrivateRoute = ({ children }) => {
//   const { isAuthenticated, loading } = useAuth();

//   if (loading) return null; // or loader

//   return isAuthenticated ? children : <Navigate to="/login" replace />;
// };

// export default PrivateRoute;


import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>; // Or a spinner

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;



