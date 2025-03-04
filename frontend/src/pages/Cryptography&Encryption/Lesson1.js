import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson1.css';

function CryptoLesson1() {
  const [showTips, setShowTips] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Welcome to Lesson 1: Introduction to Cryptography</h1>

      {/* Explanation Section */}
      <section className="lesson-section">
        <p className="lesson-text">
          In this lesson, you'll explore the fundamentals of cryptography—the art and science of secure communication.
          Discover how ancient techniques evolved into modern encryption methods that protect data in today’s digital age.
        </p>
      </section>

      {/* What is Cryptography */}
      <section className="lesson-section">
        <h2>What is Cryptography?</h2>
        <p className="lesson-text">
          Cryptography involves converting information into a secure format through processes such as encryption and decryption,
          using keys and ciphers to safeguard data from unauthorized access.
        </p>
      </section>

      {/* Animated Flowchart */}
      <section className="lesson-section">
        <h2>Animated Flowchart</h2>
        <p className="lesson-text">
          [Interactive Flowchart Placeholder: Visualize the process of encryption and decryption]
        </p>
      </section>

      {/* Guided Questions */}
      <section className="lesson-section">
        <h2>Guided Questions</h2>
        <ul className="lesson-text">
          <li>How did ancient cryptography techniques influence modern encryption?</li>
          <li>What role do keys play in securing information?</li>
          <li>Why is cryptography essential in today’s digital world?</li>
        </ul>
      </section>

      {/* Tips Section */}
      <section className="lesson-section">
        <h2>Tips for Success</h2>
        <button className={`toggle-button ${showTips ? "active" : ""}`} onClick={() => setShowTips(!showTips)}>
          {showTips ? 'Hide Tips' : 'Show Tips'}
        </button>
        <div className={`tips-container ${showTips ? "visible" : "hidden"}`}>
          <div className="tip-card">
            <h3>🔍 Explore Concepts</h3>
            <p>Look up additional encryption examples to see real-world applications.</p>
          </div>
          <div className="tip-card">
            <h3>📝 Take Notes</h3>
            <p>Jot down key terms and ideas as you learn them for future reference.</p>
          </div>
          <div className="tip-card">
            <h3>💡 Stay Curious</h3>
            <p>Consider how cryptography impacts everyday technology, from emails to online banking.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CryptoLesson1;
