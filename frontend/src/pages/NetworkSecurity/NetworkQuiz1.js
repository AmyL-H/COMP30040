// src/pages/NetworkSecurity/NetworkQuiz1.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './NetworkQuiz1.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is the primary goal of network security?",
    options: [
      "To increase internet speed",
      "To monitor employee activity",
      "To protect data and systems from unauthorized access",
      "To manage software licenses"
    ],
    correctAnswer: "To protect data and systems from unauthorized access",
    explanation: {
      "To protect data and systems from unauthorized access": "Correct! Network security ensures confidentiality, integrity, and availability of data.",
      "To increase internet speed": "Incorrect. That's related to network performance, not security.",
      "To monitor employee activity": "Incorrect. Monitoring may be a component, but not the main goal.",
      "To manage software licenses": "Incorrect. That falls under asset management."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Which of the following is NOT a common network security tool?",
    options: ["Firewall", "VPN", "Word Processor", "Intrusion Detection System (IDS)"],
    correctAnswer: "Word Processor",
    explanation: {
      "Word Processor": "Correct! Word processors are productivity tools, not security mechanisms.",
      "Firewall": "Incorrect. Firewalls are essential to network security.",
      "VPN": "Incorrect. VPNs encrypt traffic to protect privacy.",
      "Intrusion Detection System (IDS)": "Incorrect. IDS monitors for malicious activity."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "What does a VPN primarily do?",
    options: [
      "Blocks spam emails",
      "Encrypts internet traffic to ensure secure communication",
      "Increases download speed",
      "Detects malware on devices"
    ],
    correctAnswer: "Encrypts internet traffic to ensure secure communication",
    explanation: {
      "Encrypts internet traffic to ensure secure communication": "Correct! VPNs tunnel and encrypt your data.",
      "Blocks spam emails": "Incorrect. Spam filters handle that.",
      "Increases download speed": "Incorrect. VPNs may slow down speed due to encryption overhead.",
      "Detects malware on devices": "Incorrect. That’s the job of antivirus software."
    }
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: "Which protocol is commonly used to secure data over the web?",
    options: ["HTTP", "FTP", "SSL/TLS", "SMTP"],
    correctAnswer: "SSL/TLS",
    explanation: {
      "SSL/TLS": "Correct! Secure Sockets Layer (SSL) and Transport Layer Security (TLS) protect web data.",
      "HTTP": "Incorrect. HTTP is not secure without SSL/TLS.",
      "FTP": "Incorrect. FTP transfers files but isn’t secure by default.",
      "SMTP": "Incorrect. SMTP is for email, not general web traffic."
    }
  }
];

function NetworkQuiz1() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/network-L1"
      title="Network Security Quiz 1"
      currentLessonId="lesson1"
      nextLessonId="lesson2"
      retakeRoute="/lesson/networkquiz1"
      nextRoute="/network-L2"
      courseId="network-security"
    />
  );
}

export default NetworkQuiz1;
