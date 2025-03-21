// src/pages/NetworkSecurity/NetworkQuiz5.js
import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './NetworkQuiz5.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is the main purpose of a vulnerability assessment?",
    options: [
      "To detect and respond to threats in real-time",
      "To identify and fix weaknesses before exploitation",
      "To create firewall rules",
      "To block unauthorized users"
    ],
    correctAnswer: "To identify and fix weaknesses before exploitation",
    explanation: {
      "To identify and fix weaknesses before exploitation": "Correct! Vulnerability assessments help identify risks early.",
      "To detect and respond to threats in real-time": "Incorrect. That's the role of IDS/IPS.",
      "To create firewall rules": "Incorrect. Firewall rules are part of access control.",
      "To block unauthorized users": "Incorrect. That is a broader goal, not specific to assessments."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Which tool is commonly used to scan networks for open ports and services?",
    options: ["Nessus", "Nmap", "Wireshark", "Metasploit"],
    correctAnswer: "Nmap",
    explanation: {
      "Nmap": "Correct! Nmap is a popular network scanning tool.",
      "Nessus": "Incorrect. Nessus scans for vulnerabilities, not just open ports.",
      "Wireshark": "Incorrect. Wireshark is a packet sniffer.",
      "Metasploit": "Incorrect. Metasploit is used for exploitation, not scanning."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "What was the main cause of the 2017 Equifax breach?",
    options: [
      "Zero-day exploit",
      "Social engineering attack",
      "Failure to patch a known vulnerability",
      "Misconfigured firewall"
    ],
    correctAnswer: "Failure to patch a known vulnerability",
    explanation: {
      "Failure to patch a known vulnerability": "Correct! Equifax failed to patch a known Apache Struts flaw.",
      "Zero-day exploit": "Incorrect. The vulnerability was known and documented.",
      "Social engineering attack": "Incorrect. This breach was technical, not human.",
      "Misconfigured firewall": "Incorrect. The issue was due to unpatched software, not a firewall."
    }
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: "Which of the following is an ethical requirement for penetration testing?",
    options: [
      "Gaining access to private data",
      "Conducting tests anonymously",
      "Obtaining written permission",
      "Only testing during business hours"
    ],
    correctAnswer: "Obtaining written permission",
    explanation: {
      "Obtaining written permission": "Correct! Always have documented consent before conducting tests.",
      "Gaining access to private data": "Incorrect. This is not ethical unless explicitly authorized.",
      "Conducting tests anonymously": "Incorrect. Transparency is critical in ethical testing.",
      "Only testing during business hours": "Incorrect. Tests may be done off-hours with consent, but that’s not a requirement."
    }
  },
  {
    id: 5,
    type: 'multipleChoice',
    question: "Which of the following best describes Nessus?",
    options: [
      "A tool for managing encryption keys",
      "A penetration testing framework",
      "A vulnerability scanner",
      "A password cracking tool"
    ],
    correctAnswer: "A vulnerability scanner",
    explanation: {
      "A vulnerability scanner": "Correct! Nessus is widely used for vulnerability scanning and reporting.",
      "A tool for managing encryption keys": "Incorrect. That would be a KMS (Key Management System).",
      "A penetration testing framework": "Incorrect. Metasploit fits that role.",
      "A password cracking tool": "Incorrect. Tools like John the Ripper are used for that."
    }
  }
];

function NetworkQuiz5() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/networksecurity-L5"
      title="Network Security Quiz 5"
      currentLessonId="lesson5"
      nextLessonId={null} 
      retakeRoute="/lesson/networkquiz5"
      nextRoute={null}
      courseId="networksecurity"
    />
  );
}

export default NetworkQuiz5;
