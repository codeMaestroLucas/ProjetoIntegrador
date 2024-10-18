const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); // Datado, achar outro

const ClienteDataSchema = new mongoose.Schema({
    nome: String,
    telefone: Number,
    email: String,
    senha: String, // TODO: Hashear a senha para segurança
    telefone: String,
    veiculos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "veiculos"
        }
    ]
});


module.exports = mongoose.model("cliente", ClienteDataSchema);
