import React, { useState } from 'react';
import Quiz from '../../components/Quiz';
import './Lesson3.css';

function Lesson3() {
  const [showTips, setShowTips] = useState(false);
  const toggleTips = () => setShowTips(!showTips);

  return (
    <div className="lesson-page">
      <h1 className="title">Lesson 3: Common Threats and Vulnerabilities</h1>
      <section className="lesson-section">
        <h2>Understanding Cyber Threats</h2>
        <p>
          Cyber threats range from malware to phishing scams. Understanding these risks helps you better protect your systems.
        </p>
        <button className="toggle-button" onClick={toggleTips}>
          {showTips ? 'Hide Tips' : 'Show Tips'}
        </button>
        {showTips && (
          <div className="tips">
            <h3>Examples:</h3>
            <ul>
              <li>Viruses and worms</li>
              <li>Trojan horses</li>
              <li>Social engineering attacks</li>
            </ul>
          </div>
        )}
      </section>

      <section className="lesson-section">
        <h2>How to Identify Vulnerabilities</h2>
        <p>
          Learn to recognize outdated software, unsecured networks, and poor authentication practices as vulnerabilities.
        </p>
      </section>

      <h2>Quiz</h2>
      <Quiz
        question="What is a common vulnerability?"
        options={['Strong passwords', 'Outdated software', 'Updated firewalls']}
        correctAnswer="Outdated software"
      />
      <Quiz
        question="What is a Trojan horse?"
        options={['A virus disguised as legitimate software', 'An encryption method', 'A firewall']}
        correctAnswer="A virus disguised as legitimate software"
      />
    </div>
  );
}

export default Lesson3;
