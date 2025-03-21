import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptoLesson5.css';

function CryptoLesson5() {
  const navigate = useNavigate();
  const [showEnigma, setShowEnigma] = useState(false);
  const [showDefense, setShowDefense] = useState(false);
  const [showEthics, setShowEthics] = useState(false);

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 5: Breaking and Defending Cryptographic Systems</h1>

      {/* Overview */}
      <div className="lesson-section">
        <p className="lesson-text">
          Even robust encryption isn't invulnerable. Attackers continue to devise new methods to break systems, ranging from brute-force password cracking to exploiting physical signals in side-channel attacks.
          This lesson will teach you how cryptosystems are attacked—and more importantly—how we defend them.
        </p>
      </div>

      {/* Common Attack Types */}
      <div className="lesson-section">
        <h2>🛠️ Common Cryptographic Attacks</h2>
        <ul className="styled-list">
          <li><strong>Brute Force:</strong> Systematically tries every possible key or password. Defended by increasing key length and complexity.</li>
          <li><strong>Side-Channel Attacks:</strong> Exploit indirect clues (like timing or power usage) to extract secrets. Defended with noise injection or shielding.</li>
          <li><strong>Quantum Threats:</strong> Future quantum computers may break current encryption like RSA. Post-quantum cryptography is being developed to counter this.</li>
        </ul>
        <p className="lesson-text">🔍 Tip: Security is not just about having strong algorithms—it's about how and where they're implemented.</p>
      </div>

      {/* Case Studies */}
      <div className="lesson-section">
        <h2>🕵️‍♂️ Famous Cryptographic Breaches</h2>
        <button className="toggle-button" onClick={() => setShowEnigma(!showEnigma)}>
          {showEnigma ? "Hide Case Studies" : "Explore Case Studies"}
        </button>
        {showEnigma && (
          <div className="case-study">
            <p><strong>⚙️ Enigma Machine (WWII):</strong> The German Enigma cipher was thought unbreakable—until Alan Turing and others used logic and computation to crack it. This shortened the war and revolutionized computing.</p>
            <p><strong>🧮 SHA-1 Collision:</strong> In 2017, researchers demonstrated a practical collision in the SHA-1 hash function. This means two different inputs produced the same hash—breaking a core cryptographic principle. It led to a shift toward SHA-2 and SHA-3.</p>
            <p><em>Problem-Based Reflection:</em> How did flawed assumptions or outdated algorithms lead to these weaknesses?</p>
          </div>
        )}
      </div>

      {/* Defense Challenge */}
      <div className="lesson-section">
        <h2>🧪 Encryption Defense Challenge</h2>
        <button className="toggle-button" onClick={() => setShowDefense(!showDefense)}>
          {showDefense ? "Hide Challenge" : "Show Challenge" }
        </button>
        {showDefense && (
          <div className="challenge-container">
            <p>Try breaking a weak Caesar cipher below:</p>
            <pre className="code-snippet">
{`// Caesar cipher crack simulation
const bruteForce = (cipher) => {
  for (let shift = 1; shift < 26; shift++) {
    let result = cipher
      .split('')
      .map(c => String.fromCharCode(c.charCodeAt(0) - shift))
      .join('');
    console.log(\`Shift \${shift}: \${result}\`);
  }
}
bruteForce("khoor"); // Try it in your browser console!`}
            </pre>
            <p>Then, think: What would make this algorithm more secure?</p>
          </div>
        )}
      </div>

      {/* Ethical Reflection */}
      <div className="lesson-section">
        <h2>🧠 Ethics & Responsibilities</h2>
        <button className="toggle-button" onClick={() => setShowEthics(!showEthics)}>
          {showEthics ? "Hide Reflection Questions" : "Show Reflection Questions"}
        </button>
        {showEthics && (
          <ul className="styled-list">
            <li>🧩 What responsibilities do ethical hackers carry when reporting a vulnerability?</li>
            <li>⚖️ Should cryptography be regulated or open for public review?</li>
            <li>🕵️ What risks come with publishing research on potential encryption-breaking techniques?</li>
          </ul>
        )}
      </div>

      {/* Navigation */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cryptoquiz5')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default CryptoLesson5;
