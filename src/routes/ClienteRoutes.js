const express = require("express");
const routes = express.Router();

const clienteController = require("../controllers/ClienteController");

routes.post("/clientes", clienteController.create);        // C
routes.get("/clientes", clienteController.read);           // R
routes.get("/cliente", clienteController.getByEmail);
routes.put("/clientes/:id", clienteController.update)      // U
routes.delete("/clientes/:id", clienteController.delete)   // D

module.exports = routes;
