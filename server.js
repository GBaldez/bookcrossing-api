const express = require('express');
const app = express();
const port = 3000;
const connectToDb = require("./src/database/database"); 
const routes = require(`./src/routes/api`);
var cors = require("cors");

connectToDb();

app.use(cors());

app.options("*", cors());

app.use(express.json());

app.get(`/`, (req, res) => {
    res.send(`ENDPOINT INVÁLIDO!`);
});

app.use(`/api`, routes);

app.listen(process.env.port || port, () => {
    console.log('Servidor em execução na porta: '+ port);
});

