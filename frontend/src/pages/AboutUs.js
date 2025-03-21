import React from 'react';
import './AboutUs.css';
import { useNavigate } from 'react-router-dom';

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1 className="about-title">🌐 About CyberIQ</h1>
      <p className="about-subtitle">
        CyberIQ is your roadmap to mastering cybersecurity—built for beginners, future professionals, and lifelong learners.
      </p>

      <div className="about-section">
        <h2>🔒 Our Mission</h2>
        <p>
          Our mission is to make cybersecurity education <strong>accessible</strong>, <strong>interactive</strong>, and <strong>practical</strong> for everyone. 
          Whether you're just starting out or brushing up on key skills, we give you the tools to understand, defend, and grow.
        </p>
      </div>

      <div className="about-section">
        <h2>🎯 Why We Built This</h2>
        <p>
          Cyber threats are growing faster than ever—and so is the demand for skilled defenders. But too many learning platforms are either too complex, too expensive, or just plain boring.
          <br /><br />
          We built CyberIQ to be different: <strong>free, immersive, and real-world focused</strong>. Learn at your own pace, track your XP, and build confidence through quizzes, diagrams, and simulations.
        </p>
      </div>

      <div className="about-section">
        <h2>🧠 What You'll Learn</h2>
        <ul>
          <li>🔐 Core cybersecurity principles</li>
          <li>🧮 Cryptography & encryption essentials</li>
          <li>🌐 Network security tools and techniques</li>
          <li>🕵️ Ethical hacking & penetration testing</li>
          <li>⚔️ How to defend against real-world attacks</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>💡 Features You'll Love</h2>
        <ul>
          <li>✅ Interactive lessons with visuals & diagrams</li>
          <li>✅ XP system and streak tracking to motivate progress</li>
          <li>✅ Hands-on coding and security labs (coming soon!)</li>
          <li>✅ Community discussion board & real-time feedback</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>📢 Want to Contribute?</h2>
        <p>
          Have a lesson idea, tool recommendation, or bug to report? We’d love to hear from you. 
          Join the discussion in our <a href="/community">Community!</a>
        </p>
      </div>

      <div className="navigation-button">
        <button onClick={() => navigate('/')}>⬅ Back to Home</button>
      </div>
    </div>
  );
}

export default AboutUs;
