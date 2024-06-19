import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <header>
        <Link to="/login">Login</Link>
      </header>
    </div>
  );
};

export default NavBar;
