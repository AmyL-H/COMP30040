import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkLesson4.css';

function NetworkLesson4() {
  const navigate = useNavigate();
  const [showThreats, setShowThreats] = useState(false);

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 4: Wireless Network Security</h1>

      {/* Overview */}
      <div className="lesson-section">
        <p className="lesson-text">
          Wireless networks provide convenience—but they also increase risk. Unlike wired networks, Wi-Fi signals can be intercepted without physical access to the infrastructure.
          Common threats include eavesdropping, rogue access points, and man-in-the-middle (MITM) attacks.
        </p>
        <p className="lesson-text">
          To defend against these risks, we rely on secure wireless protocols, encryption, and authentication techniques.
        </p>
      </div>

      {/* Protocols */}
      <div className="lesson-section">
        <h2>📡 Wireless Security Protocols</h2>
        <p className="lesson-text">
          <strong>WEP:</strong> Outdated and easily cracked. Should not be used.<br />
          <strong>WPA:</strong> Introduced stronger encryption (TKIP), but now also considered weak.<br />
          <strong>WPA2:</strong> Uses AES encryption and is widely adopted, but can be vulnerable to KRACK attacks.<br />
          <strong>WPA3:</strong> Latest standard. Offers forward secrecy, stronger password protection, and improved encryption for open networks.
        </p>
      </div>

      {/* Common Threats Toggle */}
      <div className="lesson-section">
        <h2>⚠️ Common Wireless Threats</h2>
        <button className="toggle-button" onClick={() => setShowThreats(!showThreats)}>
          {showThreats ? "Hide Threats" : "Show Threats"}
        </button>
        {showThreats && (
          <ul className="styled-list">
            <li><strong>Rogue Access Points:</strong> Malicious Wi-Fi that imitates trusted networks.</li>
            <li><strong>Packet Sniffing:</strong> Attackers intercept unencrypted data using tools like Wireshark.</li>
            <li><strong>MITM Attacks:</strong> Data is intercepted and altered in transit between client and router.</li>
            <li><strong>Brute Force Attacks:</strong> Guessing weak Wi-Fi passwords to gain access.</li>
          </ul>
        )}
      </div>

      {/* Enterprise vs. Home Setup */}
      <div className="lesson-section">
        <h2>🏢 Enterprise vs. 🏠 Home Wireless Security</h2>
        <p className="lesson-text">
          <strong>Enterprise:</strong> Typically uses WPA2-Enterprise or WPA3-Enterprise, requiring credentials via RADIUS authentication servers.<br />
          <strong>Home:</strong> Uses WPA2/WPA3-Personal with a shared pre-shared key (PSK).
        </p>
        <p className="lesson-text">
          Enterprise setups offer better control, logging, and user authentication. Home users should ensure WPA3 is enabled when available and avoid using default router passwords.
        </p>
      </div>

      {/* Diagram Placeholder */}
      <div className="lesson-section">
        <h2>📊 Wireless Network Architecture</h2>
        <p className="lesson-text">
          [Interactive Diagram Placeholder: View a Wi-Fi network with layers—router, authentication, encryption, and client devices. Visualize data flow and where threats may occur.]
        </p>
      </div>

      {/* Simulation Placeholder */}
      <div className="lesson-section">
        <h2>🧪 Wireless Configuration Practice</h2>
        <p className="lesson-text">
          [Simulated Activity Placeholder: Choose between WPA2/WPA3, set a secure passphrase, enable MAC filtering, and disable WPS in a virtual Wi-Fi setup.]
        </p>
      </div>

      {/* CTA */}
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/networkquiz4')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default NetworkLesson4;
