import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson5.css';

function EthicalHackingLesson5() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 5: Reporting and Remediation</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Effective reporting and remediation are critical components of a comprehensive penetration test. In this lesson, you will learn how to document vulnerabilities, 
          propose actionable remediation strategies, and understand the ethical and legal implications of vulnerability disclosure.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Best Practices for Reporting</h2>
        <p className="lesson-text">
          A well-prepared report should include a detailed description of vulnerabilities, an assessment of potential impacts, and clear recommendations for remediation.
          Real-world case studies show that thorough reporting not only aids in remediation but also helps build trust with stakeholders.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Exercise</h2>
        <p className="lesson-text">
          [Interactive Exercise Placeholder: Analyze a case study of a penetration test, draft a brief vulnerability report, and propose remediation measures.
          This scenario-based exercise reinforces your ability to synthesize information and present clear, actionable insights.]
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Collaborative Discussion</h2>
        <p className="lesson-text">
          Participate in group discussions to compare different reporting strategies and debate the ethical dilemmas associated with vulnerability disclosure.
          Peer feedback is invaluable in deepening your understanding of how to balance transparency with security.
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/quiz5')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default EthicalHackingLesson5;
