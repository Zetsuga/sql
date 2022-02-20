const {Router} = require("express");
const gruposCtrl = require("../Controller/grupos.controller");

const app =Router();

//ENDPOINTS GRUPOS
app.get("/grupos",gruposCtrl.getGrupos);

app.post("/grupos",gruposCtrl.guardarGrupo);

app.put("/grupos",gruposCtrl.modificarGrupo);

app.delete("/grupos",gruposCtrl.borrarGrupo);

module.exports = app;