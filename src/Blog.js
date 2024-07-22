import React from 'react';
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
import reachout from './assets/reachout.jpg';
import './Blog.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Blog() {
  return (
    <div className="blog-page">
      <Navbar />
      <div className="blog-header">
        <div className="header-overlay">
          <div className="header-content">
            <h1 className="blog-title" style={{fontSize:'3rem'}}>Blog</h1>
            <p style={{ fontSize: '1.2rem', color: '#333' }}>Stay updated with the latest insights and trends in digital marketing</p>
          </div>
        </div>
      </div>
      <div className="blog-content">
        <div className="blog-posts">
          <div className="blog-post">
            <img src={post1} alt="Post 1" className="post-image" />
            <h2>Exploring Digital Marketing Strategies</h2>
            <p>Embark on a journey through the dynamic world of digital marketing as we explore the latest trends shaping the industry...</p>
          </div>
          <div className="blog-post">
            <img src={post2} alt="Post 2" className="post-image" />
            <h2>Digital Marketing Trends for 2024</h2>
            <p>Dive into the art of digital storytelling, where every post conveys a message...</p>
          </div>
          <div className="blog-post">
            <img src={post3} alt="Post 3" className="post-image" />
            <h2>Enhancing User Engagement in Digital Marketing</h2>
            <p>In a world driven by online presence, uncover the strategies and principles that make digital marketing not just effective but impactful...</p>
          </div>
          <div className="blog-post">
            <img src={post4} alt="Post 4" className="post-image" />
            <h2>Maximizing E-Commerce through Digital Design</h2>
            <p>Explore the fusion of design and e-commerce, delving into how user-centric design choices can drive conversions and enhance user experience...</p>
          </div>
          <div className="blog-post">
            <img src={post5} alt="Post 5" className="post-image" />
            <h2>Creating Responsive Websites Easily</h2>
            <p>In a world of diverse devices, responsive web design is essential. Learn why adaptability matters and how embracing this design approach can ensure a seamless user experience across all devices...</p>
          </div>
          <div className="blog-post">
            <img src={post6} alt="Post 6" className="post-image" />
            <h2>Demystifying UI and UX Design</h2>
            <p>Delve into the harmony between User Interface (UI) and User Experience (UX) design. Discover how these elements collaborate to create websites and applications that not only look great but also provide a seamless experience...</p>
          </div>
          <div className="blog-post">
            <img src={post7} alt="Post 7" className="post-image" />
            <h2>Inclusive Design for Diverse Users</h2>
            <p>Explore the significance of inclusive design. From accessibility features to user-friendly interfaces, learn how inclusive design can ensure a positive experience for all users, regardless of their abilities...</p>
          </div>
          <div className="blog-post">
            <img src={post8} alt="Post 8" className="post-image" />
            <h2>Web Development Lifecycle Explained</h2>
            <p>Gain insights into the stages of web development. From planning to deployment, understand the collaborative process involved in creating websites and applications...</p>
          </div>
          <div className="blog-post">
            <img src={post9} alt="Post 9" className="post-image" />
            <h2>Ensuring Cyber Security in the Digital Age</h2>
            <p>In a digital era, security is crucial. Explore the strategies for securing digital assets and user data. From encryption to cybersecurity measures, learn how to protect your digital presence from potential threats...</p>
          </div>
        </div>
        <button className="explore-button">Explore</button>
        <div className="help-section">
          <img src={reachout} alt="Need Help with Digital Marketing?" className="help-section-image" />
          <div className="overlay">
            <h2>Need Help with Digital Marketing?</h2>
            <Link to="/contact">
              <button className="reach-out-button">Reach Out</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;
