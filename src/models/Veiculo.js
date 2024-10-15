const mongoose = require("mongoose");
const VeiculoDataSchema = new mongoose.Schema({
    place: String,
    cor: String,
    ano: Number,
    quilometragem: Number,
});