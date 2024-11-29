import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import InputForm from './InputForm';
import './../../styles/login.css';

const Login = () => {
    const navigate = useNavigate(); // Initialize navigate

    const loginFields = [
        { title: "Email", type: "email", name: "email", icon: "fas fa-arrow-right" },
        { title: "Senha", type: "password", name: "senha", icon: "" }
    ];

    const handleForgotPassword = () => {
        navigate('/login'); // Redirect to /login
    };

    return (
        <>
            <h2 className="title readex-pro-bold">Login</h2>

            <form className='form'>
                {loginFields.map((field, index) => (
                    <InputForm
                        key={index}
                        title={field.title}
                        type={field.type}
                        name={field.name}
                        icon={field.icon}
                    />
                ))}
                
                <button
                    className='esqueceu barlow-semi-condensed'
                    type="button"
                    onClick={handleForgotPassword} // Handle redirection on click
                >
                    Esqueceu a senha?
                </button>
                
                <div className='btnDiv'>
                <button className='entrar' type="submit">
                    <p className='readex-pro-bold'>Entrar</p>
                    <i className="fas fa-arrow-right"></i>
                </button>

                </div>
            </form>
        </>
    );
};

export default Login;
