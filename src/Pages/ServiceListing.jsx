import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/ServiceListing.css';

// Images import
import acRepairImg from '../Assets/acrepair2.webp';
import plumbingImg from '../Assets/plumbing1.jpg';
import electricianImg from '../Assets/electrician1.jpg';
import paintImg from '../Assets/paint2.jfif';
import cleaningImg from '../Assets/cleaning1.jpg';
import carwashImg from '../Assets/carwash.jfif';
import applianceRepairImg from '../Assets/appliancesrepair1.webp';
import homeShiftingImg from '../Assets/homeshifting.jpg';

const ServiceListing = () => {
  return (
    <div className="service-listing-page">
      <h2 className="listing-heading">Our Services</h2>

      <div className="service-cards-container">

        <div className="service-card">
          <img src={acRepairImg} alt="AC Repair" />
          <h3>AC Repair</h3>
          <p>Quick and efficient air conditioning repair at your convenience.</p>
          <button className="btn-secondary">
            <Link to="/booking-service" style={{ color: 'inherit', textDecoration: 'none' }}>
              Book Now
            </Link>
          </button>
        </div>

        <div className="service-card">
          <img src={plumbingImg} alt="Plumbing" />
          <h3>Plumbing</h3>
          <p>Expert plumbing solutions for leaks, clogs, and installations.</p>
          <button className="btn-secondary">
            <Link to="/booking-service" style={{ color: 'inherit', textDecoration: 'none' }}>
              Book Now
            </Link>
          </button>
        </div>

        <div className="service-card">
          <img src={electricianImg} alt="Electrician" />
          <h3>Electrician</h3>
          <p>Safe and reliable electrical repair, wiring, and installations.</p>
          <button className="btn-secondary">
            <Link to="/booking-service" style={{ color: 'inherit', textDecoration: 'none' }}>
              Book Now
            </Link>
          </button>
        </div>

        <div className="service-card">
          <img src={paintImg} alt="Painting" />
          <h3>Painting</h3>
          <p>Give your home a fresh look with our professional painters.</p>
          <button className="btn-secondary">
            <Link to="/booking-service" style={{ color: 'inherit', textDecoration: 'none' }}>
              Book Now
            </Link>
          </button>
        </div>

        <div className="service-card">
          <img src={cleaningImg} alt="Cleaning" />
          <h3>Cleaning</h3>
          <p>Deep cleaning services for homes, offices, and more.</p>
          <button className="btn-secondary">
            <Link to="/booking-service" style={{ color: 'inherit', textDecoration: 'none' }}>
              Book Now
            </Link>
          </button>
        </div>

        <div className="service-card">
          <img src={carwashImg} alt="Car Wash" />
          <h3>Car Wash</h3>
          <p>Doorstep car cleaning with shine and care by professionals.</p>
          <button className="btn-secondary">
            <Link to="/booking-service" style={{ color: 'inherit', textDecoration: 'none' }}>
              Book Now
            </Link>
          </button>
        </div>

        <div className="service-card">
          <img src={applianceRepairImg} alt="Appliance Repair" />
          <h3>Appliance Repair</h3>
          <p>Fix your appliances fast – washing machines, fridges & more.</p>
          <button className="btn-secondary">
            <Link to="/booking-service" style={{ color: 'inherit', textDecoration: 'none' }}>
              Book Now
            </Link>
          </button>
        </div>

        <div className="service-card">
          <img src={homeShiftingImg} alt="Home Shifting" />
          <h3>Home Shifting</h3>
          <p>Stress-free moving with trusted and affordable shifting experts.</p>
          <button className="btn-secondary">
            <Link to="/booking-service" style={{ color: 'inherit', textDecoration: 'none' }}>
              Book Now
            </Link>
          </button>
        </div>

      </div>

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
        </div>
        <p>© 2025 FixiNow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ServiceListing;
