const mongoose = require("mongoose");

const MarcaDataSchema = new mongoose.Schema({
    marca: {
        type: String,
        required: true,
        unique: true,
    },
});


MarcaDataSchema.pre('save', function(next) {
    this.marca = this.marca.trim().toLowerCase();
    next();
});

module.exports = mongoose.model("marcas",MarcaDataSchema);
