import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';


import Cadastro from './Cadastro'
import Esqueceu from './Esqueceu'
import Login from './Login';
import Home from './Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/esqueceu" element={<Esqueceu />} />
            </Routes>
        </Router>
    );
}

export default App;
