import { NavLink } from "react-router-dom";
import React from 'react';

import '../styles/home.css'


function PrimeiraTela() {
    return (
        <>
          <h1>Bem-vindo ao FixACar!</h1>
          <p>Escolha uma opção:</p>
          <button className='btn'>
            <NavLink to="/cadastro">Registrar</NavLink>
          </button>

          <button className='btn'>
            <NavLink to="/login">Login</NavLink>
          </button>
        </>
    );
  }
  

export default PrimeiraTela;
