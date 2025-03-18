import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EthicalLesson1.css';

function EthicalHackingLesson1() {
  const navigate = useNavigate();
  const [showInsights, setShowInsights] = useState(false);

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 1: Introduction to Ethical Hacking</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Ethical hacking is the practice of deliberately probing systems and networks for vulnerabilities – with permission – to identify security weaknesses before malicious hackers can exploit them. 
          It involves a deep understanding of both offensive and defensive cybersecurity techniques and operates within strict ethical and legal boundaries.
        </p>
        <p className="lesson-text">
          This lesson introduces you to the core principles of ethical hacking and provides an overview of the penetration testing lifecycle, which typically includes planning, reconnaissance, scanning, exploitation, and reporting.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Animated Penetration Testing Lifecycle</h2>
        <p className="lesson-text">
          [Animated Diagram Placeholder: Follow the dynamic visualization of the penetration testing lifecycle, from initial planning and reconnaissance to final reporting.]
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Guided Reflective Questions</h2>
        <p className="lesson-text">
          Reflect on these questions:
        </p>
        <ul className="styled-list">
          <li>What distinguishes ethical hacking from malicious hacking?</li>
          <li>How does operating within legal boundaries benefit organizations?</li>
          <li>Why is it important to follow a structured penetration testing lifecycle?</li>
        </ul>
        <button className="toggle-button" onClick={() => setShowInsights(!showInsights)}>
          {showInsights ? "Hide Additional Insights" : "Show Additional Insights"}
        </button>
        {showInsights && (
          <div className="tips-container">
            <div className="tip-card">
              <p>Think about how real-world breaches might have been prevented if ethical hackers had been involved.</p>
            </div>
            <div className="tip-card">
              <p>Consider the balance between aggressive testing and legal/ethical boundaries.</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/quiz1')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default EthicalHackingLesson1;
