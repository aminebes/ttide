import { faCalendarAlt, faChevronDown, faChevronUp, faComment, faEnvelope, faMapMarkerAlt, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.message.trim()) {
      Swal.fire({
        title: 'Error!',
        text: 'Message cannot be empty.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'swal-button',
        },
      });
      return;
    }

    Swal.fire({
      title: 'Confirm Submission',
      text: 'Are you sure you want to submit your contact message? Please verify the details before confirming.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'swal-button',
        cancelButton: 'swal-button-cancel',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'swal-button',
          },
        });

        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    });
  };

  const [activeTabs, setActiveTabs] = useState([]);

  const handleTabClick = (tab) => {
    if (activeTabs.includes(tab)) {
      setActiveTabs(activeTabs.filter(t => t !== tab));
    } else {
      setActiveTabs([...activeTabs, tab]);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page">
      <Navbar />
      <header className="contact-header" role="banner">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Contact Us</h1>
            <p>Discover our digital solutions. Reach out to us for queries.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="contact-cards" aria-labelledby="contact-options-heading">
          <h2 id="contact-options-heading" className="sr-only">Contact Options</h2>
          <div className="card" role="region" aria-labelledby="location-heading">
            <div className="card-header">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="#007bff" />
              <h3 id="location-heading">Our Location</h3>
            </div>
            <p>Explore our main office location and visit us. We are located in major cities across the globe to serve you better.</p>
            <button className="card-button" onClick={() => scrollToSection('location-section')}>Check Location</button>
          </div>
          <div className="card" role="region" aria-labelledby="chat-heading">
            <div className="card-header">
              <FontAwesomeIcon icon={faComment} size="2x" color="#28a745" />
              <h3 id="chat-heading">Chat with Us</h3>
            </div>
            <p>Need assistance? Chat with our support team. We are available 24/7 to help you with your queries and concerns.</p>
            <button className="card-button" onClick={() => scrollToSection('form-section')}>Start Chat</button>
          </div>
          <div className="card" role="region" aria-labelledby="faq-heading">
            <div className="card-header">
              <FontAwesomeIcon icon={faQuestionCircle} size="2x" color="#ffc107" />
              <h3 id="faq-heading">FAQ</h3>
            </div>
            <p>Have questions? Check our Frequently Asked Questions for support. Our team is ready to assist you with any inquiries.</p>
            <button className="card-button" onClick={() => scrollToSection('faq-section')}>View FAQ</button>
          </div>
          <div className="card" role="region" aria-labelledby="appointment-heading">
            <div className="card-header">
              <FontAwesomeIcon icon={faCalendarAlt} size="2x" color="#dc3545" />
              <h3 id="appointment-heading">Book an Appointment</h3>
            </div>
            <p>Schedule a meeting with our experts. We are here to help you with your specific needs and provide tailored solutions.</p>
            <Link to="/book-appointment">
              <button className="card-button">Book an Appointment</button>
            </Link>
          </div>
        </section>

        <div className="section-separator"></div>

        <section id="location-section" className="section" aria-labelledby="location-section-heading">
          <h2 id="location-section-heading" className="section-title">Our Location</h2>
          <p>Find us easily on the map. Our main office is centrally located for your convenience.</p>
          <div className="maps-container">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0159219400335!2d-122.40085068468154!3d37.78769657975681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b3d6d1bd%3A0x3e7d9111a88c5184!2s717%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1628863989640!5m2!1sen!2sin"
              width="1200"
              height="700"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <div className="section-separator"></div>

        <section id="form-section" className="section" aria-labelledby="form-section-heading">
          <h2 id="form-section-heading" className="section-title">Chat with Us</h2>
          <p>We're here to help you with any inquiries or issues you might have. Our team is just a click away!</p>
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <p>Contact our team for detailed information about our services and personalized support. Fill out the form below and we'll respond promptly to your inquiries.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <FontAwesomeIcon icon={faUser} /> Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Full Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FontAwesomeIcon icon={faEnvelope} /> Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Email Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <FontAwesomeIcon icon={faComment} /> Your Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </section>

        <div className="section-separator"></div>

        <section id="faq-section" className="section" aria-labelledby="faq-section-heading">
          <h2 id="faq-section-heading" className="section-title">FAQ</h2>
          <p style={{ marginBottom: 30 }}>Find answers to common questions. If you can't find what you're looking for, feel free to reach out to us.</p>
          <div className="faq-card" style={{border: "1px solid #ddd"}}>
            <div className="accordion" role="tablist">
              <div className={`accordion-item ${activeTabs.includes('faq1') ? 'active' : ''}`} id="faq1" role="tab" aria-expanded={activeTabs.includes('faq1')}>
                <div className="accordion-header" style={{backgroundColor:"#007bff"}} onClick={() => handleTabClick('faq1')} role="button" aria-controls="faq1-content" tabIndex="0">
                  <h3>What digital marketing services do you offer?</h3>
                  <FontAwesomeIcon icon={activeTabs.includes('faq1') ? faChevronUp : faChevronDown} />
                </div>
                {activeTabs.includes('faq1') && (
                  <div className="accordion-body" id="faq1-content" role="tabpanel" aria-labelledby="faq1">
                    <p>We offer a wide range of digital marketing services including SEO, Social Media Marketing, Email Marketing, and more.</p>
                  </div>
                )}
              </div>
              <div className={`accordion-item ${activeTabs.includes('faq2') ? 'active' : ''}`} id="faq2" role="tab" aria-expanded={activeTabs.includes('faq2')}>
                <div className="accordion-header" style={{backgroundColor:"#28a745"}} onClick={() => handleTabClick('faq2')} role="button" aria-controls="faq2-content" tabIndex="0">
                  <h3>How can I measure the success of my marketing campaign?</h3>
                  <FontAwesomeIcon icon={activeTabs.includes('faq2') ? faChevronUp : faChevronDown} />
                </div>
                {activeTabs.includes('faq2') && (
                  <div className="accordion-body" id="faq2-content" role="tabpanel" aria-labelledby="faq2">
                    <p>Success can be measured using various metrics such as website traffic, conversion rates, engagement levels, and ROI.</p>
                  </div>
                )}
              </div>
              <div className={`accordion-item ${activeTabs.includes('faq3') ? 'active' : ''}`} id="faq3" role="tab" aria-expanded={activeTabs.includes('faq3')}>
                <div className="accordion-header" style={{backgroundColor:"#ffc107"}} onClick={() => handleTabClick('faq3')} role="button" aria-controls="faq3-content" tabIndex="0">
                  <h3>What is the cost of your digital marketing services?</h3>
                  <FontAwesomeIcon icon={activeTabs.includes('faq3') ? faChevronUp : faChevronDown} />
                </div>
                {activeTabs.includes('faq3') && (
                  <div className="accordion-body" id="faq3-content" role="tabpanel" aria-labelledby="faq3">
                    <p>The cost varies depending on the scope and specifics of your campaign. Contact us for a detailed quote.</p>
                  </div>
                )}
              </div>
              <div className={`accordion-item ${activeTabs.includes('faq4') ? 'active' : ''}`} id="faq4" role="tab" aria-expanded={activeTabs.includes('faq4')}>
                <div className="accordion-header" style={{backgroundColor:"#dc3545"}} onClick={() => handleTabClick('faq4')} role="button" aria-controls="faq4-content" tabIndex="0">
                  <h3>How long does it take to see results from digital marketing?</h3>
                  <FontAwesomeIcon icon={activeTabs.includes('faq4') ? faChevronUp : faChevronDown} />
                </div>
                {activeTabs.includes('faq4') && (
                  <div className="accordion-body" id="faq4-content" role="tabpanel" aria-labelledby="faq4">
                    <p>Results can vary, but typically you can expect to see significant improvements within 3 to 6 months.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
