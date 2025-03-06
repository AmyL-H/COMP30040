import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz3.css';

function CyberQuiz3() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Define 7 quiz questions of various types based on Lesson 3 content
  const quizQuestions = [
    {
      id: 1,
      type: 'multipleChoice',
      question: "Which of the following is a common cyber threat?",
      options: ["Phishing", "Optimized coding", "Cloud storage", "Virtual meetings"],
      correctAnswer: "Phishing",
      explanation: {
        "Phishing": "Correct! Phishing involves fraudulent attempts to steal sensitive information.",
        "Optimized coding": "Incorrect. Optimized coding is a best practice, not a threat.",
        "Cloud storage": "Incorrect. Cloud storage is a technology, not a cyber threat.",
        "Virtual meetings": "Incorrect. Virtual meetings are not considered cyber threats."
      }
    },
    {
      id: 2,
      type: 'multipleChoice',
      question: "Which attack overwhelms a system to render it inoperable?",
      options: ["Denial-of-Service (DoS)", "Social engineering", "SQL Injection", "Phishing"],
      correctAnswer: "Denial-of-Service (DoS)",
      explanation: {
        "Denial-of-Service (DoS)": "Correct! DoS attacks aim to make a system unavailable by overwhelming it with traffic.",
        "Social engineering": "Incorrect. Social engineering tricks individuals rather than overwhelming systems.",
        "SQL Injection": "Incorrect. SQL Injection targets databases, not system availability directly.",
        "Phishing": "Incorrect. Phishing involves deceiving users to steal data."
      }
    },
    {
      id: 3,
      type: 'multipleChoice',
      question: "What is a key vulnerability that attackers often exploit?",
      options: ["Outdated software", "Modern encryption", "Strong passwords", "Regular updates"],
      correctAnswer: "Outdated software",
      explanation: {
        "Outdated software": "Correct! Outdated software often has unpatched vulnerabilities that attackers can exploit.",
        "Modern encryption": "Incorrect. Modern encryption strengthens security.",
        "Strong passwords": "Incorrect. Strong passwords help prevent breaches.",
        "Regular updates": "Incorrect. Regular updates help protect systems against known vulnerabilities."
      }
    },
    {
      id: 4,
      type: 'fillInTheGap',
      question: "Phishing is a form of ______ that tricks users into revealing sensitive information.",
      correctAnswer: "social engineering",
      explanation: {
        "social engineering": "Correct! Phishing is a type of social engineering that manipulates users."
      }
    },
    {
      id: 5,
      type: 'dragAndDrop',
      question: "Drag the correct word to complete: 'A ______ attack attempts to make services unavailable by flooding them with traffic.'",
      options: ["DoS", "Malware", "Spoofing"],
      correctAnswer: "DoS",
      explanation: {
        "DoS": "Correct! A Denial-of-Service (DoS) attack floods a system with traffic to overwhelm it.",
        "Malware": "Incorrect. Malware infects systems rather than solely flooding them with traffic.",
        "Spoofing": "Incorrect. Spoofing involves faking data, not overwhelming a system."
      }
    },
    {
      id: 6,
      type: 'matching',
      question: "Match each threat type with its description:",
      terms: ["Phishing", "Malware", "DoS"],
      options: [
        "Fraudulent attempt to obtain sensitive data",
        "Software designed to harm a system",
        "Attack that overloads a system to disrupt service",
        "A method to secure data"
      ],
      correctAnswer: {
        "Phishing": "Fraudulent attempt to obtain sensitive data",
        "Malware": "Software designed to harm a system",
        "DoS": "Attack that overloads a system to disrupt service"
      }
    },
    {
      id: 7,
      type: 'multipleChoice',
      question: "Which of the following is NOT considered a vulnerability?",
      options: ["Outdated software", "Weak passwords", "Lack of encryption", "Robust firewall"],
      correctAnswer: "Robust firewall",
      explanation: {
        "Outdated software": "Incorrect. Outdated software is a vulnerability.",
        "Weak passwords": "Incorrect. Weak passwords are a common vulnerability.",
        "Lack of encryption": "Incorrect. Lack of encryption increases risk.",
        "Robust firewall": "Correct! A robust firewall is a security measure, not a vulnerability."
      }
    }
  ];

  // Handlers for various question types
  const handleMCAnswer = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleInputAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleDragDrop = (questionId, value) => {
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
    quizQuestions.forEach(q => {
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
  };

  const handleRetake = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div className="quiz-page">
      <h1 className="quiz-title">Cybersecurity Threats & Vulnerabilities Quiz</h1>
      <div className="quiz-questions">
        {quizQuestions.map(q => (
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
                    handleDragDrop(q.id, droppedValue);
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
            <p>Your Score: {score} / {quizQuestions.length}</p>
          </div>
          <div className="result-actions">
            <button onClick={handleRetake}>Retake Quiz</button>
            <button onClick={() => navigate('/cybersecurity-intro-L3')}>Back to Lesson</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CyberQuiz3;
