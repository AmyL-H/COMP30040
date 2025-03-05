import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './components/Register';
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
import Quiz1 from './pages/IntroToCyberSecurity/Quiz1';
import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <DarkModeToggle toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/coursepage" element={<CoursePage />} />
          <Route path="/course/:courseId" element={<CourseInfo />} />
          <Route path="/course/:courseId/lesson/:lessonId" element={<LessonHandler />} />
          <Route path="/cybersecurity-intro-L1" element={<Lesson1Door />} />
          <Route path="/cybersecurity-intro-L2" element={<Lesson2Door />} />
          <Route path="/cybersecurity-intro-L3" element={<Lesson3Door />} />
          <Route path="/cybersecurity-intro-L4" element={<Lesson4Door />} />
          <Route path="/cybersecurity-intro-L5" element={<Lesson5Door />} />
          <Route path="/lesson/quiz1" element={<Quiz1 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;