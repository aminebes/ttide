import { faCalendarAlt, faChevronDown, faChevronUp, faComment, faEnvelope, faMapMarkerAlt, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import FooterFR from './components/Footer-fr';
import NavbarFR from './components/Navbar-fr';
import './Contact.css';

function ContactFR() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.message.trim()) {
      Swal.fire({
        title: 'Erreur !',
        text: 'Le message ne peut pas être vide.',
        icon: 'error',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'swal-button',
        },
      });
      return;
    }

    Swal.fire({
      title: 'Confirmer la Soumission',
      text: 'Êtes-vous sûr de vouloir soumettre votre message de contact ? Veuillez vérifier les détails avant de confirmer.',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Envoyer',
      cancelButtonText: 'Annuler',
      customClass: {
        confirmButton: 'swal-button',
        cancelButton: 'swal-button-cancel',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Succès !',
          text: 'Votre message a été envoyé avec succès.',
          icon: 'success',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'swal-button',
          },
        });

        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }
    });
  };

  const [activeTabs, setActiveTabs] = useState([]);

  const handleTabClick = (tab) => {
    if (activeTabs.includes(tab)) {
      setActiveTabs(activeTabs.filter(t => t !== tab));
    } else {
      setActiveTabs([...activeTabs, tab]);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="contact-page">
      <NavbarFR />
      <header className="contact-header" role="banner">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Contactez-nous</h1>
            <p>Découvrez nos solutions numériques. Contactez-nous pour toute question.</p>
          </div>
        </div>
      </header>

      <main>
        <section className="contact-cards" aria-labelledby="contact-options-heading">
          <h2 id="contact-options-heading" className="sr-only">Options de Contact</h2>
          <div className="card" role="region" aria-labelledby="location-heading">
            <div className="card-header">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" color="#007bff" />
              <h3 id="location-heading">Notre Emplacement</h3>
            </div>
            <p>Explorez l'emplacement de notre bureau principal et visitez-nous. Nous sommes situés dans les principales villes du monde pour mieux vous servir.</p>
            <button className="card-button" onClick={() => scrollToSection('location-section')}>Voir l'Emplacement</button>
          </div>
          <div className="card" role="region" aria-labelledby="chat-heading">
            <div className="card-header">
              <FontAwesomeIcon icon={faComment} size="2x" color="#28a745" />
              <h3 id="chat-heading">Discutez avec Nous</h3>
            </div>
            <p>Besoin d'aide ? Discutez avec notre équipe de support. Nous sommes disponibles 24/7 pour vous aider avec vos questions et préoccupations.</p>
            <button className="card-button" onClick={() => scrollToSection('form-section')}>Commencer la Discussion</button>
          </div>
          <div className="card" role="region" aria-labelledby="faq-heading">
            <div className="card-header">
              <FontAwesomeIcon icon={faQuestionCircle} size="2x" color="#ffc107" />
              <h3 id="faq-heading">FAQ</h3>
            </div>
            <p>Des questions ? Consultez notre Foire Aux Questions pour obtenir de l'aide. Notre équipe est prête à répondre à toutes vos questions.</p>
            <button className="card-button" onClick={() => scrollToSection('faq-section')}>Voir la FAQ</button>
          </div>
          <div className="card" role="region" aria-labelledby="appointment-heading">
            <div className="card-header">
              <FontAwesomeIcon icon={faCalendarAlt} size="2x" color="#dc3545" />
              <h3 id="appointment-heading">Rendez-vous</h3>
            </div>
            <p>Planifiez une réunion avec nos experts. Nous sommes là pour vous aider avec vos besoins spécifiques et fournir des solutions personnalisées.</p>
            <Link to="/book-appointment/fr">
              <button className="card-button">Prendre un Rendez-vous</button>
            </Link>
          </div>
        </section>

        <div className="section-separator"></div>

        <section id="location-section" className="section" aria-labelledby="location-section-heading">
          <h2 id="location-section-heading" className="section-title">Notre Emplacement</h2>
          <p>Trouvez-nous facilement sur la carte. Notre bureau principal est situé de manière centrale pour votre commodité.</p>
          <div className="maps-container">
            <iframe
              title="Notre Emplacement"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0159219400335!2d-122.40085068468154!3d37.78769657975681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b3d6d1bd%3A0x3e7d9111a88c5184!2s717%20Market%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1628863989640!5m2!1sen!2sin"
              width="1200"
              height="700"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <div className="section-separator"></div>

        <section id="form-section" className="section" aria-labelledby="form-section-heading">
          <h2 id="form-section-heading" className="section-title">Discutez avec Nous</h2>
          <p>Nous sommes là pour vous aider avec toutes les questions ou problèmes que vous pourriez avoir. Notre équipe est à un clic !</p>
          <div className="contact-form">
            <h2>Contactez-nous</h2>
            <p>Contactez notre équipe pour obtenir des informations détaillées sur nos services et un support personnalisé. Remplissez le formulaire ci-dessous et nous répondrons rapidement à vos demandes.</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <FontAwesomeIcon icon={faUser} /> Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nom Complet"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Nom Complet"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <FontAwesomeIcon icon={faEnvelope} /> Adresse Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Adresse Email"
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  value={formData.email}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Adresse Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">
                  <FontAwesomeIcon icon={faComment} /> Votre Message
                </label>
                <textarea
                  id="message"
                  placeholder="Votre Message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Votre Message"
                ></textarea>
              </div>
              <button type="submit" className="submit-button">Soumettre</button>
            </form>
          </div>
        </section>

        <div className="section-separator"></div>

        <section id="faq-section" className="section" aria-labelledby="faq-section-heading">
          <h2 id="faq-section-heading" className="section-title">FAQ</h2>
          <p style={{ marginBottom: 30 }}>Trouvez des réponses aux questions fréquentes. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.</p>
          <div className="faq-card" style={{border: "1px solid #ddd"}}>
            <div className="accordion" role="tablist">
              <div className={`accordion-item ${activeTabs.includes('faq1') ? 'active' : ''}`} id="faq1" role="tab" aria-expanded={activeTabs.includes('faq1')}>
                <div className="accordion-header" style={{backgroundColor:"#007bff"}} onClick={() => handleTabClick('faq1')} role="button" aria-controls="faq1-content" tabIndex="0">
                  <h3>Quels services de marketing digital proposez-vous ?</h3>
                  <FontAwesomeIcon icon={activeTabs.includes('faq1') ? faChevronUp : faChevronDown} />
                </div>
                {activeTabs.includes('faq1') && (
                  <div className="accordion-body" id="faq1-content" role="tabpanel" aria-labelledby="faq1">
                    <p>Nous proposons une large gamme de services de marketing digital, y compris le SEO, le marketing sur les réseaux sociaux, le marketing par email, et plus encore.</p>
                  </div>
                )}
              </div>
              <div className={`accordion-item ${activeTabs.includes('faq2') ? 'active' : ''}`} id="faq2" role="tab" aria-expanded={activeTabs.includes('faq2')}>
                <div className="accordion-header" style={{backgroundColor:"#28a745"}} onClick={() => handleTabClick('faq2')} role="button" aria-controls="faq2-content" tabIndex="0">
                  <h3>Comment puis-je mesurer le succès de ma campagne marketing ?</h3>
                  <FontAwesomeIcon icon={activeTabs.includes('faq2') ? faChevronUp : faChevronDown} />
                </div>
                {activeTabs.includes('faq2') && (
                  <div className="accordion-body" id="faq2-content" role="tabpanel" aria-labelledby="faq2">
                    <p>Le succès peut être mesuré à l'aide de divers indicateurs tels que le trafic sur le site web, les taux de conversion, les niveaux d'engagement, et le ROI.</p>
                  </div>
                )}
              </div>
              <div className={`accordion-item ${activeTabs.includes('faq3') ? 'active' : ''}`} id="faq3" role="tab" aria-expanded={activeTabs.includes('faq3')}>
                <div className="accordion-header" style={{backgroundColor:"#ffc107"}} onClick={() => handleTabClick('faq3')} role="button" aria-controls="faq3-content" tabIndex="0">
                  <h3>Quel est le coût de vos services de marketing digital ?</h3>
                  <FontAwesomeIcon icon={activeTabs.includes('faq3') ? faChevronUp : faChevronDown} />
                </div>
                {activeTabs.includes('faq3') && (
                  <div className="accordion-body" id="faq3-content" role="tabpanel" aria-labelledby="faq3">
                    <p>Le coût varie en fonction de la portée et des spécificités de votre campagne. Contactez-nous pour un devis détaillé.</p>
                  </div>
                )}
              </div>
              <div className={`accordion-item ${activeTabs.includes('faq4') ? 'active' : ''}`} id="faq4" role="tab" aria-expanded={activeTabs.includes('faq4')}>
                <div className="accordion-header" style={{backgroundColor:"#dc3545"}} onClick={() => handleTabClick('faq4')} role="button" aria-controls="faq4-content" tabIndex="0">
                  <h3>Combien de temps faut-il pour voir les résultats du marketing digital ?</h3>
                  <FontAwesomeIcon icon={activeTabs.includes('faq4') ? faChevronUp : faChevronDown} />
                </div>
                {activeTabs.includes('faq4') && (
                  <div className="accordion-body" id="faq4-content" role="tabpanel" aria-labelledby="faq4">
                    <p>Les résultats peuvent varier, mais généralement, vous pouvez vous attendre à voir des améliorations significatives dans un délai de 3 à 6 mois.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterFR />
    </div>
  );
}

export default ContactFR;
