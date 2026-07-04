import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Navbar.css";

import logo from "../../../assets/logo/bloodlink-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="container navbar-container">

        <Link to="/" className="logo">
          <img src={logo} alt="BloodLink Logo" />
        </Link>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About</NavLink>

          <NavLink to="/availability">
            Blood Availability
          </NavLink>

          <NavLink to="/donate">
            Become Donor
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>

        <div className="nav-buttons">

          <Link to="/login" className="login-btn">
            Login
          </Link>

          <Link to="/register" className="register-btn">
            Register
          </Link>

        </div>

        <div
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;