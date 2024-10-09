// src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Typography, Container, Snackbar, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import './styles.css'; // Ensure you have the relevant styles here

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });
            console.log('Login successful:', response.data);
            setSnackbarOpen(true);
            // Handle successful login (e.g., redirect to dashboard)
        } catch (error) {
            console.error('Login failed:', error);
            setError('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Container component="main" maxWidth="xs" className="register-container">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome Back
                </Typography>
                {error && <Alert severity="error">{error}</Alert>}
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputLabelProps={{
                            style: { fontWeight: 'bold' },
                        }}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputLabelProps={{
                            style: { fontWeight: 'bold' },
                        }}
                        sx={{ mb: 2 }}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        disabled={loading}
                        sx={{ mt: 2 }}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </Button>
                </form>
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert onClose={handleSnackbarClose} severity="success">
                        Login successful! Redirecting...
                    </Alert>
                </Snackbar>
            </motion.div>
        </Container>
    );
};

export default Login;
