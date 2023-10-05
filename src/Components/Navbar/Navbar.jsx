import React from 'react';
import './Style.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Dev</div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar-item">
          <Link to="/work">Work</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact</Link>
        </li>
        <button>Resume</button>
      </ul>
    </nav>
  );
};

export default Navbar;
