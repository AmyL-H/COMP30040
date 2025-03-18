import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkLesson1.css';

function NetworkSecurityLesson1() {
  const navigate = useNavigate();
  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 1: Introduction to Network Security</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Network security is the practice of protecting data during transmission and at rest, ensuring that the integrity, confidentiality, and availability of information is maintained. 
          It encompasses a wide range of practices, protocols, and tools designed to prevent unauthorized access, misuse, or theft of digital data.
        </p>
        <p className="lesson-text">
          At its core, network security involves understanding how data moves across networks—whether local area networks (LANs), wide area networks (WANs), or the Internet—and applying security measures at every level.
          Essential concepts include firewalls, encryption, access control, and intrusion detection systems (IDS/IPS). Protocols such as SSL/TLS, IPSec, and VPNs ensure that data flows securely from one point to another.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Animated Flowchart of Secure Data Flow</h2>
        <p className="lesson-text">
          [Animated Flowchart Placeholder: This interactive diagram visually breaks down how data is transmitted securely through networks.
          Notice how encryption, tunneling, and authentication work together to protect information in transit.]
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Guided Reflective Questions</h2>
        <p className="lesson-text">
          Reflect on these questions to deepen your understanding:
        </p>
        <ul className="styled-list">
          <li>How do network protocols contribute to data security?</li>
          <li>What are the most critical components of a secure network architecture?</li>
          <li>How can an organization balance accessibility with strict security controls?</li>
        </ul>
        <button className="toggle-button" onClick={() => setShowQuestions(!showQuestions)}>
          {showQuestions ? "Hide Additional Insights" : "Show Additional Insights"}
        </button>
        {showQuestions && (
          <div className="tips-container">
            <div className="tip-card">
              <p>Consider how layering multiple security measures (defense in depth) can reduce overall risk.</p>
            </div>
            <div className="tip-card">
              <p>Think about real-world scenarios like online banking or remote work and the protocols that secure these communications.</p>
            </div>
          </div>
        )}
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/networkquiz1')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default NetworkSecurityLesson1;
