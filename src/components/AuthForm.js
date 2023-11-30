// AuthForm.js
import React, { useState } from 'react';

const AuthForm = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: '',
    email: '', // Only used for registration
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any existing errors

    // Construct the endpoint based on the form mode
    const endpoint = isLogin ? '/api/login' : '/api/register';
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userCredentials),
      });

      const data = await response.json();
      if (response.ok) {
        onAuthSuccess(data); // Pass the data up to the parent component
      } else {
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('Network error: Could not connect to the server.');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError(''); // Clear errors when toggling
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={userCredentials.email}
            onChange={handleChange}
            required={!isLogin}
          />
        )}
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userCredentials.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userCredentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={toggleForm}>
        {isLogin ? 'Need an account? Register' : 'Have an account? Login'}
      </button>
    </div>
  );
};

export default AuthForm;
