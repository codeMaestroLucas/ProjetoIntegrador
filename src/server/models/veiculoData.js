const mongoose = require("mongoose");

const veiculoData = new mongoose.Schema({
    placa: {
        type: String,
        unique: true,
    },
    cor: {
        type: String,
    },
    ano: {
        type: Number,
        min: 1900,
        max: new Date().getFullYear() + 2,
    },
    quilometragem: {
        type: Number,
        min: 0,
    },
    // modelo: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "modelos",
    //     required: true
    // },
    modelo: {
        type: String,
    },
    dono: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clientes",
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
