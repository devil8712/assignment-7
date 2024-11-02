// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Skill Up - Your Internship & Skill-Building Hub</h1>
        <p>Empowering students to discover, learn, and connect with career-boosting opportunities.</p>
        <Link to="/signup">
          <button className="cta-button">Get Started</button>
        </Link>
      </section>

      {/* Feature Section */}
      <section className="feature-section">
        <h2>Platform Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>AI-Powered Matching</h3>
            <p>Our AI-driven algorithm matches you with internships based on your skills, interests, and goals, ensuring the right fit every time.</p>
          </div>
          <div className="feature-card">
            <h3>Skill Assessments</h3>
            <p>Take quick assessments to measure your strengths and identify areas for growth, preparing you for the demands of today’s job market.</p>
          </div>
          <div className="feature-card">
            <h3>Personalized Learning</h3>
            <p>Gain access to curated resources that align with your career aspirations, from beginner to advanced levels.</p>
          </div>
          <div className="feature-card">
            <h3>Verified Internships</h3>
            <p>All internships are pre-screened and verified to provide a safe and valuable experience for our users.</p>
          </div>
        </div>
      </section>

      {/* Internship Categories Section */}
      <section className="categories-section">
        <h2>Browse Internship Categories</h2>
        <p>Explore various fields to find the perfect match for your interests and goals.</p>
        <div className="category-buttons">
          <Link to="/internships?category=technology">
            <button className="category-button">Technology</button>
          </Link>
          <Link to="/internships?category=marketing">
            <button className="category-button">Marketing</button>
          </Link>
          <Link to="/internships?category=design">
            <button className="category-button">Design</button>
          </Link>
          <Link to="/internships?category=finance">
            <button className="category-button">Finance</button>
          </Link>
          <Link to="/internships?category=healthcare">
            <button className="category-button">Healthcare</button>
          </Link>
          <Link to="/internships?category=education">
            <button className="category-button">Education</button>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <blockquote>
            "This platform helped me land an internship in my dream field. The AI matching is spot-on!" — Sarah, Marketing Intern
          </blockquote>
          <blockquote>
            "The skill assessments and resources helped me prepare and stand out in interviews." — John, Software Developer Intern
          </blockquote>
          <blockquote>
            "Skill Up provided me with incredible internship opportunities that helped shape my career." — Priya, Graphic Design Intern
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Launch Your Career?</h2>
        <p>Join Skill Up today and access internships and skill-building resources tailored to your goals.</p>
        <Link to="/signup">
          <button className="cta-button">Sign Up Today</button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
