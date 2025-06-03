import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/services">Service Listing</Link>
          <Link to="/service-detail">Service Detail</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/user-dashboard">User Dashboard</Link>
          <Link to="/provider-dashboard">Provider Dashboard</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/review">Review</Link>
          <Link to="/admin">Admin Panel</Link>
        </div>
        <p>© 2025 FixiNow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Login;
