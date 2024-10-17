const express = require("express");
const routes = express.Router();

const veiculoController = require("../controllers/VeiculoController");

routes.post("/veiculos", veiculoController.create);        // C
routes.get("/veiculos", veiculoController.read);           // R
// TODO: Talvez fazer um readOne dps pelo ID
routes.put("/veiculos", veiculoController.update)          // U
routes.delete("/veiculos/:id", veiculoController.delete)   // D

module.exports = routes; // Permite que seja importado para outros módulos
