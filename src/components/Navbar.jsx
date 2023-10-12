import { Link } from "react-scroll";

const Navbar = () => {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
            <Link to="/projects" className="nav-link">
            Projects
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/resume" className="nav-link">
            Resume
            </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;