import React from 'react';
import Form from './Forms';

const UserForm = ({ handleChange, formData, switchForm }) => {
    const userFields = [
        { title: "Nome", type: "text", name: "nome" },
        { title: "Telefone", type: "tel", name: "telefone" },
        { title: "Email", type: "email", name: "email" },
        { title: "Senha", type: "password", name: "senha" }
    ];

    return (
        <>
            <Form fields={userFields} onChange={handleChange} data={formData} />
            <button type="button" onClick={switchForm}>
                <i className="fas fa-arrow-right"></i>
            </button>
        </>
    );
};

export default UserForm;
