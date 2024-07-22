import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';

import AboutUs from './AboutUs';
import Analysis from './Analysis';
import App from './App';
import Blog from './Blog';
import BookAppointment from './BookAppointment';
import Contact from './Contact';
import Services from './Services';

import AboutUsFR from './AboutUs-fr';
import AnalysisFR from './Analysis-fr';
import AppFR from './App-fr';
import BlogFR from './Blog-fr';
import BookAppointmentFR from './BookAppointment-fr';
import ContactFR from './Contact-fr';
import ServicesFR from './Services-fr';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router basename="/ttide">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/analysis" element={<Analysis />} />

        <Route path="/fr" element={<AppFR />} />
        <Route path="/contact/fr" element={<ContactFR />} />
        <Route path="/about-us/fr" element={<AboutUsFR />} />
        <Route path="/blog/fr" element={<BlogFR />} />
        <Route path="/book-appointment/fr" element={<BookAppointmentFR />} />
        <Route path="/services/fr" element={<ServicesFR />} />
        <Route path="/analysis/fr" element={<AnalysisFR />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
