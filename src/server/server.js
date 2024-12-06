const express = require('express');
const cors = require('cors');
const app = express();
require('./config/dbConfig')

app.use(cors()); // Allow requests from different origins
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors({ origin: 'http://localhost:3000' }));


const userRoutes = require('./routes/userRoutes');
const veiculosRoutes = require('./routes/veiculosRoutes');
app.use(userRoutes);
app.use(veiculosRoutes);

app.listen(3333, () => console.log("Server running on http://localhost:3333"));
