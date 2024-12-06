import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';


import CadastroUsuario from './CadastroUsuario';
import CadastroVeiculo from './CadastroVeiculo';
import Login from './Login';
import Home from './Home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
                <Route path="/cadastroVeiculo" element={<CadastroVeiculo />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
