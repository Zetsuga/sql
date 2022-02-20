const {Router} = require("express");
const notasCtrl = require("../Controller/notas.controller");

const app =Router();

//ENPOINTS NOTAS
app.get("/notas",notasCtrl.getNotas);

app.post("/notas",notasCtrl.guardarNotas);

app.put("/notas",notasCtrl.modificarNotas);

app.delete("/notas",notasCtrl.borrarNotas);


module.exports = app;