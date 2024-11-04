import React from 'react';
import InputForm from './InputForm';
import logoSmall from '../assets/LogoSmall.png';
import api from '../../server/services/api';

import '../styles/forms.css';

function Forms({fields}) {

    // const

    async function handleSubmit(e) {
        e.preventDefault();

        if (fields.lenght === 4) { // User
            const response = await api.post('clientes');
            e.target.reset();
            console.log('Formulário enviado cliente');
        } else { // Car
            const response = await api.post('veiculos');
            console.log('Formulário enviado veiculos');

        }
    }

    return (

        <>
            <h2 className= "title readex-pro-semibold">
                D
                <img src= {logoSmall} alt= "logoSmall" />
                do
                <span>s</span>
            </h2>

            <form
                className= 'form'
                onSubmit= {handleSubmit}
                >

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

            </form>
        </>

    );
}

export default Forms;
