import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CyberQuiz2.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is one major impact of cyber threats?",
    options: ["Financial loss", "Enhanced security", "Increased productivity", "Faster internet"],
    correctAnswer: "Financial loss",
    explanation: {
      "Financial loss": "Correct! Cyber threats can lead to significant financial losses through fraud, ransom payments, and remediation costs.",
      "Enhanced security": "Incorrect. Cyber threats compromise security rather than enhancing it.",
      "Increased productivity": "Incorrect. Cyber threats typically disrupt productivity.",
      "Faster internet": "Incorrect. Internet speed is unrelated to cybersecurity impacts."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Which major cyber incident occurred in 2017?",
    options: ["Equifax Data Breach", "SolarWinds Attack", "Target Data Breach", "Facebook Leak"],
    correctAnswer: "Equifax Data Breach",
    explanation: {
      "Equifax Data Breach": "Correct! The Equifax breach in 2017 exposed sensitive data of millions, causing extensive fallout.",
      "SolarWinds Attack": "Incorrect. The SolarWinds attack occurred later, around 2020.",
      "Target Data Breach": "Incorrect. Although significant, the Target breach was not in 2017.",
      "Facebook Leak": "Incorrect. There was no major Facebook leak in 2017."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "What is one major cause of cyberattacks?",
    options: ["Weak passwords", "High-speed internet", "Increased device sales", "Gaming community"],
    correctAnswer: "Weak passwords",
    explanation: {
      "Weak passwords": "Correct! Weak or reused passwords are one of the primary vulnerabilities exploited by attackers.",
      "High-speed internet": "Incorrect. High-speed internet does not cause cyberattacks.",
      "Increased device sales": "Incorrect. While more devices may increase exposure, weak passwords are a direct cause.",
      "Gaming community": "Incorrect. The gaming community is not a cause of cyberattacks."
    }
  },
  {
    id: 4,
    type: 'fillInTheGap',
    question: "Cybersecurity aims to protect sensitive ______ and data from unauthorized access.",
    correctAnswer: "information",
    explanation: {
      "information": "Correct! Cybersecurity is focused on protecting sensitive information and data."
    }
  },
  {
    id: 5,
    type: 'dragAndDrop',
    question: "Drag the correct word to complete: 'A major cyber incident can lead to a ______ data breach.'",
    options: ["massive", "tiny", "minor"],
    correctAnswer: "massive",
    explanation: {
      "massive": "Correct! Major incidents typically result in massive data breaches with widespread impact.",
      "tiny": "Incorrect. Data breaches from major incidents are usually not tiny.",
      "minor": "Incorrect. A minor breach would not follow a major incident."
    }
  },
  {
    id: 6,
    type: 'matching',
    question: "Match each cyber incident with its description:",
    terms: ["Equifax Data Breach", "WannaCry Ransomware", "SolarWinds Attack"],
    options: [
      "Exposed sensitive data of millions leading to financial fallout",
      "A global ransomware attack that locked systems until a ransom was paid",
      "A sophisticated supply chain attack compromising federal agencies"
    ],
    correctAnswer: {
      "Equifax Data Breach": "Exposed sensitive data of millions leading to financial fallout",
      "WannaCry Ransomware": "A global ransomware attack that locked systems until a ransom was paid",
      "SolarWinds Attack": "A sophisticated supply chain attack compromising federal agencies"
    }
  },
  {
    id: 7,
    type: 'multipleChoice',
    question: "Which of the following is NOT a direct impact of cyber threats?",
    options: ["Financial loss", "Data breaches", "Reputational damage", "Enhanced trust"],
    correctAnswer: "Enhanced trust",
    explanation: {
      "Financial loss": "Incorrect. Financial loss is a direct impact of cyber threats.",
      "Data breaches": "Incorrect. Data breaches are a common outcome of cyber attacks.",
      "Reputational damage": "Incorrect. Cyber threats can lead to reputational damage.",
      "Enhanced trust": "Correct! Cyber threats reduce trust rather than enhance it."
    }
  }
];

function CyberQuiz2() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cybersecurity-intro-L2"
      title="Cybersecurity Quiz 2"
      currentLessonId="lesson2"          // Current lesson identifier for progress tracking
      nextLessonId="lesson3"             // Next lesson to unlock if passing score is achieved
      retakeRoute="/lesson/cyberquiz2"        // Route to retake this quiz
      nextRoute="/cybersecurity-intro-L3"// Route for the next lesson
    />
  );
}

export default CyberQuiz2;
