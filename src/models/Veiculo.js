const mongoose = require("mongoose");

const VeiculoDataSchema = new mongoose.Schema({
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
        max: new Date().getFullYear(),
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

VeiculoDataSchema.pre('save', function(next) {
    this.placa = this.placa.trim().toLowerCase();
    this.cor = this.cor.trim().toLowerCase();
    this.ano = parseInt(this.ano, 10);
    this.quilometragem = parseFloat(this.quilometragem);

    next();  // Valida a operação e continua o processo
});


module.exports = mongoose.model("veiculos", VeiculoDataSchema);
// Atribui ao DB de nome "veiculos" a estrutura VeiculoDataSchema
