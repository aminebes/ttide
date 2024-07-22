import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function ServicesFR() {
  return (
    <section className="experience-section" aria-labelledby="services-heading">
      <h2 id="services-heading">Découvrez nos offres</h2>
      <p>Inscrivez-vous pour une démonstration personnalisée et libérez la puissance du marketing digital.</p>
      <div className="experience-buttons">
        <Link to="/contact/fr">
          <button className="get-demo-button">Obtenir une démo</button>
        </Link>
      </div>
    </section>
  );
}

export default ServicesFR;
