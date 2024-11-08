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

function Forms({ fields, children }) {
    const [userData, setUserData] = useState({});
    const [carData, setCarData] = useState({});
    const [isUserValidated, setIsUserValidated] = useState(false);

    // Update state based on field type (user or car)
    const handleChange = (e, type) => {
        const { name, value } = e.target;
        if (type === 'user') {
            setUserData((prev) => ({ ...prev, [name]: value }));
        } else {
            setCarData((prev) => ({ ...prev, [name]: value }));
        }
    };

    // Handle form submission and send data to the server
    const handleSubmit = async (e) => {
        e.preventDefault();
        const Udata = fields.length === 4 ? userData : [];
        const Cdata = fields.length === 5 ? carData : [];
        console.log(Udata);
        console.log(Cdata);
        const registerOperation = fields.length === 4 ? false : true;

        try {
            if (registerOperation) {
                if (Udata.length) await axios.post('/clientes', Udata); // Send user data
                if (Cdata.length) await axios.post('/veiculos', Cdata); // Send car data
                fields.length === 4 ? setUserData({}) : setCarData({});
            }
        } catch (error) {
            alert(error.message);
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
                        value={fields.length === 4 ? userData[field.name] : carData[field.name]} // Controlled input
                        onChange={(e) =>
                            handleChange(e, fields.length === 4 ? 'user' : 'car')
                        }
                    />
                ))}

                {children}
            </form>
        </>
    );
}

export default Forms;
