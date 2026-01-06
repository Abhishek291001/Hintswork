import { createContext, useContext,useState, useEffect } from "react";
import axios from 'axios';
import API_BASE_URL from "../config/apiConfig";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (!token) {
  //     setLoading(false);
  //     return;
  //   }

  //   axios
  //     .get(`${API_BASE_URL}/api/users/me`, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     })
  //     .then((res) => {
  //       setUser(res.data.user);
  //       console.log(user);
  //       setRole(res.data.user.role);
  //     })
  //     .catch(() => {
  //       localStorage.removeItem("token");
  //       setUser(null);
  //       setRole(null);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, []);




  // LOGIN FUNCTION
  // const login = async (email, password) => {
  //   setLoading(true);
  //   setError(null);
  //   try {
  //     const res = await axios.post(
  //       `${API_BASE_URL}/api/auth/login`,
  //       { email, password }
  //       // { withCredentials: true }
  //     );
  //     localStorage.setItem("token", res.data.token);
  //     console.log("responsee",res);
  //     setUser(res.data.user);
  //     setLoading(false);
  //     return res.data;
  //   } catch (err) {
  //     setError(err.response?.data?.message || "Something went wrong");
  //     setLoading(false);
  //     return null;
  //   }
  // };

    // Load user on app start
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return setLoading(false);

    try {
      const decoded = jwtDecode(token);
      setRole(decoded.role);
    } catch {
      localStorage.removeItem("token");
      setLoading(false);
      return;
    }

    axios
      .get(`${API_BASE_URL}/api/users/me?t=${Date.now()}`, { // bypass cache
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem("token");
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);
//   useEffect(() => {
//   const token = localStorage.getItem("token");

//   if (!token) {
//     setLoading(false);
//     return;
//   }

//   try {
//     const decoded = jwtDecode(token);
    
//     if (decoded.exp * 1000 < Date.now()) {
//       logout();
//       setLoading(false);
//       return;
//     }

//     setUser({ token });
//     setRole(decoded.role);
//   } catch (err) {
//     logout();
//   } finally {
//     setLoading(false);
//   }
// }, []);

   const login = async (email, password) => {
    const res = await axios.post(`${API_BASE_URL}/api/auth/login`, {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
    setRole(res.data.user.role);

    return res.data;
  };
  // const logout = () => {
  //   setUser("");
  // };
  const logout = () => {
  
  localStorage.removeItem("token");
  setUser(null);
  setRole(null);
};




  const forgotPassword = async (email) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/auth/forgot-password`,
        
        { email }
      );
      // Save email for next steps (OTP verify & reset  password)
      localStorage.setItem("forgotEmail", email);
      setLoading(false);
      return res.data;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      setLoading(false);
      return null;
    }
  };






//   const forgotPassword = async (email, newPassword) => {
//   setLoading(true);
//   setError(null);
//   try {
//     const res = await axios.post(
//       `${API_BASE_URL}/api/auth/forgot-password`, // ✅ your route
//       { email, newPassword }
//     );
//     setLoading(false);
//     return res.data; // return success response
//   } catch (err) {
//     setError(err.response?.data?.message || "Something went wrong");
//     setLoading(false);
//     return null;
//   }
// };


const verifyOtp = async (otp) => {
  setLoading(true);
  setError(null);
  try {
    const email = localStorage.getItem("forgotEmail");
    const res = await axios.post(`${API_BASE_URL}/api/auth/verify-otp`, {
      email,
      otp,
    });
    console.log(email);
    setLoading(false);
    return res.data;
  } catch (err) {
    setError(err.response?.data?.message || "Something went wrong");
    setLoading(false);
    return null;
  }
};


const resetPassword = async (newPassword) => {
  setLoading(true);
  setError(null);
  try {
    const resetToken = localStorage.getItem("resetToken"); // token from verify-otp step
    if (!resetToken) throw new Error("Reset token missing");

    const res = await axios.post(
      `${API_BASE_URL}/api/auth/reset-password`,
      { newPassword },
      {
        headers: { Authorization: `Bearer ${resetToken}` }
      }
    );

    setLoading(false);
    return res.data;
  } catch (err) {
    setError(err.response?.data?.message || err.message || "Something went wrong");
    setLoading(false);
    return null;
  }
};



const signup = async (userData) => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await axios.post(`${API_BASE_URL}/api/users/signup`, userData);

      setLoading(false);
      return data; // you can return user object or success message
    } catch (err) {
      setLoading(false);
      setError(err.response?.data?.message || "Signup failed");
      return null;
    }
  };



  return (
    <AuthContext.Provider value={{ user,role, login,setUser, logout, forgotPassword, verifyOtp, resetPassword ,signup, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthContext);
};


// import { createContext, useState, useEffect } from "react";
// import {jwtDecode} from "jwt-decode";   
// import { logoutService } from "../services/authService";



// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       try {
//         const decoded = jwtDecode(token);
//         if (decoded.exp * 1000 > Date.now()) {
//           setUser({ token, role: decoded.role });
//         } else {
//           logoutService();
//           setUser(null);
//         }
//       } catch {
//         logoutService();
//         setUser(null);
//       }
//     }
//   }, []);

//   const login = (data) => {
//     localStorage.setItem("token", data.token); // ✅ store token here only
//     setUser({ token: data.token, role: data.role });
//   };

//   const logout = () => {
//     logoutService();
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
