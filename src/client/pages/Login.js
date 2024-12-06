import React from "react";
import InputForm from "./InputForm";

import "../styles/login.css";

const Login = () => {

  const loginFields = [
    {
      title: "Email",
      type: "email",
      name: "email",
      icon: "fas fa-arrow-right",
    },
    { title: "Senha", type: "password", name: "senha", icon: "" },
  ];

  return (
    <>
      <h2 className="title readex-pro-bold">Login</h2>

      <form className="form">
        {loginFields.map((field, index) => (
          <InputForm
            key={index}
            title={field.title}
            type={field.type}
            name={field.name}
            icon={field.icon}
          />
        ))}

        <a href='/'
           className="esqueceu barlow-semi-condensed"
           type="button">
          Esqueceu a senha?
        </a>

        <button className="entrar" type="submit">
          <p className="readex-pro-bold">Entrar</p>
          <i className="fas fa-arrow-right"></i>
        </button>
      </form>
    </>
  );
};

export default Login;
