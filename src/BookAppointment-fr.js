import { faCalendarAlt, faChartLine, faCheckCircle, faClipboardList, faClock, faEnvelope, faSyncAlt, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './BookAppointment.css';
import Footer from './components/Footer-fr';
import NavbarFR from './components/Navbar-fr';

function BookAppointmentFR() {
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
      title: 'Confirmer la Réservation',
      text: 'Êtes-vous sûr de vouloir soumettre les détails de votre réservation ? Veuillez vérifier les informations avant de confirmer.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Réserver',
      cancelButtonText: 'Annuler',
      customClass: {
        confirmButton: 'swal-button',
        cancelButton: 'swal-button-cancel',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Show success popup
        Swal.fire({
          title: 'Succès !',
          text: 'Votre rendez-vous a été réservé avec succès.',
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
      <NavbarFR />
      <header className="appointment-header" role="banner">
        <h1>Détails du Rendez-vous</h1>
        <div className="separator"></div>
        <p>Planifiez une session avec nos experts en marketing digital pour améliorer votre présence en ligne.</p>
      </header>
      <main className="appointment-content">
        <section className="appointment-form" aria-labelledby="appointment-form-heading">
          <div className="appointment-card">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name"><FontAwesomeIcon icon={faUser} /> Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nom Complet"
                  className="input-field"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Nom Complet"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Adresse Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Adresse Email"
                  className="input-field"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Adresse Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="teamSize"><FontAwesomeIcon icon={faUsers} /> Taille de l'Équipe</label>
                <select
                  id="teamSize"
                  className="input-field select-field"
                  required
                  value={formData.teamSize}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Sélectionner la Taille de l'Équipe"
                >
                  <option value="" disabled>Sélectionner la Taille de l'Équipe</option>
                  <option value="1-2">1-2</option>
                  <option value="3-5">3-5</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date"><FontAwesomeIcon icon={faCalendarAlt} /> Sélectionner la Date</label>
                <input
                  type="date"
                  id="date"
                  className="input-field"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  min={getCurrentDate()}
                  aria-required="true"
                  aria-label="Sélectionner la Date"
                />
              </div>
              <div className="form-group">
                <label htmlFor="time"><FontAwesomeIcon icon={faClock} /> Sélectionner l'Heure</label>
                <select
                  id="time"
                  className="input-field select-field"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Sélectionner l'Heure"
                >
                  <option value="" disabled>Sélectionner l'Heure</option>
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
              <button type="submit" className="confirm-button">Confirmer</button>
            </form>
          </div>
        </section>
        <aside className="appointment-info" aria-labelledby="appointment-info-heading">
          <div className="info-box" aria-labelledby="why-book-heading">
            <h3 id="why-book-heading">Pourquoi Réserver un Rendez-vous ?</h3>
            <ul>
              <li>Consultation personnalisée avec nos experts</li>
              <li>Obtenez des informations adaptées aux besoins de votre entreprise</li>
              <li>Améliorez votre présence digitale</li>
              <li>Conseils et stratégies exclusifs</li>
            </ul>
          </div>
          <div className="info-box" aria-labelledby="what-to-expect-heading">
            <h3 id="what-to-expect-heading">À quoi s'attendre</h3>
            <ul>
              <li>Analyse détaillée de vos stratégies actuelles</li>
              <li>Plan d'action personnalisé</li>
              <li>Session de questions-réponses interactive</li>
              <li>Support de suivi</li>
            </ul>
          </div>
        </aside>
      </main>
      <section className="additional-info" aria-labelledby="additional-info-heading">
        <div className="process-section" aria-labelledby="our-process-heading">
          <h3 id="our-process-heading">Notre Processus</h3>
          <div className="process-timeline">
            <div className="process-step" aria-label="Consultation Initiale : Discutez de vos objectifs et défis.">
              <FontAwesomeIcon icon={faClipboardList} size="2x" style={{marginRight: 18}} />
              <p>Consultation Initiale : Discutez de vos objectifs et défis.</p>
            </div>
            <div className="process-step" aria-label="Développement de Stratégie : Créez un plan personnalisé.">
              <FontAwesomeIcon icon={faChartLine} size="2x" style={{marginRight: 10}} />
              <p>Développement de Stratégie : Créez un plan personnalisé.</p>
            </div>
            <div className="process-step" aria-label="Mise en Œuvre : Exécutez la stratégie avec notre équipe.">
              <FontAwesomeIcon icon={faCheckCircle} size="2x" style={{marginRight: 10}} />
              <p>Mise en Œuvre : Exécutez la stratégie avec notre équipe.</p>
            </div>
            <div className="process-step" aria-label="Réviser et Ajuster : Analysez les résultats et apportez les ajustements nécessaires.">
              <FontAwesomeIcon icon={faSyncAlt} size="2x" style={{marginRight: 10}} />
              <p>Réviser et Ajuster : Analysez les résultats et apportez les ajustements nécessaires.</p>
            </div>
          </div>
        </div>
        <div className="faq-section" aria-labelledby="faq-heading">
          <h3 id="faq-heading">Questions Fréquemment Posées</h3>
          <div className="faq" aria-labelledby="faq-question-1">
            <h4 id="faq-question-1">Combien de temps dure chaque session de consultation ?</h4>
            <p>Chaque session dure généralement une heure, mais cela peut varier en fonction de vos besoins spécifiques et de vos questions.</p>
          </div>
          <div className="faq" aria-labelledby="faq-question-2">
            <h4 id="faq-question-2">Que dois-je préparer pour la consultation ?</h4>
            <p>Veuillez venir préparé avec des objectifs spécifiques, des questions et toute donnée ou rapport pertinent.</p>
          </div>
          <div className="faq" aria-labelledby="faq-question-3">
            <h4 id="faq-question-3">Y a-t-il un suivi après la consultation ?</h4>
            <p>Oui, nous offrons un support de suivi pour s'assurer que les stratégies discutées sont mises en œuvre efficacement.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default BookAppointmentFR;
