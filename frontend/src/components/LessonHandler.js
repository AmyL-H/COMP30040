import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Lesson imports
import IntroLesson1 from '../pages/IntroToCyberSecurity/Lesson1Door';
import IntroLesson2 from '../pages/IntroToCyberSecurity/Lesson2Door';
import IntroLesson3 from '../pages/IntroToCyberSecurity/Lesson3Door';
import IntroLesson4 from '../pages/IntroToCyberSecurity/Lesson4Door';
import IntroLesson5 from '../pages/IntroToCyberSecurity/Lesson5Door';

import CryptoLesson1 from '../pages/Cryptography&Encryption/CryptoLesson1';
import CryptoLesson2 from '../pages/Cryptography&Encryption/CryptoLesson2';
import CryptoLesson3 from '../pages/Cryptography&Encryption/CryptoLesson3';
import CryptoLesson4 from '../pages/Cryptography&Encryption/CryptoLesson4';
import CryptoLesson5 from '../pages/Cryptography&Encryption/CryptoLesson5';

import NetworkLesson1 from '../pages/NetworkSecurity/NetworkLesson1';
import NetworkLesson2 from '../pages/NetworkSecurity/NetworkLesson2';
import NetworkLesson3 from '../pages/NetworkSecurity/NetworkLesson3';
import NetworkLesson4 from '../pages/NetworkSecurity/NetworkLesson4';
import NetworkLesson5 from '../pages/NetworkSecurity/NetworkLesson5';

import EthicalLesson1 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson1';
import EthicalLesson2 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson2';
import EthicalLesson3 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson3';
import EthicalLesson4 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson4';
import EthicalLesson5 from '../pages/EthicalHacking&PenetrationTesting/EthicalLesson5';

const LessonHandler = () => {
  const { lessonId, courseId } = useParams();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')));

  const isLessonUnlocked = (courseId, lessonId) => {
    if (lessonId === 'lesson1') return true;

    const lessonNum = parseInt(lessonId.replace('lesson', ''));
    if (isNaN(lessonNum) || lessonNum <= 1) return true;

    const prevQuizKey = `${courseId.replace(/-/g, '')}quiz${lessonNum - 1}`;
    return user?.progress?.[prevQuizKey] >= 50;
  };

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const lessonMap = {
    "cybersecurity": {
      lesson1: <IntroLesson1 />,
      lesson2: <IntroLesson2 />,
      lesson3: <IntroLesson3 />,
      lesson4: <IntroLesson4 />,
      lesson5: <IntroLesson5 />,
    },
    "cryptography": {
      lesson1: <CryptoLesson1 />,
      lesson2: <CryptoLesson2 />,
      lesson3: <CryptoLesson3 />,
      lesson4: <CryptoLesson4 />,
      lesson5: <CryptoLesson5 />,
    },
    "network-security": {
      lesson1: <NetworkLesson1 />,
      lesson2: <NetworkLesson2 />,
      lesson3: <NetworkLesson3 />,
      lesson4: <NetworkLesson4 />,
      lesson5: <NetworkLesson5 />,
    },
    "ethical-hacking": {
      lesson1: <EthicalLesson1 />,
      lesson2: <EthicalLesson2 />,
      lesson3: <EthicalLesson3 />,
      lesson4: <EthicalLesson4 />,
      lesson5: <EthicalLesson5 />,
    }
  };

  if (!isLessonUnlocked(courseId, lessonId)) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'red' }}>
        <h2>Lesson Locked</h2>
        <p>You must pass the previous quiz with at least 50% to unlock this lesson.</p>
      </div>
    );
  }

  return lessonMap[courseId]?.[lessonId] || <h2>Lesson Not Found</h2>;
};

export default LessonHandler;
