const mongoose = require("mongoose");

const modeloData = new mongoose.Schema({
    nome: {
        type: String,
        unique: true,
        maxlength: 100,
    },
    marca: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"marcas",
    }
});


modeloData.pre('save', function(next) {
    this.modelo = this.modelo.trim().toLowerCase();
    next();
});

module.exports = mongoose.model("modelos", modeloData);
