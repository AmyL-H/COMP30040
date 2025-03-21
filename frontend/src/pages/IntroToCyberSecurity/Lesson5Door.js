import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson5Door.css';

const Lesson5Door = () => {
  const navigate = useNavigate();
  const [showDiscussion, setShowDiscussion] = useState(false);
  const [showGame, setShowGame] = useState(false);

  return (
    <div className="article-page">
      {/* Lesson Introduction */}
      <div className="content-card">
        <h1>Lesson 5: Future Trends in Cybersecurity</h1>
        <p>
          Emerging technologies like artificial intelligence, quantum computing, and zero-trust models are transforming the cybersecurity landscape.
          In this lesson, you'll explore these emerging threats, learn innovative defense strategies, and predict future cybersecurity risks.
        </p>
      </div>

      {/* Discussion-Based Learning: Emerging Threats */}
      <div className="content-card">
        <h2>Emerging Threats</h2>
        <p>
          Cyber threats are evolving rapidly. Consider the risks associated with AI-driven attacks, the challenges posed by quantum computing, 
          and the misuse of deepfake technology.
        </p>
        <button className="toggle-button" onClick={() => setShowDiscussion(!showDiscussion)}>
          {showDiscussion ? "Hide Discussion Activity" : "Start Discussion Activity"}
        </button>

        {showDiscussion && (
          <div className="discussion-activity">
            <h3>🗨️ Discussion Activity:</h3>
            <p><strong>Prompt:</strong> Do you believe AI in cybersecurity is more dangerous as an attack vector or a defense tool?</p>
            <p>Write your opinion and compare with simulated peer replies:</p>
            <ul>
              <li><strong>Alice:</strong> “AI has enormous defense potential, but bad actors always seem one step ahead.”</li>
              <li><strong>Mo:</strong> “I think deepfakes are the biggest threat — we can't trust anything visual anymore.”</li>
            </ul>
            <p><em>Reflect on your stance and how it aligns or differs.</em></p>
          </div>
        )}
      </div>

      {/* Gamified Learning: Innovative Defense Strategies */}
      <div className="content-card">
        <h2>Innovative Defense Strategies</h2>
        <p>
          With emerging threats come innovative defense strategies. Explore how AI is used in cyber defense, how post‑quantum cryptography can protect against quantum threats,
          and how a zero‑trust model ensures continuous verification.
        </p>
        <button className="toggle-button" onClick={() => setShowGame(!showGame)}>
          {showGame ? "Hide Strategy Challenge" : "Launch Defense Challenge"}
        </button>

        {showGame && (
          <div className="mini-game">
            <h3>🧠 Cybersecurity Decision-Making Challenge</h3>
            <p><strong>Scenario:</strong> A new quantum malware is spreading. Choose your defense strategy:</p>
            <ul>
              <li>🔒 Post-Quantum Cryptography</li>
              <li>🧠 AI Threat Detection</li>
              <li>🚪 Zero-Trust Architecture</li>
            </ul>
            <p><em>All are valid, but which is best suited based on your scenario understanding?</em></p>
            <p>Submit your choice in the quiz to get feedback!</p>
          </div>
        )}
      </div>

      {/* Self-Directed Learning Assignment */}
      <div className="content-card">
        <h2>Predicting the Future of Cybersecurity</h2>
        <p>
          Imagine the next decade in cybersecurity. Which emerging threat will have the most impact? 
          Research recent developments and predict how organizations should prepare.
        </p>
        <div className="self-directed-box">
          <h4>📄 Independent Activity:</h4>
          <ul>
            <li>Pick a news article on AI, quantum, or deepfake security threats.</li>
            <li>Write a one-page response explaining its potential long-term impact.</li>
            <li>Use evidence from at least one academic or industry source.</li>
          </ul>
          <a
            href="/downloads/cyber-future-assignment-template.docx"
            download
            className="download-button"
          >
            Download Assignment Template
          </a>
        </div>
      </div>

      {/* Retrieval Practice: Quiz Preview */}
      <div className="content-card">
        <h2>Knowledge Quiz</h2>
        <p>
          After exploring the trends and strategies, test your understanding with a scenario‑based quiz. 
          This quiz uses retrieval practice techniques to reinforce long‑term memory.
        </p>
      </div>

      {/* Navigation Button */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cyberquiz5')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson5Door;
