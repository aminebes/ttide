import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';
import './Analysis.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Analysis() {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Conversion Rate',
        data: [10, 12, 8, 15, 14],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Clicks',
        data: [1200, 1500, 1100, 1800, 1600],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red color
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Impressions',
        data: [10000, 12000, 9000, 14000, 13000],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="analysis-page">
      <Navbar />
      <header className="appointment-header">
        <h1>Client Results</h1>
        <div className="separator"></div>
        <p>Discover the exceptional results our clients have achieved using our digital marketing strategies.</p>
      </header>
      <main className="analysis-content">
        <section className="result-card">
          <div className="chart" role="img" aria-label="Performance Chart showing Conversion Rate, Clicks, and Impressions from January to May">
            <Bar data={data} options={options} />
          </div>
          <section className="summary">
            <h3>Results Summary</h3>
            <p>Detailed analysis of key metrics and performance indicators.</p>
            <ul>
              <li>Conversion Rate: 12%</li>
              <li>Clicks: 1,200</li>
              <li>Impressions: 10,000</li>
              <li>Cost per Click (CPC): $0.50</li>
            </ul>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Analysis;
