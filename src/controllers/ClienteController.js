const Clientes = require('../models/Cliente');
const validarTratarCliente = require('../utils/cliente/validarCliente');

module.exports = {

    // C
    async create(request, response){
        const{nome, telefone, email, senha} = request.body;

        if (!nome || !telefone || !email || !senha) {
            return response.status(400).json({
                error: "Todos os dados são obrigatórios"
            });
        };

        try {

            const {
                nome: nomeValidado,
                telefone: telefoneValidado,
                email: emailValidado,
                senha: senhaValidada
            } = validarTratarCliente(nome, telefone, email, senha);

            const cliente = await Clientes.create({
                nome: nomeValidado,
                telefone: telefoneValidado,
                email: emailValidado,
                senha: senhaValidada
            });

            return response.status(201).json(cliente);

        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    },


    // R
    async read(request, response){
        const clienteList = await Clientes.find();
        return response.json(clienteList);
    },


    // U
    async update(request, response){
        const { id } = request.params;

        const cliente = await Clientes.findOne({_id : id});

        if (!cliente){
            return response.status(404).json({
                error:"Cliente não encontrado."
            });
        };

        const { nome, telefone, email, senha } = request.body;

        if (!nome || !telefone || !email || !senha) {
            return response.status(400).json({
                error: "Todos os dados são obrigatórios"
            });
        };

        try {

            const {
                nome: nomeValidado,
                telefone: telefoneValidado,
                email: emailValidado,
                senha: senhaValidada
            } = validarTratarCliente(nome, telefone, email, senha);

            cliente.nome = nomeValidado;
            cliente.telefone = telefoneValidado;
            cliente.email = emailValidado;
            cliente.senha = senhaValidada;

            await cliente.save();
            return response.status(200).json(cliente);

        } catch (error) {
            return response.status(500).json({
                error: "Erro ao atualizar o cliente."
            });
        };

    },


    // D
    async delete(request, response){
        const { id } = request.params;
        const clienteDeletado = await Clientes.findByIdAndDelete({_id: id});

        if(clienteDeletado){
            return response.status(204).json(clienteDeletado);
        }

        return response.status(404).json({
            error: "Cliente não encontrado."
        });
    },
}