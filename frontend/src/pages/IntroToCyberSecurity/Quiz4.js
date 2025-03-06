import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz4.css';

function CyberQuiz4() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Define 7 quiz questions based on Security Frameworks content
  const quizQuestions = [
    {
      id: 1,
      type: 'multipleChoice',
      question: "What is the primary purpose of security frameworks?",
      options: ["Managing cybersecurity risks", "Hacking systems", "Increasing downtime", "Preventing employee errors"],
      correctAnswer: "Managing cybersecurity risks",
      explanation: {
        "Managing cybersecurity risks": "Correct! Security frameworks provide a systematic approach to managing and mitigating cyber risks.",
        "Hacking systems": "Incorrect. Security frameworks are used to protect systems, not to hack them.",
        "Increasing downtime": "Incorrect. They are designed to improve uptime and resilience.",
        "Preventing employee errors": "Incorrect. While training is important, this is not the primary purpose of security frameworks."
      }
    },
    {
      id: 2,
      type: 'multipleChoice',
      question: "Which framework is an international standard for information security?",
      options: ["ISO/IEC 27001", "NIST", "COBIT", "PCI DSS"],
      correctAnswer: "ISO/IEC 27001",
      explanation: {
        "ISO/IEC 27001": "Correct! ISO/IEC 27001 is the internationally recognized standard for information security management.",
        "NIST": "Incorrect. NIST provides guidelines, but ISO/IEC 27001 is the international standard.",
        "COBIT": "Incorrect. COBIT focuses on IT governance.",
        "PCI DSS": "Incorrect. PCI DSS is specific to payment card security."
      }
    },
    {
      id: 3,
      type: 'multipleChoice',
      question: "What is one key benefit of implementing security frameworks?",
      options: ["Regulatory compliance", "Increased costs", "Decreased productivity", "Fewer updates"],
      correctAnswer: "Regulatory compliance",
      explanation: {
        "Regulatory compliance": "Correct! Security frameworks help organizations meet regulatory requirements.",
        "Increased costs": "Incorrect. Although there may be initial costs, frameworks help avoid larger losses.",
        "Decreased productivity": "Incorrect. In fact, frameworks aim to enhance overall productivity by reducing risks.",
        "Fewer updates": "Incorrect. Regular updates are a part of maintaining security."
      }
    },
    {
      id: 4,
      type: 'fillInTheGap',
      question: "Security frameworks provide a structured approach to managing ______ risks.",
      correctAnswer: "cybersecurity",
      explanation: {
        "cybersecurity": "Correct! They help organizations manage cybersecurity risks effectively."
      }
    },
    {
      id: 5,
      type: 'dragAndDrop',
      question: "Drag the correct word to complete: 'The NIST framework focuses on ______, protection, detection, response, and recovery.'",
      options: ["Identify", "Oversee", "Control"],
      correctAnswer: "Identify",
      explanation: {
        "Identify": "Correct! 'Identify' is the first core function in the NIST Cybersecurity Framework.",
        "Oversee": "Incorrect. While oversight is important, it is not the core function.",
        "Control": "Incorrect. Control is part of protection, but the framework begins with 'Identify'."
      }
    },
    {
      id: 6,
      type: 'matching',
      question: "Match each framework with its primary focus:",
      terms: ["NIST", "ISO/IEC 27001", "COBIT"],
      options: [
        "Risk management and incident response",
        "International standard for information security",
        "IT governance and management",
        "A method for data encryption"
      ],
      correctAnswer: {
        "NIST": "Risk management and incident response",
        "ISO/IEC 27001": "International standard for information security",
        "COBIT": "IT governance and management"
      }
    },
    {
      id: 7,
      type: 'multipleChoice',
      question: "Which of the following is NOT typically considered a security framework?",
      options: ["NIST", "ISO/IEC 27001", "COBIT", "WPA2"],
      correctAnswer: "WPA2",
      explanation: {
        "NIST": "Incorrect. NIST is a well-known security framework.",
        "ISO/IEC 27001": "Incorrect. This is an international standard for information security.",
        "COBIT": "Incorrect. COBIT focuses on IT governance.",
        "WPA2": "Correct! WPA2 is a wireless security protocol, not a security framework."
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
      <h1 className="quiz-title">Security Frameworks Quiz</h1>
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
            <button onClick={() => navigate('/cybersecurity-intro-L4')}>Back to Lesson</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CyberQuiz4;
