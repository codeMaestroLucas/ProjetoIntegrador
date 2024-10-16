const express = require("express");
const routes = express.Router();

const veiculoController = require("../controllers/VeiculoController");

routes.post("/veiculos", veiculoController.create);
routes.get("/veiculos", veiculoController.read);

module.exports = routes; // Permite que seja importado para outros módulos
