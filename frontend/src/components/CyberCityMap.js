import React from 'react';
import './CyberCityMap.css';

const CyberCityMap = ({ sections, onModuleClick }) => (
  <div className="cybercity-map-container">
    <h2>Cyber City Map</h2>
    <div className="cybercity-map-grid">
      {sections.map((section) => (
        <div
          key={section.id}
          className={`cybercity-node ${section.locked ? 'locked' : 'unlocked'}`}
          onClick={() => !section.locked && onModuleClick(section.id)}
        >
          <div className="node-icon">{section.locked ? "🔒" : "🏙️"}</div>
          <p className="node-title">{section.title}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CyberCityMap;
