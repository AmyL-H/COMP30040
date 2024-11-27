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
  "security-best-practices": {
    title: "Security Best Practices",
    description: "Learn strategies to maintain a secure environment.",
    duration: "3 weeks",
    skillLevel: "Beginner",
    modules: [
      { id: "lesson1", title: "Personal Security Best Practices", status: "In Progress" },
      { id: "lesson2", title: "Organizational Security Strategies", status: "In Progress" },
      { id: "lesson3", title: "Incident Response and Recovery", status: "In Progress" },
      { id: "lesson4", title: "Building a Security-First Culture", status: "In Progress" },
    ],
  },
};

const CourseInfo = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = courseContent[courseId];

  const [lastAccessed, setLastAccessed] = useState(
    JSON.parse(localStorage.getItem(`${courseId}-lastAccessed`)) || 0
  );

  useEffect(() => {
    if (course) {
      localStorage.setItem(`${courseId}-lastAccessed`, JSON.stringify(lastAccessed));
    }
  }, [lastAccessed, courseId, course]);

  if (!course) {
    return <h2>Course not found</h2>;
  }

  const handleModuleClick = (moduleId, status) => {
    if (status !== "Locked") {
      navigate(`/lesson/${moduleId}`);
      const index = course.modules.findIndex((module) => module.id === moduleId);
      setLastAccessed(index);
    } else {
      alert("This lesson is locked. Complete the previous lessons first!");
    }
  };

  // Save the last accessed module to localStorage
  const resumeCourse = () => {
    const nextModule = course.modules[lastAccessed];
    if (nextModule && nextModule.status !== "Locked") {
      navigate(`/lesson/${nextModule.id}`);
    } else {
      alert("No unlocked lessons available to resume.");
    }
  };

  // Calculate overall progress
  const totalModules = course.modules.length;
  const completedModules = course.modules.filter((module) => module.status === "Completed").length;
  const progressPercentage = Math.round((completedModules / totalModules) * 100);


  return (
    <div className="course-info-container">
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>
        <strong>Duration:</strong> {course.duration} | <strong>Skill Level:</strong> {course.skillLevel}
      </p>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            className="progress-bar-filled"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p>{progressPercentage}% Complete</p>
      </div>

      {/* Resume Button */}
      <button className="resume-button" onClick={resumeCourse}>
        Resume
      </button>

      {/* Modules */}
      <div className="quest-map">
        {course.modules.map((module, index) => (
          <div
            key={index}
            className={`module-node ${module.status.toLowerCase()}`}
            onClick={() => handleModuleClick(module.id, module.status)}
          >
            <div className="node-icon">
              {module.status === "Completed" ? "✔️" : module.status === "In Progress" ? "⏳" : "🔒"}
            </div>
            <h3>{module.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseInfo;
