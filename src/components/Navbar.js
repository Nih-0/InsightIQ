import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img
        src="https://img.icons8.com/color/40/artificial-intelligence.png"
        alt="InsightIQ Logo"
      />
      <span className="navbar-title">InsightIQ</span>
    </div>
    <div className="navbar-links">
      <Link to="/" className="navbar-link">Home</Link>
      <Link to="/connect" className="navbar-link">Connect</Link>
      <Link to="/formpage" className="navbar-link">FormPage</Link>
      <Link to="/about" className="navbar-link">About</Link>
    </div>
  </nav>
);

export default Navbar;