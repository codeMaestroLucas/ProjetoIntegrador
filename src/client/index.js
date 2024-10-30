import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../js/App.js'; // Ensure this is in src/client/js/App.js
import '../styles/reset.css';
import '../styles/fonts.css';
import '../styles/colors.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
