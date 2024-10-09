import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Switch, FormControlLabel, Snackbar, Alert, Grid, Card, CardContent, CardActions } from '@mui/material';

const UserProfile = () => {
    // State for user information
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);
    const [theme, setTheme] = useState('light');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    // Toggle notification settings
    const handleNotificationToggle = () => {
        setNotificationsEnabled((prev) => !prev);
    };

    // Change theme
    const handleThemeChange = (event) => {
        setTheme(event.target.checked ? 'dark' : 'light');
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setSnackbarMessage('Profile updated successfully!');
        setOpenSnackbar(true);
    };

    // Handle Snackbar close
    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '40px' }}>
            <Card elevation={3}>
                <CardContent>
                    <Typography variant="h5" gutterBottom align="center" style={{ fontWeight: 'bold' }}>
                        User Profile Settings
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Name"
                                name="name"
                                value={userInfo.name}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Email"
                                name="email"
                                value={userInfo.email}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="New Password"
                                type="password"
                                name="password"
                                value={userInfo.password}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={notificationsEnabled}
                                        onChange={handleNotificationToggle}
                                        color="primary"
                                    />
                                }
                                label="Enable Notifications"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={theme === 'dark'}
                                        onChange={handleThemeChange}
                                        color="primary"
                                    />
                                }
                                label="Dark Mode"
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        onClick={handleSubmit}
                        style={{ margin: '0 16px 16px 16px' }}
                    >
                        Save Changes
                    </Button>
                </CardActions>
            </Card>

            {/* Snackbar for notifications */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default UserProfile;
