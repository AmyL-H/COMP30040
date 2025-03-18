import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EthicalLesson4.css';

function EthicalHackingLesson4() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 4: Exploiting Vulnerabilities</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Exploiting vulnerabilities is a critical skill for ethical hackers. In this lesson, we discuss both manual and automated methods for exploiting weaknesses in systems.
          You will learn how attackers might use these techniques in a controlled environment and the ethical considerations that come with testing a system’s defenses.
        </p>
        <p className="lesson-text">
          It is important to note that ethical hackers only exploit vulnerabilities with proper authorization and follow strict guidelines to ensure no harm is done.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Simulation</h2>
        <p className="lesson-text">
          [Interactive Simulation Placeholder: Engage in a hands-on lab where you simulate the exploitation of a known vulnerability in a safe environment. Observe the difference between manual exploitation techniques and automated tools.]
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Scenario Walkthrough</h2>
        <p className="lesson-text">
          Follow a step-by-step case study that demonstrates the exploitation process from identifying a vulnerability to successfully breaching a system.
          This walkthrough helps reduce cognitive load by breaking down the process into manageable steps.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Ethical Considerations</h2>
        <p className="lesson-text">
          Reflect on the ethical implications of exploiting vulnerabilities. Consider:
          <br/><br/>
          - The balance between thorough testing and the risk of unintentional damage.
          <br/>
          - The legal boundaries and the importance of obtaining proper authorization.
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/quiz4')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default EthicalHackingLesson4;
