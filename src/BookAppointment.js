import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './BookAppointment.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    teamSize: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    // Check if form is valid
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Show success popup
    Swal.fire({
      title: 'Success!',
      text: 'Your appointment has been booked successfully.',
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
      teamSize: '',
      date: '',
      time: ''
    });
  };

  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = today.getFullYear();

    return `${year}-${month}-${day}`;
  };

  return (
    <div className="appointment-page">
      <Navbar />
      <div className="appointment-header">
        <h1>Appointment Details</h1>
        <div className="separator"></div>
        <p>Schedule a session with our digital marketing expert to boost your online presence.</p>
      </div>
      <div className="appointment-form">
        <div className="appointment-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="input-field"
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
                className="input-field"
                required
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="teamSize">Team Size</label>
              <select
                id="teamSize"
                className="input-field select-field"
                required
                value={formData.teamSize}
                onChange={handleChange}
              >
                <option value="" disabled>Select Team Size</option>
                <option value="1-2">1-2</option>
                <option value="3-5">3-5</option>
                <option value="5+">5+</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date">Select Date</label>
              <input
                type="date"
                id="date"
                className="input-field"
                required
                value={formData.date}
                onChange={handleChange}
                min={getCurrentDate()} // Set minimum date to current date
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Select Time</label>
              <select
                id="time"
                className="input-field select-field"
                required
                value={formData.time}
                onChange={handleChange}
              >
                <option value="" disabled>Select Time</option>
                <option value="9 AM">9 AM</option>
                <option value="10 AM">10 AM</option>
                <option value="11 AM">11 AM</option>
                <option value="12 PM">12 PM</option>
                <option value="1 PM">1 PM</option>
                <option value="2 PM">2 PM</option>
                <option value="3 PM">3 PM</option>
                <option value="4 PM">4 PM</option>
                <option value="5 PM">5 PM</option>
              </select>
            </div>
            <button type="submit" className="confirm-button">Confirm</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BookAppointment;
