import React from 'react';
import UniversalQuiz from '../../components/UniversalQuiz';
import './CryptoQuiz5.css';

const quizQuestions = [
  {
    id: 1,
    type: 'multipleChoice',
    question: "What is the goal of a brute-force attack?",
    options: [
      "To guess a key by trying all possibilities",
      "To intercept encrypted data during transit",
      "To steal physical hardware",
      "To destroy encrypted data"
    ],
    correctAnswer: "To guess a key by trying all possibilities",
    explanation: {
      "To guess a key by trying all possibilities": "Correct! Brute-force attacks try every possible key until the right one is found.",
      "To intercept encrypted data during transit": "Incorrect. That describes a man-in-the-middle attack.",
      "To steal physical hardware": "Incorrect. That’s a different kind of security breach.",
      "To destroy encrypted data": "Incorrect. Brute-force is about deciphering, not deleting."
    }
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Which historical cryptographic system was broken during World War II?",
    options: ["AES", "RSA", "SHA-256", "Enigma"],
    correctAnswer: "Enigma",
    explanation: {
      "Enigma": "Correct! The Enigma cipher used by the Germans was famously cracked by Allied cryptanalysts.",
      "AES": "Incorrect. AES is a modern symmetric encryption algorithm.",
      "RSA": "Incorrect. RSA is a modern public key algorithm.",
      "SHA-256": "Incorrect. SHA-256 is a hash function, not a cipher."
    }
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "Which of these is a threat posed by quantum computing to current cryptography?",
    options: [
      "It can render RSA insecure",
      "It makes keys longer",
      "It speeds up SHA-256",
      "It improves brute-force resistance"
    ],
    correctAnswer: "It can render RSA insecure",
    explanation: {
      "It can render RSA insecure": "Correct! Quantum algorithms like Shor’s could break RSA and similar schemes.",
      "It makes keys longer": "Incorrect. Quantum computing doesn’t lengthen keys.",
      "It speeds up SHA-256": "Incorrect. SHA-256 is a hash, not the primary concern here.",
      "It improves brute-force resistance": "Incorrect. It actually may reduce resistance to some attacks."
    }
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: "Why was the SHA-1 algorithm considered broken?",
    options: [
      "It allowed hash collisions",
      "It was too slow",
      "It had weak encryption strength",
      "It caused data loss"
    ],
    correctAnswer: "It allowed hash collisions",
    explanation: {
      "It allowed hash collisions": "Correct! Researchers found that two different inputs could produce the same hash—making SHA-1 insecure.",
      "It was too slow": "Incorrect. Speed wasn’t the main concern.",
      "It had weak encryption strength": "Incorrect. SHA-1 is a hash function, not an encryption algorithm.",
      "It caused data loss": "Incorrect. That’s unrelated to cryptographic weakness."
    }
  },
  {
    id: 5,
    type: 'multipleChoice',
    question: "Which technique helps defend against side-channel attacks?",
    options: [
      "Timing randomization and power masking",
      "Using longer passwords",
      "Compressing data before encryption",
      "Adding extra encryption layers"
    ],
    correctAnswer: "Timing randomization and power masking",
    explanation: {
      "Timing randomization and power masking": "Correct! These help obscure patterns attackers can exploit in side-channel attacks.",
      "Using longer passwords": "Incorrect. That helps against brute-force attacks, not side-channel.",
      "Compressing data before encryption": "Incorrect. Compression does not prevent side-channel issues.",
      "Adding extra encryption layers": "Incorrect. Layering may not prevent side-channel data leaks."
    }
  },
  {
    id: 6,
    type: 'multipleChoice',
    question: "Which of the following is a valid ethical concern in cryptanalysis?",
    options: [
      "Vulnerabilities may be exploited before they’re patched",
      "Hash functions use too much memory",
      "Compression algorithms can fail",
      "Encryption is too expensive to deploy"
    ],
    correctAnswer: "Vulnerabilities may be exploited before they’re patched",
    explanation: {
      "Vulnerabilities may be exploited before they’re patched": "Correct! Ethical hackers must act responsibly to avoid causing harm.",
      "Hash functions use too much memory": "Incorrect. That’s a performance issue, not ethical.",
      "Compression algorithms can fail": "Incorrect. Compression isn't relevant here.",
      "Encryption is too expensive to deploy": "Incorrect. Not an ethical concern."
    }
  },
  {
    id: 7,
    type: 'matching',
    question: "Match the cryptographic attack with its description:",
    terms: ["Brute-Force Attack", "Side-Channel Attack", "Quantum Threat", "Hash Collision"],
    options: [
      "Tries every possible key",
      "Exploits physical characteristics of hardware",
      "May break current public-key systems in the future",
      "Two inputs produce same hash"
    ],
    correctAnswer: {
      "Brute-Force Attack": "Tries every possible key",
      "Side-Channel Attack": "Exploits physical characteristics of hardware",
      "Quantum Threat": "May break current public-key systems in the future",
      "Hash Collision": "Two inputs produce same hash"
    },
    explanation: {
      "Brute-Force Attack": "Correct! It’s all about key guessing.",
      "Side-Channel Attack": "Correct! These attacks use hardware clues.",
      "Quantum Threat": "Correct! Quantum computing could revolutionize crypto-breaking.",
      "Hash Collision": "Correct! This undermines hash integrity."
    }
  }
];

function CryptoQuiz5() {
  return (
    <UniversalQuiz 
      questions={quizQuestions}
      backRoute="/cryptography-L5"
      title="Cryptography Quiz 5"
      currentLessonId="lesson5"
      nextLessonId={null}  // Last lesson
      retakeRoute="/lesson/cryptoquiz5"
      nextRoute={null}
      courseId="cryptography"
    />
  );
}

export default CryptoQuiz5;
