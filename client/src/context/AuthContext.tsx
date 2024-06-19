import { createContext, useState } from "react";
import { loginRequest, registerRequest } from "../api/auth";

interface AuthContextProps {
  children: React.ReactNode;
}
// export interface User {
//   email: string;
//   password: string;
//   username: string;
// }

export const AuthContext = createContext({
  signUp: (user = {}) => {
    user;
  },
  signIn: (user = {}) => {
    user;
  },
  user: null,
  errors: [],
  isAuthenticated: false,
  isLoading: false,
});

export const AuthProvider = ({ children }: AuthContextProps) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState([]);

  const signUp = async (user = {}) => {
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

  const signIn = async (user = {}) => {
    try {
      const res = await loginRequest(user);

      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      if (Array.isArray(error.response.data)) {
        return setErrors(error.response.data);
      }
      setErrors(error.response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{ signUp, signIn, user, errors, isAuthenticated, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
