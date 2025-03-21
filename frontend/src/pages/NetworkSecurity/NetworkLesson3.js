import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkLesson3.css';

function NetworkLesson3() {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState({
    segmentation: false,
    accessControl: false,
    encryption: false,
    updates: false,
    monitoring: false,
  });

  const toggleItem = (item) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 3: Securing Networks</h1>

      {/* Introduction */}
      <div className="lesson-section">
        <p className="lesson-text">
          Network security is not just about tools—it's a strategy. Securing networks involves layers of proactive defense to prevent breaches and detect threats early.
        </p>
        <p className="lesson-text">
          This includes implementing network segmentation, access control lists (ACLs), strong encryption policies, and regular system patching. Monitoring and logging help detect unauthorized behavior in real-time.
        </p>
      </div>

      {/* Best Practices */}
      <div className="lesson-section">
        <h2>🛡️ Best Practices for Network Security</h2>
        <p className="lesson-text">
          Tap each item below to check off your understanding:
        </p>
        <div className="checklist">
          <label className="check-item">
            <input type="checkbox" checked={checkedItems.segmentation} onChange={() => toggleItem('segmentation')} />
            <span><strong>Network Segmentation:</strong> Isolate critical systems and reduce attack surfaces.</span>
          </label>
          <label className="check-item">
            <input type="checkbox" checked={checkedItems.accessControl} onChange={() => toggleItem('accessControl')} />
            <span><strong>Access Control:</strong> Use principle of least privilege and multi-factor authentication (MFA).</span>
          </label>
          <label className="check-item">
            <input type="checkbox" checked={checkedItems.encryption} onChange={() => toggleItem('encryption')} />
            <span><strong>Encryption:</strong> Protect data in transit and at rest using SSL, TLS, and IPsec.</span>
          </label>
          <label className="check-item">
            <input type="checkbox" checked={checkedItems.updates} onChange={() => toggleItem('updates')} />
            <span><strong>Regular Updates:</strong> Apply patches promptly to close known vulnerabilities.</span>
          </label>
          <label className="check-item">
            <input type="checkbox" checked={checkedItems.monitoring} onChange={() => toggleItem('monitoring')} />
            <span><strong>Monitoring:</strong> Use IDS/IPS and log analyzers to detect and respond to threats.</span>
          </label>
        </div>
      </div>

      {/* Hands-On Simulation */}
      <div className="lesson-section">
        <h2>🧪 Hands-On Lab Preview</h2>
        <p className="lesson-text">
          In a real-world lab, you'd configure a virtual firewall to block unnecessary ports, set up VLANs for segmentation, and test your rules with ping and traceroute.
        </p>
        <p className="lesson-text">
          Here’s a basic example of a firewall rule:
        </p>
        <pre className="code-snippet">
          {`# Allow SSH only from admin subnet
iptables -A INPUT -p tcp --dport 22 -s 192.168.1.0/24 -j ACCEPT
iptables -A INPUT -p tcp --dport 22 -j DROP`}
        </pre>
      </div>

      {/* Navigation */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/networkquiz3')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default NetworkLesson3;
