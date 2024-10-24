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
        required: true,
    },
    quilometragem: {
        type: Number,
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

    if (this.ano < 1900 || this.ano > new Date().getFullYear()) {
        return next(new Error("Ano inválido. O ano deve ser um número entre 1886 e o ano atual."));
    }
    this.ano = parseInt(this.ano, 10);

    if (this.quilometragem < 0) {
        return next(new Error("Quilometragem inválida. Deve ser um número não negativo."));
    }
    this.quilometragem = parseFloat(this.quilometragem);

    next();  // Valida a operação e continua o processo
});


module.exports = mongoose.model("veiculos", VeiculoDataSchema);
// Atribui ao DB de nome "veiculos" a estrutura VeiculoDataSchema
