import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson2.css';

function IntroLesson2() {
  const [showTips, setShowTips] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Welcome to Lesson 2: Importance of Cybersecurity</h1>

      {/* Explanation Section */}
      <section className="lesson-section">
        <p className="lesson-text">
          Cyber threats affect everyone—individuals, businesses, and governments. Attacks can lead to financial loss,
          reputational damage, and even compromise national security. Data breaches can expose sensitive personal and corporate information,
          while ransomware attacks can cripple critical infrastructure. Understanding and mitigating these risks is essential to preserve privacy,
          economic stability, and public trust.
        </p>
      </section>

      {/* Fun Facts Section */}
      <section className="lesson-section">
        <h2>Examples of Impacts</h2>
        <div className="fun-facts">
          <div className="fact-card">
            <p>📧 <strong>Phishing Scams:</strong> Stealing personal data and credentials.</p>
          </div>
          <div className="fact-card">
            <p>💸 <strong>Ransomware:</strong> Crippling healthcare and municipal services.</p>
          </div>
          <div className="fact-card">
            <p>🌐 <strong>Data Breaches:</strong> Exposing sensitive government and corporate data.</p>
          </div>
          <div className="fact-card">
            <p>🔓 <strong>Unauthorized Access:</strong> Leading to identity theft and fraud.</p>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="lesson-section">
        <h2>Case Studies: Major Cyber Incidents</h2>
        <button className={`toggle-button ${showTips ? "active" : ""}`} onClick={() => setShowTips(!showTips)}>
          {showTips ? 'Hide Examples' : 'Show Examples'}
        </button>
        <div className={`tips-container ${showTips ? "visible" : "hidden"}`}>
          <div className="tip-card">
            <h3>Equifax Data Breach (2017)</h3>
            <p>The breach exposed personal information for over 147 million individuals.</p>
          </div>
          <div className="tip-card">
            <h3>WannaCry Ransomware (2017)</h3>
            <p>A global ransomware attack that disrupted healthcare, transport, and more.</p>
          </div>
          <div className="tip-card">
            <h3>SolarWinds Attack (2020)</h3>
            <p>A sophisticated supply-chain attack compromising government agencies and private companies.</p>
          </div>
        </div>
      </section>

      {/* Door Interaction */}
      <section className="lesson-section door-section">
        <h2>Step into the Next Lesson</h2>
        <div className="door-container" onClick={() => navigate('/cybersecurity-intro-L2')}>
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

export default IntroLesson2;
