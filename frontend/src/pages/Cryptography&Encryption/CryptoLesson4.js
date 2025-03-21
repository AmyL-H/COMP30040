// src/pages/Cryptography&Encryption/CryptoLesson4.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptoLesson4.css';

function CryptoLesson4() {
  const navigate = useNavigate();
  const [showActivity, setShowActivity] = useState(false);
  const [showReflection, setShowReflection] = useState(false);

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 4: Public Key Infrastructure (PKI)</h1>

      {/* Intro */}
      <div className="lesson-section">
        <p className="lesson-text">
          Public Key Infrastructure (PKI) is the foundation of trust in secure digital communication. It ensures that online identities can be verified, messages can be encrypted safely,
          and that data remains confidential and unaltered in transit.
        </p>
        <p className="lesson-text">
          PKI supports services like SSL/TLS (used by websites), secure emails, software signing, and digital authentication systems. Without PKI, verifying who you’re communicating with online would be virtually impossible.
        </p>
      </div>

      {/* Step-by-Step Explanation */}
      <div className="lesson-section">
        <h2>🔍 How PKI Works: Step-by-Step</h2>
        <p className="lesson-text">
          Let’s break down the main components and how they interact:
        </p>
        <ul className="styled-list">
          <li><strong>Key Pair:</strong> A public and private key uniquely linked. The public key is shared; the private key is kept secret.</li>
          <li><strong>Certificate Authority (CA):</strong> A trusted third-party organization that issues and digitally signs certificates to verify identity.</li>
          <li><strong>Digital Certificate:</strong> A file that confirms ownership of a public key and binds it to an entity (like a company or user).</li>
          <li><strong>Chain of Trust:</strong> The hierarchical relationship between root, intermediate, and end-user certificates that builds confidence in the certificate’s legitimacy.</li>
        </ul>
        <p className="lesson-text">
          🔐 When you visit a secure site (https), your browser checks the website’s certificate against a trusted CA. If valid, a secure session is established.
        </p>
      </div>

      {/* Visual Diagram */}
      <div className="lesson-section diagram-section">
        <h2>🧩 Interactive Diagram: PKI in Action</h2>
        <p className="lesson-text">Visualize how each part of the PKI works together in a secure web session:</p>
        <div className="diagram-flow">
          <div className="diagram-box">User's Browser</div>
          <div className="diagram-arrow">🔍 Checks Certificate</div>
          <div className="diagram-box">Website Certificate</div>
          <div className="diagram-arrow">🔗 Signed by</div>
          <div className="diagram-box">Certificate Authority (CA)</div>
          <div className="diagram-arrow">🔐 Validates</div>
          <div className="diagram-box">Public Key ➝ Secure Session</div>
        </div>
        <p className="diagram-note">✅ Trust is built by verifying the certificate against a known, trusted authority.</p>
      </div>

      {/* Drag-and-Drop Explanation */}
      <div className="lesson-section">
        <h2>🎯 Drag & Match: PKI Concepts</h2>
        <p className="lesson-text">Try to match each PKI component with its function. Click below to reveal the answers after trying yourself!</p>
        <button className="toggle-button" onClick={() => setShowActivity(!showActivity)}>
          {showActivity ? "Hide Answers" : "Show Answers"}
        </button>
        {showActivity && (
          <div className="matching-activity">
            <ul className="matching-list">
              <li><strong>Public Key:</strong> Shared openly to encrypt data.</li>
              <li><strong>Private Key:</strong> Kept secret by owner; decrypts data.</li>
              <li><strong>Certificate Authority:</strong> Issues and signs digital certificates.</li>
              <li><strong>Digital Certificate:</strong> Contains the public key and identity info, signed by a CA.</li>
              <li><strong>SSL/TLS:</strong> Uses certificates to establish secure sessions between clients and servers.</li>
            </ul>
          </div>
        )}
      </div>

      {/* Reflection */}
      <div className="lesson-section">
        <h2>💬 Reflection Questions</h2>
        <button className="toggle-button" onClick={() => setShowReflection(!showReflection)}>
          {showReflection ? "Hide Prompts" : "Show Reflection Prompts"}
        </button>
        {showReflection && (
          <ul className="styled-list">
            <li>Why is the trust in a Certificate Authority essential for PKI to function?</li>
            <li>What happens if a digital certificate is expired or revoked?</li>
            <li>Why can’t we just use public keys without digital certificates?</li>
          </ul>
        )}
      </div>

      {/* CTA */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cryptoquiz4')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default CryptoLesson4;
