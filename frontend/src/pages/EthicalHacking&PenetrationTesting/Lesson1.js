import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson1.css';

function EthicalLesson1() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 1: Introduction to Ethical Hacking</h1>
      
      {/* Text Explanation */}
      <section className="lesson-section">
        <p className="lesson-text">
          Ethical hacking involves legally breaking into computer systems to test their security. It operates under strict ethical and legal guidelines to identify vulnerabilities and help protect organizations against cyber threats.
        </p>
      </section>
      
      {/* Animated Diagram */}
      <section className="lesson-section">
        <h2>Animated Diagram</h2>
        <p className="lesson-text">
          [Animated Diagram Placeholder: Visualize the phases of penetration testing, including planning, scanning, exploitation, and reporting]
        </p>
      </section>
    </div>
  );
}

export default EthicalLesson1;
