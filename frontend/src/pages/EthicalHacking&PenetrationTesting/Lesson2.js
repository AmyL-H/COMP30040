import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson2.css';

function EthicalLesson2() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 2: Penetration Testing Methodologies</h1>
      
      {/* Text Explanation */}
      <section className="lesson-section">
        <p className="lesson-text">
          Penetration testing is a systematic process comprising several phases:
          <strong> Reconnaissance</strong> (gathering information), 
          <strong> Scanning</strong> (identifying vulnerabilities), 
          <strong> Exploitation</strong> (leveraging vulnerabilities), and 
          <strong> Reporting</strong> (documenting findings).
        </p>
      </section>
      
      {/* Animated Timeline */}
      <section className="lesson-section">
        <h2>Animated Timeline</h2>
        <p className="lesson-text">
          [Animated Timeline Placeholder: An interactive timeline illustrating each phase of penetration testing with smooth transitions]
        </p>
      </section>
    </div>
  );
}

export default EthicalLesson2;
