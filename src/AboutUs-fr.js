import { faChartLine, faHandshake, faSeedling, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './AboutUs.css';
import Header from './assets/aboutus.jpg';
import Journey from './assets/journey.jpg';
import member1 from './assets/member1.jpg';
import member2 from './assets/member2.jpg';
import member3 from './assets/member3.jpg';
import member4 from './assets/member4.jpg';
import member5 from './assets/member5.jpg';
import StoryImage from './assets/your-story-image.jpg';
import Footer from './components/Footer-fr';
import Navbar from './components/Navbar-fr';

function AboutUsFR() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="about-page">
      <Navbar />
      <header className="about-header" role="banner">
        <div className="header-overlay">
          <div className="header-content">
            <h1>Découvrez l'équipe derrière notre succès</h1>
            <p>Donner vie à votre transformation digitale</p>
          </div>
        </div>
        <img src={Header} alt="En-tête" className="about-header-image" />
      </header>
      
      <section className="about-cards" aria-label="Sections À propos de nous">
        <div className="card" style={{height: 300}}>
          <div className="card-header">
            <FontAwesomeIcon icon={faStar} size="2x" color="#007bff" />
            <h3>Notre Histoire</h3>
          </div>
          <p>Découvrez notre parcours et comment nous avons commencé.</p>
          <button className="card-button" onClick={() => scrollToSection('our-story-section')}>Lire notre histoire</button>
        </div>
        <div className="card" style={{height: 300}}>
          <div className="card-header">
            <FontAwesomeIcon icon={faHandshake} size="2x" color="#28a745" />
            <h3>Notre Parcours</h3>
          </div>
          <p>Découvrez les étapes clés que nous avons franchies en cours de route.</p>
          <button className="card-button" onClick={() => scrollToSection('journey-section')}>Voir notre parcours</button>
        </div>
        <div className="card" style={{height: 300}}>
          <div className="card-header">
            <FontAwesomeIcon icon={faSeedling} size="2x" color="#ffc107" />
            <h3>Notre Équipe</h3>
          </div>
          <p>Rencontrez les personnes extraordinaires derrière notre succès.</p>
          <button className="card-button" onClick={() => scrollToSection('team-section')}>Rencontrez notre équipe</button>
        </div>
        <div className="card" style={{height: 300}}>
          <div className="card-header">
            <FontAwesomeIcon icon={faChartLine} size="2x" color="#dc3545" />
            <h3>Pourquoi nous choisir ?</h3>
          </div>
          <p>Découvrez pourquoi nous sommes le meilleur choix pour vos besoins.</p>
          <button className="card-button" onClick={() => scrollToSection('why-choose-us-section')}>En savoir plus</button>
        </div>
      </section>
      
      <div className="section-separator"></div>
      
      <section id="our-story-section" className="our-story-section" aria-labelledby="our-story-heading">
        <div className="story-content">
          <img src={StoryImage} alt="Notre Histoire" className="story-image" />
          <div className="story-text">
            <h2 id="our-story-heading">Nos Débuts</h2>
            <p>
              Tout a commencé avec une idée simple : créer une entreprise qui révolutionnerait le marketing digital. Nos fondateurs, animés par la passion et une vision, ont entrepris de construire quelque chose d'extraordinaire.
            </p>
            <p>
              Des nuits tardives de brainstorming aux matinées précoces de réunions avec les clients, la route a été difficile mais gratifiante. Nous avons fait face à de nombreux défis, mais notre engagement envers l'excellence n'a jamais faibli.
            </p>
            <p>
              Aujourd'hui, nous sommes fiers d'être un fournisseur leader dans l'industrie, de confiance pour plus d'un million de clients dans le monde entier. Notre histoire est celle de la résilience, de l'innovation et de la poursuite incessante du succès.
            </p>
          </div>
        </div>
      </section>
      
      <div className="section-separator"></div>
      
      <section id="journey-section" className="journey-section" aria-labelledby="journey-heading">
        <h2 id="journey-heading">Notre Parcours</h2>
        <p>De nos débuts modestes à devenir un fournisseur de premier plan dans l'industrie, notre parcours a été remarquable. Voici quelques-unes des étapes clés que nous avons franchies en cours de route.</p>
        <img src={Journey} alt="Parcours" className="journey-image" />
        <div className="key-stats">
          <div className="stat">
            <h3>2024</h3>
            <p>Établi</p>
          </div>
          <div className="stat">
            <h3>1M+</h3>
            <p>Clients de confiance TrendTide</p>
          </div>
          <div className="stat">
            <h3>$100M</h3>
            <p>Investissement Reçu</p>
          </div>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#007bff', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #007bff' }}
            date="2020"
            iconStyle={{ background: '#007bff', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Fondé</h3>
            <p>Fondé avec une vision de transformer le marketing digital.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022"
            contentStyle={{ background: '#28a745', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #28a745' }}
            iconStyle={{ background: '#28a745', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Atteint 500k+ Clients</h3>
            <p>Atteint plus de 500k clients dans le monde.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            contentStyle={{ background: '#ffc107', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #ffc107' }}
            iconStyle={{ background: '#ffc107', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Expansion des Services</h3>
            <p>Expansion des services pour inclure l'IA et l'automatisation.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            contentStyle={{ background: '#dc3545', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #dc3545' }}
            iconStyle={{ background: '#dc3545', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Fournisseur de Premier Plan</h3>
            <p>Devenu un fournisseur de premier plan dans l'industrie.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
      
      <div className="section-separator"></div>
      
      <section id="team-section" className="team-section" aria-labelledby="team-heading">
        <h2 id="team-heading">Notre Équipe</h2>
        <p style={{marginBottom: 40}}>Rencontrez les visages qui façonnent notre succès digital</p>
        <div className="team-members">
          <div className="team-member" style={{translate: 80}}>
            <img src={member1} alt="Oliver Thompson" />
            <div className="team-member-body">
              <h3>Oliver Thompson</h3>
              <p className="occupation">PDG</p>
              <p className="phrase">Dirigeant la vision de l'entreprise.</p>
              <div className="stars" aria-label="5 étoiles sur 5">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
          <div className="team-member">
            <img src={member2} alt="Ella Roberts" />
            <div className="team-member-body">
              <h3>Ella Roberts</h3>
              <p className="occupation">Responsable des Opérations</p>
              <p className="phrase">Assurant des opérations fluides et efficaces.</p>
              <div className="stars" aria-label="5 étoiles sur 5">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
          <div className="team-member" style={{translate: -80}}>
            <img src={member3} alt="Maxwell Cooper" />
            <div className="team-member-body">
              <h3>Maxwell Cooper</h3>
              <p className="occupation">Responsable Financier</p>
              <p className="phrase">Gérer la santé financière de l'entreprise.</p>
              <div className="stars" aria-label="5 étoiles sur 5">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
          <div style={{translate: 280}} className="team-member">
            <img src={member4} alt="Sophie Walker" />
            <div className="team-member-body">
              <h3>Sophie Walker</h3>
              <p className="occupation">Directrice des Ventes</p>
              <p className="phrase">Dirigeant l'équipe de vente pour atteindre les objectifs.</p>
              <div className="stars" aria-label="5 étoiles sur 5">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
          <div style={{translate: 195}} className="team-member">
            <img src={member5} alt="Liam Harris" />
            <div className="team-member-body">
              <h3>Liam Harris</h3>
              <p className="occupation">Responsable des Opérations</p>
              <p className="phrase">Superviser les opérations quotidiennes et la logistique.</p>
              <div className="stars" aria-label="5 étoiles sur 5">
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
                <FontAwesomeIcon icon={faStar} color="gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-separator"></div>
      
      <section className="why-choose-us-section" id="why-choose-us-section" aria-labelledby="why-choose-us-heading">
        <h2 id="why-choose-us-heading">Pourquoi nous choisir ?</h2>
        <p className="intro">Découvrez ce qui fait de nous le choix préféré de nos clients.</p>
        <div className="why-choose-us-content">
          <Fade direction="left" cascade>
            <div className="why-choose-us-item">
              <FontAwesomeIcon icon={faHandshake} className="why-choose-us-icon" color="#007bff" />
              <h3>Stratégies Marketing Innovantes</h3>
              <p>Rejoignez une équipe collaborative axée sur des solutions de marketing digital innovantes et créatives. Nous favorisons la créativité et offrons une plateforme pour que vos idées façonnent l'avenir.</p>
            </div>
          </Fade>
          <Zoom>
            <div className="why-choose-us-item">
              <FontAwesomeIcon icon={faSeedling} className="why-choose-us-icon" color="#28a745" />
              <h3>Développement Professionnel</h3>
              <p>Investir dans votre croissance avec des opportunités d'apprentissage continu et de développement de carrière. Notre environnement de soutien vous assure d'avoir les ressources nécessaires pour exceller.</p>
            </div>
          </Zoom>
          <Fade direction="right" cascade>
            <div className="why-choose-us-item">
              <FontAwesomeIcon icon={faChartLine} className="why-choose-us-icon" color="#ffc107"/>
              <h3>Approches de Pointe</h3>
              <p>Restez en avance avec nos dernières stratégies et solutions innovantes. Nous exploitons des outils et des technologies avancés pour offrir des résultats exceptionnels.</p>
            </div>
          </Fade>
        </div>
      </section>
      
      <section className="experience-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Vivez l'expérience TrendTide</h2>
        <p>Commencez votre voyage avec nous aujourd'hui. Aucun engagement, aucun risque.</p>
        <div className="experience-buttons">
          <Link to="/services/fr">
            <button className="start-button">
              Commencer
            </button>
          </Link>
          <Link to="/contact/fr">
            <button className="contact-us-button">
              Contactez-nous
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUsFR;
