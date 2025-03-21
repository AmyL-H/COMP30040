import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './QuizSummary.css';

const QuizSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    score = 0,
    total = 0,
    percentage = 0,
    xpEarned = 0,
    questions = [],
    answers = {},
    backRoute = '/',
    retakeRoute,
    nextRoute,
    courseId 
  } = location.state || {};

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && courseId) {
      const lessonNumber = location.state?.currentLessonId?.replace('lesson', '') || '';
      const quizId = `${courseId.replace(/-/g, '')}quiz${lessonNumber}`;
      const updatedUser = {
        ...user,
        xp: (user.xp || 0) + xpEarned,
        progress: {
          ...user.progress,
          [quizId]: percentage
        }
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      window.dispatchEvent(new Event('progressUpdated'));
    }
  }, []);

  const correctCount = score;
  const incorrectCount = total - score;

  const handleRetake = () => {
    navigate(retakeRoute || -1);
  };

  const handleBack = () => {
    navigate(backRoute);
  };

  const handleNext = () => {
    if (nextRoute) navigate(nextRoute);
  };

  const getExplanation = (q) => {
    if (!q.explanation) return "Review the lesson for more details.";
    let key = typeof answers[q.id] === 'string' ? answers[q.id] : q.correctAnswer;
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
              <text x="18" y="18" className="percentage-text" textAnchor="middle" dominantBaseline="middle" transform="rotate(90, 18, 18)">
                {percentage.toFixed(0)}%
              </text>
            </svg>
          </div>
          <div className="score-stats"><p>{correctCount} correct / {incorrectCount} incorrect</p></div>
          <div className="xp-stats"><p>XP Earned: {xpEarned}</p></div>
        </div>
      </div>

      <div className="summary-buttons">
        <button onClick={handleRetake} className="btn retake">Retake Quiz</button>
        <button onClick={handleBack} className="btn back">Back to Lesson</button>
        {nextRoute && <button onClick={handleNext} className="btn next">Continue to Next Lesson</button>}
      </div>

      {!nextRoute && (
        <div className="warning-message">
          <p>You did not score at least 50%. Please review the lesson content and retake the quiz to proceed to the next lesson.</p>
        </div>
      )}

      <div className="question-review-section">
        <h2>Review Your Answers</h2>
        {questions.map(q => (
          <div key={q.id} className="review-card">
            <h3 className="question">{q.question}</h3>
            <p className="user-answer"><strong>Your Answer: </strong>{answers[q.id] ?? 'No answer'}</p>
            {typeof answers[q.id] === 'string' && answers[q.id].trim().toLowerCase() !== q.correctAnswer.toLowerCase() && (
              <p className="correct-answer"><strong>Correct Answer: </strong>{q.correctAnswer}</p>
            )}
            <p className="explanation"><strong>Explanation: </strong>{getExplanation(q)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSummary;
