import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './CourseInfo.css';

const courseContent = {
  "cybersecurity": {
    title: "Introduction to Cybersecurity",
    description: "Learn the fundamentals of cybersecurity and how to protect data and systems.",
    duration: "4 weeks",
    skillLevel: "Beginner",
    modules: [
      { id: "lesson1", title: "What is Cybersecurity?", status: "Completed" },
      { id: "lesson2", title: "Importance of Cybersecurity", status: "In Progress" },
      { id: "lesson3", title: "Common Threats and Vulnerabilities", status: "In Progress" },
      { id: "lesson4", title: "Introduction to Security Frameworks", status: "In Progress" },
      { id: "lesson5", title: "Future Trends in Cybersecurity", status: "In Progress" },
    ],
  },
  "cryptography": {
    title: "Cryptography and Encryption",
    description: "Dive into cryptographic principles and techniques to secure communications.",
    duration: "6 weeks",
    skillLevel: "Intermediate",
    modules: [
      { id: "lesson1", title: "Introduction to Cryptography", status: "In Progress" },
      { id: "lesson2", title: "Symmetric vs. Asymmetric Encryption", status: "In Progress" },
      { id: "lesson3", title: "Applications of Cryptography", status: "In Progress" },
      { id: "lesson4", title: "Public Key Infrastructure (PKI)", status: "In Progress" },
      { id: "lesson5", title: "Breaking and Defending Cryptographic Systems", status: "In Progress" },
    ],
  },
  "network-security": {
    title: "Network Security",
    description: "Explore how to secure networks from various threats.",
    duration: "5 weeks",
    skillLevel: "Intermediate",
    modules: [
      { id: "lesson1", title: "Introduction to Network Security", status: "In Progress" },
      { id: "lesson2", title: "Common Network Security Tools", status: "In Progress" },
      { id: "lesson3", title: "Securing Networks", status: "In Progress" },
      { id: "lesson4", title: "Wireless Network Security", status: "In Progress" },
      { id: "lesson5", title: "Network Vulnerability Assessments", status: "In Progress" },
    ],
  },
  "ethical-hacking": {
    title: "Ethical Hacking and Penetration Testing",
    description: "Gain hands-on hacking experience ethically.",
    duration: "7 weeks",
    skillLevel: "Advanced",
    modules: [
      { id: "lesson1", title: "Introduction to Ethical Hacking", status: "In Progress" },
      { id: "lesson2", title: "Penetration Testing Methodologies", status: "In Progress" },
      { id: "lesson3", title: "Ethical Hacking Tools and Techniques", status: "In Progress" },
      { id: "lesson4", title: "Exploiting Vulnerabilities", status: "In Progress" },
      { id: "lesson5", title: "Reporting and Remediation", status: "In Progress" },
    ],
  },
};

const CourseInfo = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseContent[courseId];

  // Read last accessed lesson from localStorage
  const [lastAccessed, setLastAccessed] = useState(() => {
    return JSON.parse(localStorage.getItem(`${courseId}-lastAccessed`)) || null;
  });

  // Local state for user retrieved from localStorage
  const [user, setUser] = useState(() => {
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  });

  // Listen for progress updates and re-read the user object from localStorage
  useEffect(() => {
    const handleProgressUpdated = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    };
    window.addEventListener('progressUpdated', handleProgressUpdated);
    return () => {
      window.removeEventListener('progressUpdated', handleProgressUpdated);
    };
  }, []);

  // Save lastAccessed lesson to localStorage when it changes
  useEffect(() => {
    if (lastAccessed) {
      localStorage.setItem(`${courseId}-lastAccessed`, JSON.stringify(lastAccessed));
    }
  }, [lastAccessed, courseId]);

  if (!course) {
    return <h2 className="error-message">Course not found</h2>;
  }

  // Function to check if a lesson is unlocked.
  // The first lesson is always unlocked.
  // For subsequent lessons, the previous lesson's progress (stored as a percentage) must be at least 50.
  const isLessonUnlocked = (lessonId) => {
    if (lessonId === 'lesson1') return true;
    const lessonNumber = parseInt(lessonId.replace('lesson', ''), 10);
    if (isNaN(lessonNumber) || lessonNumber <= 1) return true;
    if (user && user.progress) {
      const prevLessonId = `lesson${lessonNumber - 1}`;
      const prevProgress = user.progress[prevLessonId];
      return prevProgress !== undefined && prevProgress >= 50;
    }
    return false;
  };

  return (
    <div className="course-info">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>
        <strong>Duration:</strong> {course.duration} | <strong>Skill Level:</strong> {course.skillLevel}
      </p>

      <div className="lesson-cards">
        {course.modules.map((module) => {
          const unlocked = isLessonUnlocked(module.id);
          return (
            <div
              key={module.id}
              className={`lesson-card ${lastAccessed === module.id ? "last-accessed" : ""} ${!unlocked ? "locked" : ""}`}
            >
              <h2>{module.title}</h2>
              <ul className="task-list">
                <li>Read the article</li>
                <li>Complete the quiz</li>
                <li>Take the final exam</li>
              </ul>
              <div className="card-buttons">
                <button
                  onClick={() => {
                    if (unlocked) {
                      setLastAccessed(module.id); // Update last accessed lesson
                      navigate(`/course/${courseId}/lesson/${module.id}`);
                    }
                  }}
                  disabled={!unlocked}
                >
                  {unlocked ? "Resume Lesson" : "Locked"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseInfo;