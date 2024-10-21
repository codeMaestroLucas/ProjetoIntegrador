function validarTratarNome(nome){
    return nome.trim().toLowerCase();
};


function validarTratarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');

    if (10 <= telefone.length && telefone.length <= 15) {
        return telefone;
    }
    
    throw new Error(
        "Telefone inválido. O telefone deve ter entre 10 e 15 digitos."
    );
};

function validarTratarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        return email;
    }

    throw new Error(
       "Insira um email válido."
    );
};

function validarTratarSenha(senha) {
    if (senha.length >= 8) {
        return senha;
    }
    
    throw new Error(
        "Insira uma senha com mais de 8 caractéres."
    );

};

function validarTratarCliente(nome, telefone, email, senha) {
    nome = validarTratarNome(nome);
    telefone = validarTratarTelefone(telefone);
    email = validarTratarEmail(email);
    senha = validarTratarSenha(senha);

    return {
        nome,
        telefone,
        email,
        senha,
    };
}

module.exports = validarTratarCliente;
