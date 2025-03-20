import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './EthicalHackingIntroModule.css';

const EthicalHackingIntroModule = () => {
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
        lesson1: progress['ethical-hacking-lesson1'] >= 50,
        lesson2: progress['ethical-hacking-lesson2'] >= 50,
        lesson3: progress['ethical-hacking-lesson3'] >= 50,
        lesson4: progress['ethical-hacking-lesson4'] >= 50,
        lesson5: progress['ethical-hacking-lesson5'] >= 50,
      });
      setCompletedQuizzes({
        quiz1: progress['ethical-hacking-quiz1'] >= 50,
        quiz2: progress['ethical-hacking-quiz2'] >= 50,
        quiz3: progress['ethical-hacking-quiz3'] >= 50,
        quiz4: progress['ethical-hacking-quiz4'] >= 50,
        quiz5: progress['ethical-hacking-quiz5'] >= 50,
      });
    };
    window.addEventListener('progressUpdated', updateProgress);
    updateProgress();
    return () => window.removeEventListener('progressUpdated', updateProgress);
  }, []);

  const courseId = "ethical-hacking";

  const handleDoorClick = () => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className="module-container">
      <header className="module-header">
        <h1 className="title">🔓 Ethical Hacking and Penetration Testing</h1>
        <p className="module-description">
          Gain hands-on hacking experience ethically. Learn penetration testing methodologies, tools, and techniques to identify and exploit vulnerabilities in a controlled environment.
        </p>
      </header>

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
            <li>Understand the fundamentals of ethical hacking.</li>
            <li>Learn penetration testing methodologies and techniques.</li>
            <li>Identify and exploit vulnerabilities ethically.</li>
            <li>Develop skills to report and remediate security issues.</li>
            <li>Apply ethical hacking practices to secure systems.</li>
          </ul>
        </div>
      )}

      <section className="module-section">
        <h2 className="section-title">📚 Lessons Overview</h2>
        <p>Below are the lessons in this module. A checkmark (✅) indicates that you have completed the associated quiz.</p>
        <div className="lesson-list">
          <div className="lesson-item">
            <span>Lesson 1: Introduction to Ethical Hacking</span>
            {completedLessons.lesson1 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 2: Penetration Testing Methodologies</span>
            {completedLessons.lesson2 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 3: Ethical Hacking Tools and Techniques</span>
            {completedLessons.lesson3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 4: Exploiting Vulnerabilities</span>
            {completedLessons.lesson4 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="lesson-item">
            <span>Lesson 5: Reporting and Remediation</span>
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
            <span>Quiz 1: Ethical Hacking Basics</span>
            {completedQuizzes.quiz1 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 2: Penetration Testing Techniques</span>
            {completedQuizzes.quiz2 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 3: Ethical Hacking</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 4: Exploiting Vulnerabilities</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
          <div className="quiz-item">
            <span>Quiz 5: Reporting & Remediation</span>
            {completedQuizzes.quiz3 && <span className="completed-indicator">✅</span>}
          </div>
        </div>
        <div className="assignment-list">
          <div className="assignment-item">
            <span>Assignment 1: Ethical Hacking Report</span>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="module-section">
        <h2 className="section-title">Fun Facts About Ethical Hacking</h2>
        <div className="fun-facts">
          <div className="fact-card">
            <p><strong>White Hat Pioneers:</strong> Ethical hacking began as a method for companies to proactively find vulnerabilities before they could be exploited by malicious hackers.</p>
          </div>
          <div className="fact-card">
            <p><strong>Bug Bounties:</strong> Major companies now offer bug bounty programs that reward ethical hackers for identifying security flaws.</p>
          </div>
          <div className="fact-card">
            <p><strong>Legal Hacking:</strong> Ethical hacking is legal when performed with proper authorization and is essential for improving overall cybersecurity.</p>
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
        <h2 className="section-title">Step Into your Final Module!</h2>
        <div className="door-container" onClick={handleDoorClick}>
          <img src="/images/door.png" alt="Enter Ethical Hacking Course" className="door-image" />
          <p className="door-text">Click the door to begin...</p>
        </div>
      </section>
    </div>
  );
};

export default EthicalHackingIntroModule;
