const mongoose = require("mongoose");

const dbConfig = "mongodb+srv://lucassamuelads:projeto@projetointegrador.je1jt.mongodb.net/?retryWrites=true&w=majority&appName=ProjetoIntegrador";

const connection = mongoose.connect(dbConfig);

module.exports = connection; // Permite que seja importado para outros módulos
