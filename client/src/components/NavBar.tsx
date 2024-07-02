import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const NavBar = () => {
  const { logout, isAuthenticated, user } = useAuth();

  return (
    <nav className="h-20 w-full bg-zinc-500">
      <Link to={isAuthenticated ? "/" : "/login"}>
        <h1> Ecommerce</h1>
      </Link>
      <ul>
        {isAuthenticated ? (
          <>
            <li>Welcome{user.username}</li>
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
