import React, { useState } from 'react';
import Form from './Forms';
import api from '../../../server/services/api';

const UserForm = ({ switchForm, children }) => {
    const [formData, setFormData] = useState({
        nome: '',
        telefone: '',
        email: '',
        senha: ''
    });

    const userFields = [
        { title: "Nome", type: "text", name: "nome" },
        { title: "Telefone", type: "tel", name: "telefone" },
        { title: "Email", type: "email", name: "email" },
        { title: "Senha", type: "password", name: "senha" }
    ];

    const handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Log do evento e dados do formulário
        console.log("Dados do formulário:", formData);

        try {
            const response = await api.post('/clientes', formData);
            alert('User data submitted successfully');
            console.log("Resposta do servidor:", response.data);

            // Limpa os dados do formulário
            setFormData({
                nome: '',
                telefone: '',
                email: '',
                senha: ''
            });

            switchForm(); // Alterna para o próximo formulário
        } catch (error) {
            console.error('Erro ao enviar dados do usuário:', error);
            alert('Erro ao enviar dados do usuário. Tente novamente.');
        }
    };

    return (
        <Form
            fields={userFields}
            data={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
        >
            {children}
        </Form>
    );
};

export default UserForm;
