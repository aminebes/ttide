import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

function NavbarFR() {
  const toggleLanguage = () => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('/fr')) {
      const newPath = currentPath.replace('/fr', '');
      window.location.replace(newPath);
    } else {
      window.location.replace(`${currentPath}/fr`);
    }
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
        <button className="language-toggle" onClick={toggleLanguage}>
          <FontAwesomeIcon icon={faGlobe} className="language-icon" />
          EN
        </button>
        <Link to="/contact/fr">
          <button className="contact-button">Contactez-nous</button>
        </Link>
      </div>
    </nav>
  );
}

export default NavbarFR;
