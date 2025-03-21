// src/pages/Cryptography&Encryption/CryptoQuiz5.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz5.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is the main purpose of encryption in cryptography?",
    options: [
      "To secure data by converting it into an unreadable format",
      "To compress data",
      "To backup data",
      "To create data"
    ],
    correctAnswer: "To secure data by converting it into an unreadable format",
    explanation: {
      "To secure data by converting it into an unreadable format": "Correct! Encryption transforms data to make it unreadable without the decryption key.",
      "To compress data": "Incorrect. Data compression is a different process.",
      "To backup data": "Incorrect. Encryption is used for securing data rather than backing it up.",
      "To create data": "Incorrect. Encryption does not create data."
    }
  },
  // Add additional questions as needed...
];

function CryptoQuiz5() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cryptography-L5"
      title="Cryptography Quiz 5"
      currentLessonId="lesson5"
      nextLessonId={null}  // Last lesson; no next lesson to unlock
      retakeRoute="/lesson/cryptoquiz1"
      nextRoute={null}
      courseId="cryptography"
    />
  );
}

export default CryptoQuiz5;
