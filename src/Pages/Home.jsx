import React from 'react';

import HeroImage from '../Assets/1.jfif';
import PlumberImage from '../Assets/plumber1.jfif';
import CleanerImage from '../Assets/cleaner.jfif';
import TutorImage from '../Assets/tutor.jfif';
import ElectricianImage from '../Assets/Electrician.jfif';
import { Link } from 'react-router-dom';


import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">

      {/* Header */}
      <header className="header">
        <div className="logo">FixiNow</div>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <Link to="/login" className="btn-login">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="btn-signup">Sign Up</Link>
            </li>

          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-text">
          {/* <h1>FixiNow</h1> */}
          <p>Fast, Reliable Service Bookings at Your Fingertips</p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Hero Banner" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          {[{
            img: PlumberImage,
            title: "Plumber"
          }, {
            img: CleanerImage,
            title: "Cleaner"
          }, {
            img: TutorImage,
            title: "Tutor"
          }, {
            img: ElectricianImage,
            title: "Electrician"
          }].map((service, idx) => (
            <div key={idx} className="service-card">
              <img src={service.img} alt={service.title} />
              <h3>{service.title}</h3>
              <p>Expert {service.title.toLowerCase()} services at your doorstep.</p>
              <button className="btn-secondary">Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About FixiNow</h2>
        <p>FixiNow is your trusted partner for quick and reliable service bookings. We connect you to professional service providers, ensuring quality and satisfaction every time.</p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonial-cards">
          {[
            {
              name: "Ali",
              feedback: "Excellent service! Quick response and very professional."
            },
            {
              name: "Sara",
              feedback: "Fixed my leaking sink in no time. Highly recommend!"
            },
            {
              name: "Omar",
              feedback: "Cleaners were friendly and did a great job at my home."
            }
          ].map((testi, idx) => (
            <div key={idx} className="testimonial-card">
              <p>"{testi.feedback}"</p>
              <h4>- {testi.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter" id="contact">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter for the latest offers and updates.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit" className="btn-primary">Subscribe</button>
        </form>
      </section>

      {/* Footer */}








      <footer className="footer">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/services">Service Listing</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/user-dashboard">User Dashboard</Link>
          <Link to="/provider-dashboard">Provider Dashboard</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/review">Review</Link>
          <Link to="/admin">Admin Panel</Link>
          <Link to="/support">Help & Support</Link>
        </div>
        <p>© 2025 FixiNow. All rights reserved.</p>
      </footer>


    </div>
  );
};

export default Home;
