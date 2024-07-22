import React from 'react';
import contentCreator from '../assets/content creator.jpg'; // Adjust the path if necessary
import creativeDirector from '../assets/creative director.jpg'; // Adjust the path if necessary
import wellnessCoach from '../assets/welness.jpg'; // Adjust the path if necessary
import './Insights.css';

function Insights() {
  return (
    <section className="insights" aria-labelledby="insights-heading">
      <h2 id="insights-heading">Read our insights</h2>
      <p>Educational content for your digital journey.</p>
      <div className="insight-cards">
        <div className="insight-card" aria-labelledby="insight-title-1">
          <img src={contentCreator} alt="Content Creator" className="card-image" />
          <div className="insight-card-body">
            <h3 id="insight-title-1">Mastering remote work</h3>
            <p>Tips for managing remote teams and staying productive.</p>
            <span>Content Creator</span>
          </div>
        </div>
        <div className="insight-card" aria-labelledby="insight-title-2">
          <img src={creativeDirector} alt="Creative Director" className="card-image" />
          <div className="insight-card-body">
            <h3 id="insight-title-2">Innovate with us</h3>
            <p>Unlock creativity and drive innovation in your campaigns.</p>
            <span>Creative Director</span>
          </div>
        </div>
        <div className="insight-card" aria-labelledby="insight-title-3">
          <img src={wellnessCoach} alt="Wellness Coach" className="card-image" />
          <div className="insight-card-body">
            <h3 id="insight-title-3">Balance for success</h3>
            <p>Tips for a healthy work-life balance in a digital world.</p>
            <span>Wellness Coach</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Insights;
