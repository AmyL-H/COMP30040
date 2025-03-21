import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptoLesson1.css';

function CryptoLesson1() {
  const navigate = useNavigate();
  const [showQuestions, setShowQuestions] = useState(false);
  const [showMoreContent, setShowMoreContent] = useState(false);

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 1: Introduction to Cryptography</h1>

      <div className="lesson-section">
        <p className="lesson-text">
          Cryptography is the art and science of converting information into a secure format so that only intended recipients can decode and understand it. 
          Its origins can be traced back to ancient civilizations, where simple substitution ciphers were used to protect messages. Over time, as communication technologies evolved,
          cryptography advanced from basic ciphers to complex algorithms that form the foundation of digital security today.
        </p>
        <p className="lesson-text">
          In modern security, cryptography is not only used for protecting confidential data but also for ensuring the integrity and authenticity of information.
          The fundamental concepts include <strong>encryption</strong> (the process of converting plaintext into ciphertext),
          <strong>decryption</strong> (reversing the process), <strong>keys</strong> (the secret values used in encryption algorithms), and <strong>ciphers</strong> (the algorithms that transform the data).
        </p>
      </div>

      <div className="lesson-section">
        <h2>Animated Flowchart</h2>
        <p className="lesson-text">
          The following flowchart outlines the encryption process. This visual aid helps reduce cognitive load and improve memory retention by clearly mapping each step:
        </p>
        <div className="flowchart-placeholder">
          <p>[ 🔁 Flowchart Animation Placeholder: Plaintext → Key Generation → Encryption → Ciphertext → Transmission → Decryption → Plaintext ]</p>
        </div>
        <p className="lesson-text small-note">
          💡 According to Mayer's Multimedia Learning Theory, pairing visuals with concise text supports deeper understanding and recall.
        </p>
      </div>

      <div className="lesson-section">
        <h2>Real-World Application</h2>
        <p className="lesson-text">
          Every time you send a message on WhatsApp, cryptography ensures your words remain confidential. From online banking to national defense systems,
          cryptographic systems are the unsung heroes of our digital safety net.
        </p>
        <button className="toggle-button" onClick={() => setShowMoreContent(!showMoreContent)}>
          {showMoreContent ? "Hide Application Example" : "See Practical Example"}
        </button>
        {showMoreContent && (
          <div className="tip-card" style={{ marginTop: "10px" }}>
            <p>
              🧠 Imagine you're logging into your bank online. Your password gets encrypted with a unique key. If someone intercepts it during transmission,
              all they see is meaningless ciphertext. This is cryptography in action!
            </p>
          </div>
        )}
      </div>

      <div className="lesson-section">
        <h2>Guided Reflective Questions</h2>
        <p className="lesson-text">
          Reflect on the following:
        </p>
        <ul className="styled-list">
          <li>How did ancient ciphers pave the way for modern encryption techniques?</li>
          <li>Why are keys considered the cornerstone of cryptographic security?</li>
          <li>In what ways does cryptography protect both data confidentiality and integrity?</li>
        </ul>
        <button className="toggle-button" onClick={() => setShowQuestions(!showQuestions)}>
          {showQuestions ? "Hide Additional Insights" : "Show Additional Insights"}
        </button>
        {showQuestions && (
          <div className="tips-container">
            <div className="tip-card">
              <p>Consider how the limitations of ancient ciphers led to the development of more secure, mathematically based algorithms.</p>
            </div>
            <div className="tip-card">
              <p>Reflect on real-world examples such as online banking and secure messaging where cryptography is vital.</p>
            </div>
          </div>
        )}
      </div>

      <div className="lesson-section">
        <h2>Mini Recall Activity 🧠</h2>
        <p className="lesson-text">
          Without scrolling up, try to answer:
        </p>
        <ol className="styled-list">
          <li>What is the difference between encryption and decryption?</li>
          <li>What role does a key play in the encryption process?</li>
          <li>Why are flowcharts useful when learning technical processes?</li>
        </ol>
        <p className="lesson-text small-note">
          💬 This retrieval practice strengthens memory and improves long-term retention.
        </p>
      </div>

      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cryptoquiz1')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default CryptoLesson1;
