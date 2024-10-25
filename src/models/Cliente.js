const mongoose = require("mongoose");
const argon2 = require('argon2'); // Datado, achar outro
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
        type: String,
        required: true,
        minlength: 10,
        maxlength: 16,
        unique: true,
        match: /^[0-9]{10,16}$/ // Somente números
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
        trim: true,
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

    this.email = this.email.trim();

    try {
        this.senha = await argon2.hash(this.senha, {
            type: argon2.argon2id,
            memoryCost: 2 ** 16, // 64 MB
            timeCost: 3,         // 3 iterações
            parallelism: 1,      // 1 thread
        });
    } catch (err) {
        return next(new Error("Erro ao hashear a senha.")); // Tratamento de erro
    }

    next();
});

module.exports = mongoose.model("clientes", ClienteDataSchema);
