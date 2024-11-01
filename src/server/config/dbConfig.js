const mongoose = require("mongoose");

const dbConfig = "mongodb+srv://lucasamuel:projetoIntegrador@projetointegrador.jpfaj.mongodb.net/";

const connection = mongoose.connect(dbConfig);

module.exports = connection; // Permite que seja importado para outros módulos
