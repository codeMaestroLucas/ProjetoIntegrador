function validarTratarNome(nome){
    return nome.trim().toLowerCase();
};


function validarTratarTelefone(telefone) {
    telefone = telefone.trim();

    if (!isNaN(telefone) &&
        10 <= telefone.length && telefone.length <= 15) {
        return telefone;
    }
    
    return response.status(400).json({
        error: "Telefone inválido. O telefone deve ser um número entre 10 e 15."
    });
};

function validarTratarEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        return email;
    } 

    return response.status(400).json({
        error: "Insira um email válido."
    });
};

function validarTratarSenha(senha) {
    if (senha.length >= 8) {
        return senha;
    } 
    return response.status(400).json({
        error: "Insira uma senha válida."
    });

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
