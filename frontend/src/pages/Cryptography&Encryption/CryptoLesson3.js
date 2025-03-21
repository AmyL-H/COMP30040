import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptoLesson3.css';

function CryptoLesson3() {
  const navigate = useNavigate();
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [showReflection, setShowReflection] = useState(false);

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 3: Applications of Cryptography</h1>

      {/* Introduction */}
      <div className="lesson-section">
        <p className="lesson-text">
          Cryptography is the invisible shield protecting the digital world. From safeguarding online payments to verifying the authenticity of emails and files,
          cryptographic techniques play a critical role in maintaining privacy, security, and trust across the internet.
        </p>
        <p className="lesson-text">
          By the end of this lesson, you'll understand where cryptography is used in real life, why it's essential, and how it's implemented in modern technology.
        </p>
      </div>

      {/* Real-World Applications */}
      <div className="lesson-section">
        <h2>🔍 Real-World Applications of Cryptography</h2>
        <ul className="crypto-app-list">
          <li><strong>SSL/TLS:</strong> Secures websites by encrypting communication between browsers and servers. Look for the 🔒 in your browser’s address bar!</li>
          <li><strong>VPNs (Virtual Private Networks):</strong> Encrypt your internet traffic to allow private browsing and remote access to secure networks.</li>
          <li><strong>Digital Signatures:</strong> Used in documents and software distribution to verify authenticity and prevent tampering.</li>
          <li><strong>Blockchain:</strong> Uses cryptographic hashing to ensure that transaction records are immutable and transparent.</li>
          <li><strong>Secure Messaging:</strong> Apps like WhatsApp and Signal use end-to-end encryption to protect your chats from prying eyes.</li>
          <li><strong>Multi-Factor Authentication (MFA):</strong> Combines password-based and token-based methods, using cryptographic principles to confirm user identity.</li>
        </ul>
        <p className="lesson-text"><em>🌟 Tip:</em> You encounter cryptography every time you log in securely, make an online purchase, or send a private message.</p>
      </div>

      {/* Interactive Flashcards */}
      <div className="lesson-section">
        <h2>🧠 Flashcard Challenge</h2>
        <p className="lesson-text">Try to recall what each application does before revealing the answers.</p>
        <button className="toggle-button" onClick={() => setShowFlashcards(!showFlashcards)}>
          {showFlashcards ? "Hide Flashcards" : "Show Flashcards"}
        </button>
        {showFlashcards && (
          <div className="flashcard-grid">
            <div className="flashcard">
              <p><strong>SSL/TLS</strong></p>
              <p className="answer">Encrypts web traffic; ensures data privacy in transit.</p>
            </div>
            <div className="flashcard">
              <p><strong>VPN</strong></p>
              <p className="answer">Creates secure, encrypted tunnels for online activity.</p>
            </div>
            <div className="flashcard">
              <p><strong>Digital Signatures</strong></p>
              <p className="answer">Verify authorship and prevent content tampering.</p>
            </div>
            <div className="flashcard">
              <p><strong>Blockchain</strong></p>
              <p className="answer">Creates tamper-proof digital ledgers via hashing.</p>
            </div>
          </div>
        )}
      </div>

      {/* Hands-On Practice */}
      <div className="lesson-section">
        <h2>🧪 Hands-On: JavaScript Encryption Demo</h2>
        <p className="lesson-text">
          Curious how encryption works? Try this simplified concept using browser console (F12):
        </p>
        <pre className="code-snippet">
          {`// Simulate a simple Caesar Cipher
function encrypt(text, shift) {
  return text
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + shift))
    .join('');
}
encrypt("hello", 3); // "khoor"`}
        </pre>
        <p className="lesson-text">This hands-on practice links theory to experience, reducing cognitive load by making abstract ideas tangible.</p>
      </div>

      {/* Reflection Section */}
      <div className="lesson-section">
        <h2>💬 Retrieval & Reflection</h2>
        <button className="toggle-button" onClick={() => setShowReflection(!showReflection)}>
          {showReflection ? "Hide Reflection Prompts" : "Show Reflection Prompts"}
        </button>
        {showReflection && (
          <ul className="styled-list">
            <li>What are three common use cases of cryptography you’ve encountered today?</li>
            <li>How does digital signing prove that a file hasn’t been modified?</li>
            <li>Why might a business use both symmetric and asymmetric encryption in their systems?</li>
          </ul>
        )}
      </div>

      {/* Navigation */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cryptoquiz3')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default CryptoLesson3;
