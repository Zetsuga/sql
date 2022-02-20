const express = require("express");
const app = express();
let cors = require("cors");

//REQUIRES DE  RUTAS
const alumnosRoutes = require("./Routes/alumnos.routes");
const notasRoutes = require("./Routes/notas.routes");
const adicionalesRoutes = require("./Routes/adicionales.routes");
const profesoresRoutes = require("./Routes/profesores.routes");
const gruposRoutes = require("./Routes/grupos.routes");
const asignaturasRoutes = require("./Routes/asignaturas.routes");
//const asignaturaProfesorRoutes = require("./Routes/subjectTeacher.routes");

//COnfiguración de la API
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.set("port", process.env.PORT || 3000);


//RUTAS
app.use(alumnosRoutes);
app.use(notasRoutes);
app.use(adicionalesRoutes);
app.use(profesoresRoutes);
app.use(gruposRoutes);
app.use(asignaturasRoutes);
//app.use(asignaturaProfesorRoutes);

module.exports = app;