import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson2Door.css';

const Lesson2Door = () => {
  const navigate = useNavigate();

  return (
    <div className="article-page">
      {/* Lesson Title & Introduction */}
      <div className="content-card">
        <h1>Lesson 2: Importance of Cybersecurity</h1>
        <p>
          Cyber threats impact individuals, businesses, and governments. Understanding their implications is crucial for protecting sensitive data.
          In this lesson, you’ll analyze the impact of cyber threats through real-world case studies, explore major cyber incidents,
          and engage in collaborative discussions to deepen your understanding.
        </p>
      </div>

      {/* Impact of Cyber Threats – Case-Based Learning */}
      <div className="content-card">
        <h2>Impact of Cyber Threats</h2>
        <p>
          Real-world scenarios such as identity theft, ransomware attacks, and data breaches show how cyber threats cause financial loss and damage reputations.
          <strong> (Case-Based Learning: Bailey & Card, 2021)</strong>
        </p>
        <ul>
          <li>Identity Theft: Loss of personal data and financial control.</li>
          <li>Ransomware: Disruption of business operations and ransom payments.</li>
          <li>Data Breach: Exposure of sensitive corporate and governmental information.</li>
        </ul>
      </div>

      {/* Major Cyber Incidents – Digital Storytelling */}
      <div className="content-card">
        <h2>Major Cyber Incidents</h2>
        <p>
          Explore incidents like the Equifax Data Breach, WannaCry ransomware, and the SolarWinds attack.
          <strong> (Digital Storytelling: Nasir et al., 2022)</strong>
        </p>
        <div className="case-study-cards">
          <div className="case-card">
            <h3>Equifax Data Breach (2017)</h3>
            <p>An incident that exposed the sensitive data of millions, leading to widespread regulatory and financial fallout.</p>
          </div>
          <div className="case-card">
            <h3>WannaCry Ransomware (2017)</h3>
            <p>A global ransomware attack that affected thousands of organizations by locking systems until a ransom was paid.</p>
          </div>
          <div className="case-card">
            <h3>SolarWinds Attack (2020)</h3>
            <p>A sophisticated supply chain attack that compromised multiple federal agencies and major corporations.</p>
          </div>
        </div>
      </div>

      {/* Case Study Analysis – Peer Discussion */}
      <div className="content-card">
        <h2>Case Study Analysis</h2>
        <p>
          Engage in peer discussions to debate the causes and consequences of these incidents.
          <strong> (Peer Discussion: Race, 2020)</strong>
        </p>
        <p>
          Visit the discussion board to share your thoughts on how these incidents could have been prevented.
        </p>
      </div>

      {/* Navigation to Quiz */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cyberquiz2')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson2Door;
