import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CybersecurityIntroModule.css';

const CybersecurityIntroModule = () => {
  const navigate = useNavigate();
  const [showObjectives, setShowObjectives] = useState(false);

  // Define the course ID for the Cybersecurity Intro Module
  const courseId = "cybersecurity";

  // Navigate to the course info page for the cybersecurity intro module
  const handleDoorClick = () => {
    navigate(`/course/${courseId}`);
  };


  return (
    <div className="module-container">
      {/* Module Title & Introduction */}
      <h1 className="title">🚀 Introduction to Cybersecurity</h1>
      <p className="module-description">
        Welcome to the **Introduction to Cybersecurity** module! This course will take you through the fundamentals of cybersecurity, including key principles, common threats, major incidents, and essential protection techniques.  
        You'll also engage in **interactive quizzes, real-world case studies, and hands-on assignments** to test your learning.
      </p>

      {/* Toggle Learning Objectives */}
      <button 
        className={`toggle-button ${showObjectives ? "active" : ""}`} 
        onClick={() => setShowObjectives(!showObjectives)}
      >
        {showObjectives ? "Hide Learning Objectives" : "Show Learning Objectives"}
      </button>
      
      {showObjectives && (
        <div className="objectives-card">
          <h2>🎯 Learning Objectives</h2>
          <ul>
            <li>🔹 Understand **what cybersecurity is** and why it's essential.</li>
            <li>🔹 Analyze **major cyber threats and real-world attacks.**</li>
            <li>🔹 Learn **how to protect systems, networks, and personal data.**</li>
            <li>🔹 Engage with **interactive case studies and discussion questions.**</li>
            <li>🔹 Apply knowledge through **quizzes & hands-on assignments.**</li>
          </ul>
        </div>
      )}

      {/* Lesson Breakdown */}
      <h2 className="section-title">📚 Lessons Overview</h2>
      <p>Click on a lesson to begin:</p>

      <div className="lesson-list">
        <button className="lesson-button" onClick={() => navigate('/cybersecurity-intro-L1')}>
          🏛️ Lesson 1: What is Cybersecurity?
        </button>
        <button className="lesson-button" onClick={() => navigate('/cybersecurity-intro-L2')}>
          🔐 Lesson 2: Importance of Cybersecurity
        </button>
        <button className="lesson-button" onClick={() => navigate('/cybersecurity-intro-L3')}>
          🚨 Lesson 3: Common Threats & Vulnerabilities
        </button>
        <button className="lesson-button" onClick={() => navigate('/cybersecurity-intro-L4')}>
          📜 Lesson 4: Security Frameworks & Strategies
        </button>
        <button className="lesson-button" onClick={() => navigate('/cybersecurity-intro-L5')}>
          🔮 Lesson 5: Future Trends in Cybersecurity
        </button>
      </div>

      {/* Fun Facts Section */}
      <section className="module-section">
        <h2>💡 Cybersecurity Fun Facts</h2>
        <div className="fun-facts">
          <div className="fact-card">💻 <strong>Cybercrime Damage:</strong> Cybercrime is expected to cost the world **$10.5 trillion annually by 2025**.</div>
          <div className="fact-card">🛡️ <strong>Hackers' Favorite Target:</strong> **Phishing emails** account for over **90% of cyberattacks.**</div>
          <div className="fact-card">🔍 <strong>Biggest Data Breach:</strong> The **Yahoo Data Breach** affected **3 billion accounts.**</div>
        </div>
      </section>

      {/* Quizzes & Assignments */}
      <h2 className="section-title">📝 Quizzes & Assignments</h2>
      <p>Test your knowledge with interactive quizzes and hands-on assignments!</p>
      
      <div className="quiz-list">
        <button className="quiz-button" onClick={() => navigate('/lesson/quiz1')}>
          📝 Quiz 1: Cybersecurity Basics
        </button>
        <button className="quiz-button" onClick={() => navigate('/lesson/quiz2')}>
          🔐 Quiz 2: Cybersecurity Importance
        </button>
        <button className="quiz-button" onClick={() => navigate('/lesson/quiz3')}>
          🚨 Quiz 3: Cyber Threats
        </button>
      </div>
      
      <div className="assignment-list">
        <button className="assignment-button" onClick={() => navigate('/lesson/assignment1')}>
          📌 Assignment 1: Research a Cybersecurity Incident
        </button>
      </div>

      {/* Interactive Door Section */}
      <section className="door-section">
        <h2>🔓 Step Into the Cybersecurity Course</h2>
        <div className="door-container" onClick={handleDoorClick}>
          <img
            src="/images/door.png"
            alt="Enter Cybersecurity Course"
            className="door-image"
          />
          <p className="door-text">Click the door to view the full course info!</p>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityIntroModule;
