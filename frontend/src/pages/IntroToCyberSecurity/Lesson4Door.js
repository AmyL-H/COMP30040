import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson4Door.css';

const Lesson4Door = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  
  const quizQuestions = [
    {
      question: "What is the purpose of security frameworks?",
      options: ["Managing cybersecurity risks", "Hacking systems", "Slowing down internet", "Preventing device sales"],
      correctAnswer: "Managing cybersecurity risks"
    },
    {
      question: "Which framework is an international standard for information security?",
      options: ["ISO/IEC 27001", "COBIT", "NIST", "GDPR"],
      correctAnswer: "ISO/IEC 27001"
    },
    {
      question: "What is a key benefit of security frameworks?",
      options: ["Regulatory compliance", "More network traffic", "Faster internet", "Preventing software updates"],
      correctAnswer: "Regulatory compliance"
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
        <h1>Lesson 4: Security Frameworks</h1>
        <p>
          Security frameworks provide structured approaches to managing cybersecurity risks. They help organizations protect their assets.
        </p>
      </div>

      <div className="content-card">
        <h2>Common Security Frameworks</h2>
        <ul>
          <li><strong>NIST:</strong> Identifies, protects, and responds to cyber threats.</li>
          <li><strong>ISO/IEC 27001:</strong> International standard for information security.</li>
          <li><strong>COBIT:</strong> Focuses on IT governance and management.</li>
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
        <button onClick={() => navigate('/lesson/quiz4')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson4Door;
