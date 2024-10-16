const express = require("express");
const app = express();
const connection = require("./config/dbConfig")
const veiculoRouter = require("./routes/VeiculoRoutes")


app.use(express.json()); // Para o app ser capaz de ler e enviar JSON
app.use(veiculoRouter);



app.listen(3333);