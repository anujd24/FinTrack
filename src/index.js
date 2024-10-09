// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import store from './store/store'; // Import the store
import App from './App';
import './styles.css';

const container = document.getElementById('root'); // Get the root element
const root = createRoot(container); // Create a root

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
