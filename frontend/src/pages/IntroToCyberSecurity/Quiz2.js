import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz2.css';

function CyberQuiz2() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // 7 quiz questions with different types based on Lesson 2 content
  const quizQuestions = [
    {
      id: 1,
      type: 'multipleChoice',
      question: "What is one major impact of cyber threats?",
      options: ["Financial loss", "Enhanced security", "Increased productivity", "Faster internet"],
      correctAnswer: "Financial loss",
      explanation: {
        "Financial loss": "Correct! Cyber threats can lead to significant financial losses through fraud, ransom payments, and remediation costs.",
        "Enhanced security": "Incorrect. Cyber threats compromise security rather than enhancing it.",
        "Increased productivity": "Incorrect. Cyber threats typically disrupt productivity.",
        "Faster internet": "Incorrect. Internet speed is unrelated to cybersecurity impacts."
      }
    },
    {
      id: 2,
      type: 'multipleChoice',
      question: "Which major cyber incident occurred in 2017?",
      options: ["Equifax Data Breach", "SolarWinds Attack", "Target Data Breach", "Facebook Leak"],
      correctAnswer: "Equifax Data Breach",
      explanation: {
        "Equifax Data Breach": "Correct! The Equifax breach in 2017 exposed sensitive data of millions, causing extensive fallout.",
        "SolarWinds Attack": "Incorrect. The SolarWinds attack occurred later, around 2020.",
        "Target Data Breach": "Incorrect. Although significant, the Target breach was not in 2017.",
        "Facebook Leak": "Incorrect. There was no major Facebook leak in 2017."
      }
    },
    {
      id: 3,
      type: 'multipleChoice',
      question: "What is one major cause of cyberattacks?",
      options: ["Weak passwords", "High-speed internet", "Increased device sales", "Gaming community"],
      correctAnswer: "Weak passwords",
      explanation: {
        "Weak passwords": "Correct! Weak or reused passwords are one of the primary vulnerabilities exploited by attackers.",
        "High-speed internet": "Incorrect. High-speed internet does not cause cyberattacks.",
        "Increased device sales": "Incorrect. While more devices may increase exposure, weak passwords are a direct cause.",
        "Gaming community": "Incorrect. The gaming community is not a cause of cyberattacks."
      }
    },
    {
      id: 4,
      type: 'fillInTheGap',
      question: "Cybersecurity aims to protect sensitive ______ and data from unauthorized access.",
      correctAnswer: "information",
      explanation: {
        "information": "Correct! Cybersecurity is focused on protecting sensitive information and data."
      }
    },
    {
      id: 5,
      type: 'dragAndDrop',
      question: "Drag the correct word to complete: 'A major cyber incident can lead to a ______ data breach.'",
      options: ["massive", "tiny", "minor"],
      correctAnswer: "massive",
      explanation: {
        "massive": "Correct! Major incidents typically result in massive data breaches with widespread impact.",
        "tiny": "Incorrect. Data breaches from major incidents are usually not tiny.",
        "minor": "Incorrect. A minor breach would not follow a major incident."
      }
    },
    {
      id: 6,
      type: 'matching',
      question: "Match each cyber incident with its description:",
      terms: ["Equifax Data Breach", "WannaCry Ransomware", "SolarWinds Attack"],
      options: [
        "Exposed sensitive data of millions leading to financial fallout",
        "A global ransomware attack that locked systems until a ransom was paid",
        "A sophisticated supply chain attack compromising federal agencies"
      ],
      correctAnswer: {
        "Equifax Data Breach": "Exposed sensitive data of millions leading to financial fallout",
        "WannaCry Ransomware": "A global ransomware attack that locked systems until a ransom was paid",
        "SolarWinds Attack": "A sophisticated supply chain attack compromising federal agencies"
      }
    },
    {
      id: 7,
      type: 'multipleChoice',
      question: "Which of the following is NOT a direct impact of cyber threats?",
      options: ["Financial loss", "Data breaches", "Reputational damage", "Enhanced trust"],
      correctAnswer: "Enhanced trust",
      explanation: {
        "Financial loss": "Incorrect. Financial loss is a direct impact of cyber threats.",
        "Data breaches": "Incorrect. Data breaches are a common outcome of cyber attacks.",
        "Reputational damage": "Incorrect. Cyber threats can lead to reputational damage.",
        "Enhanced trust": "Correct! Cyber threats reduce trust rather than enhance it."
      }
    }
  ];

  // Handlers for different question types
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
      <h1 className="quiz-title">Cybersecurity Knowledge Quiz</h1>
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
            <button onClick={() => navigate('/cybersecurity-intro-L2')}>Back to Lesson</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CyberQuiz2;
