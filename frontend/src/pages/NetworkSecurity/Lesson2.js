import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson2.css';

function NetworkSecurityLesson2() {
  const navigate = useNavigate();
  const [toolDetails, setToolDetails] = useState({});

  const toggleToolDetails = (tool) => {
    setToolDetails(prev => ({ ...prev, [tool]: !prev[tool] }));
  };

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 2: Common Network Security Tools</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Network security tools are the first line of defense in protecting digital assets. These tools include firewalls, which block unauthorized access;
          intrusion detection and prevention systems (IDS/IPS), which monitor network traffic for suspicious activity; and virtual private networks (VPNs), which secure remote connections.
        </p>
        <p className="lesson-text">
          Each tool plays a unique role in maintaining network integrity and preventing cyberattacks. Understanding these roles is crucial for designing an effective network security strategy.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Tool Cards</h2>
        <p className="lesson-text">
          [Interactive Tool Cards Placeholder: Click each card to reveal details about how the tool works and its importance in network security.]
        </p>
        <div className="tool-cards">
          <div className="tool-card" onClick={() => toggleToolDetails("Firewall")}>
            <h3>Firewall</h3>
            {toolDetails["Firewall"] && (
              <p className="lesson-text">
                Firewalls filter incoming and outgoing traffic based on predefined security rules, helping to block unauthorized access.
              </p>
            )}
          </div>
          <div className="tool-card" onClick={() => toggleToolDetails("IDS/IPS")}>
            <h3>IDS/IPS</h3>
            {toolDetails["IDS/IPS"] && (
              <p className="lesson-text">
                Intrusion Detection and Prevention Systems monitor network activity and automatically respond to potential threats.
              </p>
            )}
          </div>
          <div className="tool-card" onClick={() => toggleToolDetails("VPN")}>
            <h3>VPN</h3>
            {toolDetails["VPN"] && (
              <p className="lesson-text">
                VPNs create secure, encrypted tunnels for remote users to access network resources safely.
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div className="lesson-section">
        <h2>Concept Check Quiz</h2>
        <p className="lesson-text">
          After reviewing the tools, test your understanding with a short quiz that asks you to match each tool with its primary function.
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/quiz2')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default NetworkSecurityLesson2;
