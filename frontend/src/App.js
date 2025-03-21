import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import ScrollToTop from './components/TopPage';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import DarkModeToggle from './components/DarkModeToggle';
import Navbar from './components/Navbar'; 
import CoursePage from './pages/CoursePage';
import CourseInfo from './pages/CourseInfo';
import LessonHandler from './components/LessonHandler';
import Community from './pages/Community';
import DiscussionBoard from './components/DiscussionBoard';

// Import Cybersecurity Intro Module Page
import CybersecurityIntroModule from './pages/IntroToCyberSecurity/CybersecurityIntroModule';
import CryptographyIntroModule from './pages/Cryptography&Encryption/CryptographyIntroModule';
import NetworkSecurityIntroModule from './pages/NetworkSecurity/NetworkSecurityIntroModule';
import EthicalHackingIntroModule from './pages/EthicalHacking&PenetrationTesting/EthicalHackingIntroModule';


// Intro to Cybersecurity Module
import Lesson1Door from './pages/IntroToCyberSecurity/Lesson1Door';
import Lesson2Door from './pages/IntroToCyberSecurity/Lesson2Door';
import Lesson3Door from './pages/IntroToCyberSecurity/Lesson3Door';
import Lesson4Door from './pages/IntroToCyberSecurity/Lesson4Door';
import Lesson5Door from './pages/IntroToCyberSecurity/Lesson5Door';
import CyberQuiz1 from './pages/IntroToCyberSecurity/CyberQuiz1';
import CyberQuiz2 from './pages/IntroToCyberSecurity/CyberQuiz2';
import CyberQuiz3 from './pages/IntroToCyberSecurity/CyberQuiz3';
import CyberQuiz4 from './pages/IntroToCyberSecurity/CyberQuiz4';
import CyberQuiz5 from './pages/IntroToCyberSecurity/CyberQuiz5';

// Cryptography & Encryption Module
import CryptoLesson1 from './pages/Cryptography&Encryption/CryptoLesson1';
import CryptoLesson2 from './pages/Cryptography&Encryption/CryptoLesson2';
import CryptoLesson3 from './pages/Cryptography&Encryption/CryptoLesson3';
import CryptoLesson4 from './pages/Cryptography&Encryption/CryptoLesson4';
import CryptoLesson5 from './pages/Cryptography&Encryption/CryptoLesson5';
import CryptoQuiz1 from './pages/Cryptography&Encryption/CryptoQuiz1';
import CryptoQuiz2 from './pages/Cryptography&Encryption/CryptoQuiz2';
import CryptoQuiz3 from './pages/Cryptography&Encryption/CryptoQuiz3';
import CryptoQuiz4 from './pages/Cryptography&Encryption/CryptoQuiz4';
import CryptoQuiz5 from './pages/Cryptography&Encryption/CryptoQuiz5';

// Network Security Module
import NetworkLesson1 from './pages/NetworkSecurity/NetworkLesson1';
import NetworkLesson2 from './pages/NetworkSecurity/NetworkLesson2';
import NetworkLesson3 from './pages/NetworkSecurity/NetworkLesson3';
import NetworkLesson4 from './pages/NetworkSecurity/NetworkLesson4';
import NetworkLesson5 from './pages/NetworkSecurity/NetworkLesson5';
import NetworkQuiz1 from './pages/NetworkSecurity/NetworkQuiz1';
import NetworkQuiz2 from './pages/NetworkSecurity/NetworkQuiz2';
import NetworkQuiz3 from './pages/NetworkSecurity/NetworkQuiz3';
import NetworkQuiz4 from './pages/NetworkSecurity/NetworkQuiz4';
import NetworkQuiz5 from './pages/NetworkSecurity/NetworkQuiz5';

import QuizSummary from './components/QuizSummary';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  // STREAK TRACKING 
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      axios.post('http://localhost:5000/api/user/streak/check', { userId: user._id })
        .then(res => {
          if (res.data.streak) {
            user.streak = res.data.streak;
            user.xp = res.data.xp;
            localStorage.setItem('user', JSON.stringify(user));
            // Optional: toast notification or animation
          }
        })
        .catch(err => console.error('Streak check failed', err));
    }
  }, []);
  

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/coursepage" element={<CoursePage />} />
          <Route path="/course/:courseId" element={<CourseInfo />} />
          <Route path="/course/:courseId/lesson/:lessonId" element={<LessonHandler />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:room" element={<DiscussionBoard />} />

          {/* Intro Module Pages */}
          <Route path="/course/cybersecurity-intro" element={<CybersecurityIntroModule />} />
          <Route path="/course/cryptography-intro" element={<CryptographyIntroModule />} />
          <Route path="/course/network-security-intro" element={<NetworkSecurityIntroModule />} />
          <Route path="/course/ethical-hacking-intro" element={<EthicalHackingIntroModule />} />
          
          {/* Intro to Cybersecurity Module */}
          <Route path="/cybersecurity-intro-L1" element={<Lesson1Door />} />
          <Route path="/cybersecurity-intro-L2" element={<Lesson2Door />} />
          <Route path="/cybersecurity-intro-L3" element={<Lesson3Door />} />
          <Route path="/cybersecurity-intro-L4" element={<Lesson4Door />} />
          <Route path="/cybersecurity-intro-L5" element={<Lesson5Door />} />
          <Route path="/lesson/cyberquiz1" element={<CyberQuiz1 />} />
          <Route path="/lesson/cyberquiz2" element={<CyberQuiz2 />} />
          <Route path="/lesson/cyberquiz3" element={<CyberQuiz3 />} />
          <Route path="/lesson/cyberquiz4" element={<CyberQuiz4 />} />
          <Route path="/lesson/cyberquiz5" element={<CyberQuiz5 />} />

          {/* Cryptography & Encryption Module */}
          <Route path="/cryptography-L1" element={<CryptoLesson1 />} />
          <Route path="/cryptography-L2" element={<CryptoLesson2 />} />
          <Route path="/cryptography-L3" element={<CryptoLesson3 />} />
          <Route path="/cryptography-L4" element={<CryptoLesson4 />} />
          <Route path="/cryptography-L5" element={<CryptoLesson5 />} />
          <Route path="/lesson/cryptoquiz1" element={<CryptoQuiz1 />} />
          <Route path="/lesson/cryptoquiz2" element={<CryptoQuiz2 />} />
          <Route path="/lesson/cryptoquiz3" element={<CryptoQuiz3 />} />
          <Route path="/lesson/cryptoquiz4" element={<CryptoQuiz4 />} />
          <Route path="/lesson/cryptoquiz5" element={<CryptoQuiz5 />} />

          {/* Network Security Module */}
          <Route path="/network-L1" element={<NetworkLesson1 />} />
          <Route path="/network-L2" element={<NetworkLesson2 />} />
          <Route path="/network-L3" element={<NetworkLesson3 />} />
          <Route path="/network-L4" element={<NetworkLesson4 />} />
          <Route path="/network-L5" element={<NetworkLesson5 />} />
          <Route path="/lesson/networkquiz1" element={<NetworkQuiz1 />} />
          <Route path="/lesson/networkquiz2" element={<NetworkQuiz2 />} />
          <Route path="/lesson/networkquiz3" element={<NetworkQuiz3 />} />
          <Route path="/lesson/networkquiz4" element={<NetworkQuiz4 />} />
          <Route path="/lesson/networkquiz5" element={<NetworkQuiz5 />} />

          <Route path="/quiz-summary" element={<QuizSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;