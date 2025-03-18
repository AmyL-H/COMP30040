import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptoLesson5.css';

function CryptoLesson5() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 5: Breaking and Defending Cryptographic Systems</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Even the most robust cryptographic systems can have weaknesses. In this lesson, we explore common cryptographic attacks including brute-force, side-channel, 
          and potential quantum computing threats. Understanding these attacks helps us learn how to strengthen encryption methods and defend against vulnerabilities.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Case Study Analysis</h2>
        <p className="lesson-text">
          Examine historical breaches such as the compromise of the Enigma machine during World War II or the SHA-1 collision vulnerabilities.
          These case studies illustrate how cryptographic systems were once broken and how subsequent advancements have improved security.
          <br/><br/>
          <em>Problem-Based Learning:</em> Analyze these incidents to understand how and why the attacks succeeded.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Defence Challenge</h2>
        <p className="lesson-text">
          Participate in a simulated challenge where you attempt to "break" a deliberately weak encryption algorithm.
          Then, learn and apply strategies to fortify the system. This gamified exercise encourages you to think like both an attacker and a defender.
          <br/><br/>
          <em>Gamification & Learning Motivation:</em> Interactive challenges boost engagement and reinforce practical knowledge.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Reflective Questions & Ethical Considerations</h2>
        <p className="lesson-text">
          Consider the ethical implications of cryptanalysis. Reflect on questions such as:
          <br/><br/>
          - What are the potential risks of exposing vulnerabilities?
          <br/>
          - How do ethical hackers balance the need for security testing with the risk of misuse?
          <br/><br/>
          These reflective questions encourage deep thought and self-assessment.
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cryptoquiz5')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default CryptoLesson5;
