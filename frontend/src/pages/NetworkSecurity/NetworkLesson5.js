import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkLesson5.css';

function NetworkSecurityLesson5() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 5: Network Vulnerability Assessments</h1>

      {/* Introduction */}
      <div className="lesson-section">
        <p className="lesson-text">
          Vulnerability assessments and penetration testing are essential techniques used by cybersecurity professionals to proactively identify, assess, and remediate network security flaws. These processes help prevent cyberattacks by revealing potential entry points before malicious actors can exploit them.
        </p>
        <p className="lesson-text">
          Assessments are part of a larger strategy of continuous monitoring and risk management. They ensure your organization stays a step ahead in the ever-evolving threat landscape.
        </p>
      </div>

      {/* Tools Overview */}
      <div className="lesson-section">
        <h2>🔍 Common Vulnerability Scanning Tools</h2>
        <ul className="styled-list">
          <li><strong>Nmap:</strong> A powerful network scanner that identifies open ports, services, and hosts on a network.</li>
          <li><strong>Nessus:</strong> A vulnerability scanner that checks for known security holes, outdated software, and misconfigurations.</li>
          <li><strong>OpenVAS:</strong> An open-source tool for scanning and vulnerability management, widely used in enterprise environments.</li>
          <li><strong>Burp Suite:</strong> Often used for web application vulnerability scanning and penetration testing.</li>
        </ul>
        <p className="lesson-text">
          These tools offer automated insights and reporting, enabling security teams to efficiently pinpoint and fix vulnerabilities.
        </p>
      </div>

      {/* Best Practices */}
      <div className="lesson-section">
        <h2>✅ Best Practices for Vulnerability Management</h2>
        <ul className="styled-list">
          <li>Schedule regular vulnerability scans and risk assessments.</li>
          <li>Maintain a prioritized list of vulnerabilities based on severity and exploitability (CVSS scoring).</li>
          <li>Apply patches promptly and consistently across systems.</li>
          <li>Document and verify remediation steps with follow-up scans.</li>
          <li>Use a vulnerability management platform or dashboard for centralized oversight.</li>
        </ul>
      </div>

      {/* Case Study */}
      <div className="lesson-section">
        <h2>📚 Case Study: The Equifax Breach (2017)</h2>
        <p className="lesson-text">
          In one of the most infamous breaches in history, Equifax failed to patch a known Apache Struts vulnerability, leading to the exposure of sensitive data of 147 million people.
          A routine scan could have identified this risk. This incident underscores the importance of timely vulnerability remediation.
        </p>
        <p className="lesson-text"><em>Takeaway:</em> Even one missed vulnerability can have massive consequences.</p>
      </div>

      {/* Ethics Section */}
      <div className="lesson-section">
        <h2>⚖️ Ethical Considerations</h2>
        <p className="lesson-text">
          Vulnerability assessments should always be conducted with full authorization. Ethical hacking (also known as "white-hat hacking") requires:
        </p>
        <ul className="styled-list">
          <li>Clear scope and written consent from system owners.</li>
          <li>Avoidance of data leaks or disruption during testing.</li>
          <li>Confidential reporting and responsible disclosure.</li>
        </ul>
        <p className="lesson-text">
          Following legal and ethical guidelines ensures that testing benefits the organization without causing harm.
        </p>
      </div>

      {/* Interactive Lab Placeholder */}
      <div className="lesson-section">
        <h2>🧪 Interactive Lab & Group Reflection</h2>
        <p className="lesson-text">
          [💻 <em>Simulation Placeholder</em>: Launch a mock network and use a simulated Nmap interface to detect services and vulnerabilities. Then, switch roles and plan a defense strategy.]
        </p>
        <p className="lesson-text">
          [🧠 <em>Discussion Prompt</em>: What is the biggest risk of running a vulnerability scan without patching results? How can teams work together to improve remediation workflows?]
        </p>
      </div>

      {/* CTA */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/networkquiz5')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default NetworkSecurityLesson5;
