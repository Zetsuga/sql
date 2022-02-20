const {Router} = require("express");
const asignaturasCtrl = require("../Controller/asignaturas.controller");

const app =Router();



//ENDPOINTS ASIGNATURAS
app.get("/asignaturas",asignaturasCtrl.getAsignatura);

app.post("/asignaturas",asignaturasCtrl.guardarAsignatura);

app.put("/asignaturas",asignaturasCtrl.modificarAsignatura);

app.delete("/asignaturas",asignaturasCtrl.borrarAsignatura);

module.exports = app;