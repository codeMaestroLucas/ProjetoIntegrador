const mongoose = require("mongoose");

const veiculoData = new mongoose.Schema({
    placa: {
        type: String,
        required: true,
        unique: true,
    },
    cor: {
        type: String,
        required: true,
    },
    ano: {
        type: Number,
        min: 1900,
        max: new Date().getFullYear() + 2,
        required: true,
    },
    quilometragem: {
        type: Number,
        min: 0,
        required: true,
    },
    modelo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "modelos",
        required: true
    },
    dono: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clientes",
        required: true
    },
}, {
    timestamps: true
});

veiculoData.pre('save', function(next) {
    this.placa = this.placa.trim().toUpperCase();
    this.cor = this.cor.trim().toLowerCase();

    next();
});


module.exports = mongoose.model("veiculos", veiculoData);
