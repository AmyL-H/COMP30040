// src/pages/Cryptography&Encryption/CryptoQuiz3.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz3.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "Which cryptographic hash function is widely used for data integrity?",
    options: ["SHA-256", "AES", "RSA", "DES"],
    correctAnswer: "SHA-256",
    explanation: {
      "SHA-256": "Correct! SHA-256 is a cryptographic hash function used for ensuring data integrity.",
      "AES": "Incorrect. AES is an encryption algorithm, not a hash function.",
      "RSA": "Incorrect. RSA is used for public key encryption.",
      "DES": "Incorrect. DES is an older encryption standard."
    }
  },
  // Add additional questions as needed...
];

function CryptoQuiz3() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cryptography-L3"
      title="Cryptography Quiz 3"
      currentLessonId="lesson3"
      nextLessonId="lesson4"
      retakeRoute="/lesson/cryptoquiz3"
      nextRoute="/cryptography-L4"
    />
  );
}

export default CryptoQuiz3;
