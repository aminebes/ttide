import React from 'react';
import './Analysis.css';
import HeroImage from './assets/hero_image.jpg';
import PerformanceChart from './assets/performance_chart.jpg';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Analysis() {
  return (
    <div className="analysis-page">
      <Navbar />
      <div className="analysis-header">
        <div className="hero-overlay">
          <div className="header-content">
            <h1>Client Results</h1>
            <p>Discover the exceptional results our clients have achieved using our digital marketing strategies.</p>
          </div>
        </div>
        <img src={HeroImage} alt="Client Results" className="hero-image" />
      </div>
      <div className="analysis-content">
        <div className="result-card">
          <h2>Campaign Results</h2>
          <p>Visualize and analyze the performance of your marketing campaigns using our advanced tools.</p>
          <div className="chart">
            <h3>Performance Chart</h3>
            <img src={PerformanceChart} alt="Performance Chart" className="chart-image" />
          </div>
          <div className="summary">
            <h3>Results Summary</h3>
            <p>Detailed analysis of key metrics and performance indicators.</p>
            <ul>
              <li>Conversion Rate: 12%</li>
              <li>Clicks: 1,200</li>
              <li>Impressions: 10,000</li>
              <li>Cost per Click (CPC): $0.50</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Analysis;
