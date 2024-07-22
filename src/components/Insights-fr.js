import React from 'react';
import contentCreator from '../assets/content creator.jpg'; // Ajustez le chemin si nécessaire
import creativeDirector from '../assets/creative director.jpg'; // Ajustez le chemin si nécessaire
import wellnessCoach from '../assets/welness.jpg'; // Ajustez le chemin si nécessaire
import './Insights.css';

function InsightsFR() {
  return (
    <section className="insights" aria-labelledby="insights-heading">
      <h2 id="insights-heading">Lisez nos analyses</h2>
      <p>Contenu éducatif pour votre parcours numérique.</p>
      <div className="insight-cards">
        <div className="insight-card" aria-labelledby="insight-title-1">
          <img src={contentCreator} alt="Créateur de contenu" className="card-image" />
          <div className="insight-card-body">
            <h3 id="insight-title-1">Maîtriser le travail à distance</h3>
            <p>Conseils pour gérer les équipes à distance et rester productif.</p>
            <span>Créateur de contenu</span>
          </div>
        </div>
        <div className="insight-card" aria-labelledby="insight-title-2">
          <img src={creativeDirector} alt="Directeur créatif" className="card-image" />
          <div className="insight-card-body">
            <h3 id="insight-title-2">Innover avec nous</h3>
            <p>Libérez votre créativité et stimulez l'innovation dans vos campagnes.</p>
            <span>Directeur créatif</span>
          </div>
        </div>
        <div className="insight-card" aria-labelledby="insight-title-3">
          <img src={wellnessCoach} alt="Coach en bien-être" className="card-image" />
          <div className="insight-card-body">
            <h3 id="insight-title-3">Équilibre pour réussir</h3>
            <p>Conseils pour un équilibre travail-vie sain dans un monde numérique.</p>
            <span>Coach en bien-être</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsightsFR;
