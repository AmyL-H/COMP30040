import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptographyIntroModule.css';

const CryptographyIntroModule = () => {
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
    quiz4: false,
    quiz5: false,
  });

  useEffect(() => {
    const updateProgress = () => {
      const user = JSON.parse(localStorage.getItem('user')) || {};
      const progress = user.progress || {};
      setCompletedLessons({
        lesson1: progress['cryptography-lesson1'] >= 50,
        lesson2: progress['cryptography-lesson2'] >= 50,
        lesson3: progress['cryptography-lesson3'] >= 50,
        lesson4: progress['cryptography-lesson4'] >= 50,
        lesson5: progress['cryptography-lesson5'] >= 50,
      });
      setCompletedQuizzes({
        quiz1: progress['cryptography-quiz1'] >= 50,
        quiz2: progress['cryptography-quiz2'] >= 50,
        quiz3: progress['cryptography-quiz3'] >= 50,
        quiz4: progress['cryptography-quiz4'] >= 50,
        quiz5: progress['cryptography-quiz5'] >= 50,
      });
    };
    window.addEventListener('progressUpdated', updateProgress);
    updateProgress();
    return () => window.removeEventListener('progressUpdated', updateProgress);
  }, []);

  const courseId = "cryptography";

  const handleDoorClick = () => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="module-container">
      <header className="module-header">
        <h1 className="title">🔐 Cryptography and Encryption</h1>
        <p className="module-description">
          Dive into cryptographic principles and techniques to secure communications. Explore symmetric and asymmetric encryption, real-world applications, and how to build a secure cryptographic system.
        </p>
      </header>

      <div className="objectives-toggle">
        <button className={`toggle-button ${showObjectives ? "active" : ""}`}
          onClick={() => setShowObjectives(!showObjectives)}>
          {showObjectives ? "Hide Learning Objectives" : "Show Learning Objectives"}
        </button>
      </div>
      {showObjectives && (
        <div className="objectives-card">
          <h2>🎯 Learning Objectives</h2>
          <ul>
            <li>Understand the fundamentals of cryptography.</li>
            <li>Differentiate between symmetric and asymmetric encryption.</li>
            <li>Explore real-world cryptographic applications.</li>
            <li>Learn about Public Key Infrastructure (PKI).</li>
            <li>Recognize challenges in breaking and defending cryptographic systems.</li>
          </ul>
        </div>
      )}

      <section className="module-section">
        <h2 className="section-title">📚 Lessons Overview</h2>
        <p>Below are the lessons in this module. A checkmark (✅) indicates that you have completed the associated quiz.</p>
        <div className="lesson-list">
          <div className="lesson-item">
            <span>Lesson 1: Introduction to Cryptography</span>
            {completedLessons.lesson1 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 2: Symmetric vs. Asymmetric Encryption</span>
            {completedLessons.lesson2 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 3: Applications of Cryptography</span>
            {completedLessons.lesson3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 4: Public Key Infrastructure (PKI)</span>
            {completedLessons.lesson4 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 5: Breaking and Defending Cryptographic Systems</span>
            {completedLessons.lesson5 && <span className="completed-indicator">✅</span>}
          </div>
        </div>
      </section>

      <section className="module-section">
        <h2 className="section-title">📝 Quizzes & Assignments</h2>
        <p className="module-description">
          Below are the quizzes and assignments for this module. To complete a quiz and mark the lesson as complete, please visit the dedicated lesson page.
        </p>
        <div className="quiz-list">
          <div className="quiz-item">
            <span>Quiz 1: Cryptography Basics</span>
            {completedQuizzes.quiz1 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 2: Encryption Methods</span>
            {completedQuizzes.quiz2 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 3: Cryptographic Applications</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 4: PKI</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 5: Cryptographic Systems</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
        </div>
        <div className="assignment-list">
          <div className="assignment-item">
            <span>Assignment 1: Analyze a Cryptographic System</span>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="module-section">
        <h2 className="section-title">Fun Facts About Cryptography & Encryption</h2>
        <div className="fun-facts">
          <div className="fact-card">
            <p><strong>Historical Breakthrough:</strong> The Enigma machine was a famous encryption device used during World War II, and its decryption was a turning point in the war.</p>
          </div>
          <div className="fact-card">
            <p><strong>Modern Relevance:</strong> Cryptography is the backbone of secure online transactions, ensuring your data remains private.</p>
          </div>
          <div className="fact-card">
            <p><strong>Quantum Computing Impact:</strong> Researchers are now developing quantum-resistant algorithms as quantum computers may break current encryption methods.</p>
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

      <section className="door-section">
        <h2 className="section-title">Step Into your Second Module!</h2>
        <div className="door-container" onClick={handleDoorClick}>
          <img src="/images/door.png" alt="Enter Cryptography Course" className="door-image" />
          <p className="door-text">Click the door to begin...</p>
        </div>
      </section>
    </div>
  );
};

export default CryptographyIntroModule;
