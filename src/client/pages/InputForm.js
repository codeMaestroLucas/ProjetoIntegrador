import React from 'react';

import '../styles/inputForm.css';


function InputForm({ title, type, name, required = true, icon = '' }) {
    return (
        <div className='inputDiv'>
            {icon && <i className={`icon ${icon}`} />} {/* Render the FontAwesome icon if it exists */}
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
