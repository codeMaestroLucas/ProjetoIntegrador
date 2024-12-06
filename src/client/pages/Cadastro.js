import React, { useState } from 'react';
import logoSmall from "../assets/LogoSmall.png";
import "../styles/forms.css";

import CadastroUsuario from './CadastroUsuario';
import CadastroVeiculo from './CadastroVeiculo';

const Title = () => (
  <h2 className="title readex-pro-semibold">
    D
    <img src={logoSmall} alt="logoSmall" />
    do
    <span>s</span>
  </h2>
);

const Cadastro = () => {
  const [userData, setUserData] = useState({
    nome: '',
    telefone: '',
    email: '',
    senha: '',
  });

  const [carData, setCarData] = useState({
    placa: '',
    modelo: '',
    cor: '',
    ano: '',
    quilometragem: ''
  });

  const [showCarForm, setShowCarForm] = useState(false); // Added state to track the form step

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  

const handleCarInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const isUserFormFilled = Object.values(userData).every(value => value !== '');

  const handleNextStep = () => {
    if (isUserFormFilled) {
      setShowCarForm(true); // Switch to the car form when user data is filled
    } else {
      console.error('Please fill in all the user form fields.');
    }
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const userResponse = await fetch("http://localhost:3333/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (userResponse.ok) {
    const { email } = userData;
    const userIdResponse  = await fetch(`http://localhost:3333/user/${ email }`, {
      method: "GET",
    });
    const { _id } = await userIdResponse.json();

    const carResponse = await fetch("http://localhost:3333/car", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...carData, dono: _id }),
    });

    if (carResponse.ok) {
      console.log('Data submitted successfully!');
    } else {
      console.error('Failed to submit car data');
    }
  } else {
    const errorResponse = await userResponse.json();
    console.error(errorResponse.error); // Log the error from the backend
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <Title />
      {!showCarForm ? (
        <>
          <CadastroUsuario userData={userData} setUserData={setUserData} />
          <button
            type="button"
            className="btnSwitch barlow-semi-condensed-bold"
            onClick={handleNextStep}
            disabled={!isUserFormFilled}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </>
      ) : (
        <>
          <CadastroVeiculo carData={carData} handleCarInputChange={handleCarInputChange} />
          <button type="submit" className="btnSwitch barlow-semi-condensed-bold">
            <i className="fas fa-arrow-right"></i>
          </button>
        </>
      )}
    </form>
  );
};

export default Cadastro;
