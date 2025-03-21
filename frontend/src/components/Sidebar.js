// frontend/src/components/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';

const sidebarSections = [
  {
    title: 'Why is Cybersecurity Important?',
    content: 'Cybersecurity protects sensitive data, prevents attacks, and secures digital infrastructure that powers our world.'
  },
  {
    title: 'Future Careers',
    content: 'The cybersecurity field offers roles like ethical hackers, security analysts, and engineers — all in high demand.'
  },
  {
    title: 'Impacting You Everyday',
    content: 'From online banking to social media, cybersecurity touches your life in every digital interaction.'
  }
];

const Sidebar = ({ show }) => {
  const [expanded, setExpanded] = useState(null);

  if (!show) return null;

  return (
    <div className="sidebar-overlay">
      <div className="sidebar-content">
        <h2>🔍 Discover More</h2>
        {sidebarSections.map((section, index) => (
          <div key={index} className="sidebar-section">
            <button onClick={() => setExpanded(expanded === index ? null : index)}>
              {section.title}
            </button>
            {expanded === index && <p>{section.content}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
