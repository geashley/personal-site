import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu open state
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span>Ashley Ge</span>
        </Link>
      </div>

      {/* Hamburger Icon */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <img src="./assets/navbar-menu.png" alt="Menu" />
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
