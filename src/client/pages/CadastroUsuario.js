const CadastroUsuario = ({ userData, setUserData }) => {
  const userFields = [
    { title: "Nome", type: "text", name: "nome" },
    { title: "Email", type: "email", name: "email" },
    { title: "Telefone", type: "tel", name: "telefone" },
    { title: "Senha", type: "password", name: "senha" },
  ];

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <>
      {userFields.map((field) => (
        <div className="inputDiv" key={field.name}>
          <label className="label barlow-semi-condensed-medium">
            {field.title}
          </label>
          <input
            className="input barlow-semi-condensed-medium"
            type={field.type}
            name={field.name}
            value={userData[field.name]}
            onChange={handleUserInputChange}
            required
          />
        </div>
      ))}
    </>
  );
};

export default CadastroUsuario;
