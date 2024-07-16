import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const NavBar = () => {
  const { logout, isAuthenticated, user } = useAuth();

  return (
    <nav className="flex justify-between items-center p-2 h-20 w-full bg-violet-500 font-bold text-xl text-white">
      <NavLink to={"/"}>
        <h1 className="px-2 text-4xl">ShopyLand</h1>
      </NavLink>

      <div className="flex gap-4 ">
        {isAuthenticated ? (
          <>
            <h3 className="mt-2">
              Welcome{" "}
              <span className="text-black">
                {" "}
                {user.username.slice(0, 1).toUpperCase() +
                  user.username.slice(1)}
              </span>
            </h3>
            <button className="bg-red-400 w-20 h-10 rounded-md  hover:bg-red-300">
              <NavLink to="/login" onClick={() => logout()}>
                Logout
              </NavLink>
            </button>
          </>
        ) : (
          <>
            <button className="bg-sky-500 w-20 h-10 rounded-md  hover:bg-sky-300">
              <NavLink to="/login">Login</NavLink>
            </button>
            <button className="bg-orange-400 w-20 h-10 rounded-md  hover:bg-orange-300 ">
              <NavLink to="/register">Register</NavLink>
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
