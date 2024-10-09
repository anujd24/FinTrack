// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/Dashboard';
import UserProfile from './pages/UserProfile';
import BudgetingPage from './pages/BudgetPage';
import HelpFAQPage from './pages/HelpFaqPage';
import IntegrationPage from './pages/IntegrationPage';
import WelcomePage from './pages/WelcomePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/budget" element={<BudgetingPage/>}/>
                <Route path="/help" element={<HelpFAQPage/>}/>
                <Route path="/integration" element={<IntegrationPage/>}/>
                
            </Routes>
        </Router>
    );
};

export default App;
