import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function Services() {
  return (
    <section className="services">
      <h2>Explore our offerings</h2>
      <p>Sign up for a personalized demo and unlock the power of digital marketing.</p>
      <Link to="/contact">
        <button className="get-demo-button">Get Demo</button>
      </Link>
    </section>
  );
}

export default Services;
