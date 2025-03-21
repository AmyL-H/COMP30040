import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptoLesson2.css';

function CryptoLesson2() {
  const navigate = useNavigate();
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 2: Symmetric vs. Asymmetric Encryption</h1>

      {/* Introduction */}
      <div className="lesson-section">
        <p className="lesson-text">
          Encryption is the process of converting plaintext into ciphertext using an algorithm and a key.
          There are two primary types of encryption: <strong>symmetric</strong> and <strong>asymmetric</strong>.
        </p>
        <p className="lesson-text">
          In <strong>symmetric encryption</strong>, the same key is used for both encrypting and decrypting data. It's fast and efficient—ideal for large datasets.
          <br />
          In <strong>asymmetric encryption</strong>, a public key encrypts and a private key decrypts. This allows for secure communication without pre-shared secrets.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="lesson-section">
        <h2>🆚 Side-by-Side Comparison</h2>
        <p className="lesson-text">Compare their key differences:</p>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Symmetric (e.g., AES)</th>
              <th>Asymmetric (e.g., RSA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Key Usage</td>
              <td>Same key for encryption and decryption</td>
              <td>Public key to encrypt, private key to decrypt</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>Fast, ideal for bulk data</td>
              <td>Slower, best for small data or key exchange</td>
            </tr>
            <tr>
              <td>Use Case</td>
              <td>File encryption, VPNs</td>
              <td>Email security, digital signatures</td>
            </tr>
          </tbody>
        </table>
      </div>


      <div className="lesson-section animated-diagram-section">
        <h2>Visual Encryption Workflow</h2>
        <p className="lesson-text">
          Explore the step-by-step flow of symmetric and asymmetric encryption. Use this to understand how secure data transmission happens.
        </p>

        <div className="diagram-card">
          <h3>🔐 Symmetric Encryption</h3>
          <div className="diagram-flow">
            <div className="diagram-box">Sender</div>
            <div className="diagram-arrow">🔑 Same Key</div>
            <div className="diagram-box">Encrypts Data</div>
            <div className="diagram-arrow">➡️</div>
            <div className="diagram-box">Ciphertext</div>
            <div className="diagram-arrow">➡️</div>
            <div className="diagram-box">Receiver</div>
            <div className="diagram-arrow">🔑 Same Key</div>
            <div className="diagram-box">Decrypts Data</div>
          </div>
          <p className="diagram-note">⚠️ Key must be shared securely beforehand.</p>
        </div>

        <div className="diagram-card">
          <h3>🔑 Asymmetric Encryption</h3>
          <div className="diagram-flow">
            <div className="diagram-box">Sender</div>
            <div className="diagram-arrow">🔓 Public Key</div>
            <div className="diagram-box">Encrypts Message</div>
            <div className="diagram-arrow">➡️</div>
            <div className="diagram-box">Ciphertext</div>
            <div className="diagram-arrow">➡️</div>
            <div className="diagram-box">Receiver</div>
            <div className="diagram-arrow">🔒 Private Key</div>
            <div className="diagram-box">Decrypts Message</div>
          </div>
          <p className="diagram-note">✅ No prior key exchange needed. Great for secure email & web traffic (HTTPS).</p>
        </div>
      </div>


      {/* Active Exploration Section */}
      <div className="lesson-section">
        <h2>🧠 Active Learning: Use Case Matching</h2>
        <p className="lesson-text">
          Think about these situations:
        </p>
        <ul className="styled-list">
          <li><strong>Scenario A:</strong> Encrypting hundreds of files for backup.</li>
          <li><strong>Scenario B:</strong> Sending a secure message to someone you've never met.</li>
        </ul>
        <p className="lesson-text">
          Which would you choose—symmetric or asymmetric encryption? Why?
        </p>
        <button className="toggle-button" onClick={() => setShowMoreInfo(!showMoreInfo)}>
          {showMoreInfo ? "Hide Explanation" : "Show Suggested Answer"}
        </button>
        {showMoreInfo && (
          <div className="tip-card">
            <p><strong>Scenario A:</strong> Use symmetric (AES) – it's fast and suitable for local bulk encryption.</p>
            <p><strong>Scenario B:</strong> Use asymmetric (RSA) – it solves the problem of secure key sharing.</p>
          </div>
        )}
      </div>

      {/* Retrieval & Reflection */}
      <div className="lesson-section">
        <h2>💡 Retrieval Practice</h2>
        <p className="lesson-text">
          Without scrolling up, try to answer:
        </p>
        <ul className="styled-list">
          <li>What's the key difference in how symmetric and asymmetric encryption use keys?</li>
          <li>Which encryption is better for bulk data? Why?</li>
          <li>How does asymmetric encryption support digital signatures?</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cryptoquiz2')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default CryptoLesson2;
