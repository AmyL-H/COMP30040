import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './NetworkQuiz2.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is the primary role of a firewall in a network?",
    options: [
      "To store sensitive data securely",
      "To scan software for viruses",
      "To filter traffic and block unauthorized access",
      "To encrypt files"
    ],
    correctAnswer: "To filter traffic and block unauthorized access",
    explanation: {
      "To filter traffic and block unauthorized access": "Correct! Firewalls monitor and control incoming/outgoing network traffic based on security rules.",
      "To store sensitive data securely": "Incorrect. That is typically the role of secure databases.",
      "To scan software for viruses": "Incorrect. Antivirus software performs that role.",
      "To encrypt files": "Incorrect. Encryption is handled by other tools, not firewalls."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "How does a VPN help secure a network connection?",
    options: [
      "By blocking malware from websites",
      "By encrypting the communication tunnel",
      "By speeding up the connection",
      "By replacing the firewall"
    ],
    correctAnswer: "By encrypting the communication tunnel",
    explanation: {
      "By encrypting the communication tunnel": "Correct! VPNs create encrypted tunnels that secure communication over public networks.",
      "By blocking malware from websites": "Incorrect. Antivirus or DNS filtering tools handle this.",
      "By speeding up the connection": "Incorrect. VPNs may actually reduce speed slightly due to encryption overhead.",
      "By replacing the firewall": "Incorrect. VPNs work with firewalls, not as a replacement."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "What distinguishes an IDS from an IPS?",
    options: [
      "IDS prevents attacks, IPS only detects",
      "IDS blocks traffic, IPS stores backups",
      "IDS detects threats, IPS detects and prevents",
      "IDS and IPS are exactly the same"
    ],
    correctAnswer: "IDS detects threats, IPS detects and prevents",
    explanation: {
      "IDS detects threats, IPS detects and prevents": "Correct! IDS alerts administrators, while IPS takes automatic action to block threats.",
      "IDS prevents attacks, IPS only detects": "Incorrect. It's the other way around.",
      "IDS blocks traffic, IPS stores backups": "Incorrect. Neither function involves backups.",
      "IDS and IPS are exactly the same": "Incorrect. They serve different roles."
    }
  }
];

function NetworkQuiz2() {
  return (
    <UniversalQuiz
      questions={quizQuestions}
      backRoute="/lesson/networksecurity-L2"
      title="Network Security Quiz 2"
      currentLessonId="lesson2"
      nextLessonId="lesson3"
      retakeRoute="/lesson/networkquiz2"
      nextRoute="/lesson/network-L3"
      courseId="networksecurity"
    />
  );
}

export default NetworkQuiz2;
