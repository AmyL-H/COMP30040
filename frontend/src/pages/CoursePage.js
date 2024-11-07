// CoursePage.js
import React, { useState } from 'react';
import CourseCard from '../components/CourseCard';
import './CoursePage.css';

const CoursePage = () => {
  // Sample data for course sections
  const courseSections = [
    { title: "Introduction to Cybersecurity", description: "Learn the basics of cybersecurity and protect your data.", progress: 100, locked: false },
    { title: "Cryptography and Encryption", description: "Understand encryption techniques and secure communications.", progress: 70, locked: false },
    { title: "Network Security", description: "Explore how to secure networks from various threats.", progress: 0, locked: true },
    { title: "Ethical Hacking and Penetration Testing", description: "Gain hands-on hacking experience ethically.", progress: 0, locked: true },
    { title: "Security Best Practices", description: "Learn strategies to maintain a secure environment.", progress: 0, locked: true },
  ];

  return (
    <div className='coursepage-container'>
      <h1>Your Cybersecurity Journey</h1>
      <p>Progress through each stage to become a cybersecurity expert!</p>
      <br />
      <div className="course-section">
        {courseSections.map((section, index) => (
          <CourseCard
            key={index}
            title={section.title}
            description={section.description}
            progress={section.progress}
            locked={section.locked}
          />
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
