// InputForm.js
import React from 'react';
import '../styles/inputForm.css';


function InputForm(props) {
    return (
        <>
            <label className='label'>{props.title}:</label>
            <br />
            <input type="text" name={props.title} className='input' required />
        </>
    );
}

export default InputForm;
