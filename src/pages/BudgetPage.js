import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, LinearProgress, Snackbar, Alert, Card, CardContent, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const BudgetingPage = () => {
    // State to manage categories and their budgets
    const [categories, setCategories] = useState([
        { name: 'Groceries', budget: 500, spent: 300 },
        { name: 'Entertainment', budget: 200, spent: 150 },
        { name: 'Utilities', budget: 100, spent: 90 },
    ]);

    const [newCategory, setNewCategory] = useState({ name: '', budget: '' });
    const [expense, setExpense] = useState({ amount: '', category: '' });
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // Handle input change for adding a new category
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCategory({
            ...newCategory,
            [name]: value,
        });
    };

    // Handle expense input change
    const handleExpenseChange = (e) => {
        const { name, value } = e.target;
        setExpense({
            ...expense,
            [name]: value,
        });
    };

    // Add a new category
    const handleAddCategory = () => {
        if (newCategory.name && newCategory.budget) {
            setCategories([
                ...categories,
                { name: newCategory.name, budget: parseFloat(newCategory.budget), spent: 0 },
            ]);
            setSnackbarMessage('Category added successfully!');
            setOpenSnackbar(true);
            setNewCategory({ name: '', budget: '' });
        } else {
            setSnackbarMessage('Please fill out all fields.');
            setOpenSnackbar(true);
        }
    };

    // Add expense to a category
    const handleAddExpense = () => {
        if (expense.amount && expense.category) {
            const updatedCategories = categories.map((category) => {
                if (category.name === expense.category) {
                    return {
                        ...category,
                        spent: category.spent + parseFloat(expense.amount),
                    };
                }
                return category;
            });
            setCategories(updatedCategories);
            setSnackbarMessage(`Expense of $${expense.amount} added to ${expense.category}`);
            setOpenSnackbar(true);
            setExpense({ amount: '', category: '' });
        } else {
            setSnackbarMessage('Please select a category and enter a valid amount.');
            setOpenSnackbar(true);
        }
    };

    // Handle Snackbar close
    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    };

    // Progress bar and budget status
    const calculateProgress = (spent, budget) => {
        const progress = (spent / budget) * 100;
        return progress > 100 ? 100 : progress;
    };

    return (
        <Container maxWidth="md" style={{ marginTop: '40px' }}>
            <Typography variant="h4" gutterBottom>
                Budgeting Page
            </Typography>

            {/* Existing Budgets */}
            <Grid container spacing={3}>
                {categories.map((category, index) => (
                    <Grid item xs={12} md={6} key={index}>
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {category.name}
                                </Typography>
                                <Typography variant="body1" color={calculateProgress(category.spent, category.budget) > 80 ? 'error' : 'textPrimary'}>
                                    Spent: ${category.spent} / ${category.budget}
                                </Typography>
                                <LinearProgress
                                    variant="determinate"
                                    value={calculateProgress(category.spent, category.budget)}
                                    color={calculateProgress(category.spent, category.budget) > 80 ? 'error' : 'primary'}
                                    style={{ marginTop: '10px' }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Add New Category */}
            <Typography variant="h5" style={{ marginTop: '40px' }}>
                Add New Category
            </Typography>
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                <Grid item xs={6}>
                    <TextField
                        label="Category Name"
                        name="name"
                        value={newCategory.name}
                        onChange={handleInputChange}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Budget Amount"
                        name="budget"
                        value={newCategory.budget}
                        onChange={handleInputChange}
                        fullWidth
                        type="number"
                    />
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddCategory}
                style={{ marginTop: '20px' }}
            >
                Add Category
            </Button>

            {/* Add Expense */}
            <Typography variant="h5" style={{ marginTop: '40px' }}>
                Add Expense
            </Typography>
            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                <Grid item xs={6}>
                    <TextField
                        label="Expense Amount"
                        name="amount"
                        value={expense.amount}
                        onChange={handleExpenseChange}
                        fullWidth
                        type="number"
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <InputLabel>Category</InputLabel>
                        <Select
                            name="category"
                            value={expense.category}
                            onChange={handleExpenseChange}
                        >
                            {categories.map((category, index) => (
                                <MenuItem key={index} value={category.name}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <Button
                variant="contained"
                color='primary'
                onClick={handleAddExpense}
                style={{ marginTop: '20px', marginBottom: '20px'}}
            >
                Add Expense
            </Button>

            {/* Snackbar for notifications */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success">
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default BudgetingPage;
