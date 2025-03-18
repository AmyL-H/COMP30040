import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EthicalLesson2.css';

function EthicalHackingLesson2() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 2: Penetration Testing Methodologies</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Penetration testing is a structured process that involves multiple phases:
          <strong> Reconnaissance</strong> (gathering information about targets), 
          <strong> Scanning</strong> (identifying vulnerabilities), 
          <strong> Exploitation</strong> (leveraging discovered weaknesses), and 
          <strong> Reporting</strong> (documenting findings for remediation).
          This methodical approach ensures that each aspect of security is systematically tested.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Phases of Penetration Testing</h2>
        <table>
          <thead>
            <tr>
              <th>Phase</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Reconnaissance</td>
              <td>Collecting data about the target system using open-source intelligence.</td>
            </tr>
            <tr>
              <td>Scanning</td>
              <td>Identifying active hosts, open ports, and vulnerabilities using automated tools.</td>
            </tr>
            <tr>
              <td>Exploitation</td>
              <td>Attempting to breach security defenses to verify vulnerabilities.</td>
            </tr>
            <tr>
              <td>Reporting</td>
              <td>Documenting the findings, potential impacts, and recommendations for remediation.</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="lesson-section">
        <h2>Animated Timeline</h2>
        <p className="lesson-text">
          [Animated Timeline Placeholder: Watch a step-by-step timeline that visually sequences each phase of penetration testing with smooth transitions.]
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Concept Check</h2>
        <p className="lesson-text">
          Think about a scenario: If you were testing a company’s network, how would you move from reconnaissance to exploitation?
          Which phase do you think is most critical and why?
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/quiz2')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default EthicalHackingLesson2;
