// src/pages/NetworkSecurity/NetworkQuiz3.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './NetworkQuiz3.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is the primary goal of network segmentation?",
    options: [
      "To increase internet speed",
      "To isolate parts of the network for security",
      "To upgrade firmware remotely",
      "To allow more users to connect"
    ],
    correctAnswer: "To isolate parts of the network for security",
    explanation: {
      "To isolate parts of the network for security": "Correct! Network segmentation limits lateral movement and isolates critical systems.",
      "To increase internet speed": "Incorrect. Segmentation is a security technique, not a speed booster.",
      "To upgrade firmware remotely": "Incorrect. That’s more related to device management, not segmentation.",
      "To allow more users to connect": "Incorrect. Segmentation doesn’t affect user capacity."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Which of the following is an example of access control?",
    options: [
      "Using VPN to browse anonymously",
      "Setting up a firewall rule",
      "Requiring a password to access a server",
      "Enabling browser cookies"
    ],
    correctAnswer: "Requiring a password to access a server",
    explanation: {
      "Requiring a password to access a server": "Correct! Access control involves authentication mechanisms like passwords or MFA.",
      "Using VPN to browse anonymously": "Incorrect. VPNs protect data in transit, not access control.",
      "Setting up a firewall rule": "Incorrect. That’s part of perimeter defense, not access control.",
      "Enabling browser cookies": "Incorrect. Cookies are related to web tracking, not access control."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "Why is it important to apply regular updates to systems?",
    options: [
      "To improve graphics performance",
      "To enable more features",
      "To patch security vulnerabilities",
      "To reduce storage space"
    ],
    correctAnswer: "To patch security vulnerabilities",
    explanation: {
      "To patch security vulnerabilities": "Correct! Updates fix known bugs and close security holes.",
      "To improve graphics performance": "Incorrect. This is not the primary purpose of updates in a security context.",
      "To enable more features": "Incorrect. New features are secondary to security patches.",
      "To reduce storage space": "Incorrect. Updates often increase storage usage."
    }
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: "What does encryption help prevent in network security?",
    options: [
      "Malware downloads",
      "Unauthorized data interception",
      "Software installation",
      "User account creation"
    ],
    correctAnswer: "Unauthorized data interception",
    explanation: {
      "Unauthorized data interception": "Correct! Encryption ensures that even if data is intercepted, it remains unreadable.",
      "Malware downloads": "Incorrect. Anti-malware software addresses that.",
      "Software installation": "Incorrect. This is controlled by system policies, not encryption.",
      "User account creation": "Incorrect. Account creation is managed through access control."
    }
  },
  {
    id: 5,
    type: 'multipleChoice',
    question: "Which best describes the role of monitoring in network security?",
    options: [
      "Backing up data to cloud storage",
      "Detecting unauthorized or suspicious activity",
      "Installing updates automatically",
      "Encrypting files before sending"
    ],
    correctAnswer: "Detecting unauthorized or suspicious activity",
    explanation: {
      "Detecting unauthorized or suspicious activity": "Correct! Monitoring tools like IDS/IPS look for abnormal behavior or known attack patterns.",
      "Backing up data to cloud storage": "Incorrect. Backups are for data recovery, not monitoring.",
      "Installing updates automatically": "Incorrect. That’s part of patch management.",
      "Encrypting files before sending": "Incorrect. Encryption protects data, not monitors it."
    }
  }
];

function NetworkQuiz3() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/network-L3"
      title="Network Security Quiz 3"
      currentLessonId="lesson3"
      nextLessonId="lesson4"
      retakeRoute="/lesson/networkquiz3"
      nextRoute="/network-L4"
      courseId="network-security"
    />
  );
}

export default NetworkQuiz3;
