import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson1.css';

function IntroLesson1() {
  const [showTips, setShowTips] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Welcome to Lesson 1: What is Cybersecurity?</h1>

      {/* Explanation Section */}
      <section className="lesson-section">
        <p className="lesson-text">
          In this lesson, you'll embark on an exciting journey to understand the fundamentals of cybersecurity.
          You'll learn how digital systems are protected, explore the evolution of cyber defenses, and discover essential strategies
          to safeguard information. Whether you’re a complete beginner or refreshing your knowledge, we’ve got you covered!
        </p>
        <p className="lesson-text">
          To succeed, stay curious, take notes, and actively engage with the content. We’ve sprinkled practical tips and real-life examples
          throughout the lesson to help you grasp the concepts quickly. And don't worry—you’ll get to test your understanding with an interactive quiz at the end.
        </p>
      </section>

      {/* Fun Facts Section */}
      <section className="lesson-section">
        <h2>Fun Facts About Cybersecurity</h2>
        <div className="fun-facts">
          <div className="fact-card">
            <p>💡 <strong>Cyber Term Origin:</strong> The word "cyberspace" was coined by writer William Gibson in his 1982 novel "Neuromancer".</p>
          </div>
          <div className="fact-card">
            <p>💡 <strong>Job Growth:</strong> Cybersecurity is one of the fastest-growing career fields in tech today!</p>
          </div>
          <div className="fact-card">
            <p>💡 <strong>Phishing Alert:</strong> Over 90% of cyberattacks start with a phishing email.</p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="lesson-section">
        <h2>Tips for Success</h2>
        <button className={`toggle-button ${showTips ? "active" : ""}`} onClick={() => setShowTips(!showTips)}>
          {showTips ? 'Hide Tips' : 'Show Tips'}
        </button>
        <div className={`tips-container ${showTips ? "visible" : "hidden"}`}>
          <div className="tip-card">
            <h3>🔄 Stay Curious</h3>
            <p>Ask questions, explore beyond the lesson, and connect the dots between concepts.</p>
          </div>
          <div className="tip-card">
            <h3>📝 Take Notes</h3>
            <p>Jot down key points and terms so you can review and remember them later.</p>
          </div>
          <div className="tip-card">
            <h3>🎯 Practice Makes Perfect</h3>
            <p>Engage with our interactive quiz at the end to test your understanding and learn from any mistakes.</p>
          </div>
        </div>
      </section>

      {/* Door Interaction */}
      <section className="lesson-section door-section">
        <h2>Step into the World of Cybersecurity</h2>
        <div className="door-container" onClick={() => navigate('/cybersecurity-intro-L1')}>
          <img
            src="/images/door.png"
            alt="Door to Cybersecurity Lesson"
            className="door-image"
          />
          <p className="door-text">Click the door to begin your lesson and unlock the secrets of cybersecurity!</p>
        </div>
      </section>
    </div>
  );
}

export default IntroLesson1;
