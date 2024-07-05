import { createContext, useEffect, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({
  signUp: (user = {}) => {
    user;
  },
  signIn: (user = {}) => {
    user;
  },
  logout: () => {},
  user: null,
  errors: [],
  isAuthenticated: false,
  isLoading: true,
});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const register = async (user = {}) => {
    try {
      const res = await registerRequest(user);

      if (res.status === 200) {
        setUser(res.data);
        setIsAuthenticated(true);
      }
    } catch (error) {
      setErrors(error.response.data);
    }
  };

  const login = async (user = {}) => {
    try {
      const res = await loginRequest(user);
      console.log(res);

      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error);

      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
    }
  };

  const logout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    async function checkLogin() {
      const cookies = Cookies.get();

      if (!cookies.token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return setUser(null);
      }

      try {
        const res = await verifyTokenRequest(cookies.token);
        if (!res.data) return setIsAuthenticated(false);
        setIsAuthenticated(true);
        setUser(res.data);
        setIsLoading(false);
      } catch (error) {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signUp: register,
        signIn: login,
        logout,
        user,
        errors,
        isAuthenticated,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
