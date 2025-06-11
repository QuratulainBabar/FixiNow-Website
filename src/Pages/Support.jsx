import React from 'react';
import { Link } from 'react-router-dom';  // Link import zaroori hai
import '../Styles/Support.css';

const Support = () => {
  return (
    <div className="support-container">
      <h2>Need Help? We're Here for You!</h2>
      <p className="support-subtext">
        Contact us anytime. We’re just a message away.
      </p>

      <div className="support-grid">

        <div className="support-box">
          <h3>📞 Contact Us</h3>
          <p><strong>Email:</strong> support@fixinow.com</p>
          <p><strong>Phone:</strong> +92-300-1234567</p>
        </div>

        <div className="support-box">
          <h3>❓ FAQs</h3>
          <ul>
            <li>✔ How do I book a service?</li>
            <li>✔ How do I cancel or reschedule?</li>
            <li>✔ What payment methods do you accept?</li>
            <li>✔ How do I contact the provider?</li>
          </ul>
        </div>

        <div className="support-box">
          <h3>💬 Live Chat</h3>
          <p>Chat with us 24/7 and get instant support from our team.</p>
          <button className="chat-button">Start Chat</button>
        </div>

      </div> {/* Close support-grid */}

      {/* Footer should be outside support-grid and support-box */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/">Home <br /></Link>
          <Link to="/login">Login <br /></Link>
          <Link to="/signup">Signup <br /></Link>
          <Link to="/services">Service Listing <br /></Link>
          <Link to="/profile">Profile <br /></Link>
          <Link to="/user-dashboard">User Dashboard <br /></Link>
          <Link to="/provider-dashboard">Provider Dashboard <br /></Link>
          <Link to="/booking">Booking <br /></Link>
          <Link to="/review">Review <br /></Link>
          <Link to="/admin">Admin Panel <br /></Link>
          <Link to="/support">Help & Support <br /></Link>
        </div>
        <p>© 2025 FixiNow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Support;
