const {Router} = require("express");
const adicionalesCtrl = require("../Controller/adicionales.controller");

const app =Router();

//ENDPOINTS ADICIONALES
app.get("/media",adicionalesCtrl.getMedia);
app.get("/apuntadas",adicionalesCtrl.getApuntadas);
app.get("/impartidas",adicionalesCtrl.getImpartida);

module.exports = app;