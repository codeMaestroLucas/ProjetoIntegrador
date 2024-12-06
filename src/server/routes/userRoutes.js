const express = require("express");
const routes = express.Router();

const userController = require("../controllers/userController");

routes.post("/user", userController.create);         // C
routes.get("/users", userController.read);           // R
routes.get("/user/:email", userController.getUserByEmail);
routes.put("/user/:id", userController.update)      // U
routes.delete("/user/:id", userController.delete)   // D

module.exports = routes;
