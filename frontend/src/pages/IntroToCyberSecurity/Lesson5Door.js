import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson5Door.css';

const Lesson5Door = () => {
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  
  const quizQuestions = [
    {
      question: "What is a future trend in cybersecurity?",
      options: ["AI-driven attacks", "Slower networks", "Manual encryption", "No passwords"],
      correctAnswer: "AI-driven attacks"
    },
    {
      question: "Which strategy is designed for post-quantum security?",
      options: ["Post-quantum cryptography", "Stronger firewalls", "Faster internet", "Longer passwords"],
      correctAnswer: "Post-quantum cryptography"
    },
    {
      question: "What is a deepfake used for?",
      options: ["Fraud and misinformation", "Better encryption", "Speeding up networks", "Secure messaging"],
      correctAnswer: "Fraud and misinformation"
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
        <h1>Lesson 5: Future Trends in Cybersecurity</h1>
        <p>
          Emerging technologies like AI, quantum computing, and zero-trust models will shape the future of cybersecurity.
        </p>
      </div>

      <div className="content-card">
        <h2>Emerging Cybersecurity Trends</h2>
        <ul>
          <li><strong>AI-driven Attacks:</strong> Machine learning used to bypass security.</li>
          <li><strong>Post-Quantum Cryptography:</strong> Encryption resistant to quantum computing threats.</li>
          <li><strong>Zero-Trust Architecture:</strong> Continuous verification for system access.</li>
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
        <button onClick={() => navigate('/lesson/quiz5')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson5Door;
