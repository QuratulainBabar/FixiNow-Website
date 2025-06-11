import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Profile from './Pages/Profile';
import UserDashboard from './Pages/UserDashboard';
import ProviderDashboard from './Pages/ProviderDashboard';
import Booking from './Pages/Booking';
import Review from './Pages/Review';
import AdminPanel from './Pages/AdminPanel';
import BookingService from './Pages/BookingService';
import ServiceListing from './Pages/ServiceListing';
import Support from './Pages/Support';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/booking-service" element={<BookingService />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/provider-dashboard" element={<ProviderDashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/review" element={<Review />} />
        <Route path="/services" element={<ServiceListing />} />

        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/support" element={<Support />} />

      </Routes>
    </Router>
  );
}

export default App;
