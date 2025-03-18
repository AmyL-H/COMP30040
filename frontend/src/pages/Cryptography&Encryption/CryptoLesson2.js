import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CryptoLesson2.css';

function CryptoLesson2() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 2: Symmetric vs. Asymmetric Encryption</h1>
      
      <div className="lesson-section">
        <p className="lesson-text">
          Encryption is the process of converting plaintext into ciphertext using an algorithm and a key.
          There are two primary types of encryption: <strong>symmetric</strong> and <strong>asymmetric</strong>.
          In symmetric encryption, the same key is used for both encrypting and decrypting data. This method is fast and efficient, making it ideal for large volumes of data.
          Asymmetric encryption, on the other hand, uses a pair of keys – a public key for encryption and a private key for decryption – which helps solve the key distribution problem.
        </p>
        <p className="lesson-text">
          While symmetric encryption offers speed, asymmetric encryption offers enhanced security through digital signatures and secure key exchange protocols.
          Many systems actually use a hybrid approach where asymmetric encryption is used to securely exchange a symmetric key.
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Side-by-Side Comparison</h2>
        <p className="lesson-text">
          Compare the strengths and weaknesses:
        </p>
        <table>
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Symmetric Encryption (e.g., AES)</th>
              <th>Asymmetric Encryption (e.g., RSA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Key Usage</td>
              <td>Same key for both encryption and decryption</td>
              <td>Different keys (public & private)</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>Fast, efficient for large data sets</td>
              <td>Slower, computationally intensive</td>
            </tr>
            <tr>
              <td>Security</td>
              <td>Requires secure key exchange</td>
              <td>Provides secure key distribution; enables digital signatures</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div className="lesson-section">
        <h2>Animated Transitions</h2>
        <p className="lesson-text">
          [Animated Transition Placeholder: Watch a visual demonstration of how symmetric and asymmetric encryption work, highlighting the process of key exchange and encryption/decryption cycles.]
        </p>
      </div>
      
      <div className="lesson-section">
        <h2>Concept Check</h2>
        <p className="lesson-text">
          Reflect on which method would be best suited for securing a large database versus establishing secure email communication.
        </p>
      </div>
      
      <div className="navigation-button">
        <button onClick={() => navigate('/lesson/cryptoquiz2')}>Proceed to Quiz</button>
      </div>
    </div>
  );
}

export default CryptoLesson2;
