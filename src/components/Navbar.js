import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Add your logo image file here
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <Link to="/" className="brand-name">TrendTide</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about-us">About us</Link></li>
      </ul>
      <Link to="/contact">
        <button className="contact-button">Contact us</button>
      </Link>
    </nav>
  );
}

export default Navbar;
