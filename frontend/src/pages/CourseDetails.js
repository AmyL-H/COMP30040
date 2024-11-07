// CourseDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

function CourseDetails() {
  const { courseId } = useParams();

  // Use courseId to fetch specific course details if needed
  // For example, you might retrieve content from an API or local data
  const courseContent = {
    '1': {
      title: 'Introduction to Cybersecurity',
      description: 'Gain a comprehensive foundation in cybersecurity by exploring essential principles, the significance of digital security, and the common threats facing individuals, businesses, and governments today.',
      lessons: ['Lesson 1: What is Cybersecurity?', 'Lesson 2: Importance of Cybersecurity', 'Lesson 3: Common Threats and Vulnerabilities'],
    },
    '2': {
      title: 'Cryptography and Encryption',
      description: 'Learn the science behind securing data and communications through cryptography. This course covers key encryption methods, including symmetric and asymmetric algorithms, and demonstrates how cryptography is used to protect sensitive information.',
      lessons: ['Lesson 1: Introduction to Cryptography', 'Lesson 2: Symmetric and Asymmetric Encryption', 'Lesson 3: Applications of Cryptography'],
    },
    '3': {
      title: 'Network Security',
      description: 'Learn how to protect computer networks against threats and attacks by exploring fundamental network security principles, key tools, and best practices for safeguarding network infrastructures.',
      lessons: ['Lesson 1: Introduction to Network Security', 'Lesson 2: Common Network Security Tools', 'Lesson 3: Securing Networks'],
    },
    '4': {
      title: 'Ethical Hacking and Penetration Testing',
      description: 'Dive into the world of ethical hacking to understand how security professionals identify and address vulnerabilities in systems. This course covers penetration testing methodologies and hands-on practice with popular hacking tools.',
      lessons: ['Lesson 1: Introduction to Ethical Hacking', 'Lesson 2: Penetration Testing Methodologies', 'Lesson 3: Ethical Hacking Tools and Techniques'],
    },
    '5': {
      title: 'Security Best Practices',
      description: 'Develop a strong security-first mindset with essential practices for both individuals and organizations. This course covers personal security habits, organizational strategies, and methods for incident response and recovery.',
      lessons: ['Lesson 1: Personal Security Best Practices', 'Lesson 2: Organizational Security Strategies', 'Lesson 3: Incident Response and Recovery'],
    },
  };

  const course = courseContent[courseId];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2>Lessons</h2>
      <ul>
        {course.lessons.map((lesson, index) => (
          <li key={index}>{lesson}</li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
