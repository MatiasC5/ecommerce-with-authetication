import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

export const ProtectedRoutes = () => {
  const { isLoading, isAuthenticated } = useAuth();
  if (isLoading) return <p>Loading...</p>;

  if (!isAuthenticated && !isLoading) return <Navigate to="/login" />;

  return <Outlet />;
};
