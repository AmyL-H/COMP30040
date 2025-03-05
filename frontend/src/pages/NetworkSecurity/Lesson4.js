import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson4.css';

function NetworkLesson4() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 4: Wireless Network Security</h1>
      
      {/* Text Explanation */}
      <section className="lesson-section">
        <p className="lesson-text">
          This lesson covers wireless network security, including standards like WEP, WPA, WPA2, and WPA3. Learn about threats such as rogue access points and eavesdropping, and discover techniques to secure wireless networks.
        </p>
      </section>
      
      {/* Animated Diagram */}
      <section className="lesson-section">
        <h2>Animated Diagram</h2>
        <p className="lesson-text">
          [Animated Diagram Placeholder: Visualize secure wireless network architecture and how data is protected]
        </p>
      </section>
      
      {/* Hands-On Activity */}
      <section className="lesson-section">
        <h2>Hands-On Activity</h2>
        <p className="lesson-text">
          [Simulation Placeholder: Configure wireless security settings and choose appropriate protocols]
        </p>
      </section>
    </div>
  );
}

export default NetworkLesson4;
