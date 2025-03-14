import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson4Door.css';

const Lesson4Door = () => {
  const navigate = useNavigate();

  return (
    <div className="article-page">
      {/* Lesson Introduction */}
      <div className="content-card">
        <h1>Lesson 4: Introduction to Security Frameworks</h1>
        <p>
          In today’s complex cybersecurity landscape, security frameworks provide a structured approach to managing risks.
          They serve as comprehensive guidelines that help organizations safeguard their critical assets and maintain compliance.
        </p>
      </div>

      {/* Constructivist Learning: What Are Security Frameworks? */}
      <div className="content-card">
        <h2>What Are Security Frameworks?</h2>
        <p>
          Security frameworks are sets of policies, procedures, and standards designed to manage cybersecurity risks.
          By aligning various security measures under one umbrella, organizations can systematically protect their assets.
          <br/><br/>
          <em>
            <strong>Constructivist Learning:</strong> Brainstorm security risks in your organization and consider how different frameworks might address them.
          </em>
        </p>
      </div>

      {/* Gamified Learning: Popular Security Frameworks */}
      <div className="content-card">
        <h2>Popular Security Frameworks</h2>
        <p>
          Several frameworks are widely used in the industry:
        </p>
        <ul>
          <li><strong>NIST:</strong> Focuses on risk management and incident response.</li>
          <li><strong>ISO/IEC 27001:</strong> An international standard for information security management.</li>
          <li><strong>COBIT:</strong> Concentrates on IT governance and management.</li>
        </ul>
        <p>
          <em>
            <strong>Gamified Learning:</strong> Engage with the "Choose the Best Framework" decision game to see which framework best fits various scenarios.
          </em>
        </p>
      </div>

      {/* Scenario-Based Learning: Implementing a Security Framework */}
      <div className="content-card">
        <h2>Implementing a Security Framework</h2>
        <p>
          Implementing a security framework in an organization requires real-world decision making.
          Imagine you are a security consultant tasked with helping an organization recover from a breach.
          Consider which framework and corresponding strategies would be most effective.
          <br/><br/>
          <em>
            <strong>Scenario-Based Learning:</strong> Participate in a security incident role-play exercise to apply your knowledge.
          </em>
        </p>
      </div>

      {/* Self-Directed Learning: Assignment */}
      <div className="content-card">
        <h2>Assignment</h2>
        <p>
          For self-directed research, select a recent cyber incident and prepare a brief report addressing:
        </p>
        <ul>
          <li>The nature of the attack</li>
          <li>Vulnerabilities exploited</li>
          <li>The impact on the organization</li>
          <li>Recommendations for risk mitigation</li>
        </ul>
        <p>
          <em>
            <strong>Self-Directed Learning:</strong> This independent research encourages you to deepen your understanding through real-world analysis.
          </em>
        </p>
      </div>

      {/* Retrieval Practice: Quiz Preview */}
      <div className="content-card">
        <h2>Knowledge Quiz</h2>
        <p>
          Test your understanding of security frameworks and risk management. After reviewing the content, proceed to the quiz,
          where you'll match frameworks to specific security challenges.
          <br/><br/>
          <em>
            <strong>Retrieval Practice:</strong> Self-testing reinforces memory and enhances long-term retention.
          </em>
        </p>
      </div>

      {/* Navigation Button */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cyberquiz4')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson4Door;
