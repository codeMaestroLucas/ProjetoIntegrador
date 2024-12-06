import React from 'react';
import logoSmall from "../assets/LogoSmall.png";
import "../styles/forms.css";

const Title = () => (
  <h2 className="title readex-pro-semibold">
    D
    <img src={logoSmall} alt="logoSmall" />
    do
    <span>s</span>
  </h2>
);
const Cadastro = () => {
    const carFields = [
        { title: "Placa", type: "text", name: "placa" },
        { title: "Modelo", type: "text", name: "modelo" },
        { title: "Cor", type: "text", name: "cor" },
        { title: "Ano", type: "number", name: "ano" },
        { title: "Quilometragem", type: "number", name: "quilometragem" }
    ];


    return (
        <form action="http://localhost:3333/car" method="POST">
        <Title />
        {carFields.map((field) => (
          <div className="inputDiv" key={field.name}>
            <label className="label barlow-semi-condensed-medium">
              {field.title}
            </label>
            <input
              className="input barlow-semi-condensed-medium"
              type={field.type}
              name={field.name}
              required
            />
          </div>
        ))}
        <button type="submit" className="btnSwitch barlow-semi-condensed-bold">
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    );
};

export default Cadastro;
