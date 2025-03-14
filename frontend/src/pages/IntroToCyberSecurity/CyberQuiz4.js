import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CyberQuiz4.css';

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

function CyberQuiz4() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cybersecurity-intro-L4"
      title="Cybersecurity Intro Quiz 4"
      currentLessonId="lesson4"
      nextLessonId="lesson5"
      retakeRoute="/lesson/cyberquiz4"
      nextRoute="/cybersecurity-intro-L5"
    />
  );
}

export default CyberQuiz4;