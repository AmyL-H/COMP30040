import React, { useState, useEffect } from 'react';
import './CyberCityMap.css';
import { useNavigate } from 'react-router-dom';

const modules = [
  { title: 'Intro to Cyber Security', id: 'cybersecurity', icon: '🛡️' },
  { title: 'Cryptography & Encryption', id: 'cryptography', icon: '⚠️' },
  { title: 'Network Security', id: 'network-security', icon: '🔐' },
  { title: 'Ethical Hacking & Penetration Testing', id: 'ethical-hacking', icon: '🌐' },
];

const CyberCityMap = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || {});

  const isModuleUnlocked = (moduleId, index) => {
    if (index === 0) return true;

    const unlockRequirements = {
      "cryptography": "cybersecurityquiz5",
      "network-security": "cryptographyquiz5",
      "ethical-hacking": "networksecurityquiz5",
    };

    const requiredQuiz = unlockRequirements[moduleId];
    return user?.progress?.[requiredQuiz] >= 50;
  };

  const handleModuleClick = (moduleId, index) => {
    if (isModuleUnlocked(moduleId, index)) {
      navigate(`/course/${moduleId}`);
    }
  };

  return (
    <div className="cybercity-map-container">
      <h2 className="map-title">Your Cybersecurity Journey</h2>
      <div className="cybercity-map-path">
      <svg className="journey-path-svg">
        {modules.map((mod, i) => {
          if (i < modules.length - 1) {
            const unlocked = isModuleUnlocked(modules[i + 1].id, i + 1);

            const cardWidth = 250;
            const gap = 60;
            const cardSpacing = cardWidth + gap;

            // New: path from center of current card to center of next card
            const x1 = (i * cardSpacing) + cardWidth / 2;
            const x2 = ((i + 1) * cardSpacing) + cardWidth / 2;
            const y = 200;

            return (
              <line
                key={`path-${i}`}
                x1={x1}
                y1={y}
                x2={x2}
                y2={y}
                className={`journey-path ${unlocked ? 'complete' : 'locked'}`}
              />
            );
          }
          return null;
        })}
      </svg>


        {modules.map((module, index) => {
          const unlocked = isModuleUnlocked(module.id, index);

          return (
            <div
              key={module.id}
              className={`city-stop ${unlocked ? 'unlocked' : 'locked'}`}
              role="button"
              tabIndex={unlocked ? 0 : -1}
              onClick={() => handleModuleClick(module.id, index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleModuleClick(module.id, index);
              }}
              style={{ cursor: unlocked ? 'pointer' : 'not-allowed' }}
            >
              <div className="building-icon">{module.icon}</div>
              <div className="module-label">
                <div className="level-tag">Level {index + 1}</div>
                <div className="title">{module.title}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CyberCityMap;
