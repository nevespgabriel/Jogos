const estudio_router = require("./routes/estudio.js");
const jogo_router = require("./routes/jogo.js");
const publicadora_router = require("./routes/publicadora.js");
const genero_router = require("./routes/genero.js");

const porta = 2700;
const express = require("express");
const app = express();
app.use(express.json());

app.use("/estudio", estudio_router);
app.use("/jogo", jogo_router);
app.use("/publicadora", publicadora_router);
app.use("/genero", genero_router);
app.listen(() => {
    console.log(`Server running at ${porta} port.`);
})