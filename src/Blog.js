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
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const categories = [
  {
    title: "Digital Marketing Strategies",
    description: "Explore various strategies to boost your digital marketing efforts...",
    posts: [
      { title: "Exploring Digital Marketing Strategies", image: post1, description: "Embark on a journey through the dynamic world of digital marketing as we explore the latest trends shaping...", fullDescription: "Embark on a journey through the dynamic world of digital marketing as we explore the latest trends shaping the industry." },
      { title: "Digital Marketing Trends for 2024 and Beyond", image: post2, description: "Dive into the art of digital storytelling, where every post conveys a compelling message and captures the...", fullDescription: "Dive into the art of digital storytelling, where every post conveys a compelling message and captures the audience's attention effectively." },
      { title: "Enhancing User Engagement in Digital Marketing", image: post3, description: "In a world driven by online presence, uncover the strategies and principles that make digital marketing not just...", fullDescription: "In a world driven by online presence, uncover the strategies and principles that make digital marketing not just effective but impactful." }
    ]
  },
  {
    title: "Web Development",
    description: "Learn about the latest trends and best practices in web development...",
    posts: [
      { title: "The Evolution of Web Development", image: post4, description: "Discover how web development has transformed over the years...", fullDescription: "Discover how web development has transformed over the years and what the future holds." },
      { title: "Building Accessible and User-Friendly Websites", image: post5, description: "Learn how to make your websites accessible to all users...", fullDescription: "Learn how to make your websites accessible to all users, including those with disabilities." },
      { title: "Securing Your Web Applications Against Threats", image: post6, description: "Understand the importance of web security and how to protect...", fullDescription: "Understand the importance of web security and how to protect your applications from threats." }
    ]
  },
  {
    title: "Inclusive and Secure Design",
    description: "Understand the importance of inclusive design and cybersecurity...",
    posts: [
      { title: "Building Accessible and Secure Websites", image: post7, description: "Creating accessible websites is crucial in today's world. Ensuring that your site is usable by everyone, including those with disabilities, and protecting user...", fullDescription: "Creating accessible websites is crucial in today's world. Ensuring that your site is usable by everyone, including those with disabilities, and protecting user data with strong security measures." },
      { title: "Inclusive Design for Diverse and Global User Bases", image: post8, description: "Explore the significance of inclusive design. From accessibility features to user-friendly interfaces, learn how inclusive design can ensure a positive experience...", fullDescription: "Explore the significance of inclusive design. From accessibility features to user-friendly interfaces, learn how inclusive design can ensure a positive experience for all users, regardless of their abilities." },
      { title: "Ensuring Cyber Security in the Digital Age", image: post9, description: "In a digital era, security is crucial. Explore the strategies for securing digital assets and user data. From encryption to cybersecurity measures, learn how to protect...", fullDescription: "In a digital era, security is crucial. Explore the strategies for securing digital assets and user data. From encryption to cybersecurity measures, learn how to protect your digital presence from threats." }
    ]
  }
];

function Blog() {
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
      <Navbar />
      <header className="blog-header" role="banner">
        <div className="header-overlay">
          <div className="header-content">
            <h1 className="blog-title" style={{ fontSize: '3rem' }}>Blog</h1>
            <p style={{ fontSize: '1.2rem', color: '#333' }}>Stay updated with the latest insights and trends in digital marketing</p>
          </div>
        </div>
      </header>
      
      <section className="blog-cards" aria-label="Blog Categories">
        <div className="card" onClick={() => scrollToSection('section-digital-marketing-strategies')} aria-label="Digital Marketing Strategies">
          <div className="card-header">
            <FontAwesomeIcon icon={faLightbulb} size="2x" color="#007bff" />
            <h3>Digital Marketing</h3>
          </div>
          <p>Explore the latest strategies and trends in digital marketing. Learn how to effectively engage your audience and boost your online presence...</p>
          <button className="card-button">Learn More</button>
        </div>
        <div className="card" onClick={() => scrollToSection('section-web-development')} aria-label="Web Development">
          <div className="card-header">
            <FontAwesomeIcon icon={faCode} size="2x" color="#28a745" />
            <h3>Web Development</h3>
          </div>
          <p>Learn about the latest trends and best practices in web development. Discover how to build responsive and user-friendly websites...</p>
          <button className="card-button">Learn More</button>
        </div>
        <div className="card" onClick={() => scrollToSection('section-inclusive-and-secure-design')} aria-label="Inclusive and Secure Design">
          <div className="card-header">
            <FontAwesomeIcon icon={faShieldAlt} size="2x" color="#ffc107" />
            <h3>Inclusive Design</h3>
          </div>
          <p>Understand the principles of inclusive design and cybersecurity. Ensure your online presence is safe and accessible to all users...</p>
          <button className="card-button">Learn More</button>
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
                        {isExpanded ? 'Read Less' : 'Read More'}
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
          <h2 id="help-heading">Need Help with Digital Marketing?</h2>
          <p className="help-description">Boost your online presence with our expert digital marketing strategies.</p>
          <Link to="/contact">
            <button className="help-button">Reach Out</button>
          </Link>
        </div>
      </aside>

      <Footer />
    </div>
  );
}

export default Blog;
