import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>
        <Link to="/logs">Captain's Log</Link>
      </h1>
      <div className="nav-buttons">
        <button>
          <Link to="/logs/new">New Log</Link>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
