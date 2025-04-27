import React, { useState, useEffect } from 'react';
import './RevisionCards.css';

const allCards = {
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
  const [dueCardsCount, setDueCardsCount] = useState(0);

  useEffect(() => {
    loadUnlockedCards();
    window.addEventListener('progressUpdated', loadUnlockedCards);
    return () => window.removeEventListener('progressUpdated', loadUnlockedCards);
  }, []);

  useEffect(() => {
    if (availableCards.length > 0) {
      pickNextCard();
    }
  }, [availableCards, progress]);

  const loadUnlockedCards = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user || !user.progress) {
      setAvailableCards([]);
      return;
    }

    let newCards = [];
    for (let i = 1; i <= 5; i++) {
      const quizKey = `cybersecurityquiz${i}`;
      if (user.progress[quizKey] >= 50) {
        const lessonKey = `lesson${i}`;
        if (allCards[lessonKey]) {
          newCards = newCards.concat(allCards[lessonKey]);
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

    setDueCardsCount(dueCards.length);

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
      case 'again':
        baseInterval = 60000; // 1 min
        break;
      case 'hard':
        baseInterval = 5 * 60000; // 5 min
        break;
      case 'good':
        baseInterval = 20 * 60000; // 20 min
        break;
      case 'easy':
        baseInterval = 30 * 60000; // 30 min
        break;
      default:
        baseInterval = 60000;
    }

    const previousInterval = progress[currentCard.id]?.interval || 60000;
    let newInterval = (difficulty === 'again' || difficulty === 'hard')
      ? previousInterval / 2
      : previousInterval * 1.5;

    newInterval = Math.max(baseInterval, newInterval);
    newInterval = Math.min(newInterval, 7 * 24 * 60 * 60 * 1000); // 7 days

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

      const now = Date.now();
      const nextCards = availableCards.filter(card => {
        const nextReview = updatedProgress[card.id]?.nextReview || 0;
        return nextReview <= now && card.id !== currentCard.id;
      });

      setDueCardsCount(nextCards.length);

      if (nextCards.length > 0) {
        setCurrentCard(nextCards[0]);
      } else {
        setCurrentCard(null);
      }
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
      <p>{dueCardsCount} card(s) due</p>

      <div
        className={`card ${flipped ? 'flipped' : ''} ${flyAway ? 'fly-away' : ''}`}
        onClick={handleFlip}
      >
        <div className="card-front">
          <p>{currentCard.question}</p>
        </div>
        <div className="card-back">
          <p>{currentCard.answer}</p>
        </div>
      </div>

      <div className="answer-buttons">
        <button className="again" onClick={() => handleAnswer('again')}>
          Again<br /><small>1 min</small>
        </button>
        <button className="hard" onClick={() => handleAnswer('hard')}>
          Hard<br /><small>5 min</small>
        </button>
        <button className="good" onClick={() => handleAnswer('good')}>
          Good<br /><small>20 min</small>
        </button>
        <button className="easy" onClick={() => handleAnswer('easy')}>
          Easy<br /><small>30 min</small>
        </button>
      </div>
    </div>
  );
};

export default RevisionCards;
