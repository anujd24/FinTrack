import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import welcomeAnimation from '../animations/welcome-animation.json'; // Replace with your Lottie file
import './WelcomePage.css'; // Import your CSS file

const WelcomePage = () => {
  return (
    <Container maxWidth="lg" style={styles.container}>
      <Box className="textBox"> {/* Use className instead of style */}
        <Typography variant="h2" style={styles.title}>
          Welcome to FinTrack
        </Typography>
        <Typography variant="h5" style={styles.subtitle}>
          Your personal finance tracking solution
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/register" // Replace with your desired route
          style={styles.button}
        >
          Get Started
        </Button>
      </Box>
      <Box style={styles.animationContainer}>
        <Lottie animationData={welcomeAnimation} loop={true} style={styles.lottie} /> {/* Lottie Animation */}
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #f7f8fa 0%, #e1e3e5 100%)', // Gradient background
    padding: '20px',
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    color: '#333', // Ensure text color contrasts with background
    fontWeight: 'bold',
    marginTop: '125px',
    fontSize: '2.5rem', // Adjust font size for visibility
    animation: 'fadeIn 1s ease-in-out',
  },
  subtitle: {
    color: '#555', // Ensure text color contrasts with background
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#0077ff',
    '&:hover': {
      backgroundColor: '#005bb5',
    },
  },
  animationContainer: {
    width: '100%',
    maxWidth: '600px',
    margin: '20px 0',
  },
  lottie: {
    width: '100%',
    height: 'auto',
  },
};

export default WelcomePage;
