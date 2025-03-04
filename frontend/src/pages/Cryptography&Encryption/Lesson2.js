import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Lesson2.css';

function CryptoLesson2() {
  const navigate = useNavigate();

  return (
    <div className="lessonpage-container">
      <h1 className="title">Lesson 2: Symmetric vs. Asymmetric Encryption</h1>

      {/* Encryption Types Explanation */}
      <section className="lesson-section">
        <h2>Encryption Types Explained</h2>
        <p className="lesson-text">
          Encryption is broadly categorized into symmetric and asymmetric methods.
          Symmetric encryption uses a single key for both encryption and decryption,
          while asymmetric encryption employs a public-private key pair.
        </p>
      </section>

      {/* Comparison Table */}
      <section className="lesson-section">
        <h2>Comparison Table</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Symmetric (e.g., AES)</th>
              <th>Asymmetric (e.g., RSA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Key Usage</td>
              <td>Same key for both encryption and decryption</td>
              <td>Different keys: public for encryption, private for decryption</td>
            </tr>
            <tr>
              <td>Speed</td>
              <td>Faster; ideal for large data volumes</td>
              <td>Slower; computationally more intensive</td>
            </tr>
            <tr>
              <td>Security</td>
              <td>Requires secure key exchange</td>
              <td>Solves key distribution issues</td>
            </tr>
            <tr>
              <td>Use Cases</td>
              <td>Data encryption at rest</td>
              <td>Secure communications and digital signatures</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Interactive Quiz */}
      <section className="lesson-section">
        <h2>Interactive Quiz</h2>
        <p className="lesson-text">
          [Concept Check Quiz Placeholder: Test your understanding on encryption methods]
        </p>
      </section>
    </div>
  );
}

export default CryptoLesson2;
