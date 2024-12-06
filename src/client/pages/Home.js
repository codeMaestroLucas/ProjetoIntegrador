import { NavLink } from "react-router-dom";
import React from 'react';

import '../styles/home.css'


function PrimeiraTela() {
    return (
        <div className="divHome">

        <h1 className="readex-pro-bold">Bem-vindo ao FixACar!</h1>
          <p className="readex-pro-semibold">Escolha uma opção:</p>
          <button className='btn_login'>
            <NavLink to="/login">Login</NavLink>
          </button>

          <button className='btn_registrar'>
            <NavLink to="/cadastro">Registrar</NavLink>
          </button>


        </div>
    );
  }
  

export default PrimeiraTela;
