const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); // Datado, achar outro
// TODO: Perguntar ao professor sobre a senha

const ClienteDataSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 50,
        match: /^[a-zA-Z\s]+$/i, // Somente letras e espaço
    },
    telefone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 15,
        unique: true,
        match: /^[0-9]+$/ // Somente números
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    senha: {
        type: String,
        required: true,
        minlength: 8,
        select: false, // Não exibe a senha na resposta
    },
    veiculos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "veiculos"
        }
    ]
});


ClienteDataSchema.pre('save', async function(next) {
    this.nome = this.nome.trim().toLowerCase();

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(this.email)) {
        return next( new Error("Insira um email válido."));
    }
    this.email = this.email.trim();

    this.senha = await bcrypt.hash(this.senha, 10);

    next();
});

module.exports = mongoose.model("clientes", ClienteDataSchema);
