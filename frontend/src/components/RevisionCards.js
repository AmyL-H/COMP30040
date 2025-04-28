import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import './RevisionCards.css';

const allCards = {
  // Module 1: Cybersecurity
  lesson1: [
    { id: 'cyber1', question: "What is Cybersecurity?", answer: "Cybersecurity protects systems, networks, and programs from digital attacks." },
    { id: 'cyber2', question: "What are the three pillars of cybersecurity?", answer: "Confidentiality, Integrity, Availability (CIA Triad)." },
  ],
  lesson2: [
    { id: 'cyber3', question: "What is malware?", answer: "Malicious software designed to harm or exploit devices or networks." },
    { id: 'cyber4', question: "Name one common type of malware.", answer: "Virus, Worm, Trojan Horse, Ransomware." },
  ],
  lesson3: [
    { id: 'cyber5', question: "What is phishing?", answer: "A fraudulent attempt to obtain sensitive information by pretending to be a trustworthy entity." },
    { id: 'cyber6', question: "How can you recognize a phishing email?", answer: "Look for suspicious links, spelling errors, and urgent requests." },
  ],
  lesson4: [
    { id: 'cyber7', question: "What is a vulnerability?", answer: "A weakness that can be exploited to perform unauthorized actions." },
    { id: 'cyber8', question: "What is a patch?", answer: "A software update that fixes vulnerabilities." },
  ],
  lesson5: [
    { id: 'cyber9', question: "What is social engineering?", answer: "Manipulating people to give up confidential information." },
    { id: 'cyber10', question: "Give an example of a social engineering attack.", answer: "Phishing, pretexting, baiting." },
  ],

  // Module 2: Cryptography
  cryptolesson1: [
    { id: 'crypto1', question: "What is cryptography?", answer: "The practice of secure communication in the presence of third parties." },
    { id: 'crypto2', question: "What does encryption do?", answer: "It transforms readable data into an unreadable format to protect it." },
  ],
  cryptolesson2: [
    { id: 'crypto3', question: "What is a cipher?", answer: "An algorithm for performing encryption or decryption." },
    { id: 'crypto4', question: "What is the Caesar cipher?", answer: "A substitution cipher where each letter is shifted a fixed number of places." },
  ],
  cryptolesson3: [
    { id: 'crypto5', question: "What is symmetric encryption?", answer: "The same key is used for both encryption and decryption." },
    { id: 'crypto6', question: "What is asymmetric encryption?", answer: "Uses a pair of keys: public key to encrypt, private key to decrypt." },
  ],
  cryptolesson4: [
    { id: 'crypto7', question: "What is a public key?", answer: "A key that can be shared openly and used to encrypt data." },
    { id: 'crypto8', question: "What is a private key?", answer: "A secret key used to decrypt data encrypted with the corresponding public key." },
  ],
  cryptolesson5: [
    { id: 'crypto9', question: "What is hashing?", answer: "A process that converts data into a fixed-size string of characters." },
    { id: 'crypto10', question: "Name a popular hashing algorithm.", answer: "SHA-256." },
  ],

  // Module 3: Network Security
  networklesson1: [
    { id: 'network1', question: "What is a firewall?", answer: "A firewall monitors and controls incoming and outgoing network traffic." },
    { id: 'network2', question: "Name one purpose of a firewall.", answer: "Block unauthorized access while permitting authorized communication." },
  ],
  networklesson2: [
    { id: 'network3', question: "What is a VPN?", answer: "A Virtual Private Network encrypts your internet connection for privacy and security." },
    { id: 'network4', question: "Why use a VPN?", answer: "To protect your data and privacy, especially on public Wi-Fi networks." },
  ],
  networklesson3: [
    { id: 'network5', question: "What is port scanning?", answer: "The process of sending packets to ports on a host to discover open ports." },
    { id: 'network6', question: "What is a common tool for port scanning?", answer: "Nmap." },
  ],
  networklesson4: [
    { id: 'network7', question: "What is intrusion detection?", answer: "Monitoring networks or systems for malicious activity or policy violations." },
    { id: 'network8', question: "Give an example of an intrusion detection system.", answer: "Snort." },
  ],
  networklesson5: [
    { id: 'network9', question: "What is DDoS?", answer: "Distributed Denial of Service - an attack to overwhelm a server with traffic." },
    { id: 'network10', question: "Name a way to mitigate DDoS attacks.", answer: "Use of anti-DDoS services like Cloudflare." },
  ],
};


const getInitialProgress = () => {
  const saved = localStorage.getItem('revisionProgress');
  return saved ? JSON.parse(saved) : {};
};

