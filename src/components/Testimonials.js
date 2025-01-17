import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import reviewer1 from '../assets/member1.jpg';
import reviewer2 from '../assets/member2.jpg';
import reviewer3 from '../assets/member3.jpg';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">Client Testimonials</h2>
      <p className="subtitle">Hear from our satisfied clients about their experiences with our services.</p>
      <div className="testimonial-cards">
        <div className="test-card" aria-label="Testimonial from Marketing Pro">
          <div className="stars" aria-label="5 out of 5 stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>Our agency has been a game-changer for me. Highly recommend!</p>
          <div className="reviewer">
            <img src={reviewer1} alt="Reviewer Marketing Pro" />
            <span>Marketing Pro</span>
          </div>
        </div>
        <div className="test-card" aria-label="Testimonial from Digital Guru">
          <div className="stars" aria-label="5 out of 5 stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>An exceptional experience with TrendTide. Top-notch service!</p>
          <div className="reviewer">
            <img src={reviewer2} alt="Reviewer Digital Guru" />
            <span>Digital Guru</span>
          </div>
        </div>
        <div className="test-card" aria-label="Testimonial from Marketing Maven">
          <div className="stars" aria-label="5 out of 5 stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>Once you engage with TrendTide, you won’t look back. Exceptional service!</p>
          <div className="reviewer">
            <img src={reviewer3} alt="Reviewer Marketing Maven" />
            <span>Marketing Maven</span>
          </div>
        </div>
      </div>
      <Link to="/analysis">
        <button className="analysis-button">See our clients results</button>
      </Link>
    </section>
  );
}

export default Testimonials;
