import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Analysis from './Analysis'; // Import the Analysis component
import App from './App';
import Blog from './Blog';
import BookAppointment from './BookAppointment';
import Contact from './Contact';
import './index.css';
import Services from './Services'; // Import the Services component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/trendtide">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/services" element={<Services />} /> {/* Add the Services route */}
        <Route path="/analysis" element={<Analysis />} /> {/* Add the Analysis route */}
      </Routes>
    </Router>
  </React.StrictMode>
);
