const mongoose = require("mongoose");

const VeiculoServicoSchema = new mongoose.Schema({
    valor: Number,
    data_init: Date,
    date_end: Date,
    avaliacao: Number,
    comentario: String,
    veiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "veiculos"
    },
    servico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "servicos"
    },
    
});

module.exports = mongoose.model("veiculo_servico", VeiculoServicoSchema);