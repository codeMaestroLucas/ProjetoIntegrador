import React, { useState } from "react";
import UserForm from "./UserForm";
import CarForm from "./CarForm";

const Cadastro = () => {
  const [currentForm, setCurrentForm] = useState("user");

  const switchForm = () => {
    setCurrentForm((prevForm) => (prevForm === "user" ? "car" : "user"));
  };

  return (
    <div>
      {currentForm === "user" ? (
        <UserForm switchForm={switchForm} />
      ) : (
        <CarForm switchForm={switchForm} />
      )}
    </div>
  );
};

export default Cadastro;
