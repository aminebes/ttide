import React from 'react';
import contentCreator from '../assets/content creator.jpg'; // Adjust the path if necessary
import creativeDirector from '../assets/creative director.jpg'; // Adjust the path if necessary
import wellnessCoach from '../assets/welness.jpg'; // Adjust the path if necessary
import './Insights.css';

function Insights() {
  return (
    <section className="insights">
      <h2>Read our insights</h2>
      <p>Educational content for your digital journey.</p>
      <div className="insight-cards">
        <div className="card">
          <img src={contentCreator} alt="Content Creator" className="card-image" />
          <h3>Mastering remote work</h3>
          <p>Tips for managing remote teams and staying productive.</p>
          <span>Content Creator</span>
        </div>
        <div className="card">
          <img src={creativeDirector} alt="Creative Director" className="card-image" />
          <h3>Innovate with us</h3>
          <p>Unlock creativity and drive innovation in your campaigns.</p>
          <span>Creative Director</span>
        </div>
        <div className="card">
          <img src={wellnessCoach} alt="Wellness Coach" className="card-image" />
          <h3>Balance for success</h3>
          <p>Tips for a healthy work-life balance in a digital world.</p>
          <span>Wellness Coach</span>
        </div>
      </div>
    </section>
  );
}

export default Insights;
