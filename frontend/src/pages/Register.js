import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', {
        name,
        email,
        password,
      });
      console.log('Registration response:', res.data);
      // Instead of navigating directly to coursepage, redirect to login with the data prefilled
      navigate('/login', { state: { email, password } });
    } catch (err) {
      console.error('Registration error:', err.response?.data || err);
      setError(err.response?.data?.msg || 'Registration failed');
    }
  };

  return (
    <div className="register-container">
      <h1>Sign Up</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            name="name"
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Name" 
            required 
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
          />
        </div>
        <div>
          <input 
            type="password" 
            name="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <br/>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Register;
