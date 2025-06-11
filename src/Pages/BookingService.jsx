import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/BookingService.css';

const BookingService = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    address: '',
  });

 
  const services = ['Plumber', 'Cleaner', 'Tutor', 'Electrician' , 'AC Repair' , 'Paint', 'Car Wash', 'Home Shifting', 'Appliance Repair'];


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just alert the form data (or send to backend)
    alert('Booking submitted! Thank you, ' + formData.name);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      address: '',
    });
  };

  return (
    <div className="booking-container">
      <h2>Book Your Service</h2>
      <form className="booking-form" onSubmit={handleSubmit}>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+92-300-1234567"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label htmlFor="service">Select Service</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="">-- Choose a Service --</option>
          {services.map((service) => (
            <option key={service} value={service}>{service}</option>
          ))}
        </select>

        <label htmlFor="date">Preferred Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]}
        />

        <label htmlFor="time">Preferred Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Service Address</label>
        <textarea
          id="address"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleChange}
          required
          rows="3"
        ></textarea>

        <button type="submit" className="btn-submit">Book Now</button>
      </form>

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

export default BookingService;
