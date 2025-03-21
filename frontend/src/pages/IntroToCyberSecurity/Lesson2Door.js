import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson2Door.css';

const Lesson2Door = () => {
  const navigate = useNavigate();
  const [showCases, setShowCases] = useState(false);
  const [showDiscussion, setShowDiscussion] = useState(false);

  return (
    <div className="article-page">
      {/* Lesson Title & Introduction */}
      <div className="content-card">
        <h1>Lesson 2: Importance of Cybersecurity</h1>
        <p>
          Cyber threats impact individuals, businesses, and governments. Understanding their implications is crucial for protecting sensitive data.
          In this lesson, you’ll analyse the impact of cyber threats through real-world case studies, explore major cyber incidents,
          and engage in collaborative discussions to deepen your understanding.
        </p>
      </div>

      {/* Impact of Cyber Threats – Case-Based Learning */}
      <div className="content-card">
        <h2>🔍 Impact of Cyber Threats</h2>
        <p>
          Cyber threats cause <span className="highlight">financial loss, operational disruption, and reputational damage</span>. Below are some major categories of cyber threats:
          <strong> (Case-Based Learning: Bailey & Card, 2021)</strong>
        </p>
        <ul className="impact-list">
          <li>💳 <strong>Identity Theft:</strong> Loss of personal data and financial control.</li>
          <li>🦠 <strong>Ransomware:</strong> Systems held hostage until a ransom is paid.</li>
          <li>🔓 <strong>Data Breach:</strong> Sensitive corporate and government information exposed.</li>
        </ul>
      </div>

      {/* Major Cyber Incidents – Digital Storytelling */}
      <div className="content-card">
        <h2>🚨 Major Cyber Incidents</h2>
        <p>
          These real-world cyber incidents showcase the devastating consequences of cyber threats.
          <strong> (Digital Storytelling: Nasir et al., 2022)</strong>
        </p>
        <button 
          className={`toggle-button ${showCases ? "active" : ""}`} 
          onClick={() => setShowCases(!showCases)}
        >
          {showCases ? 'Hide Case Studies' : 'Show Case Studies'}
        </button>

        {showCases && (
          <div className="case-study-cards">
            <div className="case-card">
              <h3>📌 Equifax Data Breach (2017)</h3>
              <p>An incident that exposed the sensitive data of millions.</p>
              <ul>
                <li><span className="bold">🛠 Cause:</span> Unpatched web vulnerability.</li>
                <li><span className="bold">🎯 Impact:</span> Financial fraud, lawsuits.</li>
                <li><span className="bold">✅ Lesson:</span> Keep software updated!</li>
              </ul>
            </div>
            <div className="case-card">
              <h3>📌 WannaCry Ransomware (2017)</h3>
              <p>A ransomware attack that affected thousands of organizations.</p>
              <ul>
                <li><span className="bold">🛠 Cause:</span> Unpatched Windows vulnerability.</li>
                <li><span className="bold">🎯 Impact:</span> Hospitals, banks, businesses affected.</li>
                <li><span className="bold">✅ Lesson:</span> Always back up data.</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Case Study Analysis – Peer Discussion */}
      <div className="content-card">
        <h2>💬 Case Study Analysis</h2>
        <p>
          Discuss and analyze cybersecurity failures. What could have been done differently?
          <strong> (Peer Discussion: Race, 2020)</strong>
        </p>
        <button 
          className={`toggle-button ${showDiscussion ? "active" : ""}`} 
          onClick={() => setShowDiscussion(!showDiscussion)}
        >
          {showDiscussion ? 'Hide Discussion Questions' : 'Show Discussion Questions'}
        </button>

        {showDiscussion && (
          <div 
            className="discussion-container discussion-clickable" 
            onClick={() => navigate('/community/module1-intro-to-cybersecurity')}
          >
            <h3 className="discussion-heading">🧠 Discussion Prompts:</h3>
            <ul>
              <li>1️⃣ Who should be held most responsible for cybersecurity—<span className="highlight">individuals, businesses, or governments?</span></li>
              <li>2️⃣ How could Equifax have prevented their data breach?</li>
              <li>3️⃣ Should governments enforce stricter cybersecurity regulations?</li>
            </ul>
            <p>💬 <span className="bold">Click here to join the discussion board to share your insights!</span></p>
          </div>
        )}

      </div>

      {/* Quiz Section */}
      <div className="content-card">
        <h2>📝 Test Your Knowledge</h2>
        <p>Apply what you've learned! Take a quick quiz to check your understanding.</p>
        <button className="quiz-button" onClick={() => navigate('/lesson/cyberquiz2')}>
          Take the Quiz
        </button>
      </div>
    </div>
  );
};

export default Lesson2Door;
