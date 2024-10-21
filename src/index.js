const express = require("express");
const app = express();
const connection = require("./config/dbConfig");
const veiculoRouter = require("./routes/VeiculoRoutes");
const clienteRouter = require("./routes/ClienteRoutes");


app.use(express.json()); // Para o app ser capaz de ler e enviar JSON
app.use(veiculoRouter);
app.use(clienteRouter);



app.listen(3333);