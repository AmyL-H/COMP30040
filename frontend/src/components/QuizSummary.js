import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './QuizSummary.css';

const QuizSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure state passed from UniversalQuiz
  const {
    score,
    total,
    percentage,
    xpEarned,
    questions,
    answers,
    backRoute,
    retakeRoute,
    nextRoute
  } = location.state || {};

  const correctCount = score;
  const incorrectCount = total - score;

  const handleRetake = () => {
    if (retakeRoute) {
      navigate(retakeRoute);
    } else {
      navigate(-1);
    }
  };

  const handleBack = () => {
    navigate(backRoute);
  };

  const handleNext = () => {
    if (nextRoute) {
      navigate(nextRoute);
    }
  };

  // Helper function to safely get explanation text
  const getExplanation = (q) => {
    if (!q.explanation) return "Review the lesson for more details.";
    let key;
    if (typeof answers[q.id] === 'string') {
      key = answers[q.id];
    } else {
      key = q.correctAnswer;
    }
    return q.explanation[key] || q.explanation[q.correctAnswer] || "Review the lesson for more details.";
  };

  return (
    <div className="quiz-summary-container">
      <div className="summary-header">
        <h1>Quiz Summary</h1>
        <div className="summary-progress">
          <div className="progress-ring">
            <svg className="progress-svg" viewBox="0 0 36 36">
              <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <path className="circle" strokeDasharray={`${percentage}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
              <text x="18" y="20.35" className="percentage-text">{percentage ? percentage.toFixed(0) : 0}%</text>
            </svg>
          </div>
          <div className="score-stats">
            <p>{correctCount} correct / {incorrectCount} incorrect</p>
          </div>
          <div className="xp-stats">
            <p>XP Earned: {xpEarned || 0}</p>
          </div>
        </div>
      </div>
      <div className="summary-buttons">
        <button onClick={handleRetake} className="btn retake">Retake Quiz</button>
        <button onClick={handleBack} className="btn back">Back to Lesson</button>
        {nextRoute && <button onClick={handleNext} className="btn next">Continue to Next Lesson</button>}
      </div>
      <div className="question-review-section">
        <h2>Review Your Answers</h2>
        {questions && questions.map(q => (
          <div key={q.id} className="review-card">
            <h3 className="question">{q.question}</h3>
            <p className="user-answer">
              <strong>Your Answer: </strong>
              {answers && answers[q.id]
                ? (typeof answers[q.id] === 'string'
                    ? answers[q.id]
                    : JSON.stringify(answers[q.id]))
                : 'No answer'}
            </p>
            {typeof answers[q.id] === 'string' &&
              answers[q.id].trim().toLowerCase() !== q.correctAnswer.toLowerCase() && (
              <p className="correct-answer">
                <strong>Correct Answer: </strong>{q.correctAnswer}
              </p>
            )}
            <p className="explanation">
              <strong>Explanation: </strong>{getExplanation(q)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSummary;
