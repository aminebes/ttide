import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Insights from './components/Insights';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <main>
        <Insights />
        <Testimonials />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default App;
