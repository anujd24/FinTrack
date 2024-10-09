import React, { useState } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Container, Typography, Grid, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const Dashboard = () => {
    // State for date range
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [viewType, setViewType] = useState('monthly'); // Default view type

    // Example data for charts
    const spendingData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Spending',
                data: [300, 500, 200, 700, 400, 600],
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const incomeData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Income',
                data: [400, 700, 600, 800, 500, 900],
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    // Data for Pie/Doughnut chart (Income vs Expenses)
    const pieData = {
        labels: ['Salary', 'Groceries', 'Electric Bill', 'Freelance Work', 'Dining Out'],
        datasets: [
            {
                data: [2000, 150, 80, 400, 60], // Example amounts for each category
                backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
                hoverBackgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    // Example transaction data
    const transactions = [
        { date: '2024-01-05', description: 'Salary', type: 'Income', amount: 2000 },
        { date: '2024-01-10', description: 'Groceries', type: 'Expense', amount: -150 },
        { date: '2024-01-15', description: 'Electric Bill', type: 'Expense', amount: -80 },
        { date: '2024-01-18', description: 'Freelance Work', type: 'Income', amount: 400 },
        { date: '2024-01-22', description: 'Dining Out', type: 'Expense', amount: -60 },
    ];

    // Filter transactions based on date range
    const filteredTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const start = new Date(startDate);
        const end = new Date(endDate);
        return (!startDate || transactionDate >= start) && (!endDate || transactionDate <= end);
    });

    // Function to handle view type change
    const handleViewChange = (type) => {
        setViewType(type);
        // Update chart data here if needed based on the viewType
    };

    // Projection Data for Savings Growth (Dummy Data)
    const projectionData = {
        labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5'],
        datasets: [
            {
                label: 'Projected Savings Growth',
                data: [2100, 2200, 2300, 2400, 2500], // Example projected values
                fill: false,
                borderColor: 'rgba(153, 102, 255, 1)',
                tension: 0.1,
            },
        ],
    };

    return (
        <Container className="dashboard-container">
            <Typography variant="h4" component="h1" gutterBottom>
                Financial Dashboard
            </Typography>

            <Grid container spacing={3}>
                {/* Cards for summary */}
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Income</Typography>
                            <Typography variant="h4">$4,200</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Expenses</Typography>
                            <Typography variant="h4">$2,100</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Savings Balance</Typography>
                            <Typography variant="h4">$2,100</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                {/* Chart View Toggle Buttons */}
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        View Type
                    </Typography>
                    <Button variant={viewType === 'monthly' ? 'contained' : 'outlined'} onClick={() => handleViewChange('monthly')}>Monthly</Button>
                    <Button variant={viewType === 'quarterly' ? 'contained' : 'outlined'} onClick={() => handleViewChange('quarterly')}>Quarterly</Button>
                    <Button variant={viewType === 'yearly' ? 'contained' : 'outlined'} onClick={() => handleViewChange('yearly')}>Yearly</Button>
                </Grid>

                {/* Bar chart for Spending */}
                <Grid item xs={12} md={6}>
                    <div className="chart-container">
                        <Bar data={spendingData} options={{ responsive: true }} />
                    </div>
                </Grid>

                {/* Line chart for Income */}
                <Grid item xs={12} md={6}>
                    <div className="chart-container">
                        <Line data={incomeData} options={{ responsive: true }} />
                    </div>
                </Grid>

                {/* Doughnut Chart for Income vs Expenses */}
                <Grid item xs={12} md={6}>
                    <div className="chart-container">
                        <Doughnut data={pieData} options={{ responsive: true }} />
                    </div>
                </Grid>

                {/* Projected Savings Growth */}
                <Grid item xs={12} md={6}>
                    <div className="chart-container">
                        <Line data={projectionData} options={{ responsive: true }} />
                        <Typography variant="h6" align="center">Projected Savings Growth Over Next 5 Months</Typography>
                    </div>
                </Grid>

                {/* Date Range Filter */}
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Filter Transactions by Date
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                            <TextField
                                type="date"
                                label="Start Date"
                                variant="outlined"
                                fullWidth
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <TextField
                                type="date"
                                label="End Date"
                                variant="outlined"
                                fullWidth
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {/* Transaction History Table */}
                <Grid item xs={12}>
                    <Typography variant="h6" gutterBottom>
                        Transaction History
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table aria-label="transaction table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredTransactions.map((transaction, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{transaction.date}</TableCell>
                                        <TableCell>{transaction.description}</TableCell>
                                        <TableCell>{transaction.type}</TableCell>
                                        <TableCell align="right" style={{ color: transaction.type === 'Income' ? 'green' : 'red' }}>
                                            {transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
