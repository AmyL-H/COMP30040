import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson3Door.css';

const Lesson3Door = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  
  const quizQuestions = [
    {
      question: "What is a common cyber threat?",
      options: ["Phishing", "Fast internet", "Long passwords", "Frequent updates"],
      correctAnswer: "Phishing"
    },
    {
      question: "Which attack overwhelms a system to disrupt service?",
      options: ["Denial-of-Service (DoS)", "Data Breach", "Firewall Breach", "Malware Infection"],
      correctAnswer: "Denial-of-Service (DoS)"
    },
    {
      question: "What is a key vulnerability in software?",
      options: ["Outdated software", "Encrypted data", "Secure passwords", "Multi-factor authentication"],
      correctAnswer: "Outdated software"
    }
  ];

  const handleAnswerSelection = (questionIndex, answer) => {
    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answer }));
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  return (
    <div className="article-page">
      <div className="content-card">
        <h1>Lesson 3: Common Threats and Vulnerabilities</h1>
        <p>
          Cyber threats exploit vulnerabilities in digital systems. Understanding these risks helps users protect their data and devices.
        </p>
      </div>

      <div className="content-card">
        <h2>Major Cyber Threats</h2>
        <ul>
          <li><strong>Phishing:</strong> Fraudulent attempts to obtain sensitive data.</li>
          <li><strong>Malware:</strong> Software designed to damage or exploit devices.</li>
          <li><strong>Denial-of-Service (DoS):</strong> Overwhelms a system to render it inoperable.</li>
        </ul>
      </div>

      <div className="content-card quiz-card">
        <h2>Cybersecurity Knowledge Quiz</h2>
        {quizQuestions.map((q, index) => (
          <div key={index} className="quiz-question">
            <p className="quiz-question-text">{q.question}</p>
            <div className="quiz-options">
              {q.options.map(option => (
                <button 
                  key={option} 
                  className={`quiz-option ${selectedAnswers[index] === option ? "selected" : ""}`} 
                  onClick={() => handleAnswerSelection(index, option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button className="submit-button" onClick={checkAnswers}>Submit Answers</button>
        {showResults && (
          <div className="quiz-results">
            {quizQuestions.map((q, index) => (
              <p key={index} className={selectedAnswers[index] === q.correctAnswer ? "correct" : "incorrect"}>
                {selectedAnswers[index] === q.correctAnswer ? "✅ Correct!" : `❌ Incorrect! The correct answer was: ${q.correctAnswer}`}
              </p>
            ))}
          </div>
        )}
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/quiz3')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson3Door;
