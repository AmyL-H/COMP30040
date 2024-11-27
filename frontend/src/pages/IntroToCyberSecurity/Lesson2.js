import React, { useState } from 'react';
import Quiz from '../../components/Quiz';
import './Lesson2.css';

function Lesson2() {
  const [showTips, setShowTips] = useState(false);
  const toggleTips = () => setShowTips(!showTips);

  return (
    <div className="lesson-page">
      <h1 className="title">Lesson 2: Importance of Cybersecurity</h1>

      <section className="lesson-section">
        <h2>Impact of Cyber Threats</h2>
        <p>
          Cyber threats affect everyone — individuals, businesses, and governments. From stolen personal data to 
          global infrastructure disruptions, the consequences are severe.
        </p>
        <button className="toggle-button" onClick={toggleTips}>
          {showTips ? 'Hide Examples' : 'Show Examples'}
        </button>
        {showTips && (
          <div className="examples">
            <h3>Examples of Impacts:</h3>
            <ul>
              <li>📧 Phishing scams stealing personal information.</li>
              <li>💸 Ransomware crippling hospital systems.</li>
              <li>🌐 Data breaches exposing sensitive government data.</li>
            </ul>
          </div>
        )}
      </section>

      <section className="lesson-section">
        <h2>Case Studies: Major Cyber Incidents</h2>
        <div className="case-studies">
          <div className="case-card">
            <h3>Equifax Data Breach (2017)</h3>
            <p>
              A breach exposed personal information of over 147 million individuals, including Social Security numbers.
            </p>
          </div>
          <div className="case-card">
            <h3>WannaCry Ransomware (2017)</h3>
            <p>
              A global ransomware attack affected hundreds of thousands of computers, disrupting healthcare and transport systems.
            </p>
          </div>
          <div className="case-card">
            <h3>SolarWinds Attack (2020)</h3>
            <p>
              A sophisticated cyber-espionage campaign targeting government agencies and private companies.
            </p>
          </div>
        </div>
      </section>

      <h2>Quiz</h2>
      <Quiz
        question="What is one consequence of a ransomware attack?"
        options={['Encrypting and holding data hostage', 'Selling stolen hardware', 'Crashing servers for fun']}
        correctAnswer="Encrypting and holding data hostage"
      />
      <Quiz
        question="Which major data breach occurred in 2017?"
        options={['Equifax', 'SolarWinds', 'Target']}
        correctAnswer="Equifax"
      />
    </div>
  );
}

export default Lesson2;
