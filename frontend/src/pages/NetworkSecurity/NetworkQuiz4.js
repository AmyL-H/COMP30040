// src/pages/NetworkSecurity/NetworkQuiz4.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './NetworkQuiz4.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "Which protocol is considered the most secure for wireless networks?",
    options: ["WEP", "WPA", "WPA2", "WPA3"],
    correctAnswer: "WPA3",
    explanation: {
      "WPA3": "Correct! WPA3 provides stronger encryption, protection against brute-force attacks, and better security for open networks.",
      "WPA2": "Incorrect. While WPA2 is still widely used, it is less secure than WPA3.",
      "WPA": "Incorrect. WPA is better than WEP but still outdated.",
      "WEP": "Incorrect. WEP is considered insecure and deprecated."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "What is a common risk associated with wireless networks?",
    options: ["Packet duplication", "Data compression", "Rogue access points", "Fiber cable breakage"],
    correctAnswer: "Rogue access points",
    explanation: {
      "Rogue access points": "Correct! These are unauthorized devices that mimic legitimate Wi-Fi networks to trick users.",
      "Packet duplication": "Incorrect. Not a common security concern.",
      "Data compression": "Incorrect. Compression is a performance concern, not a security threat.",
      "Fiber cable breakage": "Incorrect. This is a physical infrastructure issue, not specific to wireless."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "What does WPA2 use for encryption?",
    options: ["DES", "RC4", "AES", "RSA"],
    correctAnswer: "AES",
    explanation: {
      "AES": "Correct! WPA2 uses AES (Advanced Encryption Standard) for strong, reliable encryption.",
      "DES": "Incorrect. DES is outdated and not used in WPA2.",
      "RC4": "Incorrect. RC4 was used in WEP and is now considered insecure.",
      "RSA": "Incorrect. RSA is used in asymmetric encryption, not WPA2."
    }
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: "What is a key advantage of WPA3 over WPA2?",
    options: [
      "It uses more bandwidth",
      "It supports legacy devices better",
      "It provides forward secrecy",
      "It disables encryption for open networks"
    ],
    correctAnswer: "It provides forward secrecy",
    explanation: {
      "It provides forward secrecy": "Correct! WPA3 ensures that even if a session key is compromised, previous sessions remain secure.",
      "It uses more bandwidth": "Incorrect. WPA3 is more efficient with security, not bandwidth intensive.",
      "It supports legacy devices better": "Incorrect. WPA3 may not support older devices.",
      "It disables encryption for open networks": "Incorrect. WPA3 enhances encryption, even for open networks."
    }
  }
];

function NetworkQuiz4() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/network-L4"
      title="Network Security Quiz 4"
      currentLessonId="lesson4"
      nextLessonId="lesson5"
      retakeRoute="/lesson/networkquiz4"
      nextRoute="/network-L5"
      courseId="network-security"
    />
  );
}

export default NetworkQuiz4;
