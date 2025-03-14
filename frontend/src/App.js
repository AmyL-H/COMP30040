import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/TopPage';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import Login from './pages/Login';
import DarkModeToggle from './components/DarkModeToggle';
import Navbar from './components/Navbar'; 
import CoursePage from './pages/CoursePage';
import CourseInfo from './pages/CourseInfo';
import LessonHandler from './components/LessonHandler';


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

import Lesson1 from './pages/Cryptography&Encryption/Lesson1';
import Lesson2 from './pages/Cryptography&Encryption/Lesson2';
import Lesson3 from './pages/Cryptography&Encryption/Lesson3';
import Lesson4 from './pages/Cryptography&Encryption/Lesson4';
import Lesson5 from './pages/Cryptography&Encryption/Lesson5';
import CryptoQuiz1 from './pages/Cryptography&Encryption/CryptoQuiz1';
import CryptoQuiz2 from './pages/Cryptography&Encryption/CryptoQuiz2';
import CryptoQuiz3 from './pages/Cryptography&Encryption/CryptoQuiz3';
import CryptoQuiz4 from './pages/Cryptography&Encryption/CryptoQuiz4';
import CryptoQuiz5 from './pages/Cryptography&Encryption/CryptoQuiz5';

import QuizSummary from './components/QuizSummary';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
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

          <Route path="/cryptography-L1" element={<Lesson1 />} />
          <Route path="/cryptography-L2" element={<Lesson2 />} />
          <Route path="/cryptography-L3" element={<Lesson3 />} />
          <Route path="/cryptography-L4" element={<Lesson4 />} />
          <Route path="/cryptography-L5" element={<Lesson5 />} />
          <Route path="/lesson/cryptoquiz1" element={<CryptoQuiz1 />} />
          <Route path="/lesson/cryptoquiz2" element={<CryptoQuiz2 />} />
          <Route path="/lesson/cryptoquiz3" element={<CryptoQuiz3 />} />
          <Route path="/lesson/cryptoquiz4" element={<CryptoQuiz4 />} />
          <Route path="/lesson/cryptoquiz5" element={<CryptoQuiz5 />} />


          <Route path="/quiz-summary" element={<QuizSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;