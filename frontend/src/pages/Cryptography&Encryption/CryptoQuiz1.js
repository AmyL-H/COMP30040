// src/pages/Cryptography&Encryption/CryptoQuiz1.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz1.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is Cryptography?",
    options: [
      "The study of encryption and decryption",
      "Hacking computers",
      "Storing data securely",
      "Creating viruses"
    ],
    correctAnswer: "The study of encryption and decryption",
    explanation: {
      "The study of encryption and decryption": "Correct! Cryptography is the science of secure communication through encryption and decryption.",
      "Hacking computers": "Incorrect. Cryptography is used to secure data, not to hack computers.",
      "Storing data securely": "Incorrect. While related, cryptography specifically involves encoding and decoding data.",
      "Creating viruses": "Incorrect. Cryptography is a defensive technology."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Which algorithm is widely used for symmetric encryption?",
    options: ["AES", "RSA", "SHA-256", "Diffie-Hellman"],
    correctAnswer: "AES",
    explanation: {
      "AES": "Correct! AES (Advanced Encryption Standard) is commonly used for symmetric encryption.",
      "RSA": "Incorrect. RSA is an asymmetric encryption algorithm.",
      "SHA-256": "Incorrect. SHA-256 is a cryptographic hash function, not an encryption algorithm.",
      "Diffie-Hellman": "Incorrect. Diffie-Hellman is used for key exchange."
    }
  },
  // Add more questions as needed...
];

function CryptoQuiz1() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cryptography-L1"
      title="Cryptography Quiz 1"
      currentLessonId="lesson1"
      nextLessonId="lesson2"
      retakeRoute="/lesson/cryptoquiz1"
      nextRoute="/cryptography-L2"
    />
  );
}

export default CryptoQuiz1;
