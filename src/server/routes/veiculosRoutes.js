const express = require("express");
const routes = express.Router();

const veiculoController = require("../controllers/veiculoController");

routes.post("/car", veiculoController.create);        // C
routes.get("/cars", veiculoController.read);           // R
routes.put("/cars/:id", veiculoController.update)      // U
routes.delete("/cars/:id", veiculoController.delete)   // D

module.exports = routes;
