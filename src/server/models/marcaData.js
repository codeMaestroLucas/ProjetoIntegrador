const mongoose = require("mongoose");

const marcaData = new mongoose.Schema({
    nome: {
        type: String,
        unique: true,
    },
});


marcaData.pre('save', function(next) {
    this.nome = this.nome.trim().toLowerCase();
    next();
});

module.exports = mongoose.model("marcas", marcaData);
