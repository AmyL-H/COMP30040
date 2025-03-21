// src/pages/Cryptography&Encryption/CryptoQuiz1.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz1.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "Which of the following best defines cryptography?",
    options: [
      "The act of hiding messages in images",
      "The practice of converting information into a secure format",
      "The creation of new programming languages",
      "The design of antivirus software"
    ],
    correctAnswer: "The practice of converting information into a secure format",
    explanation: {
      "The practice of converting information into a secure format": "Correct! Cryptography is all about securing data so only intended parties can understand it.",
      "The act of hiding messages in images": "That's steganography, not cryptography.",
      "The creation of new programming languages": "Incorrect. Cryptography involves security, not language creation.",
      "The design of antivirus software": "That's a part of cybersecurity, but not the definition of cryptography."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "What is the role of a key in cryptography?",
    options: [
      "It decrypts operating systems",
      "It allows random access to system files",
      "It helps encrypt and decrypt data securely",
      "It changes user passwords"
    ],
    correctAnswer: "It helps encrypt and decrypt data securely",
    explanation: {
      "It helps encrypt and decrypt data securely": "Correct! Keys are essential for converting data to/from its encrypted state.",
      "It decrypts operating systems": "Nope—cryptographic keys are used for data, not OS decryption.",
      "It allows random access to system files": "Incorrect. That’s related to file system permissions.",
      "It changes user passwords": "Changing passwords is a security measure, but not related to the function of a key."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "Which of the following is an example of a cipher?",
    options: [
      "RSA",
      "HTML",
      "CSS",
      "Python"
    ],
    correctAnswer: "RSA",
    explanation: {
      "RSA": "Correct! RSA is a widely used asymmetric cipher for secure communication.",
      "HTML": "HTML is a markup language, not a cipher.",
      "CSS": "CSS styles pages—it’s unrelated to cryptography.",
      "Python": "Python is a programming language, not a cipher."
    }
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: "How did ancient ciphers contribute to modern cryptography?",
    options: [
      "They made hacking easier",
      "They created internet protocols",
      "They laid the groundwork for secure communication methods",
      "They stored passwords in plaintext"
    ],
    correctAnswer: "They laid the groundwork for secure communication methods",
    explanation: {
      "They laid the groundwork for secure communication methods": "Correct! Ancient ciphers like Caesar’s helped inspire today's encryption algorithms.",
      "They made hacking easier": "Incorrect. Ancient ciphers aimed to protect messages, not enable hacking.",
      "They created internet protocols": "Those came much later and aren't related to ancient ciphers.",
      "They stored passwords in plaintext": "That’s bad practice—not a contribution."
    }
  },
  {
    id: 5,
    type: 'multipleChoice',
    question: "Which principle explains why animations help with learning cryptography?",
    options: [
      "Memory Decay Theory",
      "Multimedia Learning Principle",
      "String Theory",
      "Cybernetic Feedback Loop"
    ],
    correctAnswer: "Multimedia Learning Principle",
    explanation: {
      "Multimedia Learning Principle": "Correct! Mayer's principle shows that combining visuals and text helps retention.",
      "Memory Decay Theory": "That's more about forgetting than learning.",
      "String Theory": "That's a physics concept, not educational.",
      "Cybernetic Feedback Loop": "Not directly related to instructional design."
    }
  }
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
      courseId="cryptography"
    />
  );
}

export default CryptoQuiz1;
