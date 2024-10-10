import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';
import Lottie from 'lottie-react';
import homeAnimation from '../animations/home-animation.json'; // Your Lottie file
import './HomePage.css'; // Import the CSS file

// Import your logo image
import logo from '../assets/images/logo.png'; // Adjust the path as necessary

const HomePage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="FinTrack Logo" className="logo-image" /> {/* Logo Image */}
          </Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/budget">Budget</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
        <div className="nav-buttons">
          <Button variant="contained">Login</Button>
          <Button variant="outlined">Sign Up</Button>
        </div>
      </nav>

      <Container maxWidth="lg" className="container">
        <Box className="text-box">
          <Typography variant="h2">Welcome to FinTrack</Typography>
          <Typography variant="h5">Track your finances effortlessly</Typography>
        </Box>
        <Box className="animation-container">
          <Lottie animationData={homeAnimation} loop={true} /> {/* Lottie Animation */}
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
