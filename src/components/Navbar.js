import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleENClick = () => {
    navigate("/");
  };

  const handleFRClick = () => {
    navigate('/fr');
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="TrendTide Logo" className="navbar-logo" />
        </Link>
        <Link to="/" className="brand-name">TrendTide</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about-us">About us</Link></li>
      </ul>
      <div className="navbar-actions">
        <button className="language-toggle" onClick={handleENClick}>
          <FontAwesomeIcon icon={faGlobe} className="language-icon" />
          EN
        </button>
        <button className="language-toggle" onClick={handleFRClick}>
          FR
        </button>
        
        <Link to="/contact">
          <button className="contact-button">Contact us</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
