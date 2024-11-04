import React, { useState } from 'react';
import Form from './Forms';
import '../styles/app.css';

const App = props => {
    const userFields = [
        { title: "Nome", type: "text", name: "nome" },
        { title: "Telefone", type: "tel", name: "telefone" },
        { title: "Email", type: "email", name: "email" },
        { title: "Senha", type: "password", name: "senha" }
    ];
    
    const carFields = [
        { title: "Placa", type: "text", name: "placa" },
        { title: "Modelo", type: "text", name: "modelo" },
        { title: "Cor", type: "text", name: "cor" },
        { title: "Ano", type: "number", name: "ano" },
        { title: "Quilometragem", type: "number", name: "quilometragem" }
    ];

    const [currentForm, setCurrentForm] = useState('user');
    const [formData, setFormData] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value);
    };



    const switchForm = () => {
        // Perform your operations here
        console.log('Performing operations with form data:', formData);

        // After operations, reset form data
        setCurrentForm(prevForm => (prevForm === 'user' ? 'car' : 'user'));
    };

    return (
        <main className='main'>
            {currentForm === 'user' ? (
                <>
                    <Form
                        fields={userFields}
                        onChange={handleChange}
                        data={formData}
                    />
                    <button
                        type="button" // Change to "button"
                        onClick={switchForm}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </>

            ) : (
                <>
                    <Form
                        fields={carFields}
                        onChange={handleChange}
                        data={formData}
                    />
                    <input
                        className='btnSubmit barlow-semi-condensed-bold'
                        type="submit"
                        value="Registrar"
                        onClick={switchForm}
                    />
            </>

            )};
        </main>
    );
}

export default App;
