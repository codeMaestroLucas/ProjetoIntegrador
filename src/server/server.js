const express = require("express");
const app = express();
const connectionDB = require("./config/dbConfig");
const veiculoRouter = require("./routes/VeiculoRoutes");
const clienteRouter = require("./routes/ClienteRoutes");

app.use(express.json());
app.use(veiculoRouter);
app.use(clienteRouter);

connectionDB()
    .then(() => {
        app.listen(3333, () => {
            console.log("Server is running on port 3333");
        });
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
        process.exit(1);
    });
