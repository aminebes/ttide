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
import Footer from './components/Footer-fr';
import Navbar from './components/Navbar-fr';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function AnalysisFR() {
  const data = {
    labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
    datasets: [
      {
        label: 'Taux de Conversion',
        data: [10, 12, 8, 15, 14],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Clics',
        data: [1200, 1500, 1100, 1800, 1600],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Couleur rouge
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
        <h1>Résultats des Clients</h1>
        <div className="separator"></div>
        <p>Découvrez les résultats exceptionnels que nos clients ont obtenus grâce à nos stratégies de marketing digital.</p>
      </header>
      <main className="analysis-content">
        <section className="result-card">
          <div className="chart" role="img" aria-label="Graphique de performance montrant le taux de conversion, les clics et les impressions de janvier à mai">
            <Bar data={data} options={options} />
          </div>
          <section className="summary">
            <h3>Résumé des Résultats</h3>
            <p>Analyse détaillée des principaux indicateurs de performance.</p>
            <ul>
              <li>Taux de Conversion : 12%</li>
              <li>Clics : 1200</li>
              <li>Impressions : 10 000</li>
              <li>Coût par Clic (CPC) : 0,50 $</li>
            </ul>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default AnalysisFR;
