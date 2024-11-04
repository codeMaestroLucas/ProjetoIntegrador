import React from 'react';

function PrimeiraTela() {
    const handleRegister = () => {
      alert('Botão de Registrar foi clicado!');
    };
  
    const handleLogin = () => {
      alert('Botão de Login foi clicado!');
    };
  
    return (
      <div className="container">
        <h1>Bem-vindo ao FixACar!</h1>
        <p>Escolha uma opção:</p>
        <button className="btn btn-register" onClick={handleRegister}>
          Registrar
        </button>
        <button className="btn btn-login" onClick={handleLogin}>
          Login
        </button>
      </div>
    );
  }
  

export default PrimeiraTela;
