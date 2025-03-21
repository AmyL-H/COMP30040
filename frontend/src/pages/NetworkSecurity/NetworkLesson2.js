import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkLesson2.css';

function NetworkLesson2() {
  const navigate = useNavigate();
  const [toolDetails, setToolDetails] = useState({});

  const toggleToolDetails = (tool) => {
    setToolDetails(prev => ({ ...prev, [tool]: !prev[tool] }));
  };

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 2: Common Network Security Tools</h1>

      {/* Overview Section */}
      <div className="lesson-section">
        <p className="lesson-text">
          Network security tools are the backbone of digital defense systems. They help detect, block, and respond to cyber threats in real time.
          From securing endpoints to managing encrypted connections, each tool plays a vital role in ensuring a network’s resilience.
        </p>
        <p className="lesson-text">
          Key tools include <strong>Firewalls</strong> to filter traffic, <strong>IDS/IPS</strong> systems to detect and prevent intrusions, and <strong>VPNs</strong> to protect remote communications.
          Understanding these tools is crucial for building layered security strategies.
        </p>
      </div>

      {/* Tool Cards Section */}
      <div className="lesson-section">
        <h2>🛠️ Explore Network Tools</h2>
        <p className="lesson-text">
          Click on each tool to learn more about how it defends your network.
        </p>

        <div className="tool-cards">
          {[
            {
              name: "Firewall",
              description:
                "Firewalls act as gatekeepers, allowing or blocking data packets based on security rules. They prevent unauthorized access and stop malicious traffic."
            },
            {
              name: "IDS/IPS",
              description:
                "Intrusion Detection Systems (IDS) monitor for suspicious activity, while Intrusion Prevention Systems (IPS) take immediate action to block threats."
            },
            {
              name: "VPN",
              description:
                "Virtual Private Networks create encrypted tunnels for remote users, securing data and masking IP addresses on public networks."
            }
          ].map((tool) => (
            <div
              key={tool.name}
              className="tool-card"
              onClick={() => toggleToolDetails(tool.name)}
            >
              <h3>{tool.name}</h3>
              {toolDetails[tool.name] && (
                <p className="lesson-text">{tool.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Learning Reflection */}
      <div className="lesson-section">
        <h2>💡 Why This Matters</h2>
        <p className="lesson-text">
          Each of these tools represents a layer in a concept called <strong>Defense in Depth</strong>. No single security measure is flawless—by combining them, you build a resilient system.
        </p>
        <p className="lesson-text">
          Consider this: firewalls keep intruders out, but if one slips through, an IDS/IPS can catch the behavior. Meanwhile, VPNs ensure sensitive data stays protected, even on insecure networks.
        </p>
      </div>

      {/* Quiz CTA */}
      <div className="lesson-section">
        <h2>🧠 Concept Check Quiz</h2>
        <p className="lesson-text">
          Now that you’ve reviewed these core tools, test your understanding in a short matching quiz.
        </p>
      </div>

      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/networkquiz2')}>
          Proceed to Quiz
        </button>
      </div>
    </div>
  );
}

export default NetworkLesson2;
