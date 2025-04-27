// src/pages/Cryptography&Encryption/CryptoQuiz2.js

import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz2.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is the key difference between symmetric and asymmetric encryption?",
    options: [
      "Symmetric uses one key, asymmetric uses two keys",
      "Asymmetric encryption is faster than symmetric",
      "Both use the same encryption method",
      "Symmetric encryption uses public and private keys"
    ],
    correctAnswer: "Symmetric uses one key, asymmetric uses two keys",
    explanation: {
      "Symmetric uses one key, asymmetric uses two keys": "Correct! Symmetric uses the same key for encryption and decryption, while asymmetric uses a public/private key pair.",
      "Asymmetric encryption is faster than symmetric": "Incorrect. Symmetric encryption is generally faster.",
      "Both use the same encryption method": "Incorrect. They are fundamentally different.",
      "Symmetric encryption uses public and private keys": "Incorrect. That’s asymmetric encryption."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Which type of encryption is best suited for encrypting a large amount of local data quickly?",
    options: ["Symmetric", "Asymmetric", "Quantum", "Blockchain"],
    correctAnswer: "Symmetric",
    explanation: {
      "Symmetric": "Correct! Symmetric encryption is faster and more efficient for large-scale data.",
      "Asymmetric": "Incorrect. It's slower and better for secure communication.",
      "Quantum": "Incorrect. Quantum encryption is still in experimental stages.",
      "Blockchain": "Incorrect. Blockchain isn't an encryption method."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "In asymmetric encryption, what key is used to decrypt the message?",
    options: ["Public key", "Private key", "Symmetric key", "Session key"],
    correctAnswer: "Private key",
    explanation: {
      "Private key": "Correct! The private key is kept secret and used for decryption in asymmetric systems.",
      "Public key": "Incorrect. The public key is used for encryption.",
      "Symmetric key": "Incorrect. That relates to symmetric encryption.",
      "Session key": "Incorrect. A session key is often used after key exchange in hybrid models."
    }
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: "Which of the following is a real-world use of asymmetric encryption?",
    options: [
      "Compressing image files",
      "Encrypting VPN traffic",
      "Digital signatures and key exchange",
      "Storing passwords in plain text"
    ],
    correctAnswer: "Digital signatures and key exchange",
    explanation: {
      "Digital signatures and key exchange": "Correct! Asymmetric encryption is essential for secure digital signatures and exchanging keys.",
      "Compressing image files": "Incorrect. That’s compression, not encryption.",
      "Encrypting VPN traffic": "Incorrect. VPNs usually use symmetric encryption for speed.",
      "Storing passwords in plain text": "Incorrect and unsafe!"
    }
  },
  {
    id: 5,
    type: 'matching',
    question: "Match the characteristics to the correct encryption type:",
    terms: [
      "Used for secure websites (HTTPS)",
      "Faster and better for bulk data",
      "Uses the same key on both ends",
      "Enables secure communication without prior contact"
    ],
    options: ["Symmetric", "Asymmetric", "Symmetric", "Asymmetric"],
    correctAnswer: {
      "Used for secure websites (HTTPS)": "Asymmetric",
      "Faster and better for bulk data": "Symmetric",
      "Uses the same key on both ends": "Symmetric",
      "Enables secure communication without prior contact": "Asymmetric"
    },
    explanation: {
      "Used for secure websites (HTTPS)": "HTTPS uses asymmetric encryption to securely exchange a symmetric key.",
      "Faster and better for bulk data": "Symmetric encryption is designed for speed and efficiency.",
      "Uses the same key on both ends": "Symmetric encryption requires a shared secret.",
      "Enables secure communication without prior contact": "Asymmetric encryption removes the need for pre-shared keys."
    }
  }
];

function CryptoQuiz2() {
  return (
    <UniversalQuiz
      questions={quizQuestions}
      backRoute="/cryptography-L2"
      title="Cryptography Quiz 2"
      currentLessonId="lesson2"
      nextLessonId="lesson3"
      retakeRoute="/lesson/cryptoquiz2"
      nextRoute="/cryptography-L3"
      courseId="cryptography"
    />
  );
}

export default CryptoQuiz2;
