import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseInfo.css';

const courseContent = {
  "cybersecurity": {
    title: "Introduction to Cybersecurity",
    description: "Learn the fundamentals of cybersecurity and how to protect data and systems.",
    duration: "4 weeks",
    skillLevel: "Beginner",
    modules: [
      { title: "What is Cybersecurity?", status: "Completed" },
      { title: "Importance of Cybersecurity", status: "In Progress" },
      { title: "Common Threats and Vulnerabilities", status: "Locked" },
      { title: "Introduction to Security Frameworks", status: "Locked" },
      { title: "Future Trends in Cybersecurity", status: "Locked" },
    ],
  },
  "cryptography": {
    title: "Cryptography and Encryption",
    description: "Dive into cryptographic principles and techniques to secure communications.",
    duration: "6 weeks",
    skillLevel: "Intermediate",
    modules: [
      { title: "Introduction to Cryptography", status: "In Progress" },
      { title: "Symmetric vs. Asymmetric Encryption", status: "Locked" },
      { title: "Applications of Cryptography", status: "Locked" },
      { title: "Public Key Infrastructure (PKI)", status: "Locked" },
      { title: "Breaking and Defending Cryptographic Systems", status: "Locked" },
    ],
  },
  "network-security": {
    title: "Network Security",
    description: "Explore how to secure networks from various threats.",
    duration: "5 weeks",
    skillLevel: "Intermediate",
    modules: [
      { title: "Introduction to Network Security", status: "Locked" },
      { title: "Common Network Security Tools", status: "Locked" },
      { title: "Securing Networks", status: "Locked" },
      { title: "Wireless Network Security", status: "Locked" },
      { title: "Network Vulnerability Assessments", status: "Locked" },
    ],
  },
  "ethical-hacking": {
    title: "Ethical Hacking and Penetration Testing",
    description: "Gain hands-on hacking experience ethically.",
    duration: "7 weeks",
    skillLevel: "Advanced",
    modules: [
      { title: "Introduction to Ethical Hacking", status: "Locked" },
      { title: "Penetration Testing Methodologies", status: "Locked" },
      { title: "Ethical Hacking Tools and Techniques", status: "Locked" },
      { title: "Exploiting Vulnerabilities", status: "Locked" },
      { title: "Reporting and Remediation", status: "Locked" },
    ],
  },
  "security-best-practices": {
    title: "Security Best Practices",
    description: "Learn strategies to maintain a secure environment.",
    duration: "3 weeks",
    skillLevel: "Beginner",
    modules: [
      { title: "Personal Security Best Practices", status: "Locked" },
      { title: "Organizational Security Strategies", status: "Locked" },
      { title: "Incident Response and Recovery", status: "Locked" },
      { title: "Building a Security-First Culture", status: "Locked" },
    ],
  },
};

const CourseInfo = () => {
  const { courseId } = useParams();
  const course = courseContent[courseId];
  const [lastAccessed, setLastAccessed] = useState(
    JSON.parse(localStorage.getItem(`${courseId}-lastAccessed`)) || 0
  );

  if (!course) {
    return <h2>Course not found</h2>;
  }

  // Save the last accessed module to localStorage
  const resumeCourse = () => {
    const nextModule = course.modules[lastAccessed];
    if (nextModule && nextModule.status !== "Locked") {
      alert(`Resuming "${nextModule.title}"`);
      setLastAccessed(lastAccessed + 1);
    } else {
      alert("All available modules are completed or locked.");
    }
  };

  localStorage.setItem(`${courseId}-lastAccessed`, JSON.stringify(lastAccessed));

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

      {/* Quest Map */}
      <div className="quest-map">
        {course.modules.map((module, index) => (
          <div
            key={index}
            className={`module-node ${module.status.toLowerCase()} ${
              index === lastAccessed ? "current-module" : ""
            }`}
          >
            <div className="node-icon">
              {module.status === "Completed"
                ? "✔️"
                : module.status === "In Progress"
                ? "⏳"
                : "🔒"}
            </div>
            <h3>{module.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseInfo;
