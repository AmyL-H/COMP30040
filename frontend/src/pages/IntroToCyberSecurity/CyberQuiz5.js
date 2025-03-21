import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CyberQuiz5.css';

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

function CyberQuiz5() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cybersecurity-intro-L5"
      title="Cybersecurity Intro Quiz 5"
      currentLessonId="lesson5"
      nextLessonId={null}            // If no next lesson, pass null or omit nextRoute
      retakeRoute="/lesson/cyberquiz5"
      nextRoute={null}               // No next lesson route if this is the final lesson in the module
      courseId="cybersecurity"
    />
  );
}

export default CyberQuiz5;