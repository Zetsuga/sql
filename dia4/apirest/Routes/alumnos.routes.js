const {Router} = require("express");
const alumnoCtrl = require("../Controller/alumnos.controller");

const app =Router();


//ENDPOINTS DE LOS ALUMNOS
app.get("/alumnos",alumnoCtrl.getAlumnos);

app.post("/alumnos",alumnoCtrl.guardarAlumno);

app.put("/alumnos",alumnoCtrl.modificarAlumno);

app.delete("/alumnos",alumnoCtrl.borrarAlumno);

module.exports = app;