import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson4.css';

function CryptoLesson4() {
  const [diagramNodes] = useState({
    node1: { top: 20, left: 20 },
    node2: { top: 50, left: 150 },
    node3: { top: 100, left: 80 },
  });
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 4: Public Key Infrastructure (PKI)</h1>
      
      {/* Understanding PKI */}
      <section className="lesson-section">
        <h2>Understanding PKI</h2>
        <p className="lesson-text">
          PKI manages digital certificates and key pairs to secure communications, ensuring authenticity through trusted certificate authorities (CAs).
        </p>
      </section>

      {/* Digital Signatures */}
      <section className="lesson-section">
        <h2>Digital Signatures & Authentication</h2>
        <p className="lesson-text">
          Digital signatures use a private key to sign data and a public key to verify its authenticity, safeguarding data integrity.
        </p>
      </section>

      {/* Interactive PKI Diagram */}
      <section className="lesson-section">
        <h2>Interactive PKI Diagram</h2>
        <div className="diagram-container">
          <div className="node" id="node1" style={{ top: `${diagramNodes.node1.top}px`, left: `${diagramNodes.node1.left}px` }}>
            Certificate Authority
          </div>
          <div className="node" id="node2" style={{ top: `${diagramNodes.node2.top}px`, left: `${diagramNodes.node2.left}px` }}>
            Public Key
          </div>
          <div className="node" id="node3" style={{ top: `${diagramNodes.node3.top}px`, left: `${diagramNodes.node3.left}px` }}>
            Private Key
          </div>
        </div>
        <p className="lesson-text">
          [Drag-and-Drop Activity Placeholder: Match PKI components with their functions]
        </p>
      </section>
    </div>
  );
}

export default CryptoLesson4;
