import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function HeaderFR() {
  return (
    <header className="header" role="banner">
      <div className="header-overlay">
        <div className="header-content">
          <h1>Découvrez nos services de marketing digital</h1>
          <p>Découvrez ce qui nous distingue</p>
          <Link to="/services/fr">
            <button className="get-started-button">Commencer</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderFR;
