const mongoose = require("mongoose");

const ModeloDataSchema = new mongoose.Schema({
    modelo: String,

    marca: {
        type: mongoose.Schema.Types.Objectid,
        ref:"marcas"
    }
});

module.exports = mongoose.model("modelos",ModeloDataSchema);
