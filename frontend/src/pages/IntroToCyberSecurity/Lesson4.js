import React, { useState } from 'react';
import Quiz from '../../components/Quiz';
import './Lesson4.css';

function Lesson4() {
  const [showDetails, setShowDetails] = useState(false);
  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="lesson-page">
      <h1 className="title">Lesson 4: Introduction to Security Frameworks</h1>

      <section className="lesson-section">
        <h2>What are Security Frameworks?</h2>
        <p>
          Security frameworks are structured approaches to managing cybersecurity risks. They provide organizations 
          with best practices and standards to protect their assets.
        </p>
        <button className="toggle-button" onClick={toggleDetails}>
          {showDetails ? 'Hide Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div className="details">
            <h3>Benefits:</h3>
            <ul>
              <li>Enhances organizational resilience.</li>
              <li>Helps in regulatory compliance.</li>
              <li>Promotes proactive cybersecurity culture.</li>
            </ul>
          </div>
        )}
      </section>

      <section className="lesson-section">
        <h2>Popular Security Frameworks</h2>
        <div className="framework-list">
          <div className="framework-card">
            <h3>NIST Cybersecurity Framework</h3>
            <p>Focuses on identifying, protecting, detecting, responding, and recovering from cyber incidents.</p>
          </div>
          <div className="framework-card">
            <h3>ISO/IEC 27001</h3>
            <p>An international standard for managing information security systems.</p>
          </div>
          <div className="framework-card">
            <h3>COBIT</h3>
            <p>Framework for governance and management of enterprise IT.</p>
          </div>
        </div>
      </section>

      <h2>Quiz</h2>
      <Quiz
        question="What is the purpose of a security framework?"
        options={['To manage risks', 'To create attacks', 'To automate IT']}
        correctAnswer="To manage risks"
      />
      <Quiz
        question="Which framework focuses on information security management?"
        options={['NIST', 'COBIT', 'ISO/IEC 27001']}
        correctAnswer="ISO/IEC 27001"
      />
    </div>
  );
}

export default Lesson4;