const RevisionCards = () => {
  const [progress, setProgress] = useState(getInitialProgress());
  const [availableCards, setAvailableCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [flipped, setFlipped] = useState(false);
  const [flyAway, setFlyAway] = useState(false);

  useEffect(() => {
    loadUnlockedCards();
    window.addEventListener('progressUpdated', loadUnlockedCards);
    return () => window.removeEventListener('progressUpdated', loadUnlockedCards);
  }, []);

  useEffect(() => {
    if (availableCards.length > 0) {
      pickNextCard();
    }
  }, [availableCards]);

  const loadUnlockedCards = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.progress) {
      setAvailableCards([]);
      return;
    }

    let newCards = [];
    for (let i = 1; i <= 5; i++) {
      const cyberKey = `cybersecurityquiz${i}`;
      const cryptoKey = `cryptographyquiz${i}`;
      const networkKey = `networksecurityquiz${i}`;

      if (user.progress[cyberKey] >= 50) {
        const lessonKey = `lesson${i}`;
        if (allCards[lessonKey]) {
          newCards = newCards.concat(allCards[lessonKey]);
        }
      }

      if (user.progress[cryptoKey] >= 50) {
        const cryptoLessonKey = `cryptolesson${i}`;
        if (allCards[cryptoLessonKey]) {
          newCards = newCards.concat(allCards[cryptoLessonKey]);
        }
      }

      if (user.progress[networkKey] >= 50) {
        const networkLessonKey = `networklesson${i}`;
        if (allCards[networkLessonKey]) {
          newCards = newCards.concat(allCards[networkLessonKey]);
        }
      }
    }
    setAvailableCards(newCards);
  };

  const pickNextCard = () => {
    const now = Date.now();
    const dueCards = availableCards.filter(card => {
      const nextReview = progress[card.id]?.nextReview || 0;
      return nextReview <= now;
    });

    if (dueCards.length > 0) {
      setCurrentCard(dueCards[0]);
    } else {
      setCurrentCard(null);
    }
  };

  const handleFlip = () => {
    setFlipped(prev => !prev);
  };

  const handleAnswer = (difficulty) => {
    if (!currentCard) return;

    let baseInterval;
    switch (difficulty) {
      case 'again': baseInterval = 60000; break;
      case 'hard': baseInterval = 5 * 60000; break;
      case 'good': baseInterval = 20 * 60000; break;
      case 'easy': baseInterval = 30 * 60000; break;
      default: baseInterval = 60000;
    }

    const previousInterval = progress[currentCard.id]?.interval || 60000;
    let newInterval = difficulty === 'again' || difficulty === 'hard'
      ? previousInterval * 0.5
      : previousInterval * 1.5;

    newInterval = Math.max(baseInterval, newInterval);
    newInterval = Math.min(newInterval, 7 * 24 * 60 * 60 * 1000);

    const updatedProgress = {
      ...progress,
      [currentCard.id]: {
        interval: newInterval,
        nextReview: Date.now() + newInterval,
      },
    };

    setProgress(updatedProgress);
    localStorage.setItem('revisionProgress', JSON.stringify(updatedProgress));

    setFlyAway(true);
    setTimeout(() => {
      setFlyAway(false);
      setFlipped(false);
      pickNextCard();
    }, 500);
  };

  if (availableCards.length === 0) {
    return (
      <div className="revision-card-container">
        <h2>🧠 Revision Cards</h2>
        <p>No unlocked cards yet. Complete quizzes to unlock revision material!</p>
      </div>
    );
  }

  if (!currentCard) {
    return (
      <div className="revision-card-container">
        <h2>🧠 Revision Cards</h2>
        <p>All caught up! No cards due right now.</p>
      </div>
    );
  }

  return (
    <div className="revision-card-container">
      <h2>🧠 Revision Cards</h2>

      <div className={`card ${flipped ? 'flipped' : ''} ${flyAway ? 'fly-away' : ''}`} onClick={handleFlip}>
        <div className="card-front">
          <p>{currentCard.question}</p>
        </div>
        <div className="card-back">
          <p>{currentCard.answer}</p>
        </div>
      </div>

      <div className="answer-buttons">
        <button className="again" onClick={() => handleAnswer('again')}>Again<br /><small>1 min</small></button>
        <button className="hard" onClick={() => handleAnswer('hard')}>Hard<br /><small>5 min</small></button>
        <button className="good" onClick={() => handleAnswer('good')}>Good<br /><small>20 min</small></button>
        <button className="easy" onClick={() => handleAnswer('easy')}>Easy<br /><small>30 min</small></button>
      </div>
    </div>
  );
};

export default RevisionCards;
