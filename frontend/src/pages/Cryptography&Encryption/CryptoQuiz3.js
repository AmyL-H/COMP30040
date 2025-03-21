// src/pages/Cryptography&Encryption/CryptoQuiz3.js

import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz3.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "Which technology encrypts data in transit between a browser and a web server?",
    options: ["SSL/TLS", "Blockchain", "Digital Signatures", "MFA"],
    correctAnswer: "SSL/TLS",
    explanation: {
      "SSL/TLS": "Correct! SSL/TLS encrypts data transmitted over the internet, securing websites.",
      "Blockchain": "Incorrect. Blockchain secures transaction records but isn’t used for general web traffic encryption.",
      "Digital Signatures": "Incorrect. These verify authenticity, not secure communication.",
      "MFA": "Incorrect. MFA verifies identity, not data transmission."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Which application uses cryptographic hashing to create tamper-proof records?",
    options: ["VPN", "Blockchain", "SSL", "MFA"],
    correctAnswer: "Blockchain",
    explanation: {
      "Blockchain": "Correct! Blockchain relies on cryptographic hashing for record immutability.",
      "VPN": "Incorrect. VPNs encrypt traffic but don’t use hashing to record data.",
      "SSL": "Incorrect. SSL encrypts connections, not used for creating records.",
      "MFA": "Incorrect. MFA confirms user identity, not record keeping."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "What is the purpose of a digital signature?",
    options: [
      "To hide the content of a message",
      "To verify the authenticity and integrity of a message",
      "To compress the message",
      "To encrypt web traffic"
    ],
    correctAnswer: "To verify the authenticity and integrity of a message",
    explanation: {
      "To verify the authenticity and integrity of a message": "Correct! Digital signatures prove the sender’s identity and that the content hasn't been altered.",
      "To hide the content of a message": "Incorrect. That’s encryption.",
      "To compress the message": "Incorrect. That's unrelated to cryptography.",
      "To encrypt web traffic": "Incorrect. SSL/TLS handles that, not digital signatures."
    }
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: "Which of the following is a reason businesses use Multi-Factor Authentication (MFA)?",
    options: [
      "To store data in the cloud",
      "To add extra encryption to emails",
      "To verify user identity using multiple methods",
      "To block internet traffic from certain countries"
    ],
    correctAnswer: "To verify user identity using multiple methods",
    explanation: {
      "To verify user identity using multiple methods": "Correct! MFA uses multiple credentials (e.g., password + token) for added security.",
      "To store data in the cloud": "Incorrect. That’s a cloud service, not MFA.",
      "To add extra encryption to emails": "Incorrect. Email encryption is separate.",
      "To block internet traffic from certain countries": "Incorrect. That’s a firewall or geo-blocking configuration."
    }
  },
  {
    id: 5,
    type: 'matching',
    question: "Match each application with its cryptographic purpose:",
    terms: [
      "SSL/TLS",
      "VPN",
      "Digital Signatures",
      "Blockchain"
    ],
    options: [
      "Encrypts browser-server communication",
      "Verifies authenticity of documents or software",
      "Secures records with cryptographic hashing",
      "Encrypts all network traffic over the internet"
    ],
    correctAnswer: {
      "SSL/TLS": "Encrypts browser-server communication",
      "VPN": "Encrypts all network traffic over the internet",
      "Digital Signatures": "Verifies authenticity of documents or software",
      "Blockchain": "Secures records with cryptographic hashing"
    },
    explanation: {
      "SSL/TLS": "SSL/TLS protects data as it travels between users and websites.",
      "VPN": "VPNs create encrypted tunnels for secure internet usage.",
      "Digital Signatures": "They ensure that a file or message hasn't been tampered with.",
      "Blockchain": "Cryptographic hashing ensures blockchain data is immutable."
    }
  }
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
      courseId="cryptography"
    />
  );
}

export default CryptoQuiz3;
