import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkLesson5.css';

function NetworkSecurityLesson5() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 5: Network Vulnerability Assessments</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Vulnerability assessments and penetration testing are essential for identifying and mitigating weaknesses within a network. 
          These assessments use a variety of tools, such as Nmap for scanning and Nessus for vulnerability detection, to uncover security gaps before attackers can exploit them.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Vulnerability Scanning Tools</h2>
        <p className="lesson-text">
          Tools such as <strong>Nmap</strong> and <strong>Nessus</strong> are commonly used to scan networks for open ports, misconfigurations, and software vulnerabilities.
          These tools help security professionals proactively manage risks by identifying areas that need remediation.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Best Practices for Vulnerability Management</h2>
        <p className="lesson-text">
          Effective vulnerability management includes regular scans, timely patching, and continuous monitoring.
          A comprehensive approach also involves prioritizing vulnerabilities based on risk, and implementing remediation measures to mitigate potential impacts.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Ethical Considerations</h2>
        <p className="lesson-text">
          Conducting vulnerability assessments comes with ethical and legal responsibilities. It is crucial to obtain proper authorization before testing,
          and to report findings in a manner that supports remediation without exposing sensitive information to unnecessary risk.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Lab & Group Discussion</h2>
        <p className="lesson-text">
          [Interactive Lab Placeholder: Use a simulated vulnerability scanning tool to identify weaknesses in a virtual network environment.]
          <br/><br/>
          Engage in group discussions to analyze real-world breach case studies and debate the most effective vulnerability management strategies.
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/networkquiz5')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default NetworkSecurityLesson5;
