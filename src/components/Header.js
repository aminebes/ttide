import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-overlay">
        <div className="header-content">
          <h1>Discover our digital marketing services</h1>
          <p>Explore what sets us apart</p>
          <Link to="/services">
            <button className="get-started-button">Get Started</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
