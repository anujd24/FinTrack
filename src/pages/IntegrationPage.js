import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, Card, CardContent, CircularProgress } from '@mui/material';
import Lottie from 'react-lottie';
import successAnimation from '../animations/success-animation.json'; // Example Lottie animation

const IntegrationPage = () => {
  const [bankAccount, setBankAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleLinkAccount = async () => {
    setIsLoading(true);
    setSuccessMessage('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMessage('Bank account successfully linked!');
    }, 2000);
  };

  return (
    <Container maxWidth="md" style={styles.container}>
      {/* Header */}
      <Box style={styles.header}>
        <Typography variant="h3" gutterBottom style={styles.headerText}>
          Link Your Bank Account
        </Typography>
        <Typography variant="body1" style={styles.subText}>
          Integrate your financial institution to import transactions automatically. This will help you keep track of expenses effortlessly.
        </Typography>
      </Box>

      {/* Main Card */}
      <Card style={styles.card}>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            {/* Bank Account Input */}
            <TextField
              label="Enter Your Bank Account"
              variant="outlined"
              fullWidth
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              style={styles.input}
            />

            {/* Link Account Button */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLinkAccount}
              disabled={isLoading || !bankAccount}
              style={styles.button}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Link Account'}
            </Button>

            {/* Success Message */}
            {successMessage && (
              <Box style={styles.successBox}>
                <Typography variant="h6" color="green" style={styles.successMessage}>
                  {successMessage}
                </Typography>
                {/* Lottie Animation */}
                <Lottie
                  options={{
                    loop: false,
                    autoplay: true,
                    animationData: successAnimation,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice',
                    },
                  }}
                  height={150}
                  width={150}
                />
              </Box>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Information about Integration */}
      <Box mt={4} style={styles.infoSection}>
        <Typography variant="h5" style={styles.sectionTitle}>
          Why Link Your Account?
        </Typography>
        <Typography variant="body1" paragraph style={styles.sectionText}>
          Linking your bank account allows for seamless import of your financial transactions. You'll be able to automatically categorize expenses and see how they align with your budget.
        </Typography>

        <Typography variant="h5" style={styles.sectionTitle}>
          Supported Banks
        </Typography>
        <Typography variant="body1" paragraph style={styles.sectionText}>
          We support most major banks and credit institutions. Your account is securely linked using industry-standard encryption.
        </Typography>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '30px',
    backgroundColor: '#f7f8fa',
    padding: '20px',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  headerText: {
    fontWeight: 'bold',
    color: '#333',
  },
  subText: {
    fontSize: '18px',
    color: '#666',
    marginTop: '10px',
  },
  card: {
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    background: 'linear-gradient(145deg, #ffffff, #f0f0f3)',
  },
  input: {
    marginBottom: '20px',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  button: {
    fontSize: '18px',
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#00b300',
    color: '#fff',
  },
  successBox: {
    textAlign: 'center',
    marginTop: '20px',
  },
  successMessage: {
    marginBottom: '20px',
  },
  infoSection: {
    marginTop: '40px',
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#444',
  },
  sectionText: {
    fontSize: '16px',
    color: '#666',
  },
};

export default IntegrationPage;
