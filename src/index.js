const express = require("express");
const app = express();
const connection = require("./config/dbConfig")


app.use(express.json()); // Para o app ser capaz de ler e enviar JSON


app.get("/", (request, response) => {
    // return response.send("Hello Wolrd!");
    return response.json(
        {
            message: "Hello Worla!",
            version: "1.0.0",
            author: "John Doe"
        }
    )
});



app.listen(3333);