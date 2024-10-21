const mongoose = require("mongoose");

const MarcaDataSchema = new mongoose.Schema({
    marca: String,
});

module.exports = mongoose.model("marcas",MarcaDataSchema);
