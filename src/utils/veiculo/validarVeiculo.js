
function validarTratarPlaca(placa) {
    return placa.toUpperCase();
};


function validarTratarCor(cor) {
    return cor.toLowerCase();
};


function validarTratarAno(ano) {
    if (isNaN(ano) || ano < 1886 || ano > new Date().getFullYear()) {
        return response.status(400).json({
            error: "Ano inválido. O ano deve ser um número entre 1886 e o ano atual."
        });
    }

    return ano;
};


function validarTratarQuilometragem(quilometragem) {
    if (isNaN(quilometragem) || quilometragem < 0) {
        return response.status(400).json({
            error: "Quilometragem inválida. Deve ser um número não negativo."
        });
    }

    return quilometragem;
};

// Função que valida e trata os dados do veículo
function validarTratVeiculo(placa, cor, ano, quilometragem) {
    placa = validarTratarPlaca(placa);
    cor = validarTratarCor(cor);
    ano = validarTratarAno(ano);
    quilometragem = validarTratarQuilometragem(quilometragem);

    return {
        placa,
        cor,
        ano,
        quilometragem
    };
}

module.exports = validarTratVeiculo;
