const Veiculos = require('../models/Veiculo');
const validarTratVeiculo = require('../utils/veiculo/validarVeiculo');

module.exports = { // Para exportar tudo que está no arquivo

    // C
    async create(request, response) {
        const { placa, cor, ano, quilometragem } = request.body;
        // Parâmetros no Body HTML
    
        if (!placa || !cor || !ano || !quilometragem) {
            return response.status(400).json({
                error: "Todos os dados são obrigatórios"
            });
        }

        const {
            placa: placaValidada,
            cor: corValidada,
            ano: anoValidado,
            quilometragem: quilometragemValidada,
        } = validarTratVeiculo(placa, cor, ano, quilometragem);
    
        const veiculo = await Veiculos.create({
            placa: placaValidada,
            cor: corValidada,
            ano: parseInt(anoValidado, 10),
            quilometragem: parseFloat(quilometragemValidada),
        });
    
        return response.status(201).json(veiculo);
    },


    // R
    async read(request, response) {
        const veiculosList = await Veiculos.find();
        return response.json(veiculosList);
    },


    // U
    // TODO: Concluir
    async update(request, response) {
        const { id } = request.params;

        const veiculo = await Veiculos.findOne({_id : id})

        if (!veiculo) {
            return response.status(404).json({
                error: "Veículo não encontrado."
            })
        };

        const { placa, cor, ano, quilometragem } = request.body;

        if (!placa || !cor || !ano || !quilometragem) {
            return response.status(400).json({
                error: "Todos os dados são obrigatórios"
            });
        }

        const {
            placa: placaValidada,
            cor: corValidada,
            ano: anoValidado,
            quilometragem: quilometragemValidada,
        } = validarTratVeiculo(placa, cor, ano, quilometragem);

        veiculo.placa = placaValidada;
        veiculo.cor = corValidada;
        veiculo.ano = parseInt(anoValidado, 10);
        veiculo.quilometragem = parseFloat(quilometragemValidada);
    
        try {
            await veiculo.save();
            return response.status(200).json(veiculo);
        } catch (error) {
            return response.status(500).json({
                error: "Erro ao atualizar o veículo."
            })
        };
        
    },

    
    // D
    async delete(request, response) {
        const { id } = request.params; // Parâmetro da URL
        const veiculoDeletado = await Veiculos.findByIdAndDelete({_id: id});

        if (veiculoDeletado) {
            return response.status(204).json(veiculoDeletado);
        }

        return response.status(404).json({
            error: "Veículo não encontrado."
        });
    },

}
