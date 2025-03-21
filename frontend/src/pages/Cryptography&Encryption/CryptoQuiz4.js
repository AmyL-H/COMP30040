import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz4.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What does PKI stand for in cryptography?",
    options: [
      "Public Key Infrastructure",
      "Private Key Integration",
      "Public Knowledge Interface",
      "Private Key Identifier"
    ],
    correctAnswer: "Public Key Infrastructure",
    explanation: {
      "Public Key Infrastructure": "Correct! PKI stands for Public Key Infrastructure.",
      "Private Key Integration": "Incorrect. PKI does not stand for that.",
      "Public Knowledge Interface": "Incorrect. That is not what PKI means.",
      "Private Key Identifier": "Incorrect. PKI stands for Public Key Infrastructure."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "What is the primary purpose of a Certificate Authority (CA)?",
    options: [
      "To store private keys securely",
      "To verify identities and issue digital certificates",
      "To encrypt user traffic",
      "To monitor online activity"
    ],
    correctAnswer: "To verify identities and issue digital certificates",
    explanation: {
      "To verify identities and issue digital certificates": "Correct! CAs are trusted entities that authenticate users and sign certificates.",
      "To store private keys securely": "Incorrect. Key storage is handled by users, not the CA.",
      "To encrypt user traffic": "Incorrect. That is handled by encryption protocols like TLS, not the CA.",
      "To monitor online activity": "Incorrect. CAs do not monitor activity."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "Which of the following best describes a digital certificate?",
    options: [
      "A password-protected file that contains encrypted data",
      "A tool for password recovery",
      "A file that binds a public key to an entity’s identity",
      "A way to track internet activity"
    ],
    correctAnswer: "A file that binds a public key to an entity’s identity",
    explanation: {
      "A file that binds a public key to an entity’s identity": "Correct! Digital certificates verify who owns a given public key.",
      "A password-protected file that contains encrypted data": "Incorrect. Certificates are not just encrypted files.",
      "A tool for password recovery": "Incorrect. Certificates have no role in recovering passwords.",
      "A way to track internet activity": "Incorrect. Certificates are not tracking tools."
    }
  },
  {
    id: 4,
    type: 'fillInTheGap',
    question: "The ______ key is kept secret, while the public key is shared openly.",
    correctAnswer: "private",
    explanation: {
      "private": "Correct! In a key pair, the private key must always be kept secure and never shared."
    }
  },
  {
    id: 5,
    type: 'matching',
    question: "Match the PKI component with its description:",
    terms: ["Public Key", "Private Key", "Certificate Authority", "Digital Certificate", "SSL/TLS"],
    options: [
      "Encrypts messages and is shared publicly",
      "Decrypts messages and is kept secret",
      "Verifies identities and issues digital certificates",
      "Binds a public key to an identity",
      "Used to establish secure communication between browsers and servers"
    ],
    correctAnswer: {
      "Public Key": "Encrypts messages and is shared publicly",
      "Private Key": "Decrypts messages and is kept secret",
      "Certificate Authority": "Verifies identities and issues digital certificates",
      "Digital Certificate": "Binds a public key to an identity",
      "SSL/TLS": "Used to establish secure communication between browsers and servers"
    },
    explanation: {
      "Public Key": "Correct! It's openly shared to allow others to send you encrypted data.",
      "Private Key": "Correct! Only the owner has access to decrypt what was encrypted with their public key.",
      "Certificate Authority": "Correct! CAs are the trusted third parties in PKI.",
      "Digital Certificate": "Correct! It associates a public key with an identity.",
      "SSL/TLS": "Correct! It uses certificates to enable secure web communication."
    }
  }
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
      courseId="cryptography"
    />
  );
}

export default CryptoQuiz4;
