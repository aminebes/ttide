import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  return (
    <section className="experience-section" aria-labelledby="services-heading">
      <h2 id="services-heading">Explore our offerings</h2>
      <p>Sign up for a personalized demo and unlock the power of digital marketing.</p>
      <div className="experience-buttons">
        <Link to="/contact">
          <button className="get-demo-button">Get Demo</button>
        </Link>
      </div>
    </section>
  );
}

export default Services;
