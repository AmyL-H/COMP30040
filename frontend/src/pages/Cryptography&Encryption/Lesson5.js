import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson5.css';

function CryptoLesson5() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 5: Breaking and Defending Cryptographic Systems</h1>
      
      {/* Cryptographic Attacks */}
      <section className="lesson-section">
        <h2>Common Cryptographic Attacks</h2>
        <p className="lesson-text">
          Discover how encryption can be challenged through brute force, side-channel attacks, and emerging quantum threats.
          Understanding these vulnerabilities is crucial for designing robust security systems.
        </p>
      </section>

      {/* Defending Systems */}
      <section className="lesson-section">
        <h2>Defending Cryptographic Systems</h2>
        <p className="lesson-text">
          Learn strategies to strengthen encryption: longer keys, hybrid methods, and regular updates are vital to secure data.
        </p>
      </section>

      {/* Case Study */}
      <section className="lesson-section">
        <h2>Case Study Approach</h2>
        <p className="lesson-text">
          Analyze historical breaches—like Enigma vulnerabilities or SHA-1 collisions—to understand the real-world impact of cryptographic failures.
        </p>
      </section>

      {/* Interactive Defence Challenge */}
      <section className="lesson-section">
        <h2>Interactive Defence Challenge</h2>
        <p className="lesson-text">
          [Guided Exercise Placeholder: Try breaking a weak encryption algorithm and learn effective strategies to defend against such attacks.]
        </p>
        <div className="challenge-container">
          <button onClick={() => alert("Challenge initiated! (This is a placeholder simulation.)")}>
            Start Challenge
          </button>
        </div>
      </section>
    </div>
  );
}

export default CryptoLesson5;
