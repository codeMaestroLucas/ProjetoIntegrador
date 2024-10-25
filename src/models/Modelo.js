const mongoose = require("mongoose");

const ModeloDataSchema = new mongoose.Schema({
    modelo: {
        type: String,
        required: true,
        unique: true,
    },
    marca: {
        type: mongoose.Schema.Types.Objectid,
        ref:"marcas",
        required: true,
    }
});


ModeloDataSchema.pre('save', function(next) {
    this.modelo = this.modelo.trim().toLowerCase();
    next();
});

module.exports = mongoose.model("modelos",ModeloDataSchema);
