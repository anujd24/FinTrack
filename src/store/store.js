// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice'; // Import your auth slice

const store = configureStore({
    reducer: {
        auth: authReducer, // Add the auth slice
    },
});

export default store;
