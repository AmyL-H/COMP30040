import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz5.css';

function CyberQuiz5() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // 7 questions based on Lesson 5: Future Trends in Cybersecurity
  const quizQuestions = [
    {
      id: 1,
      type: 'multipleChoice',
      question: "What is a future trend in cybersecurity?",
      options: ["AI-driven attacks", "Slower networks", "Manual encryption", "No passwords"],
      correctAnswer: "AI-driven attacks",
      explanation: {
        "AI-driven attacks": "Correct! AI-driven attacks are expected to evolve, making them a significant future threat.",
        "Slower networks": "Incorrect. Future trends focus on evolving threats rather than network speed reductions.",
        "Manual encryption": "Incorrect. Automation and advanced techniques are replacing manual processes.",
        "No passwords": "Incorrect. Although passwordless systems are emerging, they are not the trend described here."
      }
    },
    {
      id: 2,
      type: 'multipleChoice',
      question: "Which strategy is designed for post-quantum security?",
      options: ["Post-quantum cryptography", "Stronger firewalls", "Faster internet", "Longer passwords"],
      correctAnswer: "Post-quantum cryptography",
      explanation: {
        "Post-quantum cryptography": "Correct! Post-quantum cryptography aims to develop encryption methods that can withstand quantum computing threats.",
        "Stronger firewalls": "Incorrect. While important, firewalls do not address the quantum computing threat.",
        "Faster internet": "Incorrect. Internet speed is unrelated to encryption strategies.",
        "Longer passwords": "Incorrect. Longer passwords help, but they don't guarantee protection against quantum attacks."
      }
    },
    {
      id: 3,
      type: 'multipleChoice',
      question: "What is a deepfake typically used for?",
      options: ["Fraud and misinformation", "Better encryption", "Speeding up networks", "Secure messaging"],
      correctAnswer: "Fraud and misinformation",
      explanation: {
        "Fraud and misinformation": "Correct! Deepfakes use synthetic media to mislead audiences and spread misinformation.",
        "Better encryption": "Incorrect. Deepfakes are unrelated to encryption methods.",
        "Speeding up networks": "Incorrect. They have no role in network performance.",
        "Secure messaging": "Incorrect. Secure messaging relies on robust encryption, not deepfake technology."
      }
    },
    {
      id: 4,
      type: 'fillInTheGap',
      question: "Zero-trust architecture operates on the principle: 'never ______, always verify.'",
      correctAnswer: "trust",
      explanation: {
        "trust": "Correct! The zero-trust model emphasizes that systems should never automatically trust any entity."
      }
    },
    {
      id: 5,
      type: 'dragAndDrop',
      question: "Drag the correct word to complete: 'Quantum computing poses a threat to ______ encryption.'",
      options: ["classical", "robust", "modern"],
      correctAnswer: "classical",
      explanation: {
        "classical": "Correct! Quantum computing may break many classical encryption schemes.",
        "robust": "Incorrect. Although robust encryption is needed, the threat is specifically to classical methods.",
        "modern": "Incorrect. Modern encryption often incorporates quantum-resistant features."
      }
    },
    {
      id: 6,
      type: 'matching',
      question: "Match each emerging trend with its focus:",
      terms: ["AI-driven attacks", "Post-quantum cryptography", "Deepfakes"],
      options: [
        "Exploiting vulnerabilities using machine learning",
        "Developing encryption resistant to quantum computing",
        "Using synthetic media to spread misinformation",
        "Improving system speed"
      ],
      correctAnswer: {
        "AI-driven attacks": "Exploiting vulnerabilities using machine learning",
        "Post-quantum cryptography": "Developing encryption resistant to quantum computing",
        "Deepfakes": "Using synthetic media to spread misinformation"
      }
    },
    {
      id: 7,
      type: 'multipleChoice',
      question: "Which of the following best describes Zero-Trust Architecture?",
      options: ["Never trust, always verify", "Trust by default", "Always block all traffic", "Allow all internal traffic"],
      correctAnswer: "Never trust, always verify",
      explanation: {
        "Never trust, always verify": "Correct! Zero-Trust Architecture is built on the principle of 'never trust, always verify.'",
        "Trust by default": "Incorrect. Zero-trust is the opposite of trust by default.",
        "Always block all traffic": "Incorrect. Zero-trust does not block all traffic; it verifies continuously.",
        "Allow all internal traffic": "Incorrect. Zero-trust requires verification even for internal traffic."
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
      <h1 className="quiz-title">Future Trends in Cybersecurity Quiz</h1>
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
            <button onClick={() => navigate('/cybersecurity-intro-L5')}>Back to Lesson</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CyberQuiz5;
