import React from 'react';
import Form from './Forms';

const CarForm = ({ handleChange, formData }) => {
    const carFields = [
        { title: "Placa", type: "text", name: "placa" },
        { title: "Modelo", type: "text", name: "modelo" },
        { title: "Cor", type: "text", name: "cor" },
        { title: "Ano", type: "number", name: "ano" },
        { title: "Quilometragem", type: "number", name: "quilometragem" }
    ];

    return (
        <>
            <Form fields={carFields} onChange={handleChange} data={formData} />
            <input
                className='btnSubmit barlow-semi-condensed-bold'
                type="submit"
                value="Registrar"
                // onClick={switchForm}
            />
        </>
    );
};

export default CarForm;
