import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NetworkSecurityIntroModule.css';

const NetworkSecurityIntroModule = () => {
  const navigate = useNavigate();
  const [showObjectives, setShowObjectives] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [completedLessons, setCompletedLessons] = useState({
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    lesson5: false,
  });
  const [completedQuizzes, setCompletedQuizzes] = useState({
    quiz1: false,
    quiz2: false,
    quiz3: false,
  });

  useEffect(() => {
    const updateProgress = () => {
      const user = JSON.parse(localStorage.getItem('user')) || {};
      const progress = user.progress || {};
      setCompletedLessons({
        lesson1: progress['network-security-lesson1'] >= 50,
        lesson2: progress['network-security-lesson2'] >= 50,
        lesson3: progress['network-security-lesson3'] >= 50,
        lesson4: progress['network-security-lesson4'] >= 50,
        lesson5: progress['network-security-lesson5'] >= 50,
      });
      setCompletedQuizzes({
        quiz1: progress['network-security-quiz1'] >= 50,
        quiz2: progress['network-security-quiz2'] >= 50,
        quiz3: progress['network-security-quiz3'] >= 50,
        quiz4: progress['network-security-quiz4'] >= 50,
        quiz5: progress['network-security-quiz5'] >= 50,
      });
    };
    window.addEventListener('progressUpdated', updateProgress);
    updateProgress();
    return () => window.removeEventListener('progressUpdated', updateProgress);
  }, []);

  const courseId = "network-security";

  const handleDoorClick = () => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="module-container">
      {/* Module Title & Introduction */}
      <header className="module-header">
        <h1 className="title">🌐 Network Security</h1>
        <p className="module-description">
          Explore how to secure networks from various threats. This module covers the fundamentals of network security,
          common security tools, methods for securing networks, wireless network security, and vulnerability assessments.
        </p>
      </header>

      {/* Toggle Learning Objectives */}
      <div className="objectives-toggle">
        <button 
          className={`toggle-button ${showObjectives ? "active" : ""}`}
          onClick={() => setShowObjectives(!showObjectives)}
        >
          {showObjectives ? "Hide Learning Objectives" : "Show Learning Objectives"}
        </button>
      </div>
      {showObjectives && (
        <div className="objectives-card">
          <h2>🎯 Learning Objectives</h2>
          <ul>
            <li>Understand the fundamentals of network security.</li>
            <li>Learn about common network security tools.</li>
            <li>Discover strategies for securing networks.</li>
            <li>Examine wireless network security challenges.</li>
            <li>Understand network vulnerability assessments.</li>
          </ul>
        </div>
      )}

      {/* Lessons Overview */}
      <section className="module-section">
        <h2 className="section-title">📚 Lessons Overview</h2>
        <p>Below are the lessons in this module. A checkmark (✅) indicates that you have completed the associated quiz.</p>
        <div className="lesson-list">
          <div className="lesson-item">
            <span>Lesson 1: Introduction to Network Security</span>
            {completedLessons.lesson1 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 2: Common Network Security Tools</span>
            {completedLessons.lesson2 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 3: Securing Networks</span>
            {completedLessons.lesson3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 4: Wireless Network Security</span>
            {completedLessons.lesson4 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 5: Network Vulnerability Assessments</span>
            {completedLessons.lesson5 && <span className="completed-indicator">✅</span>}
          </div>
        </div>
      </section>

      {/* Quizzes & Assignments */}
      <section className="module-section">
        <h2 className="section-title">📝 Quizzes & Assignments</h2>
        <p className="module-description">
          Below are the quizzes and assignments for this module. To complete a quiz and mark the lesson as complete, please visit the dedicated lesson page.
        </p>
        <div className="quiz-list">
          <div className="quiz-item">
            <span>Quiz 1: Network Security Basics</span>
            {completedQuizzes.quiz1 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 2: Network Security Tools</span>
            {completedQuizzes.quiz2 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 3: Securing Networks</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 4: Wireless Network Security</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 5: Network Vulnerability</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
        </div>
        <div className="assignment-list">
          <div className="assignment-item">
            <span>Assignment 1: Perform a Network Vulnerability Assessment</span>
          </div>
        </div>
      </section>

      {/* New Fun Facts Section */}
      <section className="module-section">
        <h2 className="section-title">Fun Facts About Network Security</h2>
        <div className="fun-facts">
          <div className="fact-card">
            <p><strong>ARPANET Origins:</strong> Early network security challenges on ARPANET paved the way for modern security protocols.</p>
          </div>
          <div className="fact-card">
            <p><strong>Firewall Evolution:</strong> The term "firewall" originally referred to physical firebreaks used to prevent the spread of fire, and now it’s a cornerstone of network security.</p>
          </div>
          <div className="fact-card">
            <p><strong>IoT Impact:</strong> The rise of IoT devices has significantly increased the importance of robust network security measures.</p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="module-section">
        <h2 className="section-title">Tips for Success</h2>
        <button className={`toggle-button ${showTips ? "active" : ""}`} onClick={() => setShowTips(!showTips)}>
          {showTips ? 'Hide Tips' : 'Show Tips'}
        </button>
        <div className={`tips-container ${showTips ? "visible" : "hidden"}`}>
          <div className="tip-card">
            <h3>Stay Curious</h3>
            <p>Ask questions, explore beyond the lesson, and connect the dots between concepts.</p>
          </div>
          <div className="tip-card">
            <h3>Take Notes</h3>
            <p>Jot down key points and terms so you can review and remember them later.</p>
          </div>
          <div className="tip-card">
            <h3>Practice Makes Perfect</h3>
            <p>Engage with our interactive quizzes on the lesson pages to test your understanding and learn from any mistakes.</p>
          </div>
        </div>
      </section>

      {/* Door Section */}
      <section className="door-section">
        <h2 className="section-title">Step Into your Third Module!</h2>
        <div className="door-container" onClick={handleDoorClick}>
          <img src="/images/door.png" alt="Enter Network Security Course" className="door-image" />
          <p className="door-text">Click the door to begin...</p>
        </div>
      </section>
    </div>
  );
};

export default NetworkSecurityIntroModule;
