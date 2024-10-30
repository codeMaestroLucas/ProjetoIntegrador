import React from 'react';
import InputForm from './InputForm';

import '../styles/forms.css';

function Forms(props) {

    const fields = [
        {title: "Nome"},
        {title: "Telefone"},
        {title: "Email"},
        {title: "Senha"},
    ];

    return (

        <form>

            {/* Campos a ser preenchidos */}
            {
                fields.map((field, index) => (
                    <InputForm key={index} title={field.title} />
                ))
            }

            <input type="submit" value="Submit" />

        </form>

    );
}

export default Forms;
