import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CyberQuiz1.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is the primary goal of cybersecurity?",
    options: ["Protecting digital assets", "Hacking into systems", "Slowing down the internet", "Deleting data"],
    correctAnswer: "Protecting digital assets",
    explanation: {
      "Protecting digital assets": "Great job! Cybersecurity is all about safeguarding digital assets from cyber threats.",
      "Hacking into systems": "Incorrect. Hacking is illegal and unethical. Cybersecurity defends against unauthorized access.",
      "Slowing down the internet": "Incorrect. Cybersecurity aims to protect, not impede, digital communication.",
      "Deleting data": "Incorrect. The goal is to preserve and protect data, not to delete it."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Which decade saw the introduction of firewalls and antivirus software?",
    options: ["1970s", "1980s", "1990s", "2000s"],
    correctAnswer: "1980s",
    explanation: {
      "1970s": "Incorrect. The 1970s focused more on physical security and basic password protection.",
      "1980s": "Correct! The 1980s marked the rise of firewalls and antivirus solutions as cyber threats began to emerge.",
      "1990s": "Incorrect. While the 1990s saw rapid internet expansion, firewalls had already been introduced.",
      "2000s": "Incorrect. By the 2000s, these tools were already well established."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "What technology is used in modern cybersecurity to detect threats?",
    options: ["Artificial Intelligence", "Typewriters", "Fax Machines", "Walkie-Talkies"],
    correctAnswer: "Artificial Intelligence",
    explanation: {
      "Artificial Intelligence": "Correct! AI is increasingly used to detect and respond to cyber threats in real time.",
      "Typewriters": "Incorrect. Typewriters are outdated and not used in threat detection.",
      "Fax Machines": "Incorrect. Fax machines are not part of modern cybersecurity technology.",
      "Walkie-Talkies": "Incorrect. These devices have no role in detecting cyber threats."
    }
  },
  {
    id: 4,
    type: 'fillInTheGap',
    question: "Cybersecurity aims to protect digital ______ from unauthorized access.",
    correctAnswer: "systems",
    explanation: {
      "systems": "Correct! Cybersecurity protects digital systems, networks, and data."
    }
  },
  {
    id: 5,
    type: 'dragAndDrop',
    question: "Drag the correct word to complete the statement: 'The CIA Triad in cybersecurity stands for Confidentiality, Integrity, and ______.'",
    options: ["Availability", "Reliability", "Security"],
    correctAnswer: "Availability",
    explanation: {
      "Availability": "Correct! The CIA Triad stands for Confidentiality, Integrity, and Availability.",
      "Reliability": "Incorrect. While important, reliability is not one of the three core principles of the CIA Triad.",
      "Security": "Incorrect. The term 'security' is too broad; the triad specifically includes Availability."
    }
  },
  {
    id: 6,
    type: 'matching',
    question: "Match each cybersecurity term with its description:",
    terms: ["Firewall", "Phishing", "Malware"],
    options: [
      "Controls network traffic",
      "Fraudulent attempt to obtain sensitive information",
      "Malicious software designed to harm a system",
      "A tool for encryption"
    ],
    correctAnswer: {
      "Firewall": "Controls network traffic",
      "Phishing": "Fraudulent attempt to obtain sensitive information",
      "Malware": "Malicious software designed to harm a system"
    }
  },
  {
    id: 7,
    type: 'multipleChoice',
    question: "Which of the following is NOT a common cybersecurity best practice?",
    options: ["Using strong passwords", "Regular software updates", "Sharing passwords with colleagues", "Enabling multi-factor authentication"],
    correctAnswer: "Sharing passwords with colleagues",
    explanation: {
      "Using strong passwords": "Incorrect. Using strong passwords is a key cybersecurity practice.",
      "Regular software updates": "Incorrect. Keeping software updated is essential for security.",
      "Sharing passwords with colleagues": "Correct! Sharing passwords undermines security protocols.",
      "Enabling multi-factor authentication": "Incorrect. Multi-factor authentication greatly enhances security."
    }
  }
];

function CyberQuiz1() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cybersecurity-intro-L1"
      title="Cybersecurity Intro Quiz 1"
      currentLessonId="lesson1"     
      nextLessonId="lesson2"
      retakeRoute="/lesson/cyberquiz1"     
      nextRoute="/cybersecurity-intro-L2"       
    />
  );
}

export default CyberQuiz1;
