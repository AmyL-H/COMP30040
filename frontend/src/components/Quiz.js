import React, { useState } from 'react';
import './Quiz.css';

const Quiz = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
    setIsCorrect(option === correctAnswer);
  };

  return (
    <div className="quiz-container">
      <h3 className="quiz-question">{question}</h3>
      <ul className="quiz-options">
        {options.map((option, index) => (
          <li
            key={index}
            className={`quiz-option ${showFeedback ? (option === correctAnswer ? 'correct' : option === selectedOption ? 'incorrect' : '') : ''}`}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {showFeedback && (
        <div className="quiz-feedback">
          {isCorrect ? 'Correct!' : 'Incorrect. Try again!'}
        </div>
      )}
    </div>
  );
};

export default Quiz;
