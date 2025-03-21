import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkLesson1.css';

function NetworkLesson1() {
  const navigate = useNavigate();
  const [showQuestions, setShowQuestions] = useState(false);

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 1: Introduction to Network Security</h1>

      {/* Introduction to Network Security */}
      <div className="lesson-section">
        <p className="lesson-text">
          Network security is the practice of defending computer networks against threats such as unauthorized access, misuse, malfunction, or destruction. It ensures the confidentiality, integrity, and availability (CIA triad) of information.
        </p>
        <p className="lesson-text">
          Whether you're securing a personal Wi-Fi network or a corporate infrastructure, network security involves layers of protection—both hardware and software. These layers include firewalls, intrusion detection systems, access control, secure communication protocols, and monitoring systems.
        </p>
      </div>

      {/* Key Components Overview */}
      <div className="lesson-section">
        <h2>🔐 Core Concepts in Network Security</h2>
        <ul className="styled-list">
          <li><strong>Firewall:</strong> A barrier between trusted and untrusted networks that filters traffic based on rules.</li>
          <li><strong>Encryption:</strong> Converts readable data into an unreadable format using algorithms like AES or RSA.</li>
          <li><strong>VPN (Virtual Private Network):</strong> Encrypts internet traffic to enable secure remote access.</li>
          <li><strong>IDS/IPS:</strong> Systems that detect (IDS) or prevent (IPS) suspicious activity.</li>
          <li><strong>Authentication:</strong> Confirms user identity through methods like passwords or multi-factor authentication.</li>
        </ul>
        <p className="lesson-text"><em>🧠 Learning Tip:</em> Think of network security like layered armor—each component strengthens your defense.</p>
      </div>

      {/* Visual Section */}
      <div className="lesson-section">
        <h2>📊 Animated Flowchart: Secure Data Flow</h2>
        <p className="lesson-text">
          Imagine a packet of data traveling through a VPN tunnel, getting checked by a firewall, and then decrypted at its destination. Encryption ensures privacy, while protocols like SSL/TLS verify authenticity.
        </p>
        <img
            src="/images/vpn.jpg"
            alt="Secure Data Flow Diagram"
            className="flowchart-image"
          />
        <p className="lesson-text">
          This visual breaks down the sequence from device to destination, showing where each security layer operates.
        </p>
      </div>


      {/* Reflection */}
      <div className="lesson-section">
        <h2>💭 Guided Reflective Questions</h2>
        <p className="lesson-text">
          Reflecting on these prompts helps transfer theoretical knowledge into practical insight:
        </p>
        <ul className="styled-list">
          <li>How do firewalls and VPNs differ in their approach to securing a network?</li>
          <li>Why is encryption essential for protecting sensitive data in transit?</li>
          <li>How does multi-factor authentication strengthen network security?</li>
        </ul>
        <button className="toggle-button" onClick={() => setShowQuestions(!showQuestions)}>
          {showQuestions ? "Hide Additional Insights" : "Show Additional Insights"}
        </button>
        {showQuestions && (
          <div className="tips-container">
            <div className="tip-card">
              <p>Layering security—known as defense in depth—ensures that if one control fails, others still provide protection.</p>
            </div>
            <div className="tip-card">
              <p>Think about your home Wi-Fi: Do you have a password? Is it encrypted? These small actions represent real-world network security!</p>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/networkquiz1')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default NetworkLesson1;
