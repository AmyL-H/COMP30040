import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkLesson3.css';

function NetworkSecurityLesson3() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 3: Securing Networks</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Securing networks involves a multifaceted approach to protect data and infrastructure from unauthorized access and attacks.
          Key techniques include network segmentation (dividing a network into smaller parts), implementing strict access control, and encrypting data in transit and at rest.
        </p>
        <p className="lesson-text">
          These measures help minimize the risk of compromise and limit the spread of an attack if one segment is breached.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Best Practices for Network Security</h2>
        <p className="lesson-text">
          Consider these best practices:
        </p>
        <ul>
          <li><strong>Network Segmentation:</strong> Isolate sensitive data to reduce the attack surface.</li>
          <li><strong>Access Control:</strong> Use strict authentication and authorization measures.</li>
          <li><strong>Encryption:</strong> Encrypt data in transit to prevent interception.</li>
          <li><strong>Regular Updates:</strong> Keep systems and software up to date to patch vulnerabilities.</li>
        </ul>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Checklist & Hands-On Lab</h2>
        <p className="lesson-text">
          [Interactive Checklist Placeholder: As you review each best practice, mark it off to reinforce learning.]
          Additionally, experiment with a simulated environment where you configure a virtual firewall and test segmentation strategies.
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/networkquiz3')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default NetworkSecurityLesson3;
