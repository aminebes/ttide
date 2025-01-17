import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#f2f2f2', padding: '0 0', color: '#282830'}} role="contentinfo">
      <div className="container" style={{height: 250}}>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center">
            <h5>Contact us</h5>
            <p className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <a href="mailto:contact@trendtide.com">contact@trendtide.com</a>
            </p>
            <p className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <a href="tel:555-739-2841">(555) 739-2841</a>
            </p>
            <p className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <a href="https://maps.app.goo.gl/zu1FrmuEQSBs5haX7" target="_blank" rel="noopener noreferrer">
              717 Market Street San Francisco, CA 
              </a>
            </p>
          </div>
          <div className="col-md-4 text-center">
            <h5>Resources</h5>
            <Link to="/contact">
            <p className="resources-item" style={{color: "#282830", fontSize: "1rem",marginRight: "10px", marginBottom:-25}}>Support</p>
            </Link>
            <Link to="/blog">
            <p className="resources-item" style={{color: "#282830", fontSize: "1rem",marginRight: "10px", marginBottom:-25}}>Blog</p>
            </Link>
            <Link to="/contact#faq-section">
            <p className="resources-item" style={{color: "#282830", fontSize: "1rem",marginRight: "10px"}}>FAQ</p>
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <h5>Connect with Us</h5>
            <a href="#contact" className="social-icon"><FontAwesomeIcon icon={faFacebookF} aria-label="Facebook" /></a>
            <a href="#contact" className="social-icon"><FontAwesomeIcon icon={faTwitter} aria-label="Twitter" /></a>
            <a href="#contact" className="social-icon"><FontAwesomeIcon icon={faInstagram} aria-label="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="separator" style={{ height: 0.5}}></div>
      <div className="container text-center" style={{ paddingBottom: 10, paddingTop: 0}}>
        <p className="copyright-text">Copyright © TrendTide 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
