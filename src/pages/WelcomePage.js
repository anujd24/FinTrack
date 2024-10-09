import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Lottie } from 'lottie-react';
import welcomeAnimation from '../animations/welcome-animation.json'; // Replace with your Lottie file

const WelcomePage = () => {
  return (
    <Container maxWidth="lg" style={styles.container}>
      <Box style={styles.textBox}>
        <Typography variant="h2" style={styles.title}>
          Welcome to FinTrack
        </Typography>
        <Typography variant="h5" style={styles.subtitle}>
          Your personal finance tracking solution
        </Typography>
        <Button variant="contained" color="primary" style={styles.button}>
          Get Started
        </Button>
      </Box>
      <Box style={styles.animationContainer}>
        <Lottie animationData={welcomeAnimation} loop={true} /> {/* Lottie Animation */}
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
    background: '#f7f8fa',
    padding: '20px',
    textAlign: 'center',
  },
  textBox: {
    marginBottom: '20px',
    zIndex: 1,
  },
  title: {
    color: '#333',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subtitle: {
    color: '#555',
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
    maxWidth: '600px', // Adjust max width as needed
    margin: '20px 0',
  },
};

export default WelcomePage;
