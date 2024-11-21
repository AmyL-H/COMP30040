import React, { useState } from 'react';
import Quiz from '../components/Quiz';
import './LessonPages.css';

function LessonPages() {
  const [showTips, setShowTips] = useState(false);
  const toggleTips = () => setShowTips(!showTips);

  return (
    <div className="lesson-page">
      <h1 className="title">Welcome to Cybersecurity 101</h1>
      <section className="lesson-section">
        <h2>What is Cybersecurity?</h2>
        <p>
          Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These 
          attacks aim to access, change, or destroy sensitive information, extort money, or disrupt operations.
        </p>
        <button className="toggle-button" onClick={toggleTips}>
          {showTips ? 'Hide Tips' : 'Show Tips'}
        </button>
        {showTips && (
          <div className="tips">
            <h3>Quick Tips:</h3>
            <ul>
              <li>Think before clicking on unknown links.</li>
              <li>Keep software updated to patch vulnerabilities.</li>
              <li>Use unique, strong passwords for each account.</li>
            </ul>
          </div>
        )}
      </section>

      <section className="lesson-section">
        <h2>Common Cyber Threats</h2>
        <div className="interactive-box">
          <p>Hover over a threat to learn more:</p>
          <div className="threat-grid">
            <div className="threat-card">
              <span className="tooltip">Phishing: Deceptive emails to steal data.</span>
              🐟 Phishing
            </div>
            <div className="threat-card">
              <span className="tooltip">Ransomware: Encrypts data for ransom.</span>
              💸 Ransomware
            </div>
            <div className="threat-card">
              <span className="tooltip">Malware: Malicious software harming systems.</span>
              🛡️ Malware
            </div>
            <div className="threat-card">
              <span className="tooltip">DoS: Overloading systems to disrupt service.</span>
              🌐 DoS Attack
            </div>
          </div>
        </div>
      </section>

      <section className="lesson-section">
        <h2>Best Practices</h2>
        <ol className="animated-list">
          <li>Use multi-factor authentication to secure accounts.</li>
          <li>Enable automatic updates for your software.</li>
          <li>Avoid connecting to public Wi-Fi without a VPN.</li>
          <li>Perform regular backups of important data.</li>
        </ol>
      </section>

      <section className="lesson-section">
        <h2>Enter the World of Cybersecurity</h2>
        <div className="door-container">
          <img
            src="/images/door.png"
            alt="Door to Cybersecurity"
            className="door-image"
            onClick={() => window.location.href = '/cybersecurity-intro'}
          />
          <br/>
          <p>Click on the door to begin your journey.</p>
        </div>
      </section>

      <h2>Quiz</h2>
      <Quiz
        question="What is cybersecurity?"
        options={['Protecting data from threats', 'Creating viruses', 'Programming']}
        correctAnswer="Protecting data from threats"
      />
      <Quiz
        question="What is the purpose of cybersecurity?"
        options={['To secure digital assets', 'To sell personal data', 'To encourage hacking']}
        correctAnswer="To secure digital assets"
      />
    </div>
  );
}

export default LessonPages;
