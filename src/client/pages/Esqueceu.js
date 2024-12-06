import "../styles/esqueceu.css";

const Esqueceu = () => {
  return (
    <div className="divEsqueceu">
      <h1 className="title readex-pro-semibold">Esqueceu a senha?</h1>
      <p className="barlow-semi-condensed-regular">
        Entre com seu e-mail para redefinir sua senha.
      </p>
      <form>
        <div className="inputDiv">
          <label className="label barlow-semi-condensed-medium">Email</label>
          <input type="email" placeholder="E-mail" />
        </div>

        <div className="inputDiv">
          <label className="label barlow-semi-condensed-medium">
            Nova Senha
          </label>
          <input type="password" placeholder="Nova senha" />
        </div>

        <div className="inputDiv">
          <label className="label barlow-semi-condensed-medium">
            Digite novamente a Senha
          </label>
          <input type="password" placeholder="Nova senha" />
        </div>

        <button type="submit" className="btnSwitch barlow-semi-condensed-bold">
          <i className="fas fa-arrow-right"></i>
        </button>
        
      </form>
    </div>
  );
};

export default Esqueceu;
