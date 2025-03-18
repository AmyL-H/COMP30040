import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkLesson4.css';

function NetworkSecurityLesson4() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 4: Wireless Network Security</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Wireless networks are ubiquitous, yet they present unique security challenges. Unlike wired networks, wireless networks are more susceptible to eavesdropping,
          rogue access points, and unauthorized access. Understanding wireless standards such as WEP, WPA, WPA2, and WPA3 is key to deploying robust defenses.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Wireless Security Protocols</h2>
        <p className="lesson-text">
          <strong>WEP:</strong> An outdated and insecure protocol. <br/>
          <strong>WPA/WPA2:</strong> Improved protocols with better encryption, though WPA2 may be vulnerable to some attacks. <br/>
          <strong>WPA3:</strong> The latest standard providing enhanced protection, especially against brute-force attacks.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Wireless Diagram</h2>
        <p className="lesson-text">
          [Interactive Diagram Placeholder: Explore a visual representation of a secure wireless network architecture, highlighting encryption methods and authentication processes.]
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Hands-On Wireless Configuration Activity</h2>
        <p className="lesson-text">
          [Simulation Placeholder: Configure wireless security settings in a simulated environment. Choose appropriate protocols and authentication measures to secure a network.]
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/networkquiz4')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default NetworkSecurityLesson4;
