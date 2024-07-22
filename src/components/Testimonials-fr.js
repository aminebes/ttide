import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import reviewer1 from '../assets/member1.jpg';
import reviewer2 from '../assets/member2.jpg';
import reviewer3 from '../assets/member3.jpg';
import './Testimonials.css';

function TestimonialsFR() {
  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">Témoignages des clients</h2>
      <p className="subtitle">Écoutez nos clients satisfaits parler de leurs expériences avec nos services.</p>
      <div className="testimonial-cards">
        <div className="test-card" aria-label="Témoignage de Marketing Pro">
          <div className="stars" aria-label="5 étoiles sur 5">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>Notre agence a été un changeur de jeu pour moi. Je recommande vivement !</p>
          <div className="reviewer">
            <img src={reviewer1} alt="Critique Marketing Pro" />
            <span>Marketing Pro</span>
          </div>
        </div>
        <div className="test-card" aria-label="Témoignage de Digital Guru">
          <div className="stars" aria-label="5 étoiles sur 5">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>Une expérience exceptionnelle avec TrendTide. Service de premier ordre !</p>
          <div className="reviewer">
            <img src={reviewer2} alt="Critique Digital Guru" />
            <span>Digital Guru</span>
          </div>
        </div>
        <div className="test-card" aria-label="Témoignage de Marketing Maven">
          <div className="stars" aria-label="5 étoiles sur 5">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <p>Une fois que vous vous engagez avec TrendTide, vous ne regarderez plus en arrière. Exceptionnel !</p>
          <div className="reviewer">
            <img src={reviewer3} alt="Critique Marketing Maven" />
            <span>Marketing Maven</span>
          </div>
        </div>
      </div>
      <Link to="/analysis/fr">
        <button className="analysis-button">Voir les résultats de nos clients</button>
      </Link>
    </section>
  );
}

export default TestimonialsFR;
