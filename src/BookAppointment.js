import { faCalendarAlt, faChartLine, faCheckCircle, faClipboardList, faClock, faEnvelope, faSyncAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

    // Show confirmation popup
    Swal.fire({
      title: 'Confirm Booking',
      text: 'Are you sure you want to submit your booking details? Please verify the information before confirming.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Book',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'swal-button',
        cancelButton: 'swal-button-cancel',
      },
    }).then((result) => {
      if (result.isConfirmed) {
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
      }
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
      <header className="appointment-header" role="banner">
        <h1>Appointment Details</h1>
        <div className="separator"></div>
        <p>Schedule a session with our digital marketing experts to boost your online presence.</p>
      </header>
      <main className="appointment-content">
        <section className="appointment-form" aria-labelledby="appointment-form-heading">
          <div className="appointment-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name"><FontAwesomeIcon icon={faUser} /> Full Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full Name"
                  className="input-field"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Full Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="input-field"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Email Address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="teamSize"><FontAwesomeIcon icon={faUsers} /> Team Size</label>
                <select
                  id="teamSize"
                  className="input-field select-field"
                  required
                  value={formData.teamSize}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Select Team Size"
                >
                  <option value="" disabled>Select Team Size</option>
                  <option value="1-2">1-2</option>
                  <option value="3-5">3-5</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date"><FontAwesomeIcon icon={faCalendarAlt} /> Select Date</label>
                <input
                  type="date"
                  id="date"
                  className="input-field"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={getCurrentDate()}
                  aria-required="true"
                  aria-label="Select Date"
                />
              </div>
              <div className="form-group">
                <label htmlFor="time"><FontAwesomeIcon icon={faClock} /> Select Time</label>
                <select
                  id="time"
                  className="input-field select-field"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Select Time"
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
        </section>
        <aside className="appointment-info" aria-labelledby="appointment-info-heading">
          <div className="info-box" aria-labelledby="why-book-heading">
            <h3 id="why-book-heading">Why Book an Appointment?</h3>
            <ul>
              <li>Personalized consultation with our experts</li>
              <li>Get insights tailored to your business needs</li>
              <li>Boost your digital presence</li>
              <li>Exclusive tips and strategies</li>
            </ul>
          </div>
          <div className="info-box" aria-labelledby="what-to-expect-heading">
            <h3 id="what-to-expect-heading">What to Expect</h3>
            <ul>
              <li>Detailed analysis of your current strategies</li>
              <li>Customized plan of action</li>
              <li>Interactive Q&A session</li>
              <li>Follow-up support</li>
            </ul>
          </div>
        </aside>
      </main>
      <section className="additional-info" aria-labelledby="additional-info-heading">
        <div className="process-section" aria-labelledby="our-process-heading">
          <h3 id="our-process-heading">Our Process</h3>
          <div className="process-timeline">
            <div className="process-step" aria-label="Initial Consultation: Discuss your goals and challenges.">
              <FontAwesomeIcon icon={faClipboardList} size="2x" style={{marginRight: 18}} />
              <p>Initial Consultation: Discuss your goals and challenges.</p>
            </div>
            <div className="process-step" aria-label="Strategy Development: Create a customized plan.">
              <FontAwesomeIcon icon={faChartLine} size="2x" style={{marginRight: 10}} />
              <p>Strategy Development: Create a customized plan.</p>
            </div>
            <div className="process-step" aria-label="Implementation: Execute the strategy with our team.">
              <FontAwesomeIcon icon={faCheckCircle} size="2x" style={{marginRight: 10}} />
              <p>Implementation: Execute the strategy with our team.</p>
            </div>
            <div className="process-step" aria-label="Review and Adjust: Analyze results and make necessary adjustments.">
              <FontAwesomeIcon icon={faSyncAlt} size="2x" style={{marginRight: 10}} />
              <p>Review and Adjust: Analyze results and make necessary adjustments.</p>
            </div>
          </div>
        </div>
        <div className="faq-section" aria-labelledby="faq-heading">
          <h3 id="faq-heading">Frequently Asked Questions</h3>
          <div className="faq" aria-labelledby="faq-question-1">
            <h4 id="faq-question-1">How long is each consultation session?</h4>
            <p>Each session typically lasts one hour, but this can vary based on your specific needs and questions.</p>
          </div>
          <div className="faq" aria-labelledby="faq-question-2">
            <h4 id="faq-question-2">What should I prepare for the consultation?</h4>
            <p>Please come prepared with specific goals, questions, and any relevant data or reports.</p>
          </div>
          <div className="faq" aria-labelledby="faq-question-3">
            <h4 id="faq-question-3">Is there any follow-up after the consultation?</h4>
            <p>Yes, we provide follow-up support to ensure that the strategies discussed are effectively implemented.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BookAppointment;
