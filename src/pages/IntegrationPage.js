import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, Card, CardContent, CircularProgress } from '@mui/material';

const IntegrationPage = () => {
  const [bankAccount, setBankAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleLinkAccount = async () => {
    setIsLoading(true);
    setSuccessMessage('');

    try {
      // Simulate API call to link the bank account
      setTimeout(() => {
        setIsLoading(false);
        setSuccessMessage('Bank account successfully linked!');
      }, 2000);
    } catch (error) {
      setIsLoading(false);
      console.error('Error linking account', error);
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom align="center">
        Link Your Bank Account
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Integrate your financial institution to import transactions automatically. This will allow you to track your expenses with ease.
      </Typography>

      <Card>
        <CardContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            {/* Bank Account Input */}
            <TextField
              label="Enter Your Bank Account"
              variant="outlined"
              fullWidth
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
            />

            {/* Link Account Button */}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLinkAccount}
              disabled={isLoading || !bankAccount}
            >
              {isLoading ? <CircularProgress size={24} /> : 'Link Account'}
            </Button>

            {/* Success Message */}
            {successMessage && (
              <Typography variant="h6" color="green">
                {successMessage}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Information about Integration */}
      <Box mt={4}>
        <Typography variant="h6">Why Link Your Account?</Typography>
        <Typography variant="body2" paragraph>
          Linking your bank account allows for seamless import of your financial transactions. You'll be able to automatically categorize expenses and see how they align with your budget.
        </Typography>

        <Typography variant="h6">Supported Banks</Typography>
        <Typography variant="body2" paragraph>
          We support most major banks and credit institutions. You can securely link your accounts using industry-standard encryption and authorization protocols.
        </Typography>
      </Box>
    </Container>
  );
};

export default IntegrationPage;
