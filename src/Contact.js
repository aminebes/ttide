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

    // Check if message is empty
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

    // Show success popup
    Swal.fire({
      title: 'Success!',
      text: 'Your message has been sent successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        confirmButton: 'swal-button',
      },
    });

    // Clear form
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-header">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Contact Us</h1>
            <p>Discover our digital solutions. Reach out to us for queries.</p>
            <Link to="/book-appointment">
              <button className="appointment-button">Book an appointment</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Get in Touch</h2>
        <p>Discover our digital solutions. Reach out to us for queries.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
