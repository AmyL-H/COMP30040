import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson4.css';

function IntroLesson4() {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Welcome to Lesson 4: Introduction to Security Frameworks</h1>

      {/* Explanation Section */}
      <section className="lesson-section">
        <h2>What are Security Frameworks?</h2>
        <p className="lesson-text">
          Security frameworks are structured approaches to managing cybersecurity risks. They provide organizations
          with best practices and standards to protect their assets.
        </p>
        <button className={`toggle-button ${showDetails ? "active" : ""}`} onClick={() => setShowDetails(!showDetails)}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        <div className={`tips-container ${showDetails ? "visible" : "hidden"}`}>
          <div className="tip-card">
            <h3>Enhances Organizational Resilience</h3>
            <p>Improves security posture by providing clear guidelines and best practices.</p>
          </div>
          <div className="tip-card">
            <h3>Helps in Regulatory Compliance</h3>
            <p>Ensures adherence to industry standards and legal requirements.</p>
          </div>
          <div className="tip-card">
            <h3>Promotes Proactive Cybersecurity Culture</h3>
            <p>Encourages organizations to stay ahead of emerging cyber threats.</p>
          </div>
        </div>
      </section>

      {/* Popular Frameworks Section */}
      <section className="lesson-section">
        <h2>Popular Security Frameworks</h2>
        <div className="fun-facts">
          <div className="fact-card">
            <p>📜 <strong>NIST Cybersecurity Framework:</strong> Focuses on identifying, protecting, detecting, responding, and recovering from cyber incidents.</p>
          </div>
          <div className="fact-card">
            <p>🌍 <strong>ISO/IEC 27001:</strong> An international standard for managing information security systems.</p>
          </div>
          <div className="fact-card">
            <p>🏛 <strong>COBIT:</strong> Framework for governance and management of enterprise IT.</p>
          </div>
        </div>
      </section>

      {/* Door Interaction */}
      <section className="lesson-section door-section">
        <h2>Step into the Next Lesson</h2>
        <div className="door-container" onClick={() => navigate('/cybersecurity-intro-L4')}>
          <img
            src="/images/door.png"
            alt="Door to Next Lesson"
            className="door-image"
          />
          <p className="door-text">Click the door to continue your cybersecurity journey!</p>
        </div>
      </section>
    </div>
  );
}

export default IntroLesson4;
