import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson3.css';

function IntroLesson3() {
  const [showTips, setShowTips] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Welcome to Lesson 3: Common Threats and Vulnerabilities</h1>

      {/* Explanation Section */}
      <section className="lesson-section">
        <h2>Understanding Cyber Threats</h2>
        <p className="lesson-text">
          Cyber threats come in many forms—from malware and phishing scams to Denial-of-Service attacks. These threats often exploit vulnerabilities
          in software or user behavior. Recognizing these threats is the first step to protecting your systems.
        </p>
      </section>

      {/* Examples Section */}
      <section className="lesson-section">
        <h2>Examples of Cyber Threats</h2>
        <button className={`toggle-button ${showTips ? "active" : ""}`} onClick={() => setShowTips(!showTips)}>
          {showTips ? 'Hide Examples' : 'Show Examples'}
        </button>
        <div className={`tips-container ${showTips ? "visible" : "hidden"}`}>
          <div className="tip-card">
            <h3>Malware</h3>
            <p>Spreads through infected downloads and can damage or steal data.</p>
          </div>
          <div className="tip-card">
            <h3>Phishing</h3>
            <p>Tricks users into revealing sensitive information by imitating trusted sources.</p>
          </div>
          <div className="tip-card">
            <h3>Denial-of-Service (DoS) Attacks</h3>
            <p>Overwhelms servers to disrupt online services.</p>
          </div>
        </div>
      </section>

      {/* Door Interaction */}
      <section className="lesson-section door-section">
        <h2>Step into the Next Lesson</h2>
        <div className="door-container" onClick={() => navigate('/cybersecurity-intro-L3')}>
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

export default IntroLesson3;
