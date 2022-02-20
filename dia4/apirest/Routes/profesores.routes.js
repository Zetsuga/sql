const {Router} = require("express");
const profesoreslesCtrl = require("../Controller/profesores.controller");

const app =Router();

//ENDPOINTS ADICIONALES
app.get("/profesores",profesoreslesCtrl.getProfesores);

app.post("/profesores",profesoreslesCtrl.guardarProfesor);

app.put("/profesores",profesoreslesCtrl.modificarProfesor);

app.delete("/profesores",profesoreslesCtrl.borrarProfesor);

module.exports = app;