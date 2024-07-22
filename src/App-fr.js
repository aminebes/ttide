import React from 'react';
import './App.css';
import Footer from './components/Footer-fr';
import HeaderFR from './components/Header-fr';
import InsightsFR from './components/Insights-fr';
import NavbarFR from './components/Navbar-fr';
import ServicesFR from './components/Services-fr';
import TestimonialsFR from './components/Testimonials-fr';

function AppFR() {
  return (
    <div className="App">
      <NavbarFR />
      <HeaderFR />
      <main>
        <InsightsFR />
        <TestimonialsFR />
        <ServicesFR />
      </main>
      <Footer />
    </div>
  );
}

export default AppFR;