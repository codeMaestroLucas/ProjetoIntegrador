const Cliente = require('../models/Cliente');
const validarCliente = require()

module.exports = {

    // C
    async create(request, response){
        const{nome, telefone, email, senha} = request.body;

        return response.status(201).json(veiculo);
    },


    // R
    async read(request, response){
        const clienteList = await Cliente.find();
        return response.jason(clienteList);
    },


    // U
    async update(request, response){
        const { id } = request.params;

        const cliente = await Cliente.findOne({_id : id})

        if (!cliente){
            return response.status(404).json({
                error:"Cliente não encontrado."
            })
        };

        const { nome, telefone, email, senha } = request.body;

        if (!nome || !telefone || !email || !senha) {
            return response.status(400).json({
                error: "Todos os dados são obrigatórios"
            })
        };


    },


    // D
    async delete(request, response){
        const { id } = request.params;
        const clienteDeletado = await Cliente.findByIdAndDelete({_id: id});

        if(clienteDeletado){
            return response.status(204).json(clienteDeletado);
        }

        return response.status(404).json({
            error: "Cliente não encontrado."
        });
    },
}