import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './components/Register';
import DarkModeToggle from './components/DarkModeToggle';
import Navbar from './components/Navbar'; 
import CoursePage from './pages/CoursePage';
import LessonPage from './pages/LessonPage';
import CourseDetails from './pages/CourseDetails';
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
          <Route path="/lesson" element={<LessonPage />} />
          {/* Route for individual course pages */}
          <Route path="/course/:courseId" element={<CourseDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
