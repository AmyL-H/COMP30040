import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson2Door.css';

const Lesson2Door = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  
  const quizQuestions = [
    {
      question: "What is the impact of cyber threats?",
      options: ["Financial loss", "Enhanced security", "More social media users", "Increased gaming performance"],
      correctAnswer: "Financial loss"
    },
    {
      question: "Which major cyber incident occurred in 2017?",
      options: ["Equifax Data Breach", "SolarWinds Attack", "Target Data Breach", "Facebook Leak"],
      correctAnswer: "Equifax Data Breach"
    },
    {
      question: "What is one major cause of cyberattacks?",
      options: ["Weak passwords", "High-speed internet", "Increased device sales", "Gaming community"],
      correctAnswer: "Weak passwords"
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
        <h1>Lesson 2: Importance of Cybersecurity</h1>
        <p>
          Cyber threats impact individuals, businesses, and governments. Understanding their implications is crucial for securing personal and organizational data.
        </p>
      </div>

      <div className="content-card">
        <h2>Real-World Cyber Threats</h2>
        <ul>
          <li><strong>Phishing:</strong> Scammers impersonating legitimate entities to steal information.</li>
          <li><strong>Ransomware:</strong> Malicious software that locks systems until a ransom is paid.</li>
          <li><strong>Data Breaches:</strong> Unauthorized access leading to stolen personal and corporate data.</li>
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
        <button onClick={() => navigate('/lesson/quiz2')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson2Door;
