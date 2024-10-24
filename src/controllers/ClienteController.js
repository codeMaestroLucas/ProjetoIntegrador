const Clientes = require('../models/Cliente');

module.exports = {

    // C
    async create(request, response) {
        const{nome, telefone, email, senha} = request.body;

        if (!nome || !telefone || !email || !senha) {
            return response.status(400).json({
                error: "Todos os dados são obrigatórios"
            });
        };

        try {

            const cliente = await Clientes.create({
                nome: nome,
                telefone: telefone,
                email: email,
                senha: senha
            });

            return response.status(201).json(cliente);

        } catch (error) {
            return response.status(400).json({ error: error.message });
        }
    },


    // R
    async read(request, response) {
        const clienteList = await Clientes.find();
        return response.json(clienteList);
    },

    async getByEmail(request, response) {
        const { email } = request.body;
        
        if (!email || email.trim() === "") {
            return response.status(400).json({
                error: "Email é obrigatório e não pode estar vazio."
            });
        }

        const cliente = await Clientes.findOne({ email: email.trim() });
        if (!cliente) {
            return response.status(404).json({
                error: "Cliente não encontrado."
            });
        }

        const clienteRetorno = {
            nome: cliente.nome,
            telefone: cliente.telefone,
            email: cliente.email,
            veiculos: cliente.veiculos,
        }

        return response.status(200).json({
            cliente: clienteRetorno
        });

    },


    // U
    async update(request, response) {
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

            cliente.nome = nome;
            cliente.telefone = telefone;
            cliente.email = email;
            cliente.senha = senha;

            await cliente.save();
            return response.status(200).json(cliente);

        } catch (error) {
            return response.status(500).json({
                error: "Erro ao atualizar o cliente."
            });
        };

    },


    // D
    async delete(request, response) {
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
