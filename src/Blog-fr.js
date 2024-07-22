import { faCode, faLightbulb, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import post1 from './assets/post1.jpg';
import post2 from './assets/post2.jpg';
import post3 from './assets/post3.jpg';
import post4 from './assets/post4.jpg';
import post5 from './assets/post5.jpg';
import post6 from './assets/post6.jpg';
import post7 from './assets/post7.jpg';
import post8 from './assets/post8.jpg';
import post9 from './assets/post9.jpg';
import './Blog.css';
import Footer from './components/Footer-fr';
import NavbarFR from './components/Navbar-fr';

const categories = [
  {
    title: "Stratégies de Marketing Digital",
    description: "Explorez diverses stratégies pour améliorer vos efforts de marketing digital...",
    posts: [
      { title: "Explorer les Stratégies de Marketing Digital", image: post1, description: "Embarquez dans le monde dynamique du marketing digital alors que nous explorons les dernières tendances qui façonnent...", fullDescription: "Embarquez dans le monde dynamique du marketing digital alors que nous explorons les dernières tendances qui façonnent l'industrie." },
      { title: "Les Tendances du Marketing Digital pour 2024 et au-delà", image: post2, description: "Plongez dans l'art du storytelling digital, où chaque publication transmet un message convaincant et capte...", fullDescription: "Plongez dans l'art du storytelling digital, où chaque publication transmet un message convaincant et capte efficacement l'attention du public." },
      { title: "Améliorer l'Engagement dans le Marketing Digital", image: post3, description: "Dans un monde dominé par la présence en ligne, découvrez les stratégies et principes qui rendent le marketing digital...", fullDescription: "Dans un monde dominé par la présence en ligne, découvrez les stratégies et principes qui rendent le marketing digital impactant." }
    ]
  },
  {
    title: "Développement Web",
    description: "Apprenez les dernières tendances et meilleures pratiques en développement web...",
    posts: [
      { title: "L'Évolution du Développement Web", image: post4, description: "Découvrez comment le développement web a évolué au fil des ans...", fullDescription: "Découvrez comment le développement web a évolué au fil des ans et ce que l'avenir nous réserve." },
      { title: "Construire des Sites Web Accessibles et Conviviaux", image: post5, description: "Apprenez à rendre vos sites web accessibles à tous les utilisateurs...", fullDescription: "Apprenez à rendre vos sites web accessibles à tous les utilisateurs, y compris les handicapées." },
      { title: "Sécuriser Vos Applications Web contre les Menaces", image: post6, description: "Comprenez l'importance de la sécurité web et comment...", fullDescription: "Comprenez l'importance de la sécurité web et comment protéger vos applications." }
    ]
  },
  {
    title: "Design Inclusif et Sécurisé",
    description: "Comprenez l'importance du design inclusif et de la cybersécurité...",
    posts: [
      { title: "Construire des Sites Web Accessibles et Sécurisés", image: post7, description: "Créer des sites web accessibles est crucial de nos jours. Assurez-vous que votre site soit utilisable par tous et protégez les données utilisateur avec des mesures...", fullDescription: "Créer des sites web accessibles est crucial de nos jours. Assurez-vous que votre site soit utilisable par tous et protégez les données utilisateur avec des mesures de sécurité solides." },
      { title: "Design Inclusif pour des Bases Utilisateurs Diversifiées", image: post8, description: "Explorez l'importance du design inclusif. Des fonctionnalités d'accessibilité aux interfaces conviviales, apprenez comment le design inclusif peut...", fullDescription: "Explorez l'importance du design inclusif. Des fonctionnalités d'accessibilité aux interfaces conviviales, apprenez comment le design inclusif peut assurer une expérience positive." },
      { title: "Assurer la Cybersécurité à l'Ère Digitale", image: post9, description: "À l'ère du numérique, la sécurité est cruciale. Explorez les stratégies pour sécuriser les actifs numériques et les données utilisateur de l'encryption...", fullDescription: "À l'ère du numérique, la sécurité est cruciale. Explorez les stratégies pour sécuriser les actifs numériques et les données utilisateur de l'encryption aux mesures de cybersécurité." }
    ]
  }
];

function BlogFR() {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleReadMore = (categoryIndex, postIndex) => {
    const key = `${categoryIndex}-${postIndex}`;
    setExpandedPosts(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="blog-page">
      <NavbarFR />
      <header className="blog-header" role="banner">
        <div className="header-overlay">
          <div className="header-content">
            <h1 className="blog-title" style={{ fontSize: '3rem' }}>Blog</h1>
            <p style={{ fontSize: '1.2rem', color: '#333' }}>Restez à jour avec les dernières informations et tendances en marketing digital</p>
          </div>
        </div>
      </header>
      
      <section className="blog-cards" aria-label="Catégories du Blog">
        <div className="card" onClick={() => scrollToSection('section-stratégies-de-marketing-digital')} aria-label="Stratégies de Marketing Digital">
          <div className="card-header">
            <FontAwesomeIcon icon={faLightbulb} size="2x" color="#007bff" />
            <h3>Marketing Digital</h3>
          </div>
          <p>Explorez les dernières stratégies et tendances en marketing digital. Apprenez à engager efficacement votre audience et à améliorer votre présence...</p>
          <button className="card-button">En savoir plus</button>
        </div>
        <div className="card" onClick={() => scrollToSection('section-développement-web')} aria-label="Développement Web">
          <div className="card-header">
            <FontAwesomeIcon icon={faCode} size="2x" color="#28a745" />
            <h3>Développement Web</h3>
          </div>
          <p>Apprenez les dernières tendances et meilleures pratiques en développement web. Découvrez comment créer des sites web réactifs...</p>
          <button className="card-button">En savoir plus</button>
        </div>
        <div className="card" onClick={() => scrollToSection('section-design-inclusif-et-sécurisé')} aria-label="Design Inclusif et Sécurisé">
          <div className="card-header">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" color="#ffc107" />
            <h3>Design Inclusif</h3>
          </div>
          <p>Comprenez les principes du design inclusif et de la cybersécurité. Assurez-vous que votre présence en ligne soit sécurisée à tous les utilisateurs...</p>
          <button className="card-button">En savoir plus</button>
        </div>
      </section>

      <main className="blog-content">
        {categories.map((category, categoryIndex) => (
          <section key={categoryIndex} id={`section-${category.title.toLowerCase().replace(/\s+/g, '-')}`} className="blog-category" aria-labelledby={`category-title-${categoryIndex}`}>
            <div className="paragraph-separator"></div>
            <h2 id={`category-title-${categoryIndex}`} className="category-title">{category.title}</h2>
            <p className="category-description">{category.description}</p>
            <div className="blog-posts">
              {category.posts.map((post, postIndex) => {
                const key = `${categoryIndex}-${postIndex}`;
                const isExpanded = expandedPosts[key];
                return (
                  <article key={postIndex} className="blog-post">
                    <div className="post-image-wrapper">
                      <img src={post.image} alt={post.title} className="post-image" />
                    </div>
                    <div className="post-content">
                      <h3>{post.title}</h3>
                      <p>{isExpanded ? post.fullDescription : post.description}</p>
                      <button className="read-more-button" onClick={() => toggleReadMore(categoryIndex, postIndex)}>
                        {isExpanded ? 'Lire moins' : 'Lire plus'}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      <aside className="help-section" aria-labelledby="help-heading">
        <div className="help-header">
          <h2 id="help-heading">Besoin d'aide avec le marketing digital ?</h2>
          <p className="help-description">Améliorez votre présence en ligne avec nos stratégies expertes de marketing digital.</p>
          <Link to="/contact/fr">
            <button className="help-button">Contactez-nous</button>
          </Link>
        </div>
      </aside>

      <Footer />
    </div>
  );
}

export default BlogFR;
