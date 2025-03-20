import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptoLesson4.css';

function CryptoLesson4() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 4: Public Key Infrastructure (PKI)</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Public Key Infrastructure (PKI) is the system that underpins secure communications on the internet. It uses digital certificates issued by trusted Certificate Authorities (CAs) 
          and key pairs (public and private keys) to verify identities and secure data transmission. PKI not only enables secure email and website encryption but also plays a vital role in digital signatures.
        </p>
        <p className="lesson-text">
          By establishing a chain of trust, PKI ensures that entities communicating online are who they claim to be. This framework is fundamental in securing protocols like SSL/TLS.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Step-by-Step Explanation</h2>
        <p className="lesson-text">
          PKI involves several key components:
          <br/><br/>
          1. <strong>Digital Certificates:</strong> Issued by CAs, these certificates bind a public key to an entity’s identity.
          <br/>
          2. <strong>Certificate Authorities (CAs):</strong> Trusted organizations that verify identities and issue digital certificates.
          <br/>
          3. <strong>Key Pairs:</strong> The public key is shared openly, while the private key is kept secure.
          <br/><br/>
          This systematic approach ensures that data encrypted with a public key can only be decrypted by the corresponding private key.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Interactive Diagram & Drag-and-Drop Activity</h2>
        <p className="lesson-text">
          [Interactive Diagram Placeholder: Explore a labeled diagram of the PKI structure. Use the drag-and-drop activity to match components such as "Certificate Authority," "Public Key," and "Private Key" with their respective functions.]
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cryptoquiz4')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default CryptoLesson4;
