import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson1Door.css';

const Lesson1Door = () => {
  const navigate = useNavigate();

  return (
    <div className="article-page">
      <div className="content-card">
        <h1>Lesson 1: What is Cybersecurity?</h1>
        <p>
          Cybersecurity is the practice of protecting digital systems, networks, and data from cyber threats.
          These threats include malware, phishing, hacking attempts, and data breaches that can compromise personal,
          corporate, and governmental information.
        </p>
      </div>

      <div className="content-card">
        <h2>Why is Cybersecurity Important?</h2>
        <p>
          In today's interconnected world, cybersecurity is essential for protecting sensitive data, preventing financial losses,
          and maintaining trust in digital systems. Cyberattacks can target individuals, businesses, and governments, leading to
          identity theft, economic damage, and national security risks.
        </p>
      </div>

      <div className="content-card">
        <h2>Types of Cyber Threats</h2>
        <ul>
          <li><strong>Malware:</strong> Malicious software such as viruses, worms, and ransomware designed to harm or exploit systems.</li>
          <li><strong>Phishing:</strong> Fraudulent attempts to obtain sensitive information by impersonating a trustworthy entity.</li>
          <li><strong>Denial-of-Service (DoS) Attacks:</strong> Overloading a system to make it unavailable to legitimate users.</li>
          <li><strong>Man-in-the-Middle Attacks:</strong> Intercepting communications between two parties to steal or manipulate data.</li>
        </ul>
      </div>

      <div className="content-card">
        <h2>Key Principles of Cybersecurity</h2>
        <p>The CIA Triad is a foundational model in cybersecurity, consisting of: <br/></p>
        <div className="image-text-container">
          <img src="/images/CIA.png" alt="CIA Triad" className="lesson-image" />
          <ul className="styled-list">
            <li><strong>Availability:</strong> Ensuring systems are available when needed.</li>
            <li><strong>Integrity:</strong> Protecting data from unauthorized changes.</li>
            <li><strong>Confidentiality:</strong> Ensuring data is accessible only to authorized users.</li>
          </ul>
        </div>
      </div>

      <div className="content-card">
        <h2>The Evolution of Cybersecurity</h2>
        <section className="infographic-section">
          <div className="timeline-container">
            {[
              { year: "1970s", text: "Early computer security focused on physical access control and password protection." },
              { year: "1980s", text: "Introduction of antivirus software and basic firewalls to combat emerging threats." },
              { year: "1990s", text: "The rise of the internet led to increased security protocols and encryption methods." },
              { year: "2000s", text: "Comprehensive cybersecurity frameworks were developed as cyber threats became more sophisticated." },
              { year: "2010s", text: "Advanced threat detection, multi-factor authentication, and AI-driven security emerged." },
              { year: "2020s", text: "Cybersecurity now integrates automation, zero-trust models, and quantum-resistant encryption." }
            ].map((item, index) => (
              <div key={index} className="timeline-item">
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-text">{item.text}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="content-card">
        <h2>Cybersecurity Best Practices</h2>
        <ul>
          <li>Use strong, unique passwords and enable multi-factor authentication.</li>
          <li>Keep software and systems updated to patch vulnerabilities.</li>
          <li>Be cautious with email attachments and links to avoid phishing scams.</li>
          <li>Use firewalls and antivirus software for added protection.</li>
          <li>Regularly back up important data to prevent data loss.</li>
        </ul>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cyberquiz1')}>Proceed to Quiz</button>
      </div>
    </div>
  );
};

export default Lesson1Door;
