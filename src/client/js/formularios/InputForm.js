import React from 'react';
import '../../styles/inputForm.css';

function InputForm({ title, type, name, required= true }) {
    return (
        <div className='inputDiv'>
            <label className='label barlow-semi-condensed-medium'>{title}</label>
            <input
                className='input barlow-semi-condensed-medium'
                type={type}
                name={name}
                required={required}
            />
        </div>
    );
}

export default InputForm;
