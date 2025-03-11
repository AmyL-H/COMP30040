// src/components/UniversalQuiz.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UniversalQuiz.css';

const UniversalQuiz = ({ 
  questions, 
  backRoute, 
  title, 
  currentLessonId, 
  nextLessonId, 
  retakeRoute, 
  nextRoute 
}) => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Scroll to top when quiz is submitted
  useEffect(() => {
    const topElement = document.getElementById('top');
    if (topElement) {
      topElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [submitted]);

  const handleMCAnswer = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleInputAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleMatchingAnswer = (questionId, term, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], [term]: value }
    }));
  };

  const handleSubmit = () => {
    let sc = 0;
    questions.forEach(q => {
      if (q.type === 'multipleChoice' || q.type === 'fillInTheGap' || q.type === 'dragAndDrop') {
        if ((answers[q.id] || "").trim().toLowerCase() === q.correctAnswer.toLowerCase()) {
          sc += 1;
        }
      } else if (q.type === 'matching') {
        let correct = true;
        q.terms.forEach(term => {
          if ((answers[q.id] && answers[q.id][term]) !== q.correctAnswer[term]) {
            correct = false;
          }
        });
        if (correct) sc += 1;
      }
    });
    setScore(sc);
    setSubmitted(true);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);

    // Calculate percentage and maximum possible XP for this quiz
    const percentage = (sc / questions.length) * 100;
    const maxXPForQuiz = questions.length * 5;
    const currentQuizXP = sc * 5; // XP for current attempt

    // Retrieve the user from localStorage and check previously awarded XP for this lesson
    let currentUser = JSON.parse(localStorage.getItem('user')) || {};
    if (!currentUser.quizXP) {
      currentUser.quizXP = {};
    }
    // XP already awarded for this quiz (if any)
    const alreadyAwardedXP = currentUser.quizXP[currentLessonId] || 0;
    // Calculate additional XP to award (only if current attempt is higher)
    const additionalXP = Math.max(0, currentQuizXP - alreadyAwardedXP);

    // Update the user object with the best XP for this quiz
    currentUser.quizXP[currentLessonId] = Math.max(alreadyAwardedXP, currentQuizXP);
    // Also update the user's overall XP (only add additionalXP)
    currentUser.xp = (currentUser.xp || 0) + additionalXP;
    localStorage.setItem('user', JSON.stringify(currentUser));

    // Update XP on the backend
    axios.put('http://localhost:5000/api/progress/updateXP', { xpEarned: additionalXP }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => {
      console.log('XP updated', res.data);
    })
    .catch(err => {
      console.error('Failed to update XP', err.response ? err.response.data : err);
    });

    // Update lesson progress on backend if passed (percentage >= 50%)
    if (percentage >= 50) {
      axios.put('http://localhost:5000/api/progress/update', {
        lessonId: currentLessonId,
        score: percentage,
        nextLessonId: nextLessonId
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(res => {
        console.log('Progress updated', res.data);
        // Update localStorage user progress
        let updatedUser = JSON.parse(localStorage.getItem('user')) || {};
        updatedUser.progress = updatedUser.progress || {};
        updatedUser.progress[currentLessonId] = percentage;
        if (nextLessonId && updatedUser.progress[nextLessonId] === undefined) {
          updatedUser.progress[nextLessonId] = 0;
        }
        localStorage.setItem('user', JSON.stringify(updatedUser));
        window.dispatchEvent(new Event('progressUpdated'));
      })
      .catch(err => {
        console.error('Failed to update progress', err.response ? err.response.data : err);
      });
    }

    // Navigate to the Quiz Summary page with summary data
    navigate('/quiz-summary', {
      state: {
        score: sc,
        total: questions.length,
        percentage,
        xpEarned: additionalXP,
        questions,
        answers,
        backRoute,
        retakeRoute,
        nextRoute
      }
    });
  };

  const handleRetake = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="quiz-page">
      {/* Dummy element for scroll target */}
      <div id="top"></div>
      <h1 className="quiz-title">{title}</h1>
      <div className="quiz-questions">
        {questions.map(q => (
          <div key={q.id} className="quiz-question">
            <p className="question-text">{q.question}</p>
            {q.type === 'multipleChoice' && (
              <div className="options">
                {q.options.map(option => (
                  <button 
                    key={option} 
                    className={`option-button ${answers[q.id] === option ? 'selected' : ''}`}
                    onClick={() => handleMCAnswer(q.id, option)}
                    disabled={submitted}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
            {q.type === 'fillInTheGap' && (
              <input 
                type="text" 
                value={answers[q.id] || ""} 
                onChange={(e) => handleInputAnswer(q.id, e.target.value)}
                placeholder="Type your answer here"
                disabled={submitted}
              />
            )}
            {q.type === 'dragAndDrop' && (
              <div className="drag-drop-container">
                <div 
                  className="drop-zone" 
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={(e) => {
                    const droppedValue = e.dataTransfer.getData("text/plain");
                    setAnswers(prev => ({ ...prev, [q.id]: droppedValue }));
                  }}
                >
                  {answers[q.id] ? answers[q.id] : "Drag the correct word here"}
                </div>
                <div className="draggable-options">
                  {q.options.map(option => (
                    <div 
                      key={option} 
                      className="draggable-option" 
                      draggable={!submitted}
                      onDragStart={(e) => e.dataTransfer.setData("text/plain", option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {q.type === 'matching' && (
              <div className="matching-container">
                {q.terms.map(term => (
                  <div key={term} className="matching-item">
                    <span className="term">{term}</span>
                    <select 
                      value={answers[q.id] && answers[q.id][term] ? answers[q.id][term] : ""} 
                      onChange={(e) => handleMatchingAnswer(q.id, term, e.target.value)}
                      disabled={submitted}
                    >
                      <option value="">Select description</option>
                      {q.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {!submitted && (
        <button className="submit-button" onClick={handleSubmit}>Submit Answers</button>
      )}
    </div>
  );
};

export default UniversalQuiz;
