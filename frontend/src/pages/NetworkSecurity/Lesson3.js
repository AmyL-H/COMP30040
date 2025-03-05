import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson3.css';

function NetworkLesson3() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 3: Securing Networks</h1>
      
      {/* Text Explanation */}
      <section className="lesson-section">
        <p className="lesson-text">
          In this lesson, you'll learn about techniques to secure both wired and wireless networks. Explore best practices such as segmentation, access control, and encryption methods that protect network integrity.
        </p>
      </section>
      
      {/* Animated Checklist */}
      <section className="lesson-section">
        <h2>Animated Checklist</h2>
        <p className="lesson-text">
          [Animated Checklist Placeholder: Watch as best practices are ticked off as they are explained]
        </p>
      </section>
      
      {/* Interactive Quiz & Hands-On Lab */}
      <section className="lesson-section">
        <h2>Interactive Quiz & Hands-On Lab</h2>
        <p className="lesson-text">
          [Interactive Quiz and Lab Placeholder: Test your understanding and try configuring a virtual firewall]
        </p>
      </section>
    </div>
  );
}

export default NetworkLesson3;
