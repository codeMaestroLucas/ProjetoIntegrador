const mongoose = require("mongoose");

const ServicoDataSchema = new mongoose.Schema({
    servico: {
        type: String,
        required: true,
        match: /^[\w\sÀ-ÿ]+$/i,
        maxlength: 100,
    },
    descricao: {
        type: String,
        required: true,
        match: /^[\w\sÀ-ÿ]+$/i,
        maxlength: 255,
    }
});


ServicoDataSchema.pre('save', function(next) {
    this.servico = this.servico.trim().toLowerCase();
    this.descricao = this.descricao.trim().toLowerCase();

    next();
});

module.exports = mongoose.model("servicos",ServicoDataSchema);
