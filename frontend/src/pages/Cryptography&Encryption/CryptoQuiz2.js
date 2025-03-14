// src/pages/Cryptography&Encryption/CryptoQuiz2.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz2.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is the difference between symmetric and asymmetric encryption?",
    options: [
      "Symmetric uses the same key for encryption and decryption, while asymmetric uses a pair of keys.",
      "Symmetric uses a pair of keys, while asymmetric uses the same key.",
      "There is no difference.",
      "Symmetric is slower than asymmetric."
    ],
    correctAnswer: "Symmetric uses the same key for encryption and decryption, while asymmetric uses a pair of keys.",
    explanation: {
      "Symmetric uses the same key for encryption and decryption, while asymmetric uses a pair of keys.": "Correct! In symmetric encryption, one key is used for both encryption and decryption, whereas asymmetric encryption uses a public/private key pair.",
      "Symmetric uses a pair of keys, while asymmetric uses the same key.": "Incorrect. That is the opposite of the truth.",
      "There is no difference.": "Incorrect. There are key differences between the two methods.",
      "Symmetric is slower than asymmetric.": "Incorrect. Typically, symmetric encryption is faster."
    }
  },
  // Add additional questions as needed...
];

function CryptoQuiz2() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cryptography-intro-L2"
      title="Cryptography Quiz 2"
      currentLessonId="lesson2"
      nextLessonId="lesson3"
      retakeRoute="/cryptography-intro-quiz2"
      nextRoute="/cryptography-intro-L3"
    />
  );
}

export default CryptoQuiz2;
