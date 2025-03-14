import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CyberQuiz3.css';

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

function CyberQuiz3() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cybersecurity-intro-L3"
      title="Cybersecurity Intro Quiz 3"
      currentLessonId="lesson3"
      nextLessonId="lesson4"
      retakeRoute="/lesson/cyberquiz3"
      nextRoute="/cybersecurity-intro-L4"
    />
  );
}

export default CyberQuiz3;