import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if email is valid
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    // Clear error and proceed with login
    setEmailError('');
    console.log("Logging in with:", email, password);
    // Add login logic here, such as calling an API
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      // On successful login, store JWT token in localStorage
      localStorage.setItem('authToken', response.data.token);
      console.log('Login successful:', response.data);
    }
    catch {
      console.error('Error logging in:', e);
      setEmailError('Invalid email or password'); // Set error for invalid login
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <img src="https://www.bayer.com/themes/custom/bayer_cpa/logo.svg" alt="Logo" className="logo" />
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="links">
          <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
          <a href="/register" className="register-link">New User? Register here</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
