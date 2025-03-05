import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson5.css';

function EthicalLesson5() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 5: Reporting and Remediation</h1>
      
      {/* Text Explanation & Case Studies */}
      <section className="lesson-section">
        <p className="lesson-text">
          In this lesson, you will learn best practices for reporting penetration testing results and implementing remediation measures. Understand how to document vulnerabilities, propose effective solutions, and navigate the ethical implications of vulnerability disclosure.
        </p>
      </section>
      
      {/* Interactive Exercise */}
      <section className="lesson-section">
        <h2>Interactive Exercise</h2>
        <p className="lesson-text">
          [Interactive Exercise Placeholder: Analyze a case study, draft a vulnerability report, and propose remediation strategies]
        </p>
      </section>
      
      {/* Collaborative Discussion */}
      <section className="lesson-section">
        <h2>Collaborative Discussion</h2>
        <p className="lesson-text">
          [Discussion Placeholder: Engage with peers in reviewing different reporting approaches and ethical dilemmas in vulnerability disclosure]
        </p>
      </section>
    </div>
  );
}

export default EthicalLesson5;
