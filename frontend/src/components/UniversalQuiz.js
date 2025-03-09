import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './UniversalQuiz.css';

const UniversalQuiz = ({ questions, backRoute, title }) => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Scroll to top when submitted changes
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
            {submitted && (
              <div className="feedback">
                {q.type !== 'matching' ? (
                  (answers[q.id] || "").trim().toLowerCase() === q.correctAnswer.toLowerCase() ? (
                    <p className="correct-feedback">✅ Correct! {q.explanation[answers[q.id]]}</p>
                  ) : (
                    <p className="incorrect-feedback">❌ Incorrect. {q.explanation[answers[q.id]] || "Review the lesson and try again."}</p>
                  )
                ) : (
                  (() => {
                    let correct = true;
                    q.terms.forEach(term => {
                      if ((answers[q.id] && answers[q.id][term]) !== q.correctAnswer[term]) {
                        correct = false;
                      }
                    });
                    return correct ? <p className="correct-feedback">✅ Correct match!</p> : <p className="incorrect-feedback">❌ Incorrect match. Review the lesson and try again.</p>;
                  })()
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {!submitted ? (
        <button className="submit-button" onClick={handleSubmit}>Submit Answers</button>
      ) : (
        <div className="result-container">
          <div className="score-animation">
            <p>Your Score: {score} / {questions.length}</p>
          </div>
          <div className="result-actions">
            <button onClick={handleRetake}>Retake Quiz</button>
            <button onClick={() => navigate(backRoute)}>Back to Lesson</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UniversalQuiz;
