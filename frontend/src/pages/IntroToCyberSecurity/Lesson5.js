import React, { useState } from 'react';
import Quiz from '../../components/Quiz';
import './Lesson5.css';

function Lesson5() {
  const [showExamples, setShowExamples] = useState(false);
  const toggleExamples = () => setShowExamples(!showExamples);

  return (
    <div className="lesson-page">
      <h1 className="title">Lesson 5: Future Trends in Cybersecurity</h1>

      <section className="lesson-section">
        <h2>Emerging Threats</h2>
        <p>
          As technology evolves, so do cyber threats. Future challenges include AI-driven attacks, quantum computing risks, and 
          deepfake exploitation.
        </p>
        <button className="toggle-button" onClick={toggleExamples}>
          {showExamples ? 'Hide Examples' : 'Show Examples'}
        </button>
        {showExamples && (
          <div className="examples">
            <h3>Examples:</h3>
            <ul>
              <li>AI enhancing malware sophistication.</li>
              <li>Quantum computing breaking current encryption.</li>
              <li>Deepfakes used for fraud and misinformation.</li>
            </ul>
          </div>
        )}
      </section>

      <section className="lesson-section">
        <h2>Innovative Defense Strategies</h2>
        <div className="defense-strategies">
          <div className="strategy-card">
            <h3>AI in Defense</h3>
            <p>Using predictive analytics to detect and mitigate threats.</p>
          </div>
          <div className="strategy-card">
            <h3>Post-Quantum Cryptography</h3>
            <p>Developing algorithms resistant to quantum computing threats.</p>
          </div>
          <div className="strategy-card">
            <h3>Zero Trust Architecture</h3>
            <p>Assuming breaches occur and verifying every access attempt.</p>
          </div>
        </div>
      </section>

      <h2>Quiz</h2>
      <Quiz
        question="What is a deepfake?"
        options={['Encrypted data', 'Fake video/audio', 'Malware']}
        correctAnswer="Fake video/audio"
      />
      <Quiz
        question="Which strategy is designed for a quantum computing future?"
        options={['AI in defense', 'Post-quantum cryptography', 'Zero trust architecture']}
        correctAnswer="Post-quantum cryptography"
      />
    </div>
  );
}

export default Lesson5;
