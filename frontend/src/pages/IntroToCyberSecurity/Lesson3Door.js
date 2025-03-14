import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson3Door.css';

const Lesson3Door = () => {
  const navigate = useNavigate();

  return (
    <div className="article-page">
      {/* Lesson Introduction */}
      <div className="content-card">
        <h1>Lesson 3: Common Threats and Vulnerabilities</h1>
        <p>
          Cyber threats exploit vulnerabilities in digital systems, and understanding these risks is essential to protect your data and devices.
          In this lesson, you'll explore various cyber threats, learn to identify common vulnerabilities in software, and see how attacks progress.
        </p>
      </div>

      {/* Active Learning: Understanding Cyber Threats */}
      <div className="content-card">
        <h2>Understanding Cyber Threats</h2>
        <p>
          Cyber threats come in many forms. Through <strong>active learning</strong>, you can explore interactive flashcards that cover different types of threats,
          such as phishing, malware, and Denial-of-Service (DoS) attacks. These tools help you learn by doing and reinforce key characteristics of each threat.
        </p>
      </div>

      {/* Gamified Learning: Examples of Threats */}
      <div className="content-card">
        <h2>Examples of Cyber Threats</h2>
        <p>
          Consider the following common threats:
        </p>
        <ul>
          <li>
            <strong>Phishing:</strong> Fraudulent attempts to obtain sensitive information. 
            Engage in the "Spot the Phishing Email" challenge to practice recognizing deceptive cues.
          </li>
          <li>
            <strong>Malware:</strong> Software designed to damage or exploit systems.
          </li>
          <li>
            <strong>Denial-of-Service (DoS):</strong> An attack that overwhelms a system, rendering it inoperable.
          </li>
        </ul>
        <p>
          <em>Gamified challenges can make learning these concepts more engaging and memorable.</em>
        </p>
      </div>

      {/* Problem-Based Learning: Identifying Vulnerabilities */}
      <div className="content-card">
        <h2>Identifying Vulnerabilities</h2>
        <p>
          Vulnerabilities are weaknesses in systems that can be exploited by attackers. Using <strong>problem-based learning</strong>, 
          you will participate in simulated cyberattack exercises to identify these vulnerabilities.
          This investigative approach encourages you to analyze system weaknesses and think critically about security.
        </p>
      </div>

      {/* Concept Mapping: Threat Flow Diagram */}
      <div className="content-card">
        <h2>Threat Flow Diagram</h2>
        <p>
          Visualizing how attacks progress helps simplify complex cybersecurity processes.
          With <strong>concept mapping</strong>, you can create interactive diagrams that show the pathway from initial breach to full compromise.
          Try building your own attack map to better understand the flow of a cyberattack.
        </p>
      </div>

      {/* Self-Directed Learning Assignment */}
      <div className="content-card">
        <h2>Assignment</h2>
        <p>
          For independent research, select a recent cyber incident and prepare a brief report addressing:
        </p>
        <ul>
          <li>The nature of the attack</li>
          <li>Vulnerabilities exploited</li>
          <li>The impact on the affected organization</li>
          <li>Lessons learned and proposed mitigation strategies</li>
        </ul>
        <p>
          This <strong>self-directed learning</strong> assignment encourages you to explore real-world scenarios and deepen your understanding.
        </p>
      </div>

      {/* Knowledge Quiz Preview */}
      <div className="content-card">
        <h2>Knowledge Quiz</h2>
        <p>
          After reviewing the lesson, test your understanding with a quiz covering key concepts and scenarios.
          This <strong>retrieval practice</strong> reinforces memory retention and helps solidify your learning.
        </p>
      </div>

      {/* Navigation Button */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cyberquiz3')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson3Door;
