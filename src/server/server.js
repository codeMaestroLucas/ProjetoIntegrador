const express = require("express");
const app = express();
const connection = require("./config/dbConfig");
const veiculoRouter = require("./routes/VeiculoRoutes");
const clienteRouter = require("./routes/ClienteRoutes");

app.use(express.json()); // Enable JSON body parsing
app.use(veiculoRouter);
app.use(clienteRouter);

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
