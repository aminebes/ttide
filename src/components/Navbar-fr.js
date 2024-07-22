import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function NavbarFR() {
  const navigate = useNavigate();

  const handleENClick = () => {
    navigate("/");
  };

  const handleFRClick = () => {
    navigate('/fr');
  };

  return (
    <nav className="navbar" aria-label="Navigation principale">
      <div className="navbar-brand">
        <Link to="/fr">
          <img src={logo} alt="Logo TrendTide" className="navbar-logo" />
        </Link>
        <Link to="/fr" className="brand-name">TrendTide</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/fr">Accueil</Link></li>
        <li><Link to="/services/fr">Services</Link></li>
        <li><Link to="/blog/fr">Blog</Link></li>
        <li><Link to="/about-us/fr">À propos</Link></li>
      </ul>
      <div className="navbar-actions">
        <button className="language-toggle" onClick={handleENClick}>
          <FontAwesomeIcon icon={faGlobe} className="language-icon" />
          EN
        </button>
        <button className="language-toggle" onClick={handleFRClick}>
          FR
        </button>
        <Link to="/contact/fr">
          <button className="contact-button">Contactez-nous</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavbarFR;
