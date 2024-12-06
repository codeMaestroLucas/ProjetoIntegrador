import React from "react";

const CadastroVeiculo = ({ carData, handleCarInputChange }) => {
  const carFields = [
    { title: "Placa", type: "text", name: "placa" },
    { title: "Modelo", type: "text", name: "modelo" },
    { title: "Cor", type: "text", name: "cor" },
    { title: "Ano", type: "number", name: "ano" },
    { title: "Quilometragem", type: "number", name: "quilometragem" },
  ];

  return (
    <>
      {carFields.map((field) => (
        <div className="inputDiv" key={field.name}>
          <label className="label barlow-semi-condensed-medium">
            {field.title}
          </label>
          <input
            className="input barlow-semi-condensed-medium"
            type={field.type}
            name={field.name}
            value={carData[field.name]}
            onChange={handleCarInputChange}
            required
          />
        </div>
      ))}
    </>
  );
};

export default CadastroVeiculo;
