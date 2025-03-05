import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson2.css';

function NetworkLesson2() {
  const [showToolDetails, setShowToolDetails] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 2: Common Network Security Tools</h1>
      
      {/* Text Description */}
      <section className="lesson-section">
        <p className="lesson-text">
          In this lesson, you'll learn about essential network security tools such as firewalls, intrusion detection/prevention systems (IDS/IPS), and VPNs. These tools form the backbone of network defense strategies.
        </p>
      </section>
      
      {/* Interactive Tool Cards */}
      <section className="lesson-section">
        <h2>Interactive Tool Cards</h2>
        <div className="tool-cards">
          <div className="tool-card" onClick={() => setShowToolDetails(!showToolDetails)}>
            <h3>Firewalls</h3>
            {showToolDetails && <p className="lesson-text">Firewalls monitor and control incoming and outgoing network traffic based on security rules.</p>}
          </div>
          <div className="tool-card" onClick={() => setShowToolDetails(!showToolDetails)}>
            <h3>IDS/IPS</h3>
            {showToolDetails && <p className="lesson-text">IDS/IPS detect and prevent unauthorized access and potential threats in the network.</p>}
          </div>
          <div className="tool-card" onClick={() => setShowToolDetails(!showToolDetails)}>
            <h3>VPNs</h3>
            {showToolDetails && <p className="lesson-text">VPNs create secure connections over public networks, protecting data integrity and privacy.</p>}
          </div>
        </div>
      </section>
      
      {/* Concept Check Quiz */}
      <section className="lesson-section">
        <h2>Concept Check Quiz</h2>
        <p className="lesson-text">
          [Quiz Placeholder: Test your knowledge on common network security tools]
        </p>
      </section>
    </div>
  );
}

export default NetworkLesson2;
