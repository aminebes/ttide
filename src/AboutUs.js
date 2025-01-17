import { faChartLine, faHandshake, faSeedling, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './AboutUs.css';
import Header from './assets/aboutus.jpg';
import Journey from './assets/journey.jpg';
import member1 from './assets/member1.jpg';
import member2 from './assets/member2.jpg';
import member3 from './assets/member3.jpg';
import member4 from './assets/member4.jpg';
import member5 from './assets/member5.jpg';
import StoryImage from './assets/your-story-image.jpg';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function AboutUs() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page">
      <Navbar />
      <header className="about-header" role="banner">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Discover the Team Behind Our Success</h1>
            <p>Empowering Your Digital Transformation</p>
          </div>
        </div>
        <img src={Header} alt="Header" className="about-header-image" />
      </header>
      
      <section className="about-cards" aria-label="About Us Sections">
        <div className="card" style={{height: 300}}>
          <div className="card-header">
            <FontAwesomeIcon icon={faStar} size="2x" color="#007bff" />
            <h3>Our Story</h3>
          </div>
          <p>Learn about our journey and how we started.</p>
          <button className="card-button" onClick={() => scrollToSection('our-story-section')}>Read Our Story</button>
        </div>
        <div className="card" style={{height: 300}}>
          <div className="card-header">
            <FontAwesomeIcon icon={faHandshake} size="2x" color="#28a745" />
            <h3>Our Journey</h3>
          </div>
          <p>Discover the milestones we achieved along the way.</p>
          <button className="card-button" onClick={() => scrollToSection('journey-section')}>View Our Journey</button>
        </div>
        <div className="card" style={{height: 300}}>
          <div className="card-header">
            <FontAwesomeIcon icon={faSeedling} size="2x" color="#ffc107" />
            <h3>Our Team</h3>
          </div>
          <p>Meet the amazing people behind our success.</p>
          <button className="card-button" onClick={() => scrollToSection('team-section')}>Meet Our Team</button>
        </div>
        <div className="card" style={{height: 300}}>
          <div className="card-header">
            <FontAwesomeIcon icon={faChartLine} size="2x" color="#dc3545" />
            <h3>Why Choose Us?</h3>
          </div>
          <p>Find out why we are the best choice for your needs.</p>
          <button className="card-button" onClick={() => scrollToSection('why-choose-us-section')}>Learn More</button>
        </div>
      </section>
      
      <div className="section-separator"></div>
      
      <section id="our-story-section" className="our-story-section" aria-labelledby="our-story-heading">
        <div className="story-content">
          <img src={StoryImage} alt="Our Story" className="story-image" />
          <div className="story-text">
            <h2 id="our-story-heading">Our Beginnings</h2>
            <p>
              It all started with a simple idea: to create a company that would revolutionize digital marketing. Our founders, driven by passion and a vision, embarked on a journey to build something extraordinary.
            </p>
            <p>
              From late nights brainstorming to early mornings meeting with clients, the road was tough but rewarding. We faced numerous challenges, but our commitment to excellence never wavered.
            </p>
            <p>
              Today, we are proud to be a leading provider in the industry, trusted by over a million clients worldwide. Our story is one of resilience, innovation, and relentless pursuit of success.
            </p>
          </div>
        </div>
      </section>
      
      <div className="section-separator"></div>
      
      <section id="journey-section" className="journey-section" aria-labelledby="journey-heading">
        <h2 id="journey-heading">Our Journey</h2>
        <p>From our humble beginnings to becoming a top provider in the industry, our journey has been remarkable. Below are some of the key milestones we've achieved along the way.</p>
        <img src={Journey} alt="Journey" className="journey-image" />
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
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#007bff', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #007bff' }}
            date="2020"
            iconStyle={{ background: '#007bff', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Founded</h3>
            <p>Founded with a vision to transform digital marketing.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            contentStyle={{ background: '#28a745', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #28a745' }}
            iconStyle={{ background: '#28a745', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Reached 500k+ Clients</h3>
            <p>Reached 500k+ clients globally.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            contentStyle={{ background: '#ffc107', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ffc107' }}
            iconStyle={{ background: '#ffc107', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Service Expansion</h3>
            <p>Expanded services to include AI and automation.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            contentStyle={{ background: '#dc3545', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #dc3545' }}
            iconStyle={{ background: '#dc3545', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Top Provider</h3>
            <p>Became a top provider in the industry.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
      
      <div className="section-separator"></div>
      
      <section id="team-section" className="team-section" aria-labelledby="team-heading">
        <h2 id="team-heading">Our Team</h2>
        <p style={{marginBottom: 40}}>Meet the faces shaping our digital success</p>
        <div className="team-members">
          <div className="team-member" style={{translate: 80}}>
            <img src={member1} alt="Oliver Thompson" />
            <div className="team-member-body">
              <h3>Oliver Thompson</h3>
              <p className="occupation">CEO</p>
              <p className="phrase">Leading the vision and strategy of the company.</p>
              <div className="stars" aria-label="5 out of 5 stars">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={member2} alt="Ella Roberts" />
            <div className="team-member-body">
              <h3>Ella Roberts</h3>
              <p className="occupation">Operations Lead</p>
              <p className="phrase">Ensuring smooth and efficient operations.</p>
              <div className="stars" aria-label="5 out of 5 stars">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
          <div className="team-member" style={{translate: -80}}>
            <img src={member3} alt="Maxwell Cooper" />
            <div className="team-member-body">
              <h3>Maxwell Cooper</h3>
              <p className="occupation">Financial Officer</p>
              <p className="phrase">Managing the financial health of the company.</p>
              <div className="stars" aria-label="5 out of 5 stars">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
          <div style={{translate: 280}} className="team-member">
            <img src={member4} alt="Sophie Walker" />
            <div className="team-member-body">
              <h3>Sophie Walker</h3>
              <p className="occupation">Sales Director</p>
              <p className="phrase">Leading the sales team to achieve targets.</p>
              <div className="stars" aria-label="5 out of 5 stars">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
          <div style={{translate: 195}} className="team-member">
            <img src={member5} alt="Liam Harris" />
            <div className="team-member-body">
              <h3>Liam Harris</h3>
              <p className="occupation">Operations Manager</p>
              <p className="phrase">Overseeing daily operations and logistics.</p>
              <div className="stars" aria-label="5 out of 5 stars">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>
      
      <section className="why-choose-us-section" id="why-choose-us-section" aria-labelledby="why-choose-us-heading">
        <h2 id="why-choose-us-heading">Why Choose Us?</h2>
        <p className="intro">Discover what makes us the preferred choice for our clients.</p>
        <div className="why-choose-us-content">
          <Fade direction="left" cascade>
            <div className="why-choose-us-item">
              <FontAwesomeIcon icon={faHandshake} className="why-choose-us-icon" color="#007bff" />
              <h3>Innovation Driven Marketing Strategies</h3>
              <p>Join a collaborative team focused on innovative and creative digital marketing solutions. We empower creativity and provide a platform for your ideas to shape the future.</p>
            </div>
          </Fade>
          <Zoom>
            <div className="why-choose-us-item">
              <FontAwesomeIcon icon={faSeedling} className="why-choose-us-icon" color="#28a745" />
              <h3>Professional Growth</h3>
              <p>Investing in your growth with continuous learning and career development opportunities. Our supportive environment ensures you have the resources to excel.</p>
            </div>
          </Zoom>
          <Fade direction="right" cascade>
            <div className="why-choose-us-item">
              <FontAwesomeIcon icon={faChartLine} className="why-choose-us-icon" color="#ffc107"/>
              <h3>Cutting Edge Approaches</h3>
              <p>Stay ahead with our latest strategies and innovative solutions. We leverage advanced tools and technologies to deliver exceptional results.</p>
            </div>
          </Fade>
        </div>
      </section>
      
      <section className="experience-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience TrendTide</h2>
        <p>Start your journey with us today. No commitments, no risks.</p>
        <div className="experience-buttons">
          <Link to="/services">
            <button className="start-button">
              Get Started
            </button>
          </Link>
          <Link to="/contact">
            <button className="contact-us-button">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
