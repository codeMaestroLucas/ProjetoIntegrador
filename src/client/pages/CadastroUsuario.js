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
  const userFields = [
    { title: "Nome", type: "text", name: "nome" },
    { title: "Telefone", type: "tel", name: "telefone" },
    { title: "Email", type: "email", name: "email" },
    { title: "Senha", type: "password", name: "senha" },
  ];

  return (
    <form action="http://localhost:3333/user" method="POST">
      <Title />
      {userFields.map((field) => (
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
