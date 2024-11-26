const mongoose = require("mongoose");

const urlConn = "mongodb+srv://lucasamuel:projetoIntegrador@projetointegrador.jpfaj.mongodb.net/?retryWrites=true&w=majority&appName=projetoIntegrador";

const connectionDB = async () => {
    try {
        await mongoose.connect(urlConn);
        console.log.apply("Connected to Mongoose");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectionDB; // Permite que seja importado para outros módulos
