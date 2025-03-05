import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson5.css';

function NetworkLesson5() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 5: Network Vulnerability Assessments</h1>
      
      {/* Text Explanation & Case Studies */}
      <section className="lesson-section">
        <p className="lesson-text">
          This lesson introduces vulnerability assessments and penetration testing. Learn about scanning tools like Nmap and Nessus, review case studies of network breaches, and explore best practices for managing and remediating vulnerabilities.
        </p>
      </section>
      
      {/* Interactive Lab */}
      <section className="lesson-section">
        <h2>Interactive Lab</h2>
        <p className="lesson-text">
          [Interactive Lab Placeholder: Use a simulated vulnerability scanning tool to identify network weaknesses]
        </p>
      </section>
      
      {/* Collaborative Discussion */}
      <section className="lesson-section">
        <h2>Collaborative Discussion</h2>
        <p className="lesson-text">
          [Discussion Placeholder: Engage with peers to analyze case studies and discuss ethical considerations]
        </p>
      </section>
    </div>
  );
}

export default NetworkLesson5;
