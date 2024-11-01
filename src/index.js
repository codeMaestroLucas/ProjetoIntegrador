import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './client/js/App.js';
import './client/styles/reset.css';
import './client/styles/fonts.css';
import './client/styles/colors.css';

const root = ReactDOM.createRoot(document.getElementById('body'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
