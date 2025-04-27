import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios'; //
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
    const updateUserProgress = async () => {
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

        // --- NEW CODE: Update backend about lesson completion ---
        try {
          await axios.post('/api/progress/completeLesson', {
            userId: user._id, // assuming your user object in localStorage has _id
            courseId: courseId,
            lessonId: location.state?.currentLessonId
          });
        } catch (error) {
          console.error('Error updating backend progress:', error);
        }
        // --- END NEW CODE ---
      }
    };
    
    updateUserProgress();
  }, []);


  const correctCount = score;
  const incorrectCount = total - score;

  const handleRetake = () => navigate(retakeRoute || -1);
  const handleBack = () => navigate(backRoute);
  const handleNext = () => nextRoute && navigate(nextRoute);

  const getExplanation = (q) => {
    const userAnswer = answers[q.id];

    if (
      userAnswer === undefined ||
      (typeof userAnswer === 'string' && userAnswer.trim() === '') ||
      (typeof userAnswer === 'object' && Object.values(userAnswer).every(v => !v))
    ) {
      return "You did not provide an answer. Review the lesson and try again.";
    }

    if (typeof q.correctAnswer === 'object' && typeof userAnswer === 'object') {
      const isCorrect = Object.entries(q.correctAnswer).every(
        ([key, val]) => userAnswer[key] === val
      );
      return isCorrect
        ? q.explanation?.[q.correctAnswer] || "Correct!"
        : "Review the lesson for more details.";
    }

    const isCorrect =
      typeof userAnswer === 'string' &&
      userAnswer.trim().toLowerCase() === q.correctAnswer.toLowerCase();

    return q.explanation?.[userAnswer] ||
           (isCorrect ? q.explanation?.[q.correctAnswer] : "Review the lesson for more details.");
  };

  const formatObjectAnswer = (obj) =>
    Object.entries(obj).map(([term, value]) => `${term} → ${value}`).join(', ');

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
        {nextRoute ? (
          <button onClick={handleNext} className="btn next">Continue to Next Lesson</button>
        ) : (
          <button onClick={() => navigate('/coursepage')} className="btn next">Return to Dashboard</button>
        )}
      </div>


      {percentage < 50 && (
        <div className="warning-message">
          <p>You did not score at least 50%. Please review the lesson content and retake the quiz to proceed to the next lesson.</p>
        </div>
      )}

      <div className="question-review-section">
        <h2>Review Your Answers</h2>
        {questions.map(q => (
          <div key={q.id} className="review-card">
            <h3 className="question">{q.question}</h3>
            <p className={`user-answer ${typeof answers[q.id] === 'string' && answers[q.id].trim() === '' ? 'no-answer' : ''}`}>
              <strong>Your Answer: </strong>
              {typeof answers[q.id] === 'object'
                ? formatObjectAnswer(answers[q.id])
                : answers[q.id]?.trim() || 'No answer provided'}
            </p>
            {(typeof answers[q.id] === 'string' && answers[q.id].trim().toLowerCase() !== q.correctAnswer.toLowerCase()) ||
             (typeof answers[q.id] === 'object' && JSON.stringify(answers[q.id]) !== JSON.stringify(q.correctAnswer)) ? (
              <p className="correct-answer">
                <strong>Correct Answer: </strong>
                {typeof q.correctAnswer === 'object'
                  ? formatObjectAnswer(q.correctAnswer)
                  : q.correctAnswer}
              </p>
            ) : null}
            <p className="explanation"><strong>Explanation: </strong>{getExplanation(q)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizSummary;
