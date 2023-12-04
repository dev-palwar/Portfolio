import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Navbar/Style.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About me" },
    { to: "/work", text: "Work" },
  ];

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className="navbar-brand">
        <Link to="/">
          <h1 style={{ display: 'none' }}>Dev.</h1>
        </Link>
      </div>
      <div className="navbar-menu">
        <ul className={`menu ${isOpen ? "active" : ""}`}>
          {navLinks.map(({ to, text }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active-link" : ""
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
          <li>
            <a href="mailto:devpalwar06@gmail.com" target="_blank">
              <button>Hire me</button>
            </a>
          </li>
        </ul>
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
