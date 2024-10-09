import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemText } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const HelpFAQPage = () => {
    // State to manage expanded accordion panels
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '40px' }}>
            <Typography variant="h4" gutterBottom>
                Help & FAQ
            </Typography>
            <Typography variant="body1" gutterBottom>
                Welcome to the Help and FAQ section! Here you can find answers to common questions and troubleshooting tips for using the application.
            </Typography>

            {/* FAQ Section */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">How do I create an account?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        To create an account, click on the 'Sign Up' button located on the login page. Fill out the required fields including your name, email, and password. After submitting the form, you'll receive a confirmation email. Click the link in the email to activate your account.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">How do I reset my password?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        If you've forgotten your password, go to the login page and click on 'Forgot Password'. Enter your email address, and you'll receive a link to reset your password. Follow the instructions in the email to create a new password.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">How do I set a budget?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        Navigate to the 'Budgeting' page from the dashboard. You can create a new budget by entering the category name and the amount you'd like to allocate. Once created, you can track your spending in real-time and see how much of your budget remains.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Why can't I see my recent transactions?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        If you can't see recent transactions, make sure your internet connection is stable. If the problem persists, log out and log back in. If this doesn't resolve the issue, check the 'Transaction History' page or contact support for further assistance.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">How do I switch between light and dark mode?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        You can switch between light and dark mode from the 'User Profile' page. There is a toggle switch labeled 'Dark Mode'—enable it to switch to dark mode, or disable it to return to light mode.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6">Troubleshooting: What to do if the app is not loading?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        If the app is not loading properly, try the following troubleshooting steps:
                    </Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary="1. Check your internet connection." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="2. Clear your browser cache and cookies." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="3. Ensure you’re using an up-to-date browser version." />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="4. If the issue persists, contact our support team for assistance." />
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default HelpFAQPage
