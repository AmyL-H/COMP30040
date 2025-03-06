import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson5Door.css';

const Lesson5Door = () => {
  const navigate = useNavigate();

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
          and the misuse of deepfake technology. Engage in discussions with peers to explore the ethical risks and implications of these trends.
          <br/><br/>
          <em>
            <strong>Discussion-Based Learning (Race, 2020):</strong> Join conversation groups or discussion boards to debate the ethical risks of AI-powered cyber threats.
          </em>
        </p>
      </div>

      {/* Gamified Learning: Innovative Defense Strategies */}
      <div className="content-card">
        <h2>Innovative Defense Strategies</h2>
        <p>
          With emerging threats come innovative defense strategies. Explore how AI is being used in cyber defense, how post‑quantum cryptography can protect against quantum threats,
          and how a zero‑trust model ensures continuous verification.
          <br/><br/>
          <em>
            <strong>Gamification & Challenge-Based Learning (Bailey & Card, 2021):</strong> Participate in the "Cybersecurity Decision-Making Challenge" where you propose strategic responses to hypothetical threats.
          </em>
        </p>
      </div>

      {/* Self-Directed Learning Assignment */}
      <div className="content-card">
        <h2>Predicting the Future of Cybersecurity</h2>
        <p>
          Imagine the next decade in cybersecurity. Which emerging threat do you think will have the most impact? 
          Research recent developments, evaluate innovative defense strategies, and predict the future risks that organizations might face.
          <br/><br/>
          <em>
            <strong>Self-Directed Learning (Race, 2020):</strong> Write a short report analyzing a recent cyber incident and propose future cybersecurity measures.
          </em>
        </p>
      </div>

      {/* Retrieval Practice: Quiz Preview */}
      <div className="content-card">
        <h2>Knowledge Quiz</h2>
        <p>
          After exploring the trends and strategies, test your understanding with a scenario‑based quiz. 
          This quiz is designed using retrieval practice techniques to reinforce long‑term memory.
        </p>
      </div>

      {/* Navigation Button */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/quiz5')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson5Door;
