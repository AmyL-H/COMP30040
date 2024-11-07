// CoursePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import './CoursePage.css';

const CoursePage = () => {
  const navigate = useNavigate();

  // Sample data for course sections
  const courseSections = [
    { id: 1, title: "Introduction to Cybersecurity", description: "Learn the basics of cybersecurity and protect your data.", progress: 100, locked: false },
    { id: 2, title: "Cryptography and Encryption", description: "Understand encryption techniques and secure communications.", progress: 70, locked: false },
    { id: 3, title: "Network Security", description: "Explore how to secure networks from various threats.", progress: 0, locked: true },
    { id: 4, title: "Ethical Hacking and Penetration Testing", description: "Gain hands-on hacking experience ethically.", progress: 0, locked: true },
    { id: 5, title: "Security Best Practices", description: "Learn strategies to maintain a secure environment.", progress: 0, locked: true },
  ];

  // Function to navigate to course details page
  const goToCourseDetails = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  return (
    <div className='coursepage-container'>
      <h1>Your Cybersecurity Journey</h1>
      <p>Progress through each stage to become a cybersecurity expert!</p>
      <br />
      <div className="course-section">
        {courseSections.map((section) => (
          <CourseCard
            key={section.id}
            title={section.title}
            description={section.description}
            progress={section.progress}
            locked={section.locked}
            onClick={() => goToCourseDetails(section.id)} // Pass the course ID for navigation
          />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
