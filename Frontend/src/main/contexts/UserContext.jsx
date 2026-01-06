import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../config/apiConfig";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [userError, setUserError] = useState(null);

  const fetchUsers = async () => {
    setLoadingUsers(true);
    setUserError(null);
    try {
      const res = await axios.get(`${API_BASE_URL}/api/auth/get-all-users`, {
        withCredentials: true, 
      });
      setUsers(res.data.users); 
    } catch (err) {
      setUserError(err.response?.data?.message || "Failed to fetch users");
    } finally {
      setLoadingUsers(false);
    }
  };

   const deleteUserById = async (userId) => {
    try {
      const res = await axios.delete(`${API_BASE_URL}/api/auth/delete-user/${userId}`, {
        withCredentials: true,
      });
      // Update local state
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
      return { success: true, message: res.data.message };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Failed to delete user",
      };
    }
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        fetchUsers,
        deleteUserById,
        loadingUsers,
        userError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
