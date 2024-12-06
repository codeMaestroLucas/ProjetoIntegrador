import ReactDOM from 'react-dom/client';
import React from 'react';

import App from './client/pages/App.js';

import './client/styles/reset.css';
import './client/styles/fonts.css';
import './client/styles/colors.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
