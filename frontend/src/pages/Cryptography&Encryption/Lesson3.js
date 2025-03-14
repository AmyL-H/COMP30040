import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson3.css';

function CryptoLesson3() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 3: Applications of Cryptography</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Cryptography is fundamental to many aspects of modern digital security. It is used to secure websites with SSL/TLS, to protect sensitive communications through VPNs, 
          and to verify the authenticity of transactions using digital signatures. Additionally, cryptographic techniques play a key role in blockchain technology, ensuring that records are immutable and trustworthy.
        </p>
        <p className="lesson-text">
          In our daily lives, encryption helps safeguard everything from online banking transactions to confidential email communications. Understanding these applications is key to appreciating 
          how pervasive and essential cryptography is in protecting modern infrastructure.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Real-World Applications</h2>
        <ul>
          <li><strong>SSL/TLS:</strong> Secures data between web browsers and servers.</li>
          <li><strong>VPNs:</strong> Enables secure remote access by encrypting network traffic.</li>
          <li><strong>Digital Signatures:</strong> Ensure authenticity and integrity of digital documents.</li>
          <li><strong>Blockchain:</strong> Uses cryptographic hashing to create tamper-resistant records.</li>
        </ul>
        <p className="lesson-text">
          <em>Active learning tip:</em> Use interactive flashcards to explore each of these applications in depth.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Checklist & Hands-On Lab</h2>
        <p className="lesson-text">
          As you review the applications, check off each one that you recognize. 
          Then, try a browser-based simulation where you experiment with simple encryption and decryption in JavaScript.
          This hands-on lab reinforces theoretical knowledge by allowing you to see how changes in keys affect the output.
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cryptoquiz3')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default CryptoLesson3;
