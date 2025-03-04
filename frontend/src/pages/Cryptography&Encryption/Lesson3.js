import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson3.css';

function CryptoLesson3() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 3: Applications of Cryptography</h1>
      
      {/* Real-World Applications */}
      <section className="lesson-section">
        <h2>Real-World Applications</h2>
        <p className="lesson-text">
          Cryptography secures many aspects of daily life—from SSL/TLS protecting web communications and digital signatures authenticating transactions,
          to blockchain ensuring data integrity.
        </p>
      </section>

      {/* Threats to Encrypted Data */}
      <section className="lesson-section">
        <h2>Threats to Encrypted Data</h2>
        <p className="lesson-text">
          Even robust encryption faces challenges such as man-in-the-middle attacks and vulnerabilities in outdated algorithms.
          Recognizing these risks is key to designing more secure systems.
        </p>
      </section>

      {/* Interactive Checklist */}
      <section className="lesson-section">
        <h2>Interactive Checklist</h2>
        <p className="lesson-text">
          [Checklist Activity Placeholder: Mark off the cryptographic applications as you review them.]
        </p>
      </section>

      {/* Hands-On Lab */}
      <section className="lesson-section">
        <h2>Hands-On Lab</h2>
        <p className="lesson-text">
          [Simulation Placeholder: Experiment with a simple encryption/decryption lab to see cryptography in action.]
        </p>
      </section>
    </div>
  );
}

export default CryptoLesson3;
