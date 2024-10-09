import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Lottie from 'react-lottie';
import animationData from '../animations/help-animation.json'; // Importing your Lottie animation
import './HelpFaqPage.css';  // Import the CSS for the hover effect


const HelpFaqPage = () => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // Lottie animation configuration
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData, // This is the imported JSON animation
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px', position: 'relative' }}>
            {/* Wider and Opaque 3D Background Animation */}
            <div style={{
                position: "absolute", 
                top: 0, 
                left: 0,
                marginTop: "200px", 
                width: '100%', 
                height: '100%', 
                zIndex: -1, 
                opacity: 0.55, // Set the opacity level here
                display: 'flex', 
                justifyContent: 'center', // Center the animation
                alignItems: 'center',
                overflow: 'hidden' // Ensure the animation doesn't go out of bounds
            }}>
                <Lottie 
                    options={defaultOptions} 
                    height={500} // Adjust height as needed
                    width={1200} // Adjust width for a wider animation
                />
            </div>

            {/* Help Page Header */}
            <Typography variant="h3" gutterBottom style={{ textAlign: 'center', fontWeight: 'bold' }}>
                Help & FAQ
            </Typography>

            <Box my={4}>
                {/* FAQ Accordions */}
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                        <Typography variant="h6">How do I use the application?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You can navigate through the dashboard to access different features such as budgeting, transaction tracking, and user profile settings. Each section is designed to provide intuitive access to your financial data.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                        <Typography variant="h6">How do I set up my budget?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You can set your budget by going to the Budgeting page. From there, select the category you want to budget for, and input the amount. The progress bars will help you track your spending.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
                        <Typography variant="h6">What if I forget my password?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            You can reset your password by going to the login page and selecting "Forgot Password." You will be prompted to enter your email and follow the instructions sent to you.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>

            {/* Contact Support Button with 3D Effect */}
            <Box display="flex" justifyContent="center" my={4}>
                <Button variant="contained" color="primary" className="hover-button">
                    Contact Support
                </Button>
            </Box>
        </Container>
    );
};

export default HelpFaqPage;
