import React from 'react';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-container">
      <h1 className="resources-title">Resources</h1>
      <p className="resources-subtitle">Hand-picked tools, courses, and articles to supercharge your cybersecurity journey!</p>

      {/* Books */}
      <div className="resource-section">
        <h2 className="section-title">📚 Books</h2>
        <div className="resource-cards">
          <a href="https://www.amazon.co.uk/Art-Invisibility-Worlds-Teaches-Brother/dp/0316380520/ref=tmm_pap_swatch_0" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>The Art of Invisibility - Kevin Mitnick</h3>
            <p>Learn how to protect your privacy in the digital world.</p>
          </a>
          <a href="https://www.amazon.co.uk/Metasploit-Penetration-Testers-David-Kennedy/dp/159327288X" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>Metasploit: The Penetration Tester’s Guide</h3>
            <p>A great guide for learning ethical hacking and penetration testing.</p>
          </a>
          <a href="https://www.amazon.co.uk/Computer-Security-Principles-Practice-Global/dp/1292220619/ref=tmm_pap_swatch_0" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>Computer Security: Principles and Practice - Stallings & Brown</h3>
            <p>A foundational textbook covering modern cybersecurity essentials.</p>
          </a>
        </div>
      </div>

      {/* Websites */}
      <div className="resource-section">
        <h2 className="section-title">🌐 Websites</h2>
        <div className="resource-cards">
          <a href="https://www.cybrary.it/" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>Cybrary</h3>
            <p>Free online cybersecurity courses and certifications.</p>
          </a>
          <a href="https://www.hackthebox.com/" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>Hack The Box</h3>
            <p>Practice penetration testing and cybersecurity skills legally.</p>
          </a>
          <a href="https://owasp.org/" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>OWASP</h3>
            <p>Essential security knowledge and resources for developers and testers.</p>
          </a>
          <a href="https://www.tryhackme.com/" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>TryHackMe</h3>
            <p>Hands-on cybersecurity training — beginner to advanced. Very popular in the UK.</p>
          </a>
          <a href="https://www.futurelearn.com/courses/introduction-to-cyber-security" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>FutureLearn: Introduction to Cyber Security</h3>
            <p>Free UK-based Open University course — official and trusted.</p>
          </a>
          <a href="https://www.sans.org/cyberaces/" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>SANS Cyber Aces</h3>
            <p>Free cybersecurity fundamentals training, widely respected in the UK.</p>
          </a>
        </div>
      </div>

      {/* YouTube Channels */}
      <div className="resource-section">
        <h2 className="section-title">📺 YouTube Channels</h2>
        <div className="resource-cards">
          <a href="https://www.youtube.com/c/NetworkChuck" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>NetworkChuck</h3>
            <p>Fun and engaging videos about cybersecurity, networking, and IT.</p>
          </a>
          <a href="https://www.youtube.com/c/TheCyberMentor" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>The Cyber Mentor</h3>
            <p>Learn ethical hacking and cybersecurity techniques step-by-step.</p>
          </a>
          <a href="https://www.youtube.com/c/IppSec" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>IppSec</h3>
            <p>Walkthroughs of HackTheBox machines — essential for real-world hacking practice.</p>
          </a>
        </div>
      </div>

      {/* Tools */}
      <div className="resource-section">
        <h2 className="section-title">🛠️ Tools</h2>
        <div className="resource-cards">
          <a href="https://nmap.org/" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>Nmap</h3>
            <p>Powerful network scanning and security auditing tool.</p>
          </a>
          <a href="https://portswigger.net/burp" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>Burp Suite</h3>
            <p>A must-have tool for web application security testing.</p>
          </a>
          <a href="https://kali.org/" className="resource-card" target="_blank" rel="noopener noreferrer">
            <h3>Kali Linux</h3>
            <p>Penetration testing Linux distribution — industry standard.</p>
          </a>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="navigation-button">
        <button onClick={() => window.history.back()}>
          ← Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Resources;
