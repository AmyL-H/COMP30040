import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson5.css';

function IntroLesson5() {
  const [showExamples, setShowExamples] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Welcome to Lesson 5: Future Trends in Cybersecurity</h1>

      {/* Explanation Section */}
      <section className="lesson-section">
        <h2>Emerging Threats</h2>
        <p className="lesson-text">
          As technology evolves, so do cyber threats. Future challenges include AI-driven attacks, quantum computing risks, and
          deepfake exploitation.
        </p>
        <button className={`toggle-button ${showExamples ? "active" : ""}`} onClick={() => setShowExamples(!showExamples)}>
          {showExamples ? 'Hide Examples' : 'Show Examples'}
        </button>
        <div className={`tips-container ${showExamples ? "visible" : "hidden"}`}>
          <div className="tip-card">
            <h3>AI in Cyber Threats</h3>
            <p>AI is making malware more sophisticated and harder to detect.</p>
          </div>
          <div className="tip-card">
            <h3>Quantum Computing Risks</h3>
            <p>Quantum computing has the potential to break current encryption standards.</p>
          </div>
          <div className="tip-card">
            <h3>Deepfake Exploitation</h3>
            <p>Deepfake technology is being used for misinformation, fraud, and identity theft.</p>
          </div>
        </div>
      </section>

      {/* Defense Strategies Section */}
      <section className="lesson-section">
        <h2>Innovative Defense Strategies</h2>
        <div className="fun-facts">
          <div className="fact-card">
            <p>🤖 <strong>AI in Defense:</strong> Predictive analytics helps detect and mitigate cyber threats before they occur.</p>
          </div>
          <div className="fact-card">
            <p>🔐 <strong>Post-Quantum Cryptography:</strong> Developing encryption that remains secure even in a quantum computing world.</p>
          </div>
          <div className="fact-card">
            <p>🛡️ <strong>Zero Trust Architecture:</strong> A security model that assumes breaches occur and verifies every access attempt.</p>
          </div>
        </div>
      </section>

      {/* Door Interaction */}
      <section className="lesson-section door-section">
        <h2>Step into the Next Lesson</h2>
        <div className="door-container" onClick={() => navigate('/cybersecurity-intro-L5')}>
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

export default IntroLesson5;
