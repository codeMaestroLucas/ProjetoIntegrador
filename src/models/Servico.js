const mongoose = require("mongoose");

const ServicoDataSchema = new mongoose.Schema({
    servico: {
        type: String,
        required: true,
        match: /^[a-zA-Z\s]+$/i
    },
    descricao: {
        type: String,
        required: true,
        match: /^[a-zA-Z\s]+$/i
    }
});


ServicoDataSchema.pre('save', function(next) {
    this.servico = this.servico.trim().toLowerCase();
    this.descricao = this.descricao.trim().toLowerCase();

    next();
});

module.exports = mongoose.model("servicos",ServicoDataSchema);
