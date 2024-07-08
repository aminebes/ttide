import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';
import Header from './assets/aboutus.jpg';
import Journey from './assets/journey.jpg';
import member1 from './assets/member1.jpg';
import member2 from './assets/member2.jpg';
import member3 from './assets/member3.jpg';
import member4 from './assets/member4.jpg';
import member5 from './assets/member5.jpg';
import member6 from './assets/member6.jpg';
import member7 from './assets/member7.jpg';
import member8 from './assets/member8.jpg';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function AboutUs() {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-header">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Discover the team behind our digital</h1>
            <p>Passionate about boosting your digital success</p>
          </div>
        </div>
        <img src={Header} alt="Header" className="about-header-image" />
      </div>
      <div className="journey-section">
        <h2>Our Journey</h2>
        <p>Driven by a team of digital experts, our agency has evolved from a startup to a top provider of digital solutions for various industries.</p>
        <img src={Journey} alt="Journey" className="journey-image" />
      </div>
      <div className="key-stats">
        <div className="stat">
          <h3>2024</h3>
          <p>Established</p>
        </div>
        <div className="stat">
          <h3>1M+</h3>
          <p>Clients Trust TrendTide</p>
        </div>
        <div className="stat">
          <h3>$100M</h3>
          <p>Investment Received</p>
        </div>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <p>Meet the faces shaping our digital success</p>
        <div className="team-members">
          <div className="team-member">
            <img src={member1} alt="Oliver Thompson" />
            <h3>Oliver Thompson</h3>
            <p>CEO</p>
          </div>
          <div className="team-member">
            <img src={member2} alt="Ella Roberts" />
            <h3>Ella Roberts</h3>
            <p>Operations Lead</p>
          </div>
          <div className="team-member">
            <img src={member3} alt="Maxwell Cooper" />
            <h3>Maxwell Cooper</h3>
            <p>Financial Officer</p>
          </div>
          <div className="team-member">
            <img src={member4} alt="Sophie Walker" />
            <h3>Sophie Walker</h3>
            <p>Sales Director</p>
          </div>
          <div className="team-member">
            <img src={member5} alt="Liam Harris" />
            <h3>Liam Harris</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-member">
            <img src={member6} alt="Sarah Adams" />
            <h3>Sarah Adams</h3>
            <p>Product Development</p>
          </div>
          <div className="team-member">
            <img src={member7} alt="Natalie Scott" />
            <h3>Natalie Scott</h3>
            <p>HR Manager</p>
          </div>
          <div className="team-member">
            <img src={member8} alt="Alexa King" />
            <h3>Alexa King</h3>
            <p>Support Specialist</p>
          </div>
          
        </div>
      </div>
      <div className="locations-section">
        <h2>Our Locations</h2>
        <p>Connect with us online or visit our offices!</p>
        <div className="locations">
          <div className="location">
            <h3>San Francisco</h3>
            <p>717 Market Street San Francisco, CA 94103</p>
          </div>
          <div className="location">
            <h3>Copenhagen</h3>
            <p>Emil Holms Kanal 14 Copenhagen, 2300</p>
          </div>
        </div>
      </div>
      <div className="experience-section">
        <h2>Experience TrendTide</h2>
        <p>Start your journey with us today. No commitments, no risks.</p>
        <div className="experience-buttons">
          <Link to="/services">
          <button className="start-button">Get Started</button>
          </Link>
          <Link to="/contact">
          <button className="contact-us-button">Contact Us</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
