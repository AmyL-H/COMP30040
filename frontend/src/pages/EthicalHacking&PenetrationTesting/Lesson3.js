import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson3.css';

function EthicalHackingLesson3() {
  const navigate = useNavigate();
  const [showToolDetails, setShowToolDetails] = useState({});

  const toggleToolDetails = (tool) => {
    setShowToolDetails(prev => ({ ...prev, [tool]: !prev[tool] }));
  };

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 3: Ethical Hacking Tools and Techniques</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Ethical hacking relies on a range of powerful tools to identify vulnerabilities and test defenses. In this lesson, we will examine popular tools such as <strong>Metasploit</strong> (for exploitation), <strong>Nmap</strong> (for network scanning), and <strong>Wireshark</strong> (for packet analysis). Each tool plays a critical role in different phases of penetration testing.
        </p>
        <p className="lesson-text">
          Understanding how and when to use these tools is essential for effective security testing.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Tool Cards</h2>
        <p className="lesson-text">
          [Interactive Tool Cards Placeholder: Click each card to reveal detailed information about how the tool works and its role in the testing process.]
        </p>
        <div className="tool-cards">
          <div className="tool-card" onClick={() => toggleToolDetails("Metasploit")}>
            <h3>Metasploit</h3>
            {showToolDetails["Metasploit"] && (
              <p className="lesson-text">
                Metasploit is a comprehensive framework that provides a suite of tools for developing and executing exploit code against a target system. It is essential for testing vulnerabilities in real-world scenarios.
              </p>
            )}
          </div>
          <div className="tool-card" onClick={() => toggleToolDetails("Nmap")}>
            <h3>Nmap</h3>
            {showToolDetails["Nmap"] && (
              <p className="lesson-text">
                Nmap is a powerful network scanning tool that discovers hosts and services on a network, helping to identify potential vulnerabilities.
              </p>
            )}
          </div>
          <div className="tool-card" onClick={() => toggleToolDetails("Wireshark")}>
            <h3>Wireshark</h3>
            {showToolDetails["Wireshark"] && (
              <p className="lesson-text">
                Wireshark is a network protocol analyzer that captures and analyzes packets in real-time, allowing ethical hackers to inspect traffic and detect anomalies.
              </p>
            )}
          </div>
        </div>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Quiz & Hands-On Lab</h2>
        <p className="lesson-text">
          Test your knowledge through a short interactive quiz and try a browser-based simulation lab where you can experiment with basic penetration testing techniques.
          These activities help bridge the gap between theory and practice.
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/quiz3')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default EthicalHackingLesson3;
