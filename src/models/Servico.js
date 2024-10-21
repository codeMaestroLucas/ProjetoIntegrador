const mongoose = require("mongoose");

const ServicoDataSchema = new mongoose.Schema({
    servico: String,
    descricao: String,
});

module.exports = mongoose.model("servicos",ServicoDataSchema);
