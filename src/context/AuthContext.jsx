import { createContext, useContext, useState, useEffect } from "react";
import {
  login,
  signup,
  logout,
  getUser,
  getToken,
} from "../services/authServices";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user when component mounts
  useEffect(() => {
    const fetchUser = async () => {
        console.log("fetchUser");
      const token = getToken();
      const storedUser = localStorage.getItem("user");

      if (token && storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  const handleLogin = async (email, password) => {
    const response = await login(email, password);
    if (response.token) {
      const userData = { email }; // Store user data directly
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData)); // Persist user
    }
    return response;
  };

  const handleSignup = async (fname, lname, email, password) => {
    const response = await signup(fname, lname, email, password);
    if (response.token) {
      const userData = { email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
    }
    return response;
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, handleLogin, handleSignup, handleLogout, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
