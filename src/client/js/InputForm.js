import React from 'react';
import '../styles/inputForm.css';


function InputForm({title, type}) {
    return (
        <div className='inputDiv'>
            <label className='label barlow-semi-condensed-medium'>{title}</label>

            <br />
            
            <input
                className='input barlow-semi-condensed-medium'
                type= {type}
                name= {title}
                required

                />
        </div>
    );
}

export default InputForm;
