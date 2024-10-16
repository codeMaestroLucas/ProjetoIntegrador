const veiculos = require('../models/Veiculo');

module.exports = { // Para exportar tudo que está no arquivo

    create(request, response) {
        const {placa, cor, ano, quilometragem} = request.body;
        // Extraindo do Body da requisição esses parâmetros

        const veiculo = new veiculos({
            place: placa,
            cor: cor,
            ano: ano,
            quilometragem: quilometragem,
        });

        veiculo.save().then(() => {
            response.status(201).json(veiculo);
        }).catch((error) => {
            response.status(400).json({error: error.message});
        });


    },

    read(request, response) {
        return "Funcionando"
    }


}
