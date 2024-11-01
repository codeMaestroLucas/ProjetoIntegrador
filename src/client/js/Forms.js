import React from 'react';
import InputForm from './InputForm';
import logoSmall from '../assets/LogoSmall.png';

import '../styles/forms.css';

function Forms({fields}) {

    return (

        <>
            <h2 className="title readex-pro-semibold">
                D
                <img src={logoSmall} alt="logoSmall" />
                do
                <span>s</span>
            </h2>

            <form className='form'>

                {/* Campos a ser preenchidos */}
                {
                    fields.map((field, index) => (
                        <InputForm
                            key= {index}
                            title= {field.title}
                            type= {field.type}
                        />
                    ))
                }

                <input
                    className='btnSubmit barlow-semi-condensed-bold'
                    type="submit"
                    value="Registrar"
                    />

            </form>
        </>

    );
}

export default Forms;
