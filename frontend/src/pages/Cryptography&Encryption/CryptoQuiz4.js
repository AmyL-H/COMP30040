// src/pages/Cryptography&Encryption/CryptoQuiz4.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz4.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What does PKI stand for in cryptography?",
    options: ["Public Key Infrastructure", "Private Key Integration", "Public Knowledge Interface", "Private Key Identifier"],
    correctAnswer: "Public Key Infrastructure",
    explanation: {
      "Public Key Infrastructure": "Correct! PKI stands for Public Key Infrastructure.",
      "Private Key Integration": "Incorrect. PKI does not stand for that.",
      "Public Knowledge Interface": "Incorrect. That is not what PKI means.",
      "Private Key Identifier": "Incorrect. PKI stands for Public Key Infrastructure."
    }
  },
  // Add additional questions as needed...
];

function CryptoQuiz4() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cryptography-L4"
      title="Cryptography Quiz 4"
      currentLessonId="lesson4"
      nextLessonId="lesson5"
      retakeRoute="/lesson/cryptoquiz4"
      nextRoute="/cryptography-L5"
    />
  );
}

export default CryptoQuiz4;
