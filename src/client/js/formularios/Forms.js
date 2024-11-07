// Forms.js
import React, { useState } from 'react';
import InputForm from './InputForm';
import logoSmall from '../../assets/LogoSmall.png';
import axios from 'axios';
import '../../styles/forms.css';

const Title = () => {
    return (
        <h2 className="title readex-pro-semibold">
            D
            <img src={logoSmall} alt="logoSmall" />
            do
            <span>s</span>
        </h2>
    );
};

function Forms({ fields }) {
    const [userData, setUserData] = useState({});
    const [carData, setCarData] = useState({});
    const [isUserValidated, setIsUserValidated] = useState(false);

    const handleChange = (e, type) => {
        const { name, value } = e.target;
        if (type === 'user') {
            setUserData(prev => ({ ...prev, [name]: value }));
        } else {
            setCarData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = fields.length === 4 ? '/clientes' : '/veiculos';
        const data = fields.length === 4 ? userData : carData;

        try {
            const response = await axios.post(endpoint, data);
            if (endpoint === '/clientes') setIsUserValidated(true);
            alert(`${endpoint === '/clientes' ? 'User' : 'Car'} data submitted successfully!`);
            fields.length === 4 ? setUserData({}) : setCarData({});
        } catch (error) {
            console.error('Error submitting data:', error);
            alert(`Error submitting ${endpoint === '/clientes' ? 'user' : 'car'} data. Please try again.`);
        }
    };

    return (
        <>
            <Title />
            <form className="form" onSubmit={handleSubmit}>
                {fields.map((field, index) => (
                    <InputForm
                        key={index}
                        title={field.title}
                        type={field.type}
                        name={field.name}
                        onChange={(e) => handleChange(e, fields.length === 4 ? 'user' : 'car')}
                    />
                ))}
                <button type="submit" className="btnSubmit barlow-semi-condensed-bold">
                    Submit
                </button>
            </form>
        </>
    );
}

export default Forms;
