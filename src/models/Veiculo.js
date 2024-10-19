const mongoose = require("mongoose");

const VeiculoDataSchema = new mongoose.Schema({
    placa: String,
    cor: String,
    ano: Number,
    quilometragem: Number,
    modelo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "modelo"
    },
    dono: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cliente"
    },
    
});

module.exports = mongoose.model("veiculos", VeiculoDataSchema);
// Atribui ao DB de nome "veiculos" a estrutura VeiculoDataSchema
