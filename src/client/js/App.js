import React from 'react';
import Form from './Forms';

import '../styles/app.css';

function App() {
    const userFields = [
        { title: "Nome", type: "text" },
        { title: "Telefone", type: "tel" },
        { title: "Email", type: "email" },
        { title: "Senha", type: "password" }
    ];
    
    const carFields = [
        { title: "Placa", type: "text" },
        { title: "Modelo", type: "text" },
        { title: "Cor", type: "text" },
        { title: "Ano", type: "number" },
        { title: "Quilometragem", type: "number" }
    ];
    

    return (
        <main className='main'>
            <Form fields={userFields} />
        </main>
    );
}

export default App;
