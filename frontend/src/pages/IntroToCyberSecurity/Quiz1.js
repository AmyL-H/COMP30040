import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Quiz1.css';

function CyberQuiz1() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Define 7 quiz questions with various types
  const questions = [
    {
      id: 1,
      type: 'multipleChoice',
      question: "What is the primary goal of cybersecurity?",
      options: ["Protecting digital assets", "Hacking into systems", "Slowing down the internet", "Deleting data"],
      correctAnswer: "Protecting digital assets",
      explanation: {
        "Protecting digital assets": "Great job! Cybersecurity is all about safeguarding digital assets from cyber threats.",
        "Hacking into systems": "Incorrect. Hacking is illegal and unethical. Cybersecurity defends against unauthorized access.",
        "Slowing down the internet": "Incorrect. Cybersecurity aims to protect, not impede, digital communication.",
        "Deleting data": "Incorrect. The goal is to preserve and protect data, not to delete it."
      }
    },
    {
      id: 2,
      type: 'multipleChoice',
      question: "Which decade saw the introduction of firewalls and antivirus software?",
      options: ["1970s", "1980s", "1990s", "2000s"],
      correctAnswer: "1980s",
      explanation: {
        "1970s": "Incorrect. The 1970s focused more on physical security and basic password protection.",
        "1980s": "Correct! The 1980s marked the rise of firewalls and antivirus solutions as cyber threats began to emerge.",
        "1990s": "Incorrect. While the 1990s saw rapid internet expansion, firewalls had already been introduced.",
        "2000s": "Incorrect. By the 2000s, these tools were already well established."
      }
    },
    {
      id: 3,
      type: 'multipleChoice',
      question: "What technology is used in modern cybersecurity to detect threats?",
      options: ["Artificial Intelligence", "Typewriters", "Fax Machines", "Walkie-Talkies"],
      correctAnswer: "Artificial Intelligence",
      explanation: {
        "Artificial Intelligence": "Correct! AI is increasingly used to detect and respond to cyber threats in real time.",
        "Typewriters": "Incorrect. Typewriters are outdated and not used in threat detection.",
        "Fax Machines": "Incorrect. Fax machines are not part of modern cybersecurity technology.",
        "Walkie-Talkies": "Incorrect. These devices have no role in detecting cyber threats."
      }
    },
    {
      id: 4,
      type: 'fillInTheGap',
      question: "Cybersecurity aims to protect digital ______ from unauthorized access.",
      correctAnswer: "systems",
      explanation: {
        "systems": "Correct! Cybersecurity protects digital systems, networks, and data.",
      }
    },
    {
      id: 5,
      type: 'dragAndDrop',
      question: "Drag the correct word to complete the statement: 'The CIA Triad in cybersecurity stands for Confidentiality, Integrity, and ______.'",
      options: ["Availability", "Reliability", "Security"],
      correctAnswer: "Availability",
      explanation: {
        "Availability": "Correct! The CIA Triad stands for Confidentiality, Integrity, and Availability.",
        "Reliability": "Incorrect. While important, reliability is not one of the three core principles of the CIA Triad.",
        "Security": "Incorrect. The term 'security' is too broad; the triad specifically includes Availability."
      }
    },
    {
      id: 6,
      type: 'matching',
      question: "Match each cybersecurity term with its description:",
      // For matching, we use an object for correct answers.
      // Terms are keys and their correct descriptions are the values.
      terms: ["Firewall", "Phishing", "Malware"],
      options: [
        "Controls network traffic",
        "Fraudulent attempt to obtain sensitive information",
        "Malicious software designed to harm a system",
        "A tool for encryption"
      ],
      correctAnswer: {
        "Firewall": "Controls network traffic",
        "Phishing": "Fraudulent attempt to obtain sensitive information",
        "Malware": "Malicious software designed to harm a system"
      }
    },
    {
      id: 7,
      type: 'multipleChoice',
      question: "Which of the following is NOT a common cybersecurity best practice?",
      options: ["Using strong passwords", "Regular software updates", "Sharing passwords with colleagues", "Enabling multi-factor authentication"],
      correctAnswer: "Sharing passwords with colleagues",
      explanation: {
        "Using strong passwords": "Incorrect. Using strong passwords is a key cybersecurity practice.",
        "Regular software updates": "Incorrect. Keeping software updated is essential for security.",
        "Sharing passwords with colleagues": "Correct! Sharing passwords undermines security protocols.",
        "Enabling multi-factor authentication": "Incorrect. Multi-factor authentication greatly enhances security."
      }
    }
  ];

  const handleMCAnswer = (questionId, option) => {
    setAnswers(prev => ({ ...prev, [questionId]: option }));
  };

  const handleInputAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // For matching questions, answers[6] is an object mapping each term to the selected description.
  const handleMatchingAnswer = (questionId, term, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: { ...prev[questionId], [term]: value }
    }));
  };

  const handleSubmit = () => {
    let sc = 0;
    questions.forEach(q => {
      if (q.type !== 'matching') {
        if ((answers[q.id] || "").trim().toLowerCase() === q.correctAnswer.toLowerCase()) {
          sc += 1;
        }
      } else {
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
            <button onClick={() => navigate('/cybersecurity-intro-L1')}>Back to Lesson</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CyberQuiz1;
