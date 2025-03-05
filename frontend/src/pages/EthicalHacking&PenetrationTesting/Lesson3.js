import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson3.css';

function EthicalLesson3() {
  const navigate = useNavigate();
  const [toolDetails, setToolDetails] = useState({
    metasploit: false,
    nmap: false,
    wireshark: false,
  });

  const toggleTool = (tool) => {
    setToolDetails((prevState) => ({ ...prevState, [tool]: !prevState[tool] }));
  };

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 3: Ethical Hacking Tools and Techniques</h1>
      
      {/* Text Explanation */}
      <section className="lesson-section">
        <p className="lesson-text">
          Learn about the key tools used in ethical hacking such as Metasploit, Nmap, and Wireshark. These tools are essential for assessing security and uncovering vulnerabilities.
        </p>
      </section>
      
      {/* Interactive Tool Cards */}
      <section className="lesson-section">
        <h2>Interactive Tool Cards</h2>
        <div className="tool-cards">
          <div className="tool-card" onClick={() => toggleTool('metasploit')}>
            <h3>Metasploit</h3>
            {toolDetails.metasploit && (
              <p className="lesson-text">
                Metasploit is a powerful framework for developing and executing exploit code against target systems.
              </p>
            )}
          </div>
          <div className="tool-card" onClick={() => toggleTool('nmap')}>
            <h3>Nmap</h3>
            {toolDetails.nmap && (
              <p className="lesson-text">
                Nmap is a network scanning tool used to discover hosts and services on a computer network.
              </p>
            )}
          </div>
          <div className="tool-card" onClick={() => toggleTool('wireshark')}>
            <h3>Wireshark</h3>
            {toolDetails.wireshark && (
              <p className="lesson-text">
                Wireshark is a network protocol analyzer that captures and interactively analyzes network traffic.
              </p>
            )}
          </div>
        </div>
      </section>
      
      {/* Interactive Quiz & Hands-On Lab */}
      <section className="lesson-section">
        <h2>Interactive Quiz & Hands-On Lab</h2>
        <p className="lesson-text">
          [Quiz and Hands-On Lab Placeholder: Test your knowledge and practice basic penetration testing techniques in a simulated environment]
        </p>
      </section>
    </div>
  );
}

export default EthicalLesson3;
