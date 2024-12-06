const mongoose = require("mongoose");

const servicoData = new mongoose.Schema({
    servico: {
        type: String,
        match: /^[\w\sÀ-ÿ]+$/i,
        maxlength: 100,
    },
    descricao: {
        type: String,
        match: /^[\w\sÀ-ÿ]+$/i,
        maxlength: 255,
    }
});


servicoData.pre('save', function(next) {
    this.servico = this.servico.trim().toLowerCase();
    this.descricao = this.descricao.trim().toLowerCase();

    next();
});

module.exports = mongoose.model("servicos", servicoData);
