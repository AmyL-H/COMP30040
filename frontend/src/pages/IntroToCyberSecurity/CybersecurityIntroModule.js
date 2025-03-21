import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './CybersecurityIntroModule.css';

const CybersecurityIntroModule = () => {
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

  // Listen for progress updates from lesson pages
  useEffect(() => {
    const updateProgress = () => {
      const user = JSON.parse(localStorage.getItem('user')) || {};
      const progress = user.progress || {};
      setCompletedLessons({
        lesson1: progress['lesson1'] >= 50,
        lesson2: progress['lesson2'] >= 50,
        lesson3: progress['lesson3'] >= 50,
        lesson4: progress['lesson4'] >= 50,
        lesson5: progress['lesson5'] >= 50,
      });
      setCompletedQuizzes({
        quiz1: progress['quiz1'] >= 50,
        quiz2: progress['quiz2'] >= 50,
        quiz3: progress['quiz3'] >= 50,
      });
    };
    window.addEventListener('progressUpdated', updateProgress);
    updateProgress();
    return () => window.removeEventListener('progressUpdated', updateProgress);
  }, []);

  // Course ID for this module
  const courseId = "cybersecurity";

  // Navigate to the course info page for the module
  const handleDoorClick = () => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="module-container">
      {/* Module Title & Introduction */}
      <header className="module-header">
        <h1 className="title">🚀 Introduction to Cybersecurity</h1>
        <p className="module-description">
          Welcome to the <strong>Introduction to Cybersecurity</strong> module! In this course, you'll learn the fundamentals of cybersecurity—including key principles, common threats, major incidents, and essential protection techniques. Engage with interactive quizzes, real-world case studies, and hands-on assignments to solidify your understanding.
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
            <li>Understand what cybersecurity is and its importance.</li>
            <li>Analyse major cyber threats and real-world attacks.</li>
            <li>Learn how to protect systems, networks, and personal data.</li>
            <li>Engage with interactive case studies and discussion questions.</li>
            <li>Apply your knowledge through quizzes & hands-on assignments.</li>
          </ul>
        </div>
      )}

      {/* Lesson Overview (Static List) */}
      <section className="module-section">
        <h2 className="section-title">📚 Lessons Overview</h2>
        <p>Below are the lessons in this module. A checkmark (✅) indicates that you have completed the associated quiz. To complete a lesson please proceed to the next page!</p>
        <div className="lesson-list">
          <div className="lesson-item">
            <span>Lesson 1: What is Cybersecurity?</span>
            {completedLessons.lesson1 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 2: Importance of Cybersecurity</span>
            {completedLessons.lesson2 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 3: Common Threats & Vulnerabilities</span>
            {completedLessons.lesson3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 4: Security Frameworks & Strategies</span>
            {completedLessons.lesson4 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 5: Future Trends in Cybersecurity</span>
            {completedLessons.lesson5 && <span className="completed-indicator">✅</span>}
          </div>
        </div>
      </section>

      {/* Quizzes & Assignments (Static Display) */}
      <section className="module-section">
        <h2 className="section-title">📝 Quizzes & Assignments</h2>
        <p className="module-description">
          Below are the quizzes and assignments for this module. Upon completing your associated tasks you can unlock more lessons and gain XP!
        </p>
        <div className="quiz-list">
          <div className="quiz-item">
            <span>Quiz 1: Cybersecurity Basics</span>
            {completedQuizzes.quiz1 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 2: Cybersecurity Importance</span>
            {completedQuizzes.quiz2 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 3: Cyber Threats</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 4: Security Frameworks</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 5: Cyber Trends</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>

        </div>
        <div className="assignment-list">
          <div className="assignment-item">
            <span>Assignment 1: Research a Cybersecurity Incident</span>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="module-section">
        <h2 className="section-title">Fun Facts About Cybersecurity</h2>
        <div className="fun-facts">
          <div className="fact-card">
            <p><strong>Cyber Term Origin:</strong> The word "cyberspace" was coined by writer William Gibson in his 1982 novel "Neuromancer".</p>
          </div>
          <div className="fact-card">
            <p><strong>Job Growth:</strong> Cybersecurity is one of the fastest-growing career fields in tech today!</p>
          </div>
          <div className="fact-card">
            <p><strong>Phishing Alert:</strong> Over 90% of cyberattacks start with a phishing email.</p>
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

      {/* Interactive Door Section */}
      <section className="door-section">
        <h2 className="section-title">Step Into your First Module!</h2>
        <div className="door-container" onClick={handleDoorClick}>
          <img
            src="/images/door.png"
            alt="Enter Cybersecurity Course"
            className="door-image"
          />
          <p className="door-text">Click the door to begin...</p>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityIntroModule;
