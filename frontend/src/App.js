import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './components/Register';
import DarkModeToggle from './components/DarkModeToggle';
import Navbar from './components/Navbar'; 
import CoursePage from './pages/CoursePage';
import LessonPages from './pages/LessonPages';
import CourseInfo from './pages/CourseInfo';
import Lesson1Door from './pages/IntroToCyberSecurity/Lesson1Door';
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
          <Route path="/lesson/:lessonId" element={<LessonPages />} />
          <Route path="/course/:courseId" element={<CourseInfo />} />
          <Route path="/cybersecurity-intro" element={<Lesson1Door />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
