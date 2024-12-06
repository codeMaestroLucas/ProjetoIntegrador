import React from 'react';
import InputForm from './InputForm';
import logoSmall from '../assets/LogoSmall.png';
import '../styles/forms.css';

const Title = () => (
    <h2 className="title readex-pro-semibold">
        D
        <img src={logoSmall} alt="logoSmall" />
        do
        <span>s</span>
    </h2>
);

function Forms({ fields, data, onChange, onSubmit }) {
    return (
        <>
            <Title />
            
            <form className="form" onSubmit={onSubmit}>
                {fields.map((field, index) => (
                    <InputForm
                        key={index}
                        title={field.title}
                        type={field.type}
                        name={field.name}
                        value={data[field.name] || ''}
                        onChange={onChange}
                    />
                ))}
                <button type="submit" className="btnSwitch barlow-semi-condensed-bold">
                    <i className="fas fa-arrow-right"></i>
                </button>
            </form>
        </>
    );
}

export default Forms;
