import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Client Testimonials</h2>
      <div className="testimonial-cards">
        <div className="card">
          <div className="stars">
            ★★★★★
          </div>
          <p>Our agency has been a game-changer for me. Highly recommend!</p>
          <span>Marketing Pro</span>
        </div>
        <div className="card">
          <div className="stars">
            ★★★★★
          </div>
          <p>An exceptional experience with TrendTide. Top-notch service!</p>
          <span>Digital Guru</span>
        </div>
        <div className="card">
          <div className="stars">
            ★★★★★
          </div>
          <p>Once you engage with TrendTide, you won’t look back. Exceptional service!</p>
          <span>Marketing Maven</span>
        </div>
      </div>
      <Link to="/analysis">
        <button className="analysis-button">See our clients results</button>
      </Link>
    </section>
  );
}

export default Testimonials;
