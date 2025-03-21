import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson4Door.css';

const frameworks = [
  {
    scenario: "A government agency needs to respond to cybersecurity incidents efficiently.",
    options: ["NIST", "ISO/IEC 27001", "COBIT"],
    correct: "NIST",
    explanation: "NIST focuses on risk management and incident response — ideal for government agencies."
  },
  {
    scenario: "A global enterprise wants an international standard to manage its information security.",
    options: ["NIST", "ISO/IEC 27001", "COBIT"],
    correct: "ISO/IEC 27001",
    explanation: "ISO/IEC 27001 is an international standard used across many industries for ISMS."
  },
  {
    scenario: "An IT company needs strong governance and process management.",
    options: ["NIST", "ISO/IEC 27001", "COBIT"],
    correct: "COBIT",
    explanation: "COBIT is designed for IT governance, aligning IT with business goals."
  }
];

const Lesson4Door = () => {
  const navigate = useNavigate();
  const [showGame, setShowGame] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index, answer) => {
    setSelectedAnswers(prev => ({ ...prev, [index]: answer }));
  };

  const handleSubmitGame = () => {
    setSubmitted(true);
  };

  return (
    <div className="article-page">
      <div className="content-card">
        <h1>Lesson 4: Introduction to Security Frameworks</h1>
        <p>
          In today’s complex cybersecurity landscape, security frameworks provide a structured approach to managing risks.
          They serve as comprehensive guidelines that help organizations safeguard their critical assets and maintain compliance.
        </p>
      </div>

      <div className="content-card">
        <h2>What Are Security Frameworks?</h2>
        <p>
          Security frameworks are sets of policies, procedures, and standards designed to manage cybersecurity risks.
          By aligning various security measures under one umbrella, organizations can systematically protect their assets.
          <br /><br />
          <em><strong>Constructivist Learning:</strong> Brainstorm security risks in your day to day life and consider how different frameworks might address them.</em>
          <br /><br />
          Go over to the discussion board to talk through your answers with your peers!
        </p>
      </div>

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
          <em><strong>Gamified Learning:</strong> Engage with the interactive decision game below.</em>
        </p>
        <button className="toggle-button" onClick={() => setShowGame(prev => !prev)}>
          {showGame ? 'Hide Game' : 'Play Choose the Best Framework Game'}
        </button>

        {showGame && (
          <div className="framework-game">
            <h3>Choose the Best Framework</h3>
            {frameworks.map((f, index) => (
              <div key={index} className="framework-question">
                <p><strong>Scenario {index + 1}:</strong> {f.scenario}</p>
                <div className="framework-options">
                  {f.options.map(option => (
                    <button
                      key={option}
                      className={`framework-option ${selectedAnswers[index] === option ? 'selected' : ''}`}
                      onClick={() => handleSelect(index, option)}
                      disabled={submitted}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                {submitted && (
                  <p className={`framework-feedback ${selectedAnswers[index] === f.correct ? 'correct' : 'incorrect'}`}>
                    {selectedAnswers[index] === f.correct ? "✅ Correct!" : `❌ Incorrect. `}
                    <span>{f.explanation}</span>
                  </p>
                )}
              </div>
            ))}
            {!submitted && (
              <button className="submit-framework-game" onClick={handleSubmitGame}>Submit Answers</button>
            )}
          </div>
        )}
      </div>

      <div className="content-card">
        <h2>Deep Dive: Framework Comparison</h2>
        <p>
          Here's a closer look at each framework:
        </p>
        <ul>
          <li><strong>NIST:</strong> Widely adopted in the U.S. government and private sector. <br/> 
          <strong>Pros:</strong> Flexible, risk-based approach. <br/>
          <strong>Cons:</strong> Can be complex for small orgs. <br/>
          <strong>Use:</strong> Risk management, continuous improvement.</li>
          <li><strong>ISO/IEC 27001:</strong> Globally recognized certification. <br/> 
          <strong>Pros:</strong> Strong focus on confidentiality, integrity, and availability. <br/>
          <strong>Cons:</strong> Expensive and time-consuming certification. <br/>
          <strong>Use:</strong> Compliance, global business assurance.</li>
          <li><strong>COBIT:</strong> Designed for enterprise IT governance. <br/> 
          <strong>Pros:</strong> Business-aligned, process-oriented. <br/>
          <strong>Cons:</strong> More strategic, less focused on technical controls. <br/>
          <strong>Use:</strong> Aligning IT and business strategy.</li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Implementing a Security Framework</h2>
        <p>
          Implementing a security framework in an organization requires real-world decision making.
          Imagine you are a security consultant tasked with helping an organization recover from a breach.
          Consider which framework and corresponding strategies would be most effective.
          <br /><br />
          <em><strong>Scenario-Based Learning:</strong> Participate in a security incident role-play exercise.</em>
        </p>
      </div>

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
        <p><em><strong>Self-Directed Learning:</strong> This independent research encourages you to deepen your understanding through real-world analysis.</em></p>
      </div>

      <div className="content-card">
        <h2>Knowledge Quiz</h2>
        <p>
          Test your understanding of security frameworks and risk management. After reviewing the content, proceed to the quiz,
          where you'll match frameworks to specific security challenges.
          <br /><br />
          <em><strong>Retrieval Practice:</strong> Self-testing reinforces memory and enhances long-term retention.</em>
        </p>
      </div>

      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cyberquiz4')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson4Door;
