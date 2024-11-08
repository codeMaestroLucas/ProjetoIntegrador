import React from 'react';
import Form from './Forms';
import axios from 'axios';


const CarForm = () => {
    const carFields = [
        { title: "Placa", type: "text", name: "placa" },
        { title: "Modelo", type: "text", name: "modelo" },
        { title: "Cor", type: "text", name: "cor" },
        { title: "Ano", type: "number", name: "ano" },
        { title: "Quilometragem", type: "number", name: "quilometragem" }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);
        try {
            await axios.post('/clientes', e);
            alert('User data submitted successfully');
        } catch (error) {
            console.error('Error submitting user data:', error);
            alert('Error submitting user data. Please try again.');
        }
    };

    return (
            <Form
                fields={carFields}
                onSubmit={handleSubmit}
            >
                <input
                    className='btnSubmit barlow-semi-condensed-bold'
                    type="submit"
                    value="Registrar"
                />
            </Form>
    );
};

export default CarForm;
