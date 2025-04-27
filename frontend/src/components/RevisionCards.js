import React, { useState, useEffect } from 'react';
import './RevisionCards.css';

// Define cards grouped by lesson/module
const allCards = {
  cybersecurity: [
    { id: 'cyber1', question: "What is Cybersecurity?", answer: "Cybersecurity protects systems, networks, and programs from digital attacks." },
    { id: 'cyber2', question: "Give an example of a cyber threat.", answer: "Phishing, malware, ransomware, etc." },
  ],
  cryptography: [
    { id: 'crypto1', question: "What does SSL stand for?", answer: "Secure Sockets Layer." },
    { id: 'crypto2', question: "Name one symmetric encryption algorithm.", answer: "AES or DES." },
  ],
  networkSecurity: [
    { id: 'network1', question: "What is a firewall used for?", answer: "To block unauthorized access to or from a private network." },
  ],
  ethicalHacking: [
    { id: 'ethics1', question: "What tool is used for network scanning?", answer: "Nmap." },
  ]
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

    const unlockedLessons = Object.keys(user.progress).filter(
      lessonId => user.progress[lessonId] >= 50 // Unlocked lessons are > 50%
    );

    let cards = [];

    if (unlockedLessons.some(id => id.startsWith('lesson') || id.startsWith('cyber'))) {
      cards = cards.concat(allCards.cybersecurity);
    }
    if (unlockedLessons.some(id => id.startsWith('crypto'))) {
      cards = cards.concat(allCards.cryptography);
    }
    if (unlockedLessons.some(id => id.startsWith('network'))) {
      cards = cards.concat(allCards.networkSecurity);
    }
    if (unlockedLessons.some(id => id.startsWith('ethical'))) {
      cards = cards.concat(allCards.ethicalHacking);
    }

    setAvailableCards(cards);
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
    setFlipped(!flipped);
  };

  const handleAnswer = (difficulty) => {
    if (!currentCard) return;

    const currentProgress = progress[currentCard.id] || { interval: 60000 };

    let newInterval;
    switch (difficulty) {
      case 'again':
        newInterval = 60000; // 1min
        break;
      case 'hard':
        newInterval = currentProgress.interval * 1.5;
        break;
      case 'good':
        newInterval = currentProgress.interval * 2;
        break;
      case 'easy':
        newInterval = currentProgress.interval * 3;
        break;
      default:
        newInterval = 60000;
    }

    newInterval = Math.min(newInterval, 7 * 24 * 60 * 60 * 1000); // Max 7 days

    const updatedProgress = {
      ...progress,
      [currentCard.id]: {
        interval: newInterval,
        nextReview: Date.now() + newInterval,
      },
    };

    setProgress(updatedProgress);
    localStorage.setItem('revisionProgress', JSON.stringify(updatedProgress));

    // Animate fly away
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
        <p>No unlocked cards yet. Complete lessons to unlock revision material!</p>
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
        <button onClick={() => handleAnswer('again')}>Again</button>
        <button onClick={() => handleAnswer('hard')}>Hard</button>
        <button onClick={() => handleAnswer('good')}>Good</button>
        <button onClick={() => handleAnswer('easy')}>Easy</button>
      </div>
    </div>
  );
};

export default RevisionCards;
