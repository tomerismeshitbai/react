import Navbar from '../../components/navbar/Navbar'
import React, { useState } from 'react';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here, such as sending a request to an authentication API
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
   <div>
    <Navbar/>
    <div className="login-container">
    <h2>Sign in or create an account</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;
